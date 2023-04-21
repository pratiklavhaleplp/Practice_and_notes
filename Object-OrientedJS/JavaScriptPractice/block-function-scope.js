
//Error
"use strict"
var a = 10;
function testing() {
    a = 40;
    console.log('a is : ', a);
    b;
    console.log('b is : ', b);// Reference Error.
}
testing();

// Error
"use strict"
var a = 10;
function testing() {
    a = 40;
    console.log('a is : ', a);
    b = 30;
    console.log('b is : ', b);// Reference Error.
}
testing();

// No error
var a = 10;
function testing() {
    a = 40;
    console.log('a is : ', a);
    b = 30;
    console.log('b is : ', b);// Reference Error.
}
testing();


// Collision Avoidance
// ========This will lead to infinite loop===============
function foo() {
    function bar(a) {
        i = 3; // changing the `i` in the enclosing scope's // for-loop
        console.log(a + i);
    }
    for (var i = 0; i < 10; i++) {
        bar(i * 2); // oops, inifinite loop ahead!
    }
}
foo();

// =====This will lead to complete the loop as there is no collision to for loop "i" and "i" in bar function========
function foo() {
    function bar(a) {
        i = 3; // changing the `i` in the enclosing scope's // for-loop
        console.log(a + i);
    }
    function testing() {
        for (var i = 0; i < 10; i++) {
            bar(i * 2); // oops, inifinite loop ahead!
        }
    }
    testing();
}
foo();


var MyReallyCoolLibrary =
{
    awesome: "stuff", doSomething: function () {
        // ...
    },
    doAnotherThing: function () {
        // ...
    }
};


var a = 10;
{
    {
        var a = 20;
    }
    console.log(a);
}
console.log(a);
// 20 20

var a = 10;
(function testing(){
    function testing1(){
        var a = 20;
        console.log(a);
    }
    testing1();
    console.log(a);
})();
// 20 10