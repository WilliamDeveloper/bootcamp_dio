// strings, arrays, objetos literais e objetos iteraveis

var str = 'digital inovation one';
var arr= [1,2,3,4,54,5]

function logArgs(){
  console.log(arguments)
}

logArgs(...str) ;
logArgs(...arr);

var array2 = arr.concat([3,3,3,3])
logArgs(...array2);

var array3 = [...arr,2,3,3,3,3,33,3,3,8,3,3]
logArgs(...array3);

var arrayClone = [...arr]
logArgs(...arrayClone);

//----------------

var obj = {
  nome: 'william',
  idade: 18
}

var obj2 = {
  ...obj,
  altura: 2
}

console.log(obj2)
