// funciona no browser

//----------------------------- 
fetch('http://127.0.0.1:5500/09-es6/data.json')
.then( resonseStream =>  {
  console.log('resonseStream', resonseStream.status, resonseStream)
  if(resonseStream.status ===200){
    resonseStream.json()
  }else{
    throw new Error('retornou um codigo diferente de 200 => ', resonseStream.status)
  }

  

}
).then(data =>{
  console.log(data)
})
.catch( erro => {
  console.log(erro)
})
//----------------------------- 

fetch('https://viacep.com.br/ws/01001000/json/')
.then( data => {
  console.log(data);
})
.catch( erro => {
  console.log(erro)
})

//----------------------------- 
fetch('https://raw.githubusercontent.com/WilliamDeveloper/bootcamp_dio/main/introducao-ao-javascript-dio/09-es6/data.json')
.then( resonseStream =>  resonseStream.json()
).then(data =>{
  console.log(data)
})
.catch( erro => {
  console.log(erro)
})

//----------------------------- 
fetch('/data.json')
.then( data => {
  console.log(data);
})
.catch( erro => {
  console.log(erro)
})