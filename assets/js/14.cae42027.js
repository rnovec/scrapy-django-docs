(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{219:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"intro"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intro"}},[t._v("#")]),t._v(" Intro")]),t._v(" "),s("p",[t._v("Scrapy es un framework de scraping y crawling de código abierto, escrito en Python. Actualmente está mantenido por Scrapinghub Ltd., una empresa que ofrece productos y servicios de web-scraping.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://scrapy.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Scrapy.org"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"instalacion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalacion"}},[t._v("#")]),t._v(" Instalación")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" scrapy                                   \n")])])]),s("h2",{attrs:{id:"estructura"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#estructura"}},[t._v("#")]),t._v(" Estructura")]),t._v(" "),s("p",[t._v("Una vez instalado scrapy podemos crear un proyecto con el comando "),s("code",[t._v("startproject")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ scrapy startproject "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("NOMBRE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# crear un proyecto                                    ")]),t._v("\n")])])]),s("p",[t._v("El comando "),s("code",[t._v("startproject")]),t._v(" genera una estructura básica de un proyecto de Scrapy")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("├── quotesbot\n│   ├── __init__.py\n│   ├── items.py\n│   ├── pipelines.py "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# tuberias para formatear la información obtenida del")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# sitio i.e. guardarlo en una DB")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# o verificar que tenga cierto formato.")]),t._v("\n│   ├── settings.py "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# configuración del proyecto i.e.: conexión a django")]),t._v("\n│   └── spiders "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# spiders")]),t._v("\n│       ├── __init__.py\n│       ├── toscrape-css.py "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ejemplo usando busqueda por clases de css")]),t._v("\n│       └── toscrape-xpath.py "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ejemplo usando busqueda por xpath (DOM)")]),t._v("\n├── LICENSE\n├── README.md\n└── scrapy.cfg "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# configuraciones del servicio scrapyd")]),t._v("\n")])])]),s("h2",{attrs:{id:"settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[t._v("#")]),t._v(" Settings")]),t._v(" "),s("p",[t._v("Al igual que Django, Scrapy maneja un archivo principal de configraciones iniciales del proyecto\nel archivo "),s("code",[t._v("settings.py")]),t._v(" contiene multiples variables comentadas que ayudan a definir el comportamiento de nuestros bots\naqui dejo algunas de las configuraciones iniciales recomendadas.")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Por defecto nuestros bots corren con un navegador standard de scrapy ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pero debemos modifcarlo a los navegadores comunes")]),t._v("\nUSER_AGENT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Podemos indicarle como se va a comportar si encuentra un ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# archivo robots.txt o un meta tag robots")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# En True obedece lasn reglas en False las ingora ")]),t._v("\nROBOTSTXT_OBEY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Muchos sitios utilizan Cookies para manejar sesiones del usuario es ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# importante monitorearlas para saber cuando extraerlas")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https://docs.scrapy.org/en/latest/topics/downloader-middleware.html#std:setting-COOKIES_DEBUG")]),t._v("\nCOOKIES_ENABLED "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\nCOOKIES_DEBUG "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Podemos sobreescribir los headers que son enviados en cada petición del bot")]),t._v("\nDEFAULT_REQUEST_HEADERS "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Accept'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Accept-Language'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'en'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),s("h2",{attrs:{id:"yield"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yield"}},[t._v("#")]),t._v(" yield")]),t._v(" "),s("p",[t._v("Es importante para scrapy que cada método bot retorne un generador\nesto se logra utilizando la instrucción "),s("code",[t._v("yield")]),t._v(" de python esto le permite al framework\npoder seguir los enlances o la siguiente petición.")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Ejemplo de comparación entre yiel y return")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n    yield: Acomula todos lo valores del \n    flujo normal de ejecución del programa\n    y devueleve un Generador que puede ser parseado a una lista\n    o un diccionario.\n    """')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" i\n    \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n    return: devuelve el valor que quiera ser retornado y corta la ejecucion \n    inmediatamente\n    """')]),t._v("\n    myList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            myList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" myList\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Esta es la una característica que diferencia a Scrapy de otras librerias de WebScrapping.")]),t._v(" "),s("h2",{attrs:{id:"enlaces-utiles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enlaces-utiles"}},[t._v("#")]),t._v(" Enlaces útiles")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://pipenv-fork.readthedocs.io/en/latest/basics.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pipenv"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://code.visualstudio.com/Download",target:"_blank",rel:"noopener noreferrer"}},[t._v("VSCode"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.scrapehero.com/how-to-prevent-getting-blacklisted-while-scraping/",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebScrapping Blocking Keys"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://seo-hacker.com/what-meta-robots-tag-are-for/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Robots Tag"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);