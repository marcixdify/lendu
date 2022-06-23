from urllib import request
from rest_framework import exceptions, authentication, permissions
from django.contrib.auth import authenticate, get_user_model
from django.utils.translation import gettext_lazy as _
import django.contrib.auth

User = django.contrib.auth.get_user_model()

class ExampleAuthentication(authentication.BaseAuthentication):
    def authenticate(self, request):
        username = request.data.get('email', None)
        password = request.data.get('password', None)
        # username = "marcinln@interia.pl"
        # password = "96142799Aa#"

        if not username or not password:
            raise exceptions.AuthenticationFailed(_('Brak danych'))
            #User.objects.get(email="test30@example.com")

        credentials = {
            get_user_model().USERNAME_FIELD: username,
            'password': password
        }

        user = authenticate(**credentials)

        try:
            user = User.objects.get(email=username) # get the user
        except User.DoesNotExist:
            try:
                if request.data.get('password2', None):
                    pass
            except:
                raise exceptions.AuthenticationFailed(_('Nie rejestracja i nie logowanie'))

        return (user, None)

