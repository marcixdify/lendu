from django.urls import path, include

from knox.views import LogoutView
from knox import views as knox_views
from .views import   LoginAPI, RegisterTestUserView, UserAPI, AccountTestUserView, ChangePasswordUserView

urlpatterns = [
  #  path('', include('knox.urls')),
    path('user/test/', AccountTestUserView.as_view()),
    path('user/register/', RegisterTestUserView.as_view(), name='register'),
    path('user/login/', LoginAPI.as_view() , name='login'),
    path('user/logout/', knox_views.LogoutView.as_view(), name='knox_logout'),
    path('user/test/reset-password/', ChangePasswordUserView.as_view()),

]