// EventEmitter existe somente no node . Ele é Semelhante ao EventTarget do browser

var EventEmitter = require('events');
var emitter = new EventEmitter();

emitter.on('User logged', data =>{
  console.log(data)
})

emitter.emit('User logged', {user:'William Pacheco'})

//---------------------------------------

class Users extends EventEmitter{
  userLogged(data){
    this.emit('User logged',  data)
  }
}
var user = {user:'William Pacheco'}
var users = new Users();
users.on('User logged', data =>{
  console.log(data)
})

users.once('apenas_uma_Vez', data =>{
  console.log(data)
})

users.userLogged(user)