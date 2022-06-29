
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('lendu.urls')),
    path('api/auth/', include('accounts.urls')),
    path('api/chat/', include('chat.api.urls', namespace='chat')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)