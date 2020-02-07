# Items

Los items para Scrapy son el modo en el que podemos representar nuestros datos obtenidos de las paginas
analizadas **no es obligatorio** utilizarlos pero es comun que los datos que extraemos sigan un patron y estos puedan
standarizarse para una mejor salida. Es similar a los modelos de Django pero estos no guardan datos en la DB.


```py
# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy

class SiiItem(scrapy.Item):
    # define the fields for your item here like:
    data = scrapy.Field() # un campo puede contener cualquier tipo de dato
```