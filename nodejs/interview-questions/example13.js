const myPromise = new Promise(( resolve, reject ) => {
    setTimeout( () => resolve("Aga"), 500 );
    reject("Oops");
  });
  
  myPromise.then( data => console.log("Data: ", data ), err => console.log( "Err:", err ) );
  myPromise.then( data => console.log("Data: ", data ), err => console.log( "Err2:", err ) ).then( data => console.log("Data2: ", data ), err => console.log( "Err3:", err ) )
  myPromise.catch( err => console.log( "Err4:", err ) ).then( data => console.log("Data3: ", data );

  