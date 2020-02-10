# ORM
## Modelos
Para la persistencia de la infromación Django maneja modelos dentro de su ORM
```py
from django.db import models
from uuid import uuid4
from django.contrib.auth.models import User

# Create your models here.
class SiiCustomer(models.Model):
    # https://es.wikipedia.org/wiki/Identificador_%C3%BAnico_universal
    uuid = models.UUIDField(default=uuid4(), primary_key=True) # identificador único
    user = models.ForeignKey(User, on_delete=models.CASCADE) # cuenta de usuario
    rut = models.CharField(default="", blank=True, null=True, max_length=20) # clave
    clave = models.CharField(default="", blank=True, null=True, max_length=50)
    token = models.CharField(default="", blank=True, null=True, max_length=50)
    cookies = models.TextField(default="", null=True, blank=True)

class LibroSii(models.Model):
    uuid = models.UUIDField(default=uuid4(), blank=True, primary_key=True) # identificador único
    customer = models.ForeignKey(SiiCustomer, on_delete=models.CASCADE)
    mes = #...
    anio = #...
    tipo = #...
```

## Migrations

## Comandos

## Enlaces utiles
- [Celery](https://docs.celeryproject.org/en/latest/django/first-steps-with-django.html)
- [SocketIO](https://www.botreetechnologies.com/blog/django-websocket-with-socketio)