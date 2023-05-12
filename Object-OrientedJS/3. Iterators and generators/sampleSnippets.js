function iter(array){
    let nextId = 0;
    return{
        next: function(){
            if(nextId < array.length){
                return {value : array[nextId++], done : false};
            }else{
                return {done : true}
            }
        }
    }
}

let it = iter(['one', 'two', 'three', 'four', 'five', 'six']);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());