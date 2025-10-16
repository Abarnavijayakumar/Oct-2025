// hoisting using let 

console.log(x)
let x = 5; 
//❌ not wrk bcz before initialization it can't wrk also const
// in let occurs reffernceErrror in const occurs syntax error

//const is also hoisted and kept in memory.

// But difference:
// You must give value immediately when declaring.
// Cannot reassign later.
//JS won’t even run — because const needs value at the time of declaration.