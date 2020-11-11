//promises
var myPromise3 = () => new Promise( (resolve, reject) =>{
  // throw new Error('ocorreu um erro');
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
.then( data => { console.log(data); return myPromise4(); } )
.then( data2 => console.log('data2: ',data2) )
.catch(function(error) {
  console.log('error2: ',error)
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