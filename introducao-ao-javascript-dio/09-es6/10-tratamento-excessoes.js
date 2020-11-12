class CustomEerror extends Error{
  constructor({message,data}){
    super(message)
    this.data = data
  }
}

try{
  console.log('executando funcionalidade')
  
  // const myError = new Error('deu erro')
  const myError = new CustomEerror({
    message: 'custom message',
    data: {
      type: 'server erro'
    }
  })
  throw myError;

}catch(erro){
  console.log('vai ser em caso de erro ',erro)
}finally{
  console.log('vai ser exibido sempre')
}
