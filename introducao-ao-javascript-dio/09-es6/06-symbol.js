//symbols

var uniqueId1  = Symbol('hello')
var uniqueId2  = Symbol('hello')
console.log(uniqueId1,uniqueId2,uniqueId1 === uniqueId2)

var obj ={
  [uniqueId1] : 'hello',
  nome:'william',
  idade:18
}
console.log(obj)
console.log(Object.keys(obj))
console.log(Object.getOwnPropertySymbols(obj))

// well known symbols
Symbol.iterator
Symbol.split
Symbol.toStringTag

//metapropriedades ao objeto
var obj={
  [Symbol.iterator](){
    
  }
};

var arr = [1,2,3,4,5]
var ite=arr[Symbol.iterator]()
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())

//com while
var arr = [1,2,3,4,5]
var ite=arr[Symbol.iterator]()
while(true){
  let valor = ite.next()
  console.log(valor)
  if(valor.done){
    break;
  }

}

// com for of
var arr = [1,2,3,4,5]
for (let value of arr){
  console.log(value)
}

var str = 'digital inovation one'
for (let value of str){
  console.log(value)
}

//---------------------

var obj = {
  values: [1,2,3,4,5],
  name: 'william',
  [Symbol.iterator](){
    let i = -1
    
    return{      
      next: () => {
        i++;
        return {
          value: this.values[i],
          done: i >= this.values.length
        }
      }
    }

  }
}


var it = obj[Symbol.iterator]()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

for (let value of obj){
  console.log(value)
}

var array2 = [...obj]
console.log(array2)