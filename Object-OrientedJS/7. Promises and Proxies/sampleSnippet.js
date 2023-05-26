let ageValidator = {
    set: function(obj, prop, value){
        if(prop === 'age'){
            if(!Number.isInteger(value))
                throw new TypeError('The age is not a number');
            if(value > 100)
                throw new RangeError('age is out of range');
            obj[prop] = value;  
        }
    }
};

let p = new Proxy({}, ageValidator);
p.age = 100;
console.log(`age is : ${p.age}`);
console.log(`object is : ${p}`);
p.age = 'thirty two';
p.age = 150;