const assert = require('assert')
const Math = require('../src/math.js')

describre('Math class', function () {
   it('Soma 2 numeros', function () {
      const math = new Math();

      assert.equal(math.sum(5,5),10);

   })

})