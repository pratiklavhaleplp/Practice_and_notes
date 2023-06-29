// primitive data types
let num = 10;
let bool = true;
let str = 'pratik';
// console.log(pratik);// undefined
let testing = null;

console.log(`testing : ${testing} typeof : ${typeof testing}`);

console.log(`num : ${num} typeof : ${typeof num}`);

console.log(`bool : ${bool} typeof : ${typeof bool}`);

console.log(`str : ${str} typeof : ${typeof str}`);

const arr = [10, 20, 30];
delete arr[0];
console.log('afte deleting values are: ', arr);

let obj = {
    name: 'praitk',
    age: '27'
};

delete obj.age;
console.log(obj);

const forInLop = [10, 20, 30, 40, 50];
for (let ele in forInLop) {
    console.log(forInLop[ele]);
}

const objTest = {
    name: 'pratik',
    age: 27,
    address: 'gadge nagar',
    phno: 9405909873
}

for (ele in objTest) {
    console.log(objTest[ele]);
}


function argumentTesting() {
    console.log(arguments);
}

argumentTesting(10, 20, 30, 'pratik', 'gadge nagar');

function restTesting(a, b, ...remaining) {
    console.log(`a is : ${a}`);
    console.log(`b is : ${a}`);
    console.log(`remaining is : ${remaining}`);
    let remainigEle = { ...remaining };
    console.log(`remaining elements are : ${remainigEle[0]}, ${remainigEle[1]} and ${remainigEle[2]} `);
}

restTesting(10, 20, 30, 'pratik', 'gadge nagar');

let floatingToInt = 3.124;
let numberVal = parseInt(floatingToInt);
console.log(`value of converted number from float is : ${numberVal}`);

function scopeTesting(a) {
    return function (b) {
        let c = 30; let d = 40;
        console.log(a, b, c, d);
        return { a, b, c, d }
    }
}

let closureObj = scopeTesting(10)(20);
console.log('printing inner values of a function');
for (ele in closureObj) {
    console.log(closureObj[ele]);
}

function userInfo() {
    this.name = 'pratik',
        this.address = 'gadge nagar'
}

let pratik = new userInfo();
console.log(`object pratik looks like : ${pratik.name} ${pratik.address}`);

function factoryFun(name, address) {
    return {
        name: name,
        address: address
    }
}

let objNew = factoryFun('pratik', 'Gadge Nagar');
Object.assign(objNew, { phoneNo: 9405909873 });

for (ele in objNew) {
    console.log(objNew[ele]);
};

// call, apply, bind
let callApplyObj = {
    name: 'pratik',
    test: function (additionalInfo) {
        console.log(`name is ${this.name} and additional info is : ${additionalInfo}`);
    }
};

let newObject = {
    name: 'rutvik'
}
callApplyObj.test.call(newObject, 'age is 27');
callApplyObj.test.apply(newObject, ['age is 24']);

// prototypes
