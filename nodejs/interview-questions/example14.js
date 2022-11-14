const getOperation = symbol => OPERATIONS.find( ({ value }) => value === symbol );
const OPERATIONS = [
    { value: '('  },
    { value: ')' },
    { value: '*',  priority: 2 },
    { value: '/',  priority: 2 },
    { value: '^', priority: 2 },
    { value: '+', priority: 1 },
    { value: '-', priority: 1 }
];

function toPostfix (infix) {
    const exitArr = [];
    const operationStack = [];
    let i = 0;

    while( i < infix.length  ){
        const currentOperation = getOperation( infix[ i ] );

        if( currentOperation ) {
            if( !operationStack.length )
                operationStack.push( currentOperation.value );
            else {
                if( currentOperation.value === '(' ){
                    operationStack.push( currentOperation.value );
                    i++;
                    continue;
                }

                let lastOperation = getOperation( operationStack.pop() );

                if( currentOperation.value === ')' ){
                    while ( lastOperation.value !== '(' ){
                        exitArr.push( lastOperation.value );
                        lastOperation = operationStack.length && getOperation( operationStack.pop() );
                        if( !lastOperation ) break;
                    }
                    i++
                    continue;
                }

                if( lastOperation.priority >= currentOperation.priority ){
                    exitArr.push( lastOperation.value );
                    continue;
                }
                else {
                    operationStack.push( lastOperation.value );
                    operationStack.push( currentOperation.value );
                }

            }
        }
        else {
            exitArr.push( infix[ i ] );
        }
        i++;
    }
    while ( operationStack.length )
        exitArr.push( operationStack.pop() );

    return exitArr.join('');
}


console.log( toPostfix("2+7*5") == "275*+" );
console.log( toPostfix("3*3/(7+1)") == "33*71+/" );
console.log( toPostfix("5+(6-2)*9+3^(7-1)") == "562-9*+371-^+" );
console.log( toPostfix("(5-4-1)+9/5/2-7/1/7") == "54-1-95/2/+71/7/-" );
console.log( toPostfix("1^2^3") == "123^^" );

