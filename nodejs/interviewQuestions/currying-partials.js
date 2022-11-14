const curry = ( fun ) => {
    const savedFunction = fun;
    let accumulator;

    const newFunction = ( num ) => {
        if( typeof num === "undefined")
            return accumulator;

        if( typeof accumulator === "undefined" )
            accumulator = num;
        else
            accumulator = savedFunction( accumulator, num );

        return newFunction;
    };

    return newFunction;
}

const sum = ( a = 0 , b = 0 ) =>  a - b;

const curriedSum = curry( sum );

console.log( curriedSum(1)(23)(7)(-10)(99)() );  