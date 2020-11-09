class Person{
    constructor(name){
        this.name = name;
    }
}

export default Person;

import Person from './models/person'


//-----------


let name = 'default';

function setName(newName) {
    name = newName;
}
function getName() {
    return name;
}

module.exports ={
    getName,
    setName
};


const { getName, setName} = require('./module-teste.js');
console.log(getName());
console.log(setName('william'));
console.log(getName());