from .views import ReserachCenterListUsersView, ReserachCenterCreateChatView, ReserachCenterChatView, ReserachCenterListIdConversationView
from knox import views as knox_views
from django.urls import path, include
from django.contrib.auth import views as auth_views

urlpatterns = [

    #lista wszystkich użytkowników przypisanych dla konta ośrodka
    path('list/<int:identifier>/', ReserachCenterListUsersView.as_view(), name='reserach_center_list_user'),
    path('list/<int:identifier>/create/', ReserachCenterCreateChatView.as_view(), name='reserach_center_create_chat'),
    path('list/<int:identifier>/chat/', ReserachCenterListIdConversationView.as_view(), name = 'reserach_center_list_user'),

    #pokój chatu
    path('messages/<id_conversation>/', ReserachCenterChatView.as_view(), name='reserach_center_chat'),

]