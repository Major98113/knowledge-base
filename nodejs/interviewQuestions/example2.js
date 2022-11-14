function getPromise(){
    return new Promise(function( resolve, reject ){
      setTimeout( () => {
        resolve( 6 );
      }, 2000 );
    });
  }
  
  const new1 = getPromise();
  const new2 = getPromise();
  const new3 = getPromise();
  
  
  new1.then( res =>  console.log( "Result 1: ", res ) ); //6
  new2.then( res =>  console.log( "Result 2: ", res ) ); //6
  
  setTimeout( () => {
    new1.then( res =>  console.log( "Result 1: ", res ) ); //6
    new2.then( res =>  console.log( "Result 2: ", res ) ); //6
    new3.then( res =>  console.log( "Result 2: ", res ) ); //6
  }, 4000 );
  