// funciona no browser
fetch('https://viacep.com.br/ws/01001000/json/')
.then( data => {
  console.log(data);
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