from email.policy import HTTP
from django.forms import ValidationError
from django.shortcuts import render, get_object_or_404, get_list_or_404
from requests import request
from rest_framework import generics, permissions
from knox.models import AuthToken
from rest_framework.response import Response
import django.contrib.auth
from .serializers import *
from accounts.models import User as user_list
from django.http import Http404, HttpResponse, HttpResponseForbidden
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from django.db.models import Q
from .models import UsersInitConversation, Message
from .checksum import Checksum
from django.shortcuts import render
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.permissions import BasePermission, IsAuthenticated, SAFE_METHODS
from rest_framework import status
from rest_framework.generics import GenericAPIView

User = django.contrib.auth.get_user_model()

class ReserachCenterListUsersView(APIView):

    permission_classes = [permissions.IsAuthenticated, ]
    serializer = ReserachCenterListUsersSerializer

    def get(self, request, *args, **kwargs):
        serializer = ReserachCenterListUsersSerializer(request.user)
        if serializer:
            obj = user_list.objects.filter(role__in=["test"]).values('identifier','role')
            serializer = ReserachCenterListUsersSerializer("json", obj, many=True)
            response = serializer.initial_data
            user_response = {
                'user_email': request.user.email,
                'user_identifier': request.user.identifier,
            }
            #<QuerySet [{'identifier': 5097022519, 'role': 'Lekarz'}, {'identifier': 9643530802, 'role': 'Lekarz'}, {'identifier': 1910770924, 'role': 'Lekarz'}, {'identifier': 8917653510, 'role': 'Lekarz'}]>
            return Response([response,user_response])

class ReserachCenterCreateChatView(APIView):

    permission_classes = [permissions.IsAuthenticated, ]

    def post(self, request, *args, **kwargs):
        user2_identifier = request.data["user2_identifier"]
        user2_identifier = User.objects.get(identifier = user2_identifier)
        init_conversation = UsersInitConversation(user1_identifier=request.user,user2_identifier=user2_identifier)
        init_conversation.save()
        return Response({"created_init_conversation": True})

class ReserachCenterChatView(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = ReserachCenterMessagesChatSerializer
    model = Message

    def get(self, request, id_conversation):
        user_date_joined = request.user.date_joined
        user_identifier = request.user.identifier
        queryset = Message.objects.filter(id_conversation=id_conversation).values('user_identifier','id_conversation', 'content')
        if Checksum.check_checksum(user_identifier, user_date_joined, id_conversation):
            serializer_class = ReserachCenterMessagesChatSerializer("json", queryset, many = True)
            response = serializer_class.initial_data
            print(response)
            return Response(response)
        else:
            raise Http404

class ReserachCenterListIdConversationView(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = ReserachCenterListChatSerializer
    model = UsersInitConversation

    def get(self, request, *args, **kwargs):
        queryset = UsersInitConversation.objects.filter(Q(user1_identifier = request.user.identifier) | Q(user2_identifier = request.user.identifier)).values("user1_identifier","user2_identifier","id_conversation")
        serializer = ReserachCenterListChatSerializer("json", queryset, many = True)
        return Response(serializer.initial_data)

