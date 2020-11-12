const assert = require('assert')
const Math = require('../src/math.js')
const expect = require('chai').expect;

let value =0 ;
describe('Math class', function () {

   //hooks
   beforeEach(function(){
      console.log('beforeEach')
      value = 0;
   })


   //teste
   it('Soma 2 numeros sucesso', function (done) {
      const math = new Math();
      math.sum(5,5, (value)=>{
         expect(value).to.equal(10);         
         done();
      })
   })

   it('esse teste vai ficar como pendente para ser feito');

   it.skip('esse teste vai escapar');

   it.only('vai executar somente esse teste', function(){
      expect(5).to.equal(5)
      //assert.equal(5,5);
   });

   it.only('multiplicacao de 2 numeros', function(){
      const math = new Math();
      const resultado = math.multiply(5,5)
      assert.equal(resultado,25)
      expect(resultado).to.equal(25)
   });

})