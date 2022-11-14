// const user = {
//     getName: () => {
//          console.log(this.userName);
//     },
//     userName: 'Alex'
// };
  
// user.getName.userName = 'Nick';
// user.getName(); // undefined
 
// const { getName } = user;
// getName(); // undefined

///

//const a = [1,5,87,34,23,6];

//console.log( Math.max.call(null, ...a) );

//console.log( Math.max.apply(null, a) );


// Promise.reject('a')
//     .catch(p => p + 'b') 
//     .catch(p => p + 'с')// X
//     .then(p => p + 'd') // abd
//     .finally(p => p + 'e') // 
//     .then(p => console.log(p))
 
// console.log('f');

//f
//abd
//undefinede

///


// for (var i = 0; i < 10; i++) {
//   try{
//     throw i
//   }
//   catch( err ){
//      setTimeout(function() {
//         console.log(err);
//     }, 1000);
//   }
// }


///

// getPromise1().then(function () {
//     return getPromise2();
// }).then(finalHandler);
// // 2
// getPromise1().then(function () {
//     getPromise2();
// }).then(finalHandler);
//    // 3
// getPromise1()
//     .then(getPromise2())
//     .then(finalHandler);
//    // 4
// getPromise1()
//     .then(getPromise2)
//     .then(finalHandler);
    
    
/*

 */


import React, { useState, useEffect } from 'react';
const userEndpoint = 'https://api.github.com/users'
// e.g.: fetch(`${userEndpoint}/defunkt`)
 
const getUserInfo = async ( username = '' ) => {
  const response = await fetch(`${ userEndpoint }/${ username }`);
  return await response.json();
} 
 
const Github = ({ username, changeUser, children }) => {  
  const [ user, useUser ] = useState( username );
  
  useEffect( async () => useUser( await getUserInfo( username ) ), [ username ]);
  
  return children( user );
}
 
const Loading = () => {
  return 'Loading...'
}
 
const User = ({ info }) => {
  return <pre>
          {JSON.stringify(info, null, 2)}
        </pre>
}
 
const App = ({username, money}) => {
  
  return <><Github username={username} changeUser={useUser} >
    {
      (user) => user === null ? <Loading /> : <User info={user} />
    }
  </Github>{money}</>
  
}
 
export default App;


// 
DOM 

VDOM 

BL ( ref )




///

import React, { useState } from "react";
 
export default function App() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => setInputValue(e.target.value)
  const handleSubmitButton = () => alert(inputValue);
  const inputOneRef = React.createRef();
  
  return (
    <form className="App">
      <input ref={ inputOneRef } onChange/>
      <input type="submit" value="submit" onClick={handleSubmitButton} />
    </form>
  );
}


