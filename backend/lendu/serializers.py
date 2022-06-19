from importlib.metadata import files
from rest_framework import serializers
from lendu.models import Notices

class NoticeSerializer(serializers.ModelSerializer):
    NoticeImg = serializers.ImageField(required=False)
    class Meta:
        model=Notices
        fields=('NoticeId','NoticeTitle','NoticeDescription', 'NoticeDateAdd', 'NoticeImg', 'NoticeDateUpdate')