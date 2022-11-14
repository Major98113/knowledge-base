function generateElements ( count = 1 ): number[] {
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

const binarySearch = ( arr: number[], desiredElem: number ): number | undefined => {
    return;
}

const usualSearch = ( arr: number[], desiredElem: number ): number | undefined => arr.find( (item: number) => item === desiredElem );

const generatedArr = generateElements( 1000 );

console.time();
usualSearch(generatedArr, 20);
console.timeEnd();

console.time();
usualSearch(generatedArr, 20);
console.timeEnd();