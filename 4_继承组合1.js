function Parent( ) {
    this.name = 'parent';
    this.play = [ 1, 2, 3 ];
}

function Child( ) {
    // 组合1: 各实例不会使用了同一个原型对象
    Parent.call( this );
    this.type = 'child';
}

// 组合2: Parent的prototype可被Child继承
Child.prototype = new Parent( );
  
var s3 = new Child( );
var s4 = new Child( );
  
// 原型对象不同，不存在相同引用情况
s3.play.push( 4 );
console.log( s3.play, s4.play);