# Scrapyd

## Instalación

Es una libreria que nos permite ejecutar el servidor de scrapy y mediante CURL enviar peticiones 
para ejecutar nuestros spiders

```bash
$ pip install scrapyd
$ cd quotesbot
$ scrapyd
```
![](/scrapy-django-docs/server.png)

podemos abrir en el navegador [http://localhost:6800](http://localhost:6800)

![](/scrapy-django-docs/runserver.png)

## Server
en otra terminal

    `$ curl http://localhost:6800/schedule.json -d project=default -d spider=toscrape-xpath`

## Postman
Podemos consumir nuestros spiders desde el scrapyd server utilizando un fake client como [Postman](https://www.getpostman.com/downloads/)

![](/scrapy-django-docs/postman.png)

![](/scrapy-django-docs/jobs.png)
