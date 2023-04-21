function testing(){
    alert(a); // reference error
    let a = 10; 
}
testing();

// VARIABLE HOISTING: ONLY THE DECLARATION IS HOISTED I.E, THE CODE AFTER DEFINING A VARIABLE WILL BE 
// ABLE TO GET THE VALUES BUT BEFORE THAT YOU WILL GET UNDEFINED AS THAT VARIABLE IS HOISTED AT THE 
// TOP OF THE FUNCTION.

function testing(){
    alert(a); // undefined THIS IS CALED AS VARIABLE HOISTING. HAPPENS ONLY WHEN WE ARE USING VAR 
    var a = 10;
}
testing();

var a = 'global';
function testing(){
    alert(a); // undefined as a defined in the function has more priority than global varible.
    var a = 'local';
    alert(a);// local here global variable get over written by function variable.
}
testing();

var a = 'global';
function testing(){
    alert(a); // global as we have defined "a" globally
    var b = 'local';
    alert(b); // local
}
testing();
