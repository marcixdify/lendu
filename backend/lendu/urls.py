
from lendu import views
from django.urls import path

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('notices/', views.getNotices, name='notices'),
    path('notices/create/', views.createNotice, name='create-notice'),
    path('notices/<str:pk>/', views.getNotice, name='notice'),
    path('notices/<str:pk>/update/', views.updateNotice, name='update-notice'),
    path('notices/<str:pk>/delete/', views.deleteNotice, name='delete-notice'),
    
]
