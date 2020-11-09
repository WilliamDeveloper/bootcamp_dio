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





// cria a lista de todos elementos que satisfaça a condicao
var lista_1 = [1,2,3,4,5,6,7,8,9];
var lista_maiores_q_5 = lista_1.filter( value =>  value > 5);
console.log(lista_maiores_q_5)

// retorna o primeiro index que o valor pode ser encontrado no array
var lista_1 = [1,2,3,4,5,6,7,8,9];
var firstIndexOfItem = lista_1.indexOf(4);
console.log(firstIndexOfItem);


// retorna o ultimo index que o valor pode ser encontrado no array
var lista_1 = [1,2,3,4,5,6,7,8,9];
var lastIndexOfItem = lista_1.lastIndexOf(4);
console.log(lastIndexOfItem);



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


// find retorna o index do primeiro item que satisfaca a condicao
var lista_1 = [1,2,3,4,5,6,7,8,9];
var first_index_greater_than_5 = lista_1.findIndex( value =>  value > 5);
console.log(first_index_greater_than_5)




//--------------------------------------
// checagem

// existe o valor no array
var lista_1 = [1,2,3,4,5,6,7,8,9];
var existe_5_na_lista = lista_1.includes(5);
console.log(existe_5_na_lista) // true


// existe algum item par
var lista_1 = [1,2,3,4,5,6,7,8,9];
var existe_item_par_na_lista = lista_1.some(value => value % 2 === 0);
console.log(existe_item_par_na_lista) // true


//--------------------------------------
// ordenar
var lista_1 = [
    {nome:'will5', age:18},
    {nome:'will2', age:46},
    {nome:'will3', age:35},
    {nome:'will1', age:17},
];
lista_1.sort( (current, next) => current.age - next.age)
console.log(lista_1)

lista_1.reverse();
console.log(lista_1)
