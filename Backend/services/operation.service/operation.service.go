package operation_service

import (
	m "Backend/models"
	operationRepository "Backend/repositories/operation.repository"
)

func Create(operation m.Operation) error {
	err := operationRepository.Create(operation)
	if err != nil {
		return err
	}
	return nil
}

func Read() (m.Operations, error) {
	operation, err := operationRepository.Read()
	if err != nil {
		return nil, err
	}
	return operation, nil
}
