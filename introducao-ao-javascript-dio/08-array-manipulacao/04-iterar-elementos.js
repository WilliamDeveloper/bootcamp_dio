var lista_1 = [1,2,3,4,5,6,7,8,9];



//somente itera sobre a lista
lista_1.forEach( (value,index, lista_iterada) => {
    console.log(`${index} : ${value} ${lista_iterada}`);
});



// itera sobre os elementos da lista gerando um novo
var lista_2 = lista_1.map( value => value *2)
console.log(lista_2);