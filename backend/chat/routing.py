from django.urls import re_path
from . import consumers

websocket_urlpatterns = [
    re_path(r'^ws/auth/chat/messages/(?P<id_conversation>[^/]+)/(?P<user_identifier>[^/]+)/$', consumers.ChatConsumer),
]