const array = [0,1,2,3,4,5];

array.forEach( item =>{
    if(item % 2 ===  0) {
        console.log('numero par');

    }else if(item % 3 == 0){
     console.log('divisivel por 3');

    }else{
        console.log('nenhum dos dois')
    }
});

