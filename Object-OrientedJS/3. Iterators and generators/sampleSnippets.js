const set = new Set();
set.add('one');
console.log(set.has('one')); 
console.log(set.delete('one')); 
console.log(set.has('one'));

const set2 = new Set(['one', 'two', 'two', 'three']);
console.log(set2);