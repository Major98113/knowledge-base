console.log( process.env.NODE_ENV, process.env.TEST ); //run that programm with next params: NODE_ENV=development TEST=test1 node process_variables_nodejs.js

console.log( process.argv ); //run that programm with next params: node process_variables_nodejs.js a1 a2 a3
/*
Output:
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\......\nodejs_interview_crib\\process\\process_variables_nodejs.js',
  'a1',
  'a2',
  'a3'
]
*/ 
