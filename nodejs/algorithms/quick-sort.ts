/*
* Метод основан на подходе "разделяй-и-властвуй". Общая схема такова:
* из массива выбирается некоторый опорный элемент a[i],
* запускается процедура разделения массива, которая перемещает все ключи, меньшие, либо равные a[i], влево от него, а все ключи, большие, либо равные a[i] - вправо,
* теперь массив состоит из двух подмножеств, причем левое меньше, либо равно правого,
* для обоих подмассивов: если в подмассиве более двух элементов, рекурсивно запускаем для него ту же процедуру.
* В конце получится полностью отсортированная последовательность.
*/

function swap<T>(items: T[], firstIndex: number, secondIndex: number){
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items: number[], left: number, right: number) {
    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort<T extends number>(items: T[], left?: T, right?: T) {
    var index;
    if (items.length > 1) {
        const subLeft = typeof left != "number" ? 0 : left;
        const subRight = typeof right != "number" ? items.length - 1 : right;
        // @ts-ignore
        index = partition(items, left, right);
        if (subLeft < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < subRight) {
            quickSort(items, index, right);
        }
    }
    return items;
}

console.log( quickSort<number>([4, 2, 6, 5, 3, 9]) );
