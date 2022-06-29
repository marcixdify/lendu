from django.db import models
from accounts.models import User
from .checksum import Checksum
from django.conf import settings
from django.utils.timezone import now

class UsersInitConversation(models.Model):

    user1_identifier = models.ForeignKey(
        settings.AUTH_USER_MODEL, 
        related_name = 'user1_chat_identifier',
        default=None,
        on_delete=models.CASCADE,
        to_field='identifier',
        blank=True, #na czas deweloperki tylko
    )

    user2_identifier = models.ForeignKey(
        settings.AUTH_USER_MODEL, 
        related_name = 'user2_chat_identifier',
        on_delete=models.CASCADE,
        default=None,
        to_field='identifier',
        blank=True, #na czas deweloperki tylko
    )

    id_conversation = models.CharField(
        unique=True,
        editable=False,
        max_length=25,
        default=None,
    )

    created_at = models.DateTimeField(default=now, editable=False)

    def save(self):
        self.id_conversation = Checksum.calculate(self.user1_identifier.date_joined,self.user2_identifier.date_joined,self.user1_identifier.identifier,self.user2_identifier.identifier)
        id_conversation = super(UsersInitConversation, self).save()
        print(UsersInitConversation.objects.get(id_conversation=self.id_conversation))
        IdConversation.objects.create(id_conversation=UsersInitConversation.objects.get(id_conversation=self.id_conversation))

class IdConversation(models.Model):

    id_conversation = models.OneToOneField(
        UsersInitConversation,
        to_field='id_conversation',
        related_name = 'userinit_id',
        on_delete=models.CASCADE,
        default=None,
        unique=True,
    )


class Message(models.Model):
    user_identifier = models.ForeignKey(
        settings.AUTH_USER_MODEL, 
        related_name = 'user_chat_identifier',
        on_delete=models.CASCADE,
        to_field='identifier',
        default=None, #na czas deweloperki tylko
    )
    id_conversation = models.ForeignKey(
        IdConversation,
        on_delete=models.CASCADE,
        to_field='id_conversation',
    )
    content = models.TextField()
    date_added = models.DateTimeField(
        auto_now_add=True
    )

    class Meta:
        ordering = ('date_added',)
