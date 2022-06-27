from django.db import models
from djmoney.models.fields import MoneyField
from django.contrib.auth.models import User
from django.conf import settings
# Create your models here.

def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

# class Notices(models.Model):
# #    NoticeId = models.AutoField(primary_key=True)
#     NoticeOwner = models.ForeignKey(
#         settings.AUTH_USER_MODEL, related_name="notices", on_delete=models.CASCADE, default=None,)
#   #  NoticeOwner = models.ForeignKey(
#    #     User, related_name="notice", on_delete=models.CASCADE, null=True)  #added
#     NoticeTitle = models.CharField(max_length=50)
#     NoticeDescription = models.CharField(max_length=500)
#     NoticeDateAdd = models.DateTimeField(auto_now_add=True)
#     NoticeDateUpdate = models.DateTimeField(auto_now=True)
#     NoticeCategory = models.CharField(max_length=50, blank=True, default="Brak")
#     NoticeCredit = MoneyField(decimal_places=2,default=0,default_currency='PLN',max_digits=11,)
#     #to powinno widac
#     NoticeImg = models.ImageField(upload_to=upload_to, default='images/brak-jpg.jpg', blank=True, null=True)
    

#     def __str__(self):
#         return self.NoticeTitle

#     def get_total_number_of_likes(self):
#         return self.noticelike_set.count()
    
# class NoticeLike(models.Model):
#     """
#     Model to like recipes
#     """
#     user = models.ForeignKey(settings.AUTH_USER_MODEL,
#                              on_delete=models.CASCADE)
#     notice = models.ForeignKey(Notices, on_delete=models.CASCADE)
#     created = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.user.username







class Notice(models.Model):
    """
    Recipe model
    """
    NoticeOwner = models.ForeignKey(
        settings.AUTH_USER_MODEL, related_name="recipes", on_delete=models.CASCADE)
    NoticeTitle = models.CharField(max_length=50)
    NoticeCategory = models.CharField(max_length=50, blank=True, default="Brak")
    NoticeImg = models.ImageField(upload_to=upload_to, default='images/brak-jpg.jpg', blank=True, null=True)
    NoticeDescription = models.CharField( max_length=200)
    NoticeDateAdd = models.DateTimeField(auto_now_add=True)
    NoticeCredit = MoneyField(decimal_places=2,default=0,default_currency='PLN',max_digits=11,)
    NoticeDateUpdate = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('-NoticeDateAdd', )

    def __str__(self):
        return self.NoticeTitle

    def get_total_number_of_likes(self):
        return self.noticelike_set.count()



class NoticeLike(models.Model):
    """
    Model to like recipes
    """
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    notice = models.ForeignKey(Notice, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username