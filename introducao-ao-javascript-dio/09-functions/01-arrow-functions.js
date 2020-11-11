// funcoes de primeira classe de
// podem se passados por parametros para outras funcoes
var sum = function(a,b){
  return a +b
}

console.log(sum(2,3))

//-----------------------------------
var sum = (a,b) => a + b;

console.log(sum(5,3))

//-----------------------------------
var sum = (a,b) => {
  var x = 10;
  return a + b
};

console.log(sum(5,4))


//-----------------------------------
var sum = a => console.log(a);

sum('coco')

//-----------------------------------

var sum = () => ({
  nome: 'william',
  idade: 18
});

console.log(sum())

//-----------------------------------
var obj = {
  nome: 'william',
  idade: 18
}

var sum = ({nome, idade}) => `${nome} ${idade}`;
var sum = ({nome, idade}) => (`${nome} ${idade}`);

console.log(sum(obj))


//-----------------------------------

function Car(){
  this.porta = '4'
}

console.log(new Car())