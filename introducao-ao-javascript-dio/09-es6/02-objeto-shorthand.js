function m1(){
  console.log('oi');
}

var obj ={
  m1:m1
};
obj.m1();
//ou
var obj ={
 m1
};

obj.m1();

//----------------------------------------------------------------
var obj ={
  m1: function (a,b) {
    return a+b
  }
 }; 

var obj ={
  m1(a,b) {
    return a+b
  }
 };
 
 console.log(obj.m1(4,5));
 //----------------------------------------------------------------
 var prop = 'atributo'
var obj ={
  [prop] : 'prop value'
};

console.log(obj)