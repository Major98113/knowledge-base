function compareItems( item1, item2 ){
    if (item1.priority > item2.priority)
        return -1;

    if (item1.priority < item2.priority)
        return 1;

    return 0;
}

const arr = [
    { title: 'Porsche 911', color: 'grey' },
    { title: 'Jaguar F-Type', color: 'green' },
    { title: 'Chevrolet Corvette', color: 'red' },
    { title: 'BMW i8', color: 'green' },
    { title: 'Nissan GT-R', color: 'blue' },
    { title: 'Lexus LC', color: 'red' },
    { title: 'Maserati Granturismo', color: 'red' },
    { title: 'Morgan Plus Six', color: 'grey' },
    { title: 'Alfa Romeo 4C', color: 'red' },
]

const sorter = (input) => {
    // const bufArr = [];
    //
    // for( let { title, color } of input ){
    //     switch ( color.toUpperCase() ) {
    //         case "RED":
    //             bufArr.push( { priority: 3, title, color } );
    //             break;
    //         case "GREEN":
    //             bufArr.push( { priority: 2, title, color } );
    //             break;
    //         case "BLUE":
    //             bufArr.push( { priority: 1, title, color } );
    //             break;
    //         default:
    //             bufArr.push( { priority: 0, title, color } );
    //     }
    //
    // }

    const objConfig = {
        RED: 3,
        GREEN: 2,
        BLUE: 1
    };

    return input.map( item => ({ ...item, priority: objConfig[item.color.toUpperCase()] || 0 }) ).sort( compareItems ).map( ({ title, color }) => ({ title, color }) );
}
const result = sorter(arr);
console.log(result);// { title: 'Chevrolet Corvette', color: 'red' } { title: 'Maserati Granturismo', color: 'red' },
