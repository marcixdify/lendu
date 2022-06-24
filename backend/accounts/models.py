from django.db import models
from django.contrib.auth.base_user import BaseUserManager
# Create your models here.
import random
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator, MinValueValidator, MaxValueValidator, validate_slug,FileExtensionValidator


TEST = 'test'

ROLE_CHOICES = [
    (TEST, 'test'),
]

#status konta - głównie dotyczy lekarzy i ośrodków
BLOCKED = 'BLOCKED'
SUSPENDED = 'SUSPENDED'
HOLD = 'HOLD'
ACTIVE = 'ACTIVE'




class CustomUserManager(BaseUserManager):

    def create_user(self, email, password, role, **extra_fields):

        if not email:
            raise ValueError(_('The Email must be set'))
        email=self.normalize_email(email)
        identifier = random.randint(1000000000, 9999999999)
        user = self.model(email=email,role=role, identifier=identifier, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_test_user(self, email, password, username, phone, **extra_fields):
        extra_fields.setdefault('status', 'ACTIVE')
        user=self.create_user(email, password,  TEST, **extra_fields)
        user_info = TestUser(user=user,phone=phone, username=username)
        user_info.save()
        return user

class User(AbstractUser):

    username =  None
    first_name = None
    last_name = None

    email = models.EmailField(
        max_length=255,
        unique=True,
    )

    role = models.CharField(choices=ROLE_CHOICES, max_length=20)

    status = models.CharField(
        max_length=10,
        default=ACTIVE,
    )

    identifier = models.IntegerField(
 
        unique=True,
        editable = False,
        default=random.randint(1000000000, 9999999999)
    )
    
    def get_role(self):
        return self.role

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return "{}".format(self.email)

    def save(self, *args, **kwargs):
        if self.status  != 'ACTIVE':
            self.is_active=0
        else:
            self.is_active=1
        super(User, self).save(*args, **kwargs)

class TestUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    phone = models.IntegerField(
        verbose_name="Numer kontaktowy",
        null = True,
    )
    username =  models.CharField(max_length=20)

    def __str__(self):
        return "{}".format(self.phone)