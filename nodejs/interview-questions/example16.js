function likes( names = [] ) {
    const [ firstPerson, secondPerson, ...otherPersons ] = names; 
    
    if( !firstPerson ) return `no one likes this`;
    if( !secondPerson ) return `${ firstPerson } likes this`;
    if( !otherPersons?.length ) return `${ firstPerson } and ${ secondPerson } like this`;
    
    if( otherPersons?.length === 1 ) return `${ firstPerson }, ${ secondPerson } and ${ otherPersons[0] } like this`;
    
    return `${ firstPerson }, ${ secondPerson } and ${ otherPersons.length } others like this`;
}


console.log( likes([])); //'no one likes this'
console.log( likes(['Peter'])); //'Peter likes this'
console.log( likes(['Jacob', 'Alex'])); //'Jacob and Alex like this'
console.log( likes(['Max', 'John', 'Mark'])); //'Max, John and Mark like this'
console.log( likes(['Alex', 'Jacob', 'Mark', 'Max'])); //'Alex, Jacob and 2 others like this'