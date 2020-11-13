#Desafio
A corrida de tartarugas � um esporte que cresceu muito nos �ltimos anos, 
fazendo com que v�rios competidores se dediquem a capturar tartarugas r�pidas,
 e treina-las para faturar milh�es em corridas pelo mundo. 
 
 Por�m a tarefa de capturar tartarugas n�o � uma tarefa muito f�cil, 
 pois quase todos esses r�pteis s�o bem lentos. 
 
 Cada tartaruga � classificada em um n�vel dependendo de sua velocidade:

N�vel 1: Se a velocidade � menor que 10 cm/h .

N�vel 2: Se a velocidade � maior ou igual a 10 cm/h e menor que 20 cm/h .

N�vel 3: Se a velocidade � maior ou igual a 20 cm/h .

Sua tarefa � identificar qual o n�vel de velocidade da tartaruga 
mais veloz de um grupo.

#Entrada
A entrada consiste de m�ltiplos casos de teste, 
e cada um consiste em duas linhas: 

A primeira linha cont�m um inteiro L (1 <= L <= 500) 
representando o n�mero de tartarugas do grupo, 
e a segunda linha cont�m L inteiros Vi (1 <= Vi <= 50) 
representando as velocidades de cada tartaruga do grupo.

#Sa�da
Para cada caso de teste, imprima uma �nica linha indicando 
o n�vel de velocidade da tartaruga mais veloz do grupo.

 
Exemplo de Entrada	|Exemplo de Sa�da
---|---
10<br>10 10 10 10 15 18 20 15 11 10<br>10<br>1 5 2 9 5 5 8 4 4 3<br>10<br>19 9 1 4 5 8 6 11 9 7|3<br>1<br>2


```javascript
// a fun��o gets � implementada dentro do sistema para ler as entradas(inputs) dos dados
let L = parseInt(gets());
let Vi = gets().split(" ");

L = 10
Vi = "10 10 10 10 15 18 20 15 11 10".split(" ");

function getNivelTartarugaFrom(velocidade){
    let nivel = 0;
    if(velocidade < 10){
        nivel = 1;
    }else if(velocidade >= 10 && velocidade < 20){
        nivel = 2;
    }else{
        nivel = 3;
    }       
    return nivel;
}

let lista_tartaruga_rapida = []

for(let i = 0; i < L ; i++) {
  if(i == 0){
      lista_tartaruga_rapida[i] = parseInt(Vi[i]);
  }
  
  if(parseInt(Vi[i]) > lista_tartaruga_rapida[i]){
      lista_tartaruga_rapida[i] = parseInt(Vi[i])
  }
  console.log( parseInt(Vi[i]),getNivelTartarugaFrom( parseInt(Vi[i])))
}

for(let i = 0; i < lista_tartaruga_rapida.length ; i++) {
  console.log(getNivelTartarugaFrom(lista_tartaruga_rapida[i]))
}



```