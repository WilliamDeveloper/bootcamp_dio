var lista_1 = [1,2,3,4,5,6,7,8,9];



//somente itera sobre a lista
lista_1.forEach( (value,index, lista_iterada) => {
    console.log(`${index} : ${value} ${lista_iterada}`);
});



// itera sobre os elementos da lista gerando um novo
var lista_2 = lista_1.map( value => value *2)
console.log(lista_2);


var lista_1 = [1,2,3,4,5,6,[7,8,9]];
var lista_2 = lista_1.flat(); // [1, 2, 3, 4, 5, 6, 7, 8, 9]






//usando iterator
var lista_1 = [1,2,3,4,5,6,7,8,9];
var lista_1_iterator = lista_1.keys();

lista_1_iterator.next()// { value : 0 , done : false }
lista_1_iterator.next()// { value : 1 , done : false }
lista_1_iterator.next()// { value : 2 , done : false }
lista_1_iterator.next()// { value : 3 , done : true }


// find retorna o valor do primeiro item que satisfaca a condicao
var lista_1 = [1,2,3,4,5,6,7,8,9];
var first_number_greater_than_5 = lista_1.find( value =>  value > 5);
console.log(first_number_greater_than_5)


// find retorna o valor do primeiro item que satisfaca a condicao
var lista_1 = [1,2,3,4,5,6,7,8,9];
var first_index_greater_than_5 = lista_1.findIndex( value =>  value > 5);
console.log(first_index_greater_than_5)