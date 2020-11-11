function sum(){
  var value = 0

  for (var i =0; i < arguments.length;i++){
    value += arguments[i];
  }

  return value
}

//ou com rest operator
function sum(...args){
  return args.reduce(
    (acum, value) => acum +value
    , 0
  )
}

console.log(sum(4,5,5,5,5,5,5))

//-----------------------

var sum = (a,b,...rest) => {
  console.log(a,b,rest)
};
console.log(sum(4,5,5,5,5,5,5))