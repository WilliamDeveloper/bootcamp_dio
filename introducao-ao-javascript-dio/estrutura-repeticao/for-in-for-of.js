let array2 = [3,5,7];
array2.foo = "hello";

//mostra todos index ou propriedades do array
for(let i in array2){
    console.log(i) ; // "0","1","2","foo"
}

//mostra valores de propriedades numeradas
for(let j of array2){
    console.log(j) ; // "3","5","7",undefinied
}