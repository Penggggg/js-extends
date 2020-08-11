function Parent( ) {
    this.name = 'parent4';
    this.play = [1, 2, 3];
}

function Child( ) {
    Parent.call( this );
    this.type = 'child4';
}

// 组合1: 不是通过 Child.prototype = new Parent( )
Child.prototype = Parent.prototype;
const child = new Child( );

// 问题：child.constructor 显示 Parent，而不是 Child
console.log( child.constructor )