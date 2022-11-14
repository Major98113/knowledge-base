/**
 * Нужно написать функцию get.
 * На вход функция принимает объект и путь до поля объекта.
 * Путь – это строка, разделенная точкой.
 * Функция должна вернуть соответствующее поле объекта.
 * Запрашиваемого поля в объекте может не быть.
 */

function get(obj, path) {
  const params = path.split(".");
  while(params.length) {
    const desiredElem = params.splice(0, 1)
    if (obj[desiredElem]) {
      return obj[desiredElem];
    }
  }
}

const obj = {
  a: {
    b: {
      c: 'd'
    },
    e: 'f'
  }
};

get(obj, 'a.b');   // { c : 'd' }
get(obj, 'a.b.c'); // 'd'
get(obj, 'a.e');   // 'f'
get(obj, 'a.x.e'); // undefined


/*
Реализовать строковый шаблонизатор вида:
expand('Hello, {user.name}!', {user: {name: 'Vasya'}});
который сделает подстановку переменных и вернет "Hello, Vasya!".
*/
const getSimpleParams = (obj, outerProp = '') => {
  const paramsArr = [];
  for (const key in obj) {
    if (typeof obj[key] !== "object") {
      paramsArr.push({ key: outerProp + key, value: obj[key]})
    }
    else {
      paramsArr.push({ key: outerProp + key,  value: get(obj[key], outerProp + key)})
    }
  }
  return paramsArr
}

function expand(template, params) {
  const paramsArr = getSimpleParams(params);
  let replacedTemplate = template;
  for (const elem of paramsArr) {
    console.log(elem)
    const {key, value} = elem
    const regEx = new RegExp(key, 'gi');
    replacedTemplate.replaceAll(regEx, value);
  }
  return replacedTemplate;
}

console.log(expand('Hello, {user.name}! Now {time} {date}', {
  user: { name: 'Vasya' },
  time: '14:30'
})); // Hello, Vasya! Now 14:30 {date}