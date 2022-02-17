package operation_repository

import (
	"Backend/database"
	m "Backend/models"
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"time"
)

var (
	collection = database.GetCollection("operations")
	ctx        = context.Background()
)

func Create(operation m.Operation) error {
	var err error

	operation.CreatedAt = time.Now()

	if operation.Operator == "+" {
		operation.Result = operation.Left + operation.Right
	} else if operation.Operator == "-" {
		operation.Result = operation.Left - operation.Right
	} else if operation.Operator == "*" {
		operation.Result = operation.Left * operation.Right
	} else if operation.Operator == "/" {
		operation.Result = operation.Left / operation.Right
	}

	_, err = collection.InsertOne(ctx, operation)

	if err != nil {
		return err
	}

	return nil
}

func Read() (m.Operations, error) {
	var operations m.Operations

	filter := bson.D{}

	cur, err := collection.Find(ctx, filter)

	if err != nil {
		return nil, err
	}

	for cur.Next(ctx) {
		var operation m.Operation
		err = cur.Decode(&operation)

		if err != nil {
			return nil, err
		}

		operations = append(operations, operation)
	}

	return operations, nil
}
