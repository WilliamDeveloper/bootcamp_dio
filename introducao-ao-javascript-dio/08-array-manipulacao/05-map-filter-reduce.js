//lista
var lista_1 = [1,2,3,4,5,6,7,8,9];
var lista =[]
for(var i =0; i< lista_1.length; i++){
    if(lista_1.indexOf( lista_1[i] === i)){
        lista.push(lista_1[i]);
    }
}