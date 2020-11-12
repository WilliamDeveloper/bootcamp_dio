debugger;

console.log('teste');
console.warn('warn');
console.error('error');
console.trace('trace');

console.group('grupo_1');
console.log('teste');
console.log('teste');
console.log('teste');
console.groupEnd('grupo_1')

console.time('log time');
setTimeout( () => {
  console.timeEnd('log time')
},200)

var lista = [1,2,3,4,5,6,7]
console.table(lista)

console.assert(1 ===2, 'ops erro')

console.log('%c styled log', 'color: blue; font-size: 40px;')