// and logico &&
var a = true && true;  // true
var a = false && true;  // false

// ou logicos ||
var a = false || true;  // true
var a = false || false;  // false


// not logico !
var n1 = !true; //false
var n2 = !false; //true
var n3 = !"gato"; //false
var n4 = !"gato"; //false

//cast double negation

var n5 = !!"gato"; //true, se tiver valor e nao for vazio eh true

var name2;
resposta_bool = !!name2;
if(name2){   }

var name3="tem valor";
resposta_bool = !!name3;
if(name3){  }