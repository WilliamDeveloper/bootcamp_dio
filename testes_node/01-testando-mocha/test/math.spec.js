const assert = require('assert')
const Math = require('../src/math.js')

describe('Math class', function () {
   it('Soma 2 numeros', function () {
      const math = new Math();

      assert.equal(math.sum(5,5),10);

   })

})