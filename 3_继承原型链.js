function Parent( ) {
    this.name = 'parent2';
    this.play = [ 1, 2, 3 ]
}

function Child( ) {
    this.type = 'child2';
}
  
// 指定prototype
Child.prototype = new Parent( );

const c1 = new Child( );
const c2 = new Child( );

// 问题：各实例使用了同一个原型对象
c1.play.push( 4 );
console.log( c2.play )
