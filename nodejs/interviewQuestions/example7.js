const removeDuplicateIds = ( obj ) => {
    const strengthOfSymbols = new Map();
    const objWithoutDublicates = {};
    const result = {};

    for( let key in obj )
        objWithoutDublicates[ key ] = [ ...new Set( obj[ key ] ) ];

    for( let key in objWithoutDublicates ) {
        objWithoutDublicates[ key ].forEach(( item ) => {
            if( !strengthOfSymbols.has( item ) )
                strengthOfSymbols.set( item, key );
            else
                if( Number( key ) > Number( strengthOfSymbols.get( item )) )
                    strengthOfSymbols.set( item, key );
        });
    }
    
    for( let key in objWithoutDublicates ) {
        result[ key ] = objWithoutDublicates[ key ].filter( symbol => Number( strengthOfSymbols.get( symbol )) <= Number( key ) );
    }
    

    console.log(result);
    return result;
};


const obj = {
    "1": ["A", "B", "C"],
    "2": ["A", "B", "D", "A"],
  };

const result = removeDuplicateIds(obj); //{ "1": ["C"], "2": ["A", "B", "D"] }
  
const obj1 = {
"1": ["C", "F", "G"],
"2": ["A", "B", "C"],
"3": ["A", "B", "D"],
};
const result1 = removeDuplicateIds(obj1); //{ "1": ["F", "G"], "2": ["C"], "3": ["A", "B", "D"] }
  
const obj2 = {
"1": ["A"],
"2": ["A"],
"3": ["A"],
};
const result2 = removeDuplicateIds(obj2); // { "1": [], "2": [], "3": ["A"] }
        
const obj3 = {
"432": ["A", "A", "B", "D"],
"53": ["L", "G", "B", "C"],
"236": ["L", "A", "X", "G", "H", "X"],
"11": ["P", "R", "S", "D"],
};
const result3 = removeDuplicateIds(obj3); /*{
    "11": ["P", "R", "S"],
    "53": ["C"],
    "236": ["L", "X", "G", "H"],
    "432": ["A", "B", "D"],
    }
     */
