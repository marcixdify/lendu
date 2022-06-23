from django.shortcuts import render

# Create your views here.
from rest_framework import generics, permissions
from rest_framework.response import Response
from .serializers import RegisterTestUserSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
import django.contrib.auth
from knox.models import AuthToken
from django.http import Http404
from .serializers import UserSerializer, LoginSerializer, LoginUserSerializer, AccountTestUserSerializer
User = django.contrib.auth.get_user_model()




###


class RegisterTestUserView(generics.GenericAPIView):
    
    serializer_class = RegisterTestUserSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = AuthToken.objects.create(user)
        return Response({
            "users": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token[1]
        })  

class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginUserSerializer
    #permission_classes = [ExampleAuthentication, ]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        token = AuthToken.objects.create(user)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

class AccountTestUserView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated,]
    serializer_class = AccountTestUserSerializer

    def get_object(self):
        if not self.request.user.role == "test":
            raise Http404
        return self.request.user


class UserAPI(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user