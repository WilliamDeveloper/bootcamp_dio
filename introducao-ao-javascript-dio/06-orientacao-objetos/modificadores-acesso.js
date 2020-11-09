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

