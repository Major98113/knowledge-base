/*
* Сортировка слиянием подразумевает разбиение массива поровну до тех пор пока из одного массива не получится несколько мелких — размером не более двух элементов.
* Два элемента легко сравнить между собой и упорядочить в зависимости от требования: по возрастанию или убыванию.
* После разбиения следует обратное слияние, при котором в один момент времени (или за проход цикла) выбираются по одному элементу от каждого массива и сравниваются между собой.
* Наименьший (или наибольший) элемент отправляется в результирующий массив, оставшийся элемент остается актуальным для сравнения с элементом из другого массива на следующем шаге.
* */

const _mergeArrays = (a, b) => {
    const c = []

    while (a.length && b.length) {
        c.push(a[0] > b[0] ? b.shift() : a.shift())
    }

    //if we still have values, let's add them at the end of `c`
    while (a.length) {
        c.push(a.shift())
    }
    while (b.length) {
        c.push(b.shift())
    }

    return c
}

const mergeSort = (a) => {
    if (a.length < 2) return a
    const middle = Math.floor(a.length / 2)
    const a_l = a.slice(0, middle)
    const a_r = a.slice(middle, a.length)
    const sorted_l = mergeSort(a_l)
    const sorted_r = mergeSort(a_r)
    return _mergeArrays(sorted_l, sorted_r)
}

console.log(mergeSort([1,4,3,0,-1,15,2]))
