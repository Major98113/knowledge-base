const fs = require('fs');
const path = require('path');

console.log("START");

setTimeout( () => console.log("Timeout 1"), 0 );
setImmediate( () => console.log("Immidiate 1") );

fs.readFile( path.resolve('./test.txt'), ( err, file ) => {
    setTimeout( () => console.log("Timeout 2"), 0 );
    setImmediate( () => console.log("Immidiate 2") );
    process.nextTick( () => console.log("Next Tick 1") );
    console.log( file.toString() );
});

Promise.resolve()
    .then( () => {
        console.log("Promise 1");
        process.nextTick( () => console.log("Next Tick 2") );
    })
    .then( () => {
        console.log("Promise 2");
        process.nextTick( () => console.log("Next Tick 3") );
    });

process.nextTick( () => console.log("Next Tick 4") );
setTimeout( () => console.log("Timeout 3"), 0 );

console.log("END");

//START
//END
//Next Tick 4
//Promise 1
//Promise 2
//Next Tick 2
//Next Tick 3
//Timeout 1
//Timeout 3
//Immidiate 1
//Hello from JS!
//Next Tick 1
//Immidiate 2
//Timeout 2

/*
Phases of NODE.JS event loop:
1) process.nextTick - called first + after each phase of tick between each one, as example ( timers and callbacks , ... )
2) Promises - called secondary + after each phase of tick between each one, as example ( timers and callbacks , ... )
3) Timers
4) I/O callbacks
5) Incoming I/O requests
6) Check phase ( setImmidiate )
6) Close callbacks - socket.on('close', ...)
*/
