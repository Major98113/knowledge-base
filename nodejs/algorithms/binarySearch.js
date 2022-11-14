function generateElements ( count = 1 ) {
    let arr = [];
    let lastElem = 0;
    let i = 0;

    while( i < count ) {
        arr.push( lastElem + Math.floor( Math.random() * 10 ));
        lastElem = arr [ arr.length - 1 ];
        i++;
    }

    return arr;
}

const binarySearch = ( arr = [], desiredElem ) => {

}

const usualSearch = ( arr = [], desiredElem ) => arr.find( item => item === desiredElem );

const arr = generateElements( 1000 );

console.time();
usualSearch(arr, 20);
console.timeEnd();

console.time();
usualSearch(arr);
console.timeEnd();