// EventEmitter

var EventEmitter = require('events');
var emitter = new EventEmitter();

emitter.on('User logged', data =>{
  console.log(data)
})

emitter.emit('User logged', {user:'William Pacheco'})