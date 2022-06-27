
from lendu import views
from django.urls import path

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('notices/', views.NoticeListAPIView.as_view(), name='notices'),
    path('notices/create/', views.NoticeCreateAPIView.as_view(), name='create-notice'),
    path('notices/<str:pk>/', views.NoticeAPIView.as_view(), name='notice'),
    path('notices/<str:pk>/like/', views.NoticeLikeAPIView.as_view(), name='notice'),

]
