from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
import django.contrib.auth

User = django.contrib.auth.get_user_model()


# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('id', 'username', 'email')


# class RegisterSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('id', 'username', 'email', 'password')
#         extra_kwargs = {'password': {'write_only': True}}

#     def create(self, validated_data):
#         user = User.objects.create_user(
#             validated_data['username'],
#             validated_data['email'],
#             validated_data['password']
#         )
#         return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email','status', 'identifier', 'role')

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")



class RegisterTestUserSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        user = User.objects.create_test_user(
            email=validated_data['email'],
            username=validated_data['username'],
            password = validated_data['password'],
            phone=validated_data['phone'],
        )
        return user

    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    #password2 = serializers.CharField(write_only=True, required=True)
    username = serializers.CharField(write_only=True, required=True)

    phone = serializers.IntegerField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('email', 'username','password','phone')


class LoginUserSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user:
            return user
        #wyrzuca to jeśli użytkownik jest nieaktywny
        raise serializers.ValidationError("Invalid Details.")

class AccountTestUserSerializer(serializers.ModelSerializer):    
    class Meta:
        model = User
        fields = ['identifier', 'email','phone', 'username',]

    phone = serializers.IntegerField(source='testuser.phone')


class ChangePasswordUserSerializer(serializers.Serializer):

    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True, validators=[validate_password])
    new_password2 = serializers.CharField(required=True)

    class Meta:
        model = User

    def validate(self, data):
        if data.get('new_password') != data.get('new_password2'):
            raise serializers.ValidationError("Those passwords don't match.")
        return data