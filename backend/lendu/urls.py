from django.conf.urls import url
from lendu import views

urlpatterns = [
    url(r'^notice$',views.noticeApi),
    url(r'^notice/([0-9]+)$'),

]

#19 min