function Parent( ) {
    this.name = 'parent5';
    this.play = [1, 2, 3];
}

function Child( ) {
    Parent.call(this);
    this.type = 'child5';
}

Child.prototype = Object.create( Parent.prototype );
// 重新指定原型的constructor
Child.prototype.constructor = Child;

// 完美继承：寄生组合继承
const child = new Child( );
console.log( child.constructor )