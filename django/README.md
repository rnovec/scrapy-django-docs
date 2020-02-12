# ORM
## Modelos
Para la persistencia de la infromación Django maneja modelos dentro de su ORM
```py
from django.db import models
from uuid import uuid4
from django.contrib.auth.models import User

# Create your models here.
class SiiCustomer(models.Model):
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

### Trabajando con modelos

Asumamos que tenemos un modelo cualquiera llamado `Person` para cada modelo de Django podemos hacer alguna de las siguientes funciones:

```py
# models.py
from django.db import models

class Person(models.Model):
    name = CharField(default="", max_length=50)
    age = IntegerField(default=0)

# somefile.py
obj = Person.objects.get(pk=1) # obtener un registro por su Primary Key
obj = Person.objects.get(name="Hector") # obtener un registro por algun campo especifico
obj.name # podemos acceder a sus datos

# actualiar el valor de un campo
obj.age = 40 
obj.save()

queryset = Person.objects.all() # obetener todos los registros de una Tabla/Modelo

# podemos cambiar el orden por defecto
queryset = Person.objects.all().order_by('name') # ASCENDENTE
queryset = Person.objects.all().order_by('-name') # DESCENDENT

queryset = Person.objects.filter(name="Hector") # Filtrar por algun campo esto devuelve una lista

# actualizar en masa, actualizara todos los registros con los datos proporcionados
Person.objects.update(name="Hector", age=35) 

# crear un nuevo registro
instance = Person(name="Raul", age=21)
instance.save()

```

## Comandos

Para correr el proyecto:

    $ python manage.py runserver
ó

    $ ./manage.py runserver

Al crear un nuevo modelo o hacer algun cambio en sus campos:

    $ python manage.py makemigrations
    $ python manage.py migrate

## Variables de Entorno
```py
import os
 
# printing environment variables
print(os.environ)
print(os.environ.get('DEBUG', None))
```

## Enlaces útiles
[UUID](https://es.wikipedia.org/wiki/Identificador_%C3%BAnico_universal)
[Advenced filtering](https://docs.djangoproject.com/en/3.0/topics/db/queries/#complex-lookups-with-q-objects)