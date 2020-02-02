# Spiders

Los scripts que se encargan de hacer WebScrapping Scrapy los llama Spiders
cada uno hereda de la clase `Spider` y contiene un metodo llamado `parse`

```py
# -*- coding: utf-8 -*-
from scrapy import Spider, CrawlSpider, BaseSpider

class MySpider(scrapy.Spider):
    # ... 
```

```bash
$ scrapy genspider example example.com                                         
```

## Estrcutura de una etiqueta HTML
![](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7rKR7ylzCkT7y5p19G9yhqhKDYkQ0kMRS2pDx_6_wErgVP7Hi)


## CSS & XPath Selector 
Ambas extraen los mismos datos del mismo sitio web, pero `toscrape-css`
emplea selectores CSS, mientras que `toscrape-xpath` emplea expresiones XPath.
- [CSS Selectors vs XPath](https://medium.com/dataflow-kit/css-selectors-vs-xpath-f368b431c9dc)

```py
# Ejemplo de scraping usando selectores CSS
import scrapy

class ToScrapeCSSSpider(scrapy.Spider):
    name = "toscrape-css"
    start_urls = [
        'http://quotes.toscrape.com/',
    ]

    def parse(self, response):
        """
        """
        # hay que tomar encuenta que es una busqueda asi que devuelve siempre una lista o arreglo
        for quote in response.css("div.quote"): # div.quote => '<div class="quote">...</div>' 
            yield {
                'text': quote.css("span.text::text").extract_first(), # span.text => '<span class="text">...</span>' y ::text le indica que no debe retornar la etiqueta sino el texto dentro de ella
                'author': quote.css("small.author::text").extract_first(),
                # > el signo menor o igual indica que debe extraer los hijos
                'tags': quote.css("div.tags > a.tag::text").extract() # div.tags > a.tag => '<div class="tags"> <a class=""tag>Poema</a>... </div>'
            }

        next_page_url = response.css("li.next > a::attr(href)").extract_first()
        if next_page_url is not None:
            yield scrapy.Request(response.urljoin(next_page_url))

```

## Response Object
```py
response.headers # acceder a los headers de la respuesta
response.text # texto plano de la respuesta
response.body # html o formato de la respuesta
response.css # selector css
response.xpath # selector xpath
```

## Login with FormRequest 

## Running the spiders

Puede ejecutar un `spider` utilizando el comando `scrapy crawl`:

    $ scrapy crawl toscrape-css

Si desea guardar los datos raspados en un archivo, puede usar la opción `-o`:
    
    $ scrapy crawl toscrape-css -o quotes.json




