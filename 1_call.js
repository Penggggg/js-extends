
function Fruit( ) { }
Fruit.prototype = {
    color: 'red',
    say: function( ) { console.log( this.color )}
}

const fruit = new Fruit( );
fruit.say( )

const banana = {
    color: 'yellow'
}

// call的使用
const x = fruit.say.call( banana )