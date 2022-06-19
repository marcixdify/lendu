from django.db import models

# Create your models here.

def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class Notices(models.Model):
    NoticeId = models.AutoField(primary_key=True)
    NoticeTitle = models.CharField(max_length=50)
    NoticeDescription = models.CharField(max_length=500)
    NoticeDateAdd = models.DateTimeField(auto_now_add=True)
    NoticeImg = models.ImageField(upload_to=upload_to, blank=True, null=True)

    def __str__(self):
        return self.NoticeTitle[0:50]
