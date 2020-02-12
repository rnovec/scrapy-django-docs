# REST Framework

[Codigos de Estado](https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP)
[Protocolo HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Overview)
[REST](https://es.wikipedia.org/wiki/Transferencia_de_Estado_Representacional)
## Instalación
    $ pip install djangorestframework
## Settings

```py
import datetime

INSTALLED_APPS = [
    ...
    "corsheaders",
    "rest_framework",
    ...
]

REST_FRAMEWORK = {
    # Use Django's standard `django.contrib.auth` permissions,
    # or allow read-only access for unauthenticated users.
    "DEFAULT_PERMISSION_CLASSES": [
        "rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly",
        # 'rest_framework.permissions.IsAuthenticated',
        # 'rest_framework.permissions.IsAdminUser'
    ],
    "DEFAULT_FILTER_BACKENDS": ["django_filters.rest_framework.DjangoFilterBackend"],
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework.authentication.SessionAuthentication",
        # "rest_framework.authentication.TokenAuthentication",
        "rest_framework.authentication.BasicAuthentication",
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ),
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.LimitOffsetPagination",
    "PAGE_SIZE": 10,
    'TEST_REQUEST_DEFAULT_FORMAT': 'json'
}
JWT_AUTH = {
    "JWT_ALLOW_REFRESH": True,
    "JWT_EXPIRATION_DELTA": datetime.timedelta(seconds=10),
    "JWT_REFRESH_EXPIRATION_DELTA": datetime.timedelta(minutes=15),
}

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": datetime.timedelta(hours=1),
    "REFRESH_TOKEN_LIFETIME": datetime.timedelta(hours=1),
    "USER_ID_FIELD": "username",
    'USER_ID_CLAIM': 'username',
}

CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = True
```
## Serializers

```py
# serializers.py
from rest_framework import serializers
from .models import *

# Serializers define the API representation.
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = []
        exclude = []
```

[Serilización](https://es.wikipedia.org/wiki/Serializaci%C3%B3n)

## Viewsets
```py
# views.py
from rest_framework import viewsets
from .models import *
from .serializers import *

class RoleViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows roles to be viewed or edited.
    """
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
```
## Router

```py
from django.conf.urls import include, url
from rest_framework import routers
from app.views import *

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r"users", UserViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.

urlpatterns = [
    url(r"^api/", include(router.urls)),
]

```

## Enlaces útiles
[JWT Tokens](https://jwt.io/)

