function palindrome() {
    const str = '0000000';
    for (let i = 0, j = str.length - 1; i <= parseInt(str.length / 2); i++) {
        if (i === j)
            console.log('its a palindrome');
        if (str[i] === str[j])
            j--;
        else {
            console.log(`its not a palindrome`);
            break;
        }
    }
}

function excludeObjects() {
    let obj = {
        numStr: 'one',
        arr: [1, 2, 3, 4, 5],
        name: {
            firstName: 'pratik',
            lastName: 'lavhale'
        }
    }
    delete obj.name.firstName;
    console.log(obj);
}
// excludeObjects();

function includeObjects() {
    let obj1 = {
        numStr: 'one',
        arr: [1, 2, 3, 4, 5],
        name: {
            firstName: 'pratik',
            lastName: 'lavhale'
        }
    }
    let obj2 = {
        numStr: 'two',
        arr: [1, 2, 3, 4, 5],
        nameBrother: {
            firstName: 'rutvik',
            lastName: 'lavhale'
        }
    }

    let combineTwoObj = { ...obj1, ...obj2 };
    console.log('combined objects are : ', combineTwoObj);
}
// includeObjects();

function includeObjectsInArr() {
    let obj1 = {
        numStr: 'one',
        arr: [1, 2, 3, 4, 5],
        name: {
            firstName: 'pratik',
            lastName: 'lavhale'
        }
    }
    let obj2 = {
        numStr: 'two',
        arr: [1, 2, 3, 4, 5],
        name: {
            firstName: 'rutvik',
            lastName: 'lavhale'
        }
    }
    let arr = [obj1, obj2];
    console.log('both objects in array :', arr);
}
// includeObjectsInArr();

function findProperty() {
    let obj = {
        numStr: 'two',
        arr: [1, 2, 3, 4, 5],
        name: {
            firstName: 'rutvik',
            lastName: 'lavhale',
            address: {
                pin: 444603,
                loc: 'gadge nagar near radha krishna temple'
            }
        }
    }
    let str = 'name.address.loc';
    let sepratedProperties = str.split('.');
    let object = {};
    for (let i = 0; i < sepratedProperties.length; i++) {
        if (i === 0)
            object = obj[sepratedProperties[i]];
        else
            object = object[sepratedProperties[i]];
    }
    console.log('value of obj is :', object);
}
// findProperty();

function shallowAndDeepCopy() {
    let obj = {
        numStr: 'two',
        arr: [1, 2, 3, 4, 5],
        name: {
            firstName: 'rutvik',
            lastName: 'lavhale',
            address: {
                pin: 444603,
                loc: 'gadge nagar near radha krishna temple',
                function: () => {
                    console.log('testing');
                }
            }
        }
    }
    console.log('keys of array objects are : ', Object.keys(obj.arr));
    // let obj2 = {};
    // for(){

    // }
    console.log(typeof obj.numStr);
    console.log(typeof obj.arr);
    console.log(typeof obj.name);
}
// shallowAndDeepCopy();
