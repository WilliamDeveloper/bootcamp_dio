var lista_1 = [1,2,3];
var lista_2 = [7,8,9];

var lista_3 = lista_1.concat(lista_2);



// fatiando array para criar um novo
var lista_4 = [1,2,3,4,5,6,7,8,9];
var lista_5 = lista_4.slice(0,2); // 1, 2
var lista_5 = lista_4.slice(2,5); // 3, 4, 5
var lista_5 = lista_4.slice(-3); // 7, 8, 9
var lista_5 = lista_4.slice(7); // 8, 9



var lista_5 = [1,2,3,4,5,6,7,8,9];
lista_5.splice(2); // remove todos elementos apartir da posicao 2
console.log(lista_5);



var lista_5 = [1,2,3,4,5,6,7,8,9];

// posicao que quero adicionar, quantos vai remover, item q vai ser adicionado
lista_5.splice(0,0,'teste'); // adicionou elemento no array
console.log(lista_5);