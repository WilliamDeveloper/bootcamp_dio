// funciona no browser
fetch('https://viacep.com.br/ws/01001000/json/')
.then( data => {
  console.log(data);
})
.catch( erro => {
  console.log(erro)
})

//----------------------------- 
fetch('https://raw.githubusercontent.com/WilliamDeveloper/bootcamp_dio/main/introducao-ao-javascript-dio/09-es6/data.json')
.then( resonseStream => {
  resonseStream.json().then( data =>{
    console.log(data);
  })  
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