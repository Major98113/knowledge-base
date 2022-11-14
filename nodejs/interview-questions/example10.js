// 1. Найти максимальный элемент в массиве
const findMax = arr => Math.max.apply(null, arr);



// 2. Найти число Фибоначчи для заданного порядкового номера (0,1,1,2,3,5,8)
const fibonacci = num => {

};



// 3. Является ли заданная строка палидромом (арозаупаланалапуазора)?
const isPalindrome = str => {
    const strFormatted = str.toLowerCase().split(" ").join("")
    for( let i = 0; i <= Math.round(str.length / 2); i++){
        if(!str[i] === str[str.length - 1 - i]) {
            return false
        }
    }
    return true;
};



// 4. Является ли вложенность скобок () {} [] в строке корректной?
const isBracketsCorrect = str => {

};



// 5. Сгруппировать анаграммы ['кот', 'сон', 'ток', 'сом', 'нос']
// => [ ['кот', 'ток'], ['сон', 'нос'], ['сом'] ]
const groupAnagrams = arr => {
    const groups = [];
    const formattedArr = arr.map( item => [item.sort(), item]);
    const formattedMap = new Map();
    for ( const [key, value] of formattedArr ) {
        const desiredElem = formattedMap.get(key);
        if(desiredElem) {
            formattedMap.set(key, [...desiredElem, value])
        }
        else {
            formattedMap.set(key, [value])
        }
    }
    return Array.from(formattedMap);
};