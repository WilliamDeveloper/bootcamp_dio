//lista
var lista_1 = [1,2,3,4,5,6,7,8,9];
var lista =[]
for(var i =0; i< lista_1.length; i++){
    if(lista_1.indexOf( lista_1[i] === i)){
        lista.push(lista_1[i]);
    }
}
// filter - devolve um array novo com todos item que passaram na funcao de teste logico
var lista_1 = [1,2,3,4,5,6,7,8,9];
var lista = lista_1.filter( function (elemento, index, array) {
   return lista_1.indexOf(elemento) === index;
});
