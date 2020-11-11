var arr = ['apple','banana','orange']
var apple = arr[0]
var banana = arr[1]
var orange = arr[2]

//destructuring assignment

var [apple,banana,orange, [tomate]] = ['Apple','banana','orange',['tomate']]

console.log(
  tomate
)

//----------------------------------------------------------------
var obj = {
  name: 'william',
  idade:18
}

var {name,idade} = obj
console.log(name,idade)

