function getAnnogramsFromArr( arr = [] ) {
    const cachedObj = {

    };

    for ( let elem of arr ) {
        const bufArr = arr.filter( item => ! (item === elem ));
        const necessaryChars = elem.split("").sort().join("");
        for( let comparableElem of bufArr ) {
            const necessaryChars2 = comparableElem.split("").sort().join("");

            if( necessaryChars === necessaryChars2 )
                if( cachedObj[ necessaryChars ] && !cachedObj[ necessaryChars ].find( item => item === comparableElem ) )
                    cachedObj[ necessaryChars ].push( comparableElem );
                else
                    cachedObj[ necessaryChars ] = [ comparableElem ];

        }
    }

    return Object.values(cachedObj);
}

const input = [
    "вертикаль",
    "кильватер",
    "апельсин",
    "спаниель",
    "австралопитек",
    "ватерполистка",
    "кластер",
    "сталкер",
    "стрелка"
];

console.log( getAnnogramsFromArr( input ) );

/*
  Результат: [
    ["вертикаль", "кильватер"],
    ["апельсин", "спаниель"],
    ["австралопитек", "ватерполистка"],
    ["кластер", "сталкер", "стрелка"]
  ]
*/
