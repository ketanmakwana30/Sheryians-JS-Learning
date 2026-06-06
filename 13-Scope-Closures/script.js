if(true){
    let a = 30;                 // block scope
}

function abcd (){       
    let a = 20;                 // Functional scope
    console.log(a);
}

function func(){
    let a = 40;
    function func2(){
        console.log(a);         // Lexical scope
    }
}

let a = 10;                     // Global scope

function xyz (){   
    console.log(a);
}
function pqr(){
    let a = 50;
    xyz();                      // Dynamic scope (it not working in js - js is Lexical scoped)
}
// pqr();


function countforMe () {
    let count = 0;
    return function (){
        if(count < 5){
            count++
            console.log(`Clicked ${count} Times`)
        } else {
            console.error(`LIMIT CROSS , PLEASE TRY AFTER SOME TIME `)
        }
    }
}

let countFunc = countforMe();
// countFunc();
// countFunc();
// countFunc();
// countFunc();
// countFunc();
// countFunc();

let countFunc2 = countforMe();
// countFunc2();                    // This is another value    