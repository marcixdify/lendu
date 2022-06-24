
from lendu import views
from django.urls import path

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('notices/', views.getNotices, name='notices'),
    path('notices/create/', views.createNotice.as_view(), name='create-notice'),
    path('notices/<str:pk>/', views.getNotice, name='notice'),
    path('notices/<str:pk>/update/', views.updateNotice.as_view(), name='update-notice'),
    path('notices/<str:pk>/delete/', views.deleteNotice, name='delete-notice'),
    path('notices/<str:pk>/like/', views.NoticeLikeAPIView.as_view(), name='notice-like'),
]
