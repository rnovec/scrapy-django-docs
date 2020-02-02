# Intro
Scrapy es un framework de scraping y crawling de código abierto, escrito en Python. Actualmente está mantenido por Scrapinghub Ltd., una empresa que ofrece productos y servicios de web-scraping.

[Scrapy.org](https://scrapy.org/)

## Instalación
```bash
$ pip install scrapy                                   
```

## Estructura
Una vez instalado scrapy podemos crear un proyecto con el comando `startproject`
```bash
$ scrapy startproject <NOMBRE> # crear un proyecto                                    
```

El comando `startproject` genera una estructura básica de un proyecto de Scrapy

```bash
├── quotesbot
│   ├── __init__.py
│   ├── items.py
│   ├── pipelines.py # tuberias para formatear la información obtenida del
                    # sitio i.e. guardarlo en una DB
                    # o verificar que tenga cierto formato.
│   ├── settings.py # configuración del proyecto i.e.: conexión a django
│   └── spiders # spiders
│       ├── __init__.py
│       ├── toscrape-css.py # ejemplo usando busqueda por clases de css
│       └── toscrape-xpath.py # ejemplo usando busqueda por xpath (DOM)
├── LICENSE
├── README.md
└── scrapy.cfg # configuraciones del servicio scrapyd
```

## Settings
Al igual que Django, Scrapy maneja un archivo principal de configraciones iniciales del proyecto
el archivo `settings.py` contiene multiples variables comentadas que ayudan a definir el comportamiento de nuestros bots
aqui dejo algunas de las configuraciones iniciales recomendadas. 
```py
...
# Por defecto nuestros bots corren con un navegador standard de scrapy 
# pero debemos modifcarlo a los navegadores comunes
USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'

# Podemos indicarle como se va a comportar si encuentra un 
# archivo robots.txt o un meta tag robots
# En True obedece lasn reglas en False las ingora 
ROBOTSTXT_OBEY = False

# Muchos sitios utilizan Cookies para manejar sesiones del usuario es 
# importante monitorearlas para saber cuando extraerlas
# https://docs.scrapy.org/en/latest/topics/downloader-middleware.html#std:setting-COOKIES_DEBUG
COOKIES_ENABLED = True
COOKIES_DEBUG = True

# Podemos sobreescribir los headers que son enviados en cada petición del bot
DEFAULT_REQUEST_HEADERS = {
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
  'Accept-Language': 'en',
}
...
```

## yield
Es importante para scrapy que cada método bot retorne un generador
esto se logra utilizando la instrucción `yield` de python esto le permite al framework 
poder seguir los enlances o la siguiente petición.

```py
# Ejemplo de comparación entre yiel y return

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

