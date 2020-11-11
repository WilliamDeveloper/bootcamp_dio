//generators

function* hello(){
  console.log('Hello');
  yield;

  console.log('from');
  yield;

  console.log('function');
  yield;
}

var iterador = hello()
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())

for (let valor of iterador ){
  console.log(valor)
}