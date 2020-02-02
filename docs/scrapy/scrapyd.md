## Scrapyd

### Comandos

Es una libreria que nos permite ejecutar el servidor de scrapy y mediante CURL enviar peticiones 
para ejecutar nuestros spiders

```bash
$ pip install scrapyd
$ cd quotesbot
$ scrapyd
```

en otra terminal

`curl http://localhost:6800/schedule.json -d project=default -d spider=toscrape-xpath`


- [Celery](https://docs.celeryproject.org/en/latest/django/first-steps-with-django.html)
- [SocketIO](https://www.botreetechnologies.com/blog/django-websocket-with-socketio)