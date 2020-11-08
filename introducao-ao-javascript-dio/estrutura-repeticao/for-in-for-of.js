let array2 = [3,5,7];
array2.foo = "hello";

for(let i in array2){
    console.log(i) ; // "0","1","2","foo"
}

for(let j of array2){
    console.log(j) ; // "3","5","7",undefinied
}