//1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711

const cachedFib = {};

const fib = ( num ) => {

    if( cachedFib[ num ] ) 
        return cachedFib[ num ];

    if( num <= 2 )
        return 1; 
    
    cachedFib[ num - 1 ] = fib( num - 1 );
    cachedFib[ num - 2 ] = fib( num - 2 );
    
    return cachedFib[ num - 1 ] + cachedFib[ num - 2 ];
}

function perimeter(n) {
    let perimeterSum = 0;
    let counter = 1;
    
    while( counter <= n + 1 ) {
        perimeterSum += fib( counter++ );
    }

    return perimeterSum * 4;

}

console.log( perimeter(200) );