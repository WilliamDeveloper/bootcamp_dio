const assert = require('assert')
const Math = require('../src/math.js')
const expect = require('chai').expect;
const sinon = require('sinon');

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

      
      //assert.equal(resultado,25)
      expect(resultado).to.equal(25)
   });

   it.only('testando se objeto tem propriedade', function(){
      const obj = {
         name: 'William Pacheco'
      }

      expect(obj).to.have.property('name');
   })

   it.only('testando se objeto tem propriedade com valor', function(){
      const obj = {
         name: 'William Pacheco'
      }

      expect(obj).to.have.property('name').equal('William Pacheco');
   })

   it.only('comparando dois objetos', function(){
      const obj1 = {
         name: 'William Pacheco'
      }
      const obj2 = {
         name: 'William Pacheco'
      }

      expect(obj1).to.deep.equal(obj2);
   })

   it.only('teste com mock ',function(){
      const req = {};
      // const res = {
      //    load: sinon.spy()
      // };
      const res = {
         load: function(){
            console.log('Called');
         }
      };

      sinon.stub(res, 'load').returns('xpto');

      const math = new Math();
      math.printSum(req,res,5,5)

      expect(res.load.calledOnce).to.be.true;
      expect(res.load.args[0][0]).to.equal('index');
      expect(res.load.args[0][1]).to.equal(10);

   })


})