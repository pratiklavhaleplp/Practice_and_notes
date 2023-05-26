function userInfo(name){
    this.name = name;
};
let pratik = new userInfo('pratik');
userInfo.prototype.isSporty = true;
console.log(pratik.hasOwnProperty('name'));
console.log(pratik.hasOwnProperty('isSporty'));

