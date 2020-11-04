/* aula 1*/
//alert('meu primeiro js');

//comentario de 1 linha

/*
comentario
de mais de uma linha
*/

var nome= "william pacheco";
var idade =29;
console.log('nome: '+nome+' idade: '+idade);

var a= 10;
var b= 11;
console.log('a: '+a+' b: '+b+' = '+(a+b));

var a= "10";
var b= "11";
console.log('a: '+a+' b: '+b+' = '+(a+b));

var frase = "Japão é o melhor time do mundo!";
fraseModificada = frase.replace('Japão','Brasil');
console.log(fraseModificada);
console.log(fraseModificada.toUpperCase());
console.log(fraseModificada.toLowerCase());

var a = 7;
var b = 7;
var resultado = a * b;
console.log(resultado);


/* aula 2 */
console.log('');
var lista = ["Maça", "Pera", "Laranja"];

lista.push("uva"); // adicionando elemento na lista
console.log(lista);

lista.pop(); // removendo um elemento da lista
console.log(lista);
console.log('tamanho-lista: '+lista.length);

console.log("lista-invertida: ",lista.reverse());

console.log("lista: ",lista);
console.log("itens-lista-separado-por-virgula: ",lista.toString());
console.log("itens-lista-separado-por-virgula: ",lista.toString());

item0 = lista[0]
console.log("elemento-zero-da-lista: ",item0);
console.log("primeiro-character-item0: ", item0[0]);

stringSeparadaPorJoin = lista.join(" - ");
console.log("string-separada-por-traco: ",stringSeparadaPorJoin);

var dicionario = {
  nome: "maçã",
  cor: "vermelha",
};
console.log("dicionario: ",dicionario);
console.log("dicionario.nome: ",dicionario.nome);
console.log("dicionario.cor: ",dicionario.cor);

var lista_dicionario = [
  { nome: "maçã", cor: "vermelha" },
  { nome: "uva", cor: "roxa" },
]

console.log('');
console.log(lista_dicionario)

console.log('');
var dicionario_atual = lista_dicionario[0]
console.log(dicionario_atual.nome)
console.log(dicionario_atual.cor)

console.log('');
var dicionario_atual = lista_dicionario[1]
console.log(dicionario_atual.nome)
console.log(dicionario_atual.cor)

/* aula 3 */

var idade = 19;
if(idade > 18){
  var mensagem = 'maior de idade';
  console.log(mensagem);
  // alert(mensagem);
}

var idade = 17;
if(idade < 18){
  var mensagem = 'menor de idade';
  console.log(mensagem);  
}

var idade = 18;
if(idade == 18){
  var mensagem = 'igual a 18';
  console.log(mensagem);  
}

var idade = 18;
if(idade >= 18){
  var mensagem = 'maior igual';
  console.log(mensagem);  
}


var idade = 18;
if(idade <= 18){
  var mensagem = 'menor igual';
  console.log(mensagem);  
}

var idade = 20;
if(idade < 18){
  var mensagem = 'menor de idade';
  console.log(mensagem);  
}else{
  console.log('caiu no else');
}

// var valorDigitado = prompt("qual sua idade");
// console.log("o usuario digitou",valorDigitado);

var contador = 0;
while(contador < 5){
  console.log('contador: ',contador);
  // contador = contador + 1;
  contador++;
}

console.log('');
for(var contador=0; contador < 5; contador++){
  console.log('contador: ',contador);
}

console.log('');
var valor_data = new Date();
console.log('valor_data: ',valor_data);
console.log('dia: ',valor_data.getDay());
console.log('mes: ',valor_data.getMonth()+1);
console.log('ano: ',valor_data.getFullYear());

console.log('');
console.log('hora: ',valor_data.getHours());
console.log('minito: ',valor_data.getMinutes());
console.log('segundos: ',valor_data.getSeconds());
console.log('minisegundos: ',valor_data.getMilliseconds());
