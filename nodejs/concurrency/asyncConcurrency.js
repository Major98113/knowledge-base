/*
https://coderoad.ru/49273391/%D0%9A%D0%B0%D0%BA-%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C-%D0%BA%D0%BE%D0%BB%D0%B8%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%BE-%D0%BE%D0%B4%D0%BD%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE-%D0%B7%D0%B0%D0%BF%D1%83%D1%89%D0%B5%D0%BD%D0%BD%D1%8B%D1%85-async-http-get-%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81%D0%BE%D0%B2

QUESTION: 
У меня есть список сгенерированных URL-адресов on-the-fly (около 30-40), 
которые я хочу получить через http.get() и сохранить в виде файлов.

Я хочу убедиться, что не все из них работают одновременно, 
потому что я не хочу перегружать ни сервер, ни мое служебное клиентское приложение.

Как мне ограничить количество выполняемых запросов?
*/

/*
ANSWER:

С помощью модуля async вы можете использовать, например, parallelLimit() . 
Вы можете указать максимальное количество одновременных запросов.

Пример с максимальными тремя запросами одновременно (обратите внимание, что вам нужно настроить его):
*/

const http = require('http')
const async = require('async')

const urls = [ /* array of urls */ ]
const fns = urls.map(url => {
  return cb => {
    http.get(url, res => {
      // handle res, call cb() when done
      cb()
    })
  }
})

async.parallelLimit(fns, 3, err => {});

//Для справки: https://caolan.github.io/async/docs.html#parallelLimit