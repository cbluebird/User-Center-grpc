package bff

import (
	"context"
	userv1 "github.com/zjutjh/User-Center-grpc/api/user/v1alpha1"
	serverapi "github.com/zjutjh/User-Center-grpc/api/v1"
)

type UserHandler struct {
	serverapi.UnimplementedUserServer
}

func NewUserHandler() *UserHandler {
	return &UserHandler{}
}

func (h *UserHandler) Hello(ctx context.Context, req *userv1.HelloRequest) (*userv1.HelloResponse, error) {
	return &userv1.HelloResponse{
		Message: "Hello " + req.Name,
	}, nil
}
