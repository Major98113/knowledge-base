/*
* В чём идея сортировок выбором?
* В неотсортированном подмассиве ищется локальный максимум (минимум).
* Найденный максимум (минимум) меняется местами с последним (первым) элементом в подмассиве.
* Если в массиве остались неотсортированные подмассивы — смотри пункт 1.
* */

const selectionSort = arr => {
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }
    return arr;
};

console.log( selectionSort([4, 2, 6, 5, 3, 9]) )
