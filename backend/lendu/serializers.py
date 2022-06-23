from importlib.metadata import files
from rest_framework import serializers
from lendu.models import Notices
#from lendu.models import Todo

class NoticeSerializer(serializers.ModelSerializer):
    NoticeImg = serializers.ImageField(required=False)
    class Meta:
        model=Notices
        fields = '__all__'

# class TodoSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Todo
#         fields = '__all__'