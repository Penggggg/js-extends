function Parent( ) {
    this.name = 'parent';
}

// prototype上的无法被继承
Parent.prototype = {
    say: function( ) { }
}

function Child ( ) {
    Parent.call( this );
    this.type = 'child'
}
console.log( new Child );