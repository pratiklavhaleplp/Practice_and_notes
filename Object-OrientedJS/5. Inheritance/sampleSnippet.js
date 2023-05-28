function Shape(id){
    this.id = id;
};
Shape.prototype.name = 'Shape';
Shape.prototype.toString = function(){
    return `from shape ${this.id}`;
};

function Traingle(){
    
    // apply will call the shape constructor.
    Shape.apply(this, arguments);
};
Traingle.prototype.name = 'Traingle';

let t = new Traingle(101);
console.log(t.name);
console.log(t.id);