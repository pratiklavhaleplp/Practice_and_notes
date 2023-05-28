let arr = [];

arr.constructor.prototype.getDetails = function () {
    console.log(`I'll be with you always`);
}

let arr2 = [10, 12];
arr2.getDetails();

Array.prototype.getDetailsNew = function(){
    console.log(`from the new Array constructor function..`);
}

arr.getDetailsNew();
arr2.getDetailsNew();