const myText = String('hello sadasda');

console.log(myText.__proto__.split === String.prototype.split); // true
console.log( myText.constructor === String); // true

