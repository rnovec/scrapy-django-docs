
## Scrapyd API

```py
# overwrite scrapy settings
settings = { 'USER_AGENT': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' }

task = scrapyd.schedule('default',
                        'icrawler',
                        settings=settings,
                        url=url,
                        domain=domain)
status = scrapyd.job_status('default', task_id)
```

## Enlaces utiles
- [Scrapy vs Selenium vs BeatifulSoup](https://medium.com/analytics-vidhya/scrapy-vs-selenium-vs-beautiful-soup-for-web-scraping-24008b6c87b8)
- [Celery](https://docs.celeryproject.org/en/latest/django/first-steps-with-django.html)
- [SocketIO](https://www.botreetechnologies.com/blog/django-websocket-with-socketio)