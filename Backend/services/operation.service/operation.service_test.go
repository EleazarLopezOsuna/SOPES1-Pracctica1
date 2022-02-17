package operation_service

import (
	m "Backend/models"
	"testing"
	"time"
)

func TestCreate(t *testing.T) {
	operation := m.Operation{
		Left:      5,
		Right:     35,
		Operator:  "+",
		Result:    40,
		CreatedAt: time.Now(),
	}
	err := Create(operation)
	if err != nil {
		t.Error("Create operation test has failed")
		t.Fail()
	} else {
		t.Log("Test successful")
	}
}

func TestRead(t *testing.T) {
	operations, err := Read()

	if err != nil {
		t.Error("Error while fetching operations")
		t.Fail()
	}

	if len(operations) == 0 {
		t.Error("No values found")
		t.Fail()
	} else {
		t.Log("Test successful")
	}
}
