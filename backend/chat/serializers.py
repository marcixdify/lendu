from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth import authenticate
from accounts.models import User
from .models import UsersInitConversation, Message

class ReserachCenterListUsersSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('identifier',)

class ReserachCenterCreateChatSerializer(serializers.ModelSerializer):

    class Meta:
        model = UsersInitConversation
        fields = ('user1_identifier','user2_identifier',)

class ReserachCenterChatSerializer(serializers.ModelSerializer):

    user1_identifier = serializers.Field(required=False)
    user2_identifier = serializers.Field(required=False)

    class Meta:
        model = User
        fields = ('user1_identifier','user2_identifier', 'id_conversation')

class ReserachCenterChatUsersSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('identifier','date_joined',)

class ReserachCenterListChatSerializer(serializers.ModelSerializer):

    class Meta:
        model = UsersInitConversation
        fields = ('user1_identifier','user2_identifier', 'id_conversation')

class ReserachCenterMessagesChatSerializer(serializers.ModelSerializer):

    class Meta:
        model = Message
        fields = ('user_identifier','id_conversation', 'content')