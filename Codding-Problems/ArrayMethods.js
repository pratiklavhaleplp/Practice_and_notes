let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [7, 8, 9, 10, 11, 12];

let testarr = arr1.map((value, index, arr) => {
    return value * 2;
});
console.log('testarr : ', testarr);

userObjArr = [
    {
        userName: 'pratik',
        id: 1,
        age: 27
    },
    {
        userName: 'rutvik',
        id: 2,
        age: 24
    },
    {
        userName: 'ankita',
        id: 3,
        age: 29
    }
]

let idObjs = userObjArr.map((value, index) => {
    return {
        id: value.id
    }
});
console.log(idObjs);
idObjs.forEach(element => {
    if (element.id > 1) {
        console.log(element);
    }
});

const filteredArr = userObjArr.filter((value, index, array) => {
    return (value.id > 1)
});
console.log(`filtered array : ${filteredArr}`)
console.log('userObj : ', userObjArr);

// filter will return [] array if nothing is found
// find will return one eleemnt

const findArr = userObjArr.find((value, index, array) => {
    return (value.id > 1)
});
// you will get first element.
console.log('find array: ', findArr);

// slice give you a portion of array it returns you the array.

const slicedArray = userObjArr.slice(0, 2);
console.log('Sliced array is : ', slicedArray);
userObjArr[0].userName = "testing";
console.log('checking sliced after modifying orignal: ', slicedArray);


// splice will modify the orignal array and returns you the deleted items
userObjArr.splice(0, 1);
console.log('removed first element : ', userObjArr);
userObjArr.splice(0, 0, { userName: 'pratik', id: 1 });
console.log('added new element in arr : ', userObjArr);


const sumArr = [1, 2, 3, 4, 5, 6, 7, 8];
const sum = sumArr.reduce((acc, curValu) => acc + curValu, 0);
console.log(sum);