'use strict';

function Person(initialName){
    let name = initialNeme;

    this.getName = function () {
        return name;
    }

    this.setName = function (newName) {
        name = newName;
    }
}

const p = new Person('Guilherme');

p.getName();
p.setName('william');

p.name; // undefinied



//----------------------------------------------

// apartir da versao 12 do node


'use strict';

class Person{
    #name = '';

    constructor(initialName){
        this.#name = initialName;
    }

    setName = function (newName) {
        this.#name = newName;
    }

    getName = function () {
        return this.#name;
    }

}

const p = new Person('Guilherme');

p.getName();
p.setName('william');

p.name; // undefinied