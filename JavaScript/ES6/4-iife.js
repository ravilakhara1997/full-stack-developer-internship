//immediately Invoked function Expression
(function test(name){
    console.log("I am IIFE function "+name);
})('Ravi');

(()=>console.log("I am IIFE  Arrow Function"))();