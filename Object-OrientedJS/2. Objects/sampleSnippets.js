function test(){
    console.log("testing");
}
console.log("test function toString : ", test.toString());

let userInfo = {
    name: "pratik lavhale",
    say: function sayMyName(who){
        console.log(who + " is calling " + " My name is : " + this.name);
        return 0;
    }
}

console.log(userInfo.say('rutvik'));
let testObj = {name : "rutvik"};
userInfo.say.call(testObj, "cooler wala");
userInfo.say.apply(testObj, ["cooler wala"]);