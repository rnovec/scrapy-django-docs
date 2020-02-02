# Pipelines

```py
# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html
import json


class SiiPipeline(object):
    def __init__(self, *args, **kwargs):
       self.items = []
       
    def process_item(self, item, spider):
        print(item['data'])
        obj = json.loads(item['data'])
        self.items.append(obj)
        return obj

```

```py
...
# Configure item pipelines
# See https://docs.scrapy.org/en/latest/topics/item-pipeline.html
ITEM_PIPELINES = {
   'sii.pipelines.SiiPipeline': 300,
}
...
```