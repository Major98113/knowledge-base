/*
* Метод пирамидальной сортировки, изобретенный Д. Уилльямсом, является улучшением традиционных сортировок с помощью дерева.
* Пирамидой (кучей) называется двоичное дерево такое, что: a[i] ≤ a[2i+1]; a[i] ≤ a[2i+2].
* a[0] - минимальный элемент пирамиды.
* Общая идея пирамидальной сортировки заключается в том, что сначала строится пирамида из элементов исходного массива, а затем осуществляется сортировка элементов.
* Выполнение алгоритма разбивается на два этапа.
*   1 этап Построение пирамиды.
*   2 этап Сортировка на построенной пирамиде.
* */

var array_length;
/* to create MAX  array */
function heap_root(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max])     {
        max = right;
    }

    if (max != i) {
        swap(input, i, max);
        heap_root(input, max);
    }
}

function swap(input, index_A, index_B) {
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort(input) {

    array_length = input.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heap_root(input, i);
    }

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        array_length--;


        heap_root(input, 0);
    }
}

var arr = [3, 0, 2, 5, -1, 4, 1];
heapSort(arr);
console.log(arr);
