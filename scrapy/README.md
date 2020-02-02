# Intro
## Instalación
```bash
$ pip install scrapy                                   
```

## Estructura
Una vez instalado scrapy podemos crear un proyecto con el comando `startproject`
```bash
$ scrapy startproject <NAME> # crear un proyecto                                    
```

El comando `startproject` genera una estructura básica de un proyecto de Scrapy

```bash
├── quotesbot
│   ├── __init__.py
│   ├── items.py
│   ├── pipelines.py # tuberias para formatear la información obtenida del sitio i.e. guardarlo en una DB
                    # o verificar que tenga cierto formato.
│   ├── settings.py # configuración del proyecto i.e.: conexión a django
│   └── spiders # spiders
│       ├── __init__.py
│       ├── toscrape-css.py # ejemplo usando busqueda por clases de css
│       └── toscrape-xpath.py # ejemplo usando busqueda por xpath (DOM)
├── LICENSE
├── README.md
└── scrapy.cfg # archivo de configuraciones
```

## Settings

## yield
Es importante para scrapy que cada método de nuestro spider retorne un generador
esto se logra utilizando la instrucción `yield` de python esto le permite al framework 
poder seguir los enlances o la siguiente petición.

```py
def func(n):
    """
    yield: Acomula todos lo valores del 
    flujo normal de ejecución del programa
    y devueleve un Generador que puede ser parseado a una lista
    o un diccionario.
    """
    for i in range(0, n):
        if (i % 2) == 0:
            yield i
    
print(list(func(10)))


def func(n):
    """
    return: devuelve el valor que quiera ser retornado y corta la ejecucion 
    inmediatamente
    """
    myList = list()
    for i in range(0, n):
        if (i % 2) == 0:
            myList.append(i)
    return myList

print(func(10))
```

Esta es la una característica que diferencia a Scrapy de otras librerias de WebScrapping.


## Enlaces útiles

- [Pipenv](https://pipenv-fork.readthedocs.io/en/latest/basics.html)
- [VSCode](https://code.visualstudio.com/Download)
- [WebScrapping Blocking Keys](https://www.scrapehero.com/how-to-prevent-getting-blacklisted-while-scraping/)
- [Robots Tag](https://seo-hacker.com/what-meta-robots-tag-are-for/)

