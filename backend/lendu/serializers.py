from importlib.metadata import files
from rest_framework import serializers

from lendu.models import Notices, NoticeLike
#from lendu.models import Todo

class NoticeSerializer(serializers.ModelSerializer):
    NoticeOwner = serializers.PrimaryKeyRelatedField(read_only=True)
    NoticeImg = serializers.ImageField(required=False)

    class Meta:
        model=Notices
        fields = '__all__'



    
# class TodoSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Todo
#         fields = '__all__'


class NoticeLikeSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = NoticeLike
        fields = ('id', 'user', 'notice')