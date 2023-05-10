let userInfo ={
    name: {
        firstName: "pratik",
        lastName: "lavhale"
    },
    address: "gadge nagar near radhakrishna temple amravati.",
    age: "27"
    }

    let {address : userAddress, age: userAge} = userInfo;
    console.log('address is : ', userAddress);
    console.log('age is : ', userAge);