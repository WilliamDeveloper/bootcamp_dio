const myText = String('hello sadasda');

console.log(myText.__proto__.split === String.prototype.split); // true
console.log( myText.constructor === String); // true

'use strict';

class Animal{
    constructor(qtdePatas){
        this.qtdePatas =4;
    }

    movimentar() {}
}

class Cachorro extends Animal{
    constructor(morde){
        super(4);
        this.morde=morde;
    }

    latir(){
        console.log('au! au!')
    }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);


//--------------------
'use strict';

function Animal() { }

Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function () { } ;

function Cachorro(morde) {
    this.qtdePatas = 4;
    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function () {
     console.log('au! au!')
};

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);