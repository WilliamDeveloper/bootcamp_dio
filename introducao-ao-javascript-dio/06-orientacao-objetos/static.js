
'use strict';

function Person() { }

Person.walk = function () {
    console.log('walk');
}
Person.walk();


///--------------

'use strict';

class Person{
    static walk(){
        console.log('walk');
    }
}

Person.walk()

