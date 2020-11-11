//generators

function* hello(){
  console.log('Hello');
  yield;// se nao botar valor retorna undefinied
  console.log(valorExterno)

  console.log('from');
  var valorExterno = yield 2;// se nao botar valor retorna undefinied
  console.log(valorExterno)

  console.log('function');
  var valorExterno = yield 3;
  console.log(valorExterno)// valor passado por parametro no .NEXT
}

var iterador = hello()
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next('terminou'))
console.log(iterador.next('terminou'))

for (let valor of iterador ){
  console.log(valor)
}

//-------------------------------------

function* naturalNumbers(){
  let number = 0;
  while(true){
    yield number;
    number++
  }
}

var iterator = naturalNumbers();

console.log()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

//-------------------------------------
var obj = {
  values: [1,2,3,4,5],
  name: 'william',
  *[Symbol.iterator](){
    for(var i=0; i< this.values.length;i++){
      yield this.values[i]
    }

  }
}

console.log('obj')
var it = obj[Symbol.iterator]()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

for (let value of obj){
  console.log(value)
}

// biblioca "co", no react tem o "redux saga"