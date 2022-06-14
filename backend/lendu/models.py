from django.db import models

# Create your models here.

class Notices(models.Model):
    NoticeId = models.AutoField(primary_key=True)
    NoticeTitle = models.CharField(max_length=50)
    NoticeDescription = models.CharField(max_length=500)
    NoticeDateAdd = models.DateField()
