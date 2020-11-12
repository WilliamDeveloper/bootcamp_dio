
 new Promise( (resolve,reject) =>{
  console.log('oi')
  resolve()
})
.then(function(resp1){

})
.catch(function(error1){

})

.then(function(resp2){

})
.catch(function(error2){
  
})

.finally(function(){

})

//----------------------------------------------------------


//visualizar promises
//https://bevacqua.github.io/promisees/

//iife
( async function(){
  console.log('oi')
})()

( function(){
  return new Promise( (resolve,reject) =>{
    console.log('oi')
    resolve()
  })  
})()

//----------------------------------------------------------
//promises
var myPromise7 = () => new Promise( (resolve, reject) =>{
  setTimeout(function() {
    //faz alguma coisa
    resolve('first data');
  }, 1000);
})


var myPromise8 = () => new Promise( (resolve, reject) =>{
  // throw new Error('ocorreu um erro');
  setTimeout(function() {
    //faz alguma coisa
    resolve('second data');
  }, 1000);
})

Promise.race([
  myPromise7(),
  myPromise8()
])
.then( data =>{
  console.log('Promise.race- primeira promise que resolver')
})
.catch( erro => {
  console.log('erro Promise.race')
})
//---------------------------------------------------
var myPromise5 = () => new Promise( (resolve, reject) =>{
  setTimeout(function() {
    //faz alguma coisa
    resolve('first data');
  }, 1000);
})


var myPromise6 = () => new Promise( (resolve, reject) =>{
  // throw new Error('ocorreu um erro');
  setTimeout(function() {
    //faz alguma coisa
    resolve('second data');
  }, 1000);
})

Promise.all([
  myPromise5(),
  myPromise6()
])
.then( (resultado) =>{
  console.log('resultado-primeira-promise',resultado[0])
  console.log('resultado-segunda-promise',resultado[1])
  console.log('todas promisses assincronas foram resolved')
})
.catch( erro =>{
  console.log('deu erro no ',erro)
})
//---------------------------------------------------
var myPromise3 = () => new Promise( (resolve, reject) =>{
  throw new Error('ocorreu um erro');
  setTimeout(function() {
    //faz alguma coisa
    resolve('first data');
  }, 1000);
})


var myPromise4 = () => new Promise( (resolve, reject) =>{
  setTimeout(function() {
    //faz alguma coisa
    resolve('second data');
  }, 1000);
})

console.log('teste')
myPromise3()
.then( data => { 
  console.log(data); 
  return myPromise4(); 
} )
.then( data2 => console.log('data2: ',data2) )
.catch(function(error) {
  console.log('error3 e 4: ',error)
})


//---------------------------------------------------
var myPromise1 = new Promise( (resolve, reject) =>{
  // throw new Error('ocorreu um erro');
  setTimeout(function() {
    //faz alguma coisa
    resolve('first data');
  }, 1000);
})


var myPromise2 = new Promise( (resolve, reject) =>{
  setTimeout(function() {
    //faz alguma coisa
    resolve('second data');
  }, 1000);
})

// myPromise1
//   .then(function(response){
//     console.log('response: ',response)
//   }).catch(function(error) {
//     console.log('error: ',error)
//   })

  console.log('teste')
  myPromise1
  .then( data => { console.log(data); return myPromise2; } )
  .then( data2 => console.log('data2: ',data2) )
  .catch(function(error) {
    console.log('error2: ',error)
  })

// promise - status :
// pending - pendente excecutando
// fullfilled
// rejected


//---------------------------------------------------
//callbacks
function doSomeThing(callback){
  setTimeout(function() {
    //faz alguma coisa
    callback('first data');
  }, 1000);
}

function doOtherThing(callback){
  setTimeout(function() {
    //faz alguma coisa
    callback('second data');
  }, 1000);
}

function doAll(){
  doSomeThing(console.log);
  doOtherThing(console.log);
}

function doAll(){
  //callback hell - callback do capeta
  try{
    doSomeThing(function(data){
      var processedData = data.split(" ")
  
      try{
        doOtherThing(function(data2){
          var processedData2 = data2.split(" ")
    
          try{
            setTimeout(function(){        
              console.log('sas', processedData, processedData2)          
            },1000)  
          }catch(error3){
            //handle error
            console.log('erro: ',error3)
          }          
          
        });  
      }catch(error2){
        //handle error
        console.log('erro: ',error2)
      }
      
    });
  }catch(error){
    //handle error
    console.log('erro: ',error)
  }
  
  
}


doAll()