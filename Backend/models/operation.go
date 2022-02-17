package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

type Operation struct {
	ID        primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
	Left      int                `json:"left"`
	Right     int                `json:"right"`
	Operator  string             `json:"operator"`
	Result    int                `json:"result"`
	CreatedAt time.Time          `json:"created_at"`
}

type Operations []Operation
