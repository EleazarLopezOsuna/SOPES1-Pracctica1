package main

import (
	m "Backend/models"
	operationRepository "Backend/repositories/operation.repository"
	"encoding/json"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"net/http"
)

func main() {
	router := mux.NewRouter()
	headers := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
	methods := handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE"})
	origins := handlers.AllowedOrigins([]string{"*"})
	router.HandleFunc("/operation", CreateOperationEndpoint).Methods("POST")
	router.HandleFunc("/operations", GetOperationsEndpoint).Methods("GET")
	err := http.ListenAndServe(":12345", handlers.CORS(headers, methods, origins)(router))
	if err != nil {
		return
	}
}

func CreateOperationEndpoint(response http.ResponseWriter, request *http.Request) {
	response.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	response.Header().Set("Access-Control-Allow-Origin", "http://localhost:12345/operation")
	response.Header().Add("content-type", "application/json")
	var operation m.Operation
	err := json.NewDecoder(request.Body).Decode(&operation)
	if err != nil {
		return
	}
	result := operationRepository.Create(operation)
	err = json.NewEncoder(response).Encode(result)
	if err != nil {
		return
	}
}

func GetOperationsEndpoint(response http.ResponseWriter, request *http.Request) {
	response.Header().Add("content-type", "application/json")
	operations, err := operationRepository.Read()
	if err != nil {
		response.WriteHeader(http.StatusInternalServerError)
		response.Write([]byte(`{"message": ""` + err.Error() + `}`))
		return
	}
	json.NewEncoder(response).Encode(operations)
}
