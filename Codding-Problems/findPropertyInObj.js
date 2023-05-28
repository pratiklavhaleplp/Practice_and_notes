let userInfo = {
    name: 'pratik',
    age: 27,
    address: {
        line: 'palash',
        moreDetails: {
            pin: 444603
        }
    },
    phone: 8421852775
}
let str = 'address.moreDetails.pin';
let findPropertyInObject = (object, propertyToFind) => {
    let propArray = propertyToFind.split('.');
    let tempObj = object;
    for(let i = 0; i < propArray.length; i++){
        if(propArray[i] in tempObj)
            tempObj = tempObj[propArray[i]];
        else
            return `property not found in given object`;
    }
    return tempObj;
};

console.log(findPropertyInObject(userInfo, str));
