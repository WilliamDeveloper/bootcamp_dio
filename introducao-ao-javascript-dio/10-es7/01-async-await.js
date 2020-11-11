//es7 - async / await
var simpleFunc1 = async () => {
  return 123;
}

var simpleFunc2 = async function() {
  throw new Error('oh no')
  return 456;
}

simpleFunc1().then( data => {
  console.log(data)
})
simpleFunc2().then( data => {
  console.log(data)
}).catch( error => {
  console.log(error)
})

//--------------------------------------
var asyncTimer = () => new Promise( (resolve, reject) =>{
  setTimeout( () => { 
    resolve('4567897897')
  } , 1000)
})

var simpleFunc3 = async () => {
  var data = await asyncTimer();
  console.log(data)
  var dataJSON = await fetch('http://127.0.0.1:5500/09-es6/data.json')
  .then( resStream => resStream.json())

  return dataJSON;
}


simpleFunc3()
.then( data => {
  console.log(data)
}).catch( error => {
  console.log(error)
})
