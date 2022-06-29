import json
from time import time
from channels.generic.websocket import AsyncWebsocketConsumer
from asgiref.sync import async_to_sync, sync_to_async
from django.utils import timezone
from .models import Message, IdConversation
from accounts.models import User

class ChatConsumer(AsyncWebsocketConsumer):

    async def connect(self):
        #http_user_and_session = True
        #self.user = self.scope['user']
        self.id = self.scope['url_route']['kwargs']['id_conversation']
        self.user = self.scope['url_route']['kwargs']['user_identifier']
        self.chat_name = 'chat_%s' % self.id
        await self.channel_layer.group_add(
            self.chat_name,
            self.channel_name
        )
        await self.accept()
    
    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.chat_name,
            self.channel_name
        )

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        user_identifier = text_data_json['user_identifier']
        now = timezone.now()
        id_conversation = self.scope['url_route']['kwargs']['id_conversation']
        await self.save_message(user_identifier, id_conversation, message)

        await self.channel_layer.group_send(
            self.chat_name,
        {
            'type' : 'chat_message',
            'message' : message,
            'user' : user_identifier,
            'datetime' : now.isoformat()
        }
        )

    async def chat_message(self, event):
        await self.send(text_data = json.dumps(event))

    @sync_to_async
    def save_message(self, user_identifier, id_conversation, message):
        user_identifier = User.objects.get(identifier = user_identifier)
        id_conversation = IdConversation.objects.get(id_conversation=id_conversation)
        Message.objects.create(user_identifier=user_identifier, id_conversation=id_conversation, content=message)