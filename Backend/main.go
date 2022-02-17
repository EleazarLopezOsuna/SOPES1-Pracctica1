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
	router.HandleFunc("/", home)
	http.ListenAndServe(":12345", handlers.CORS(headers, methods, origins)(router))
}

func CreateOperationEndpoint(response http.ResponseWriter, request *http.Request) {
	response.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	response.Header().Set("Access-Control-Allow-Origin", "http://localhost:12345/operation")
	response.Header().Add("content-type", "application/json")
	var operation m.Operation
	json.NewDecoder(request.Body).Decode(&operation)
	result := operationRepository.Create(operation)
	json.NewEncoder(response).Encode(result)
}

func home(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello"))
}
