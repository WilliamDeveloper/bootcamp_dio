#Desafio
No jogo, O Mundo de Oz, Pedro Bento � o l�der do 
Tribunal, por causa disso ele � uma das pessoas mais 
importantes do mundo, no jogo. Al�m disso, Pedro Bento
 possui um grande tesouro, o qual possui diversos tipos 
 de j�ias.

Pedro Bento est� muito curioso para saber quantos tipos 
de j�ias diferentes seu tesouro possui.

Sabendo que voc� � o melhor programador do mundo, Pedro Bento 
te contratou para verificar quantos tipos de j�ias distintas 
ele tem em seu tesouro.

#Entrada
A entrada consiste de v�rias linhas e cada uma cont�m uma 
string que descreve uma das j�ias de Pedro Bento. Essa string 
� composta apenas dos caracteres '(' e ')', a soma do tamanho 
de todas as string n�o excede 106.

#Sa�da
Imprima quantos tipos de j�ias distintas Pedro Bento possui.

 
Exemplo de Entrada	| Exemplo de Sa�da
---|---
((<br>))<br>((<br>))<br>(|3

```javascript

let entrada = gets();
let joias = [];

while (entrada) {
  joias.push(entrada);
  entrada = gets();
}

//  unicas vai receber tamanho(.length) da nova array retornada com filter na array joias
const unicas = joias.filter((joia, index, arr) => index === arr.indexOf(joia)).length;

console.log(unicas);

```