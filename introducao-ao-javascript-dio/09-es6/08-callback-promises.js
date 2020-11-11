//promises
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