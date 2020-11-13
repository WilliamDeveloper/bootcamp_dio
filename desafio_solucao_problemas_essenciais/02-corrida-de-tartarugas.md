#Desafio
A corrida de tartarugas é um esporte que cresceu muito nos últimos anos, 
fazendo com que vários competidores se dediquem a capturar tartarugas rápidas,
 e treina-las para faturar milhões em corridas pelo mundo. 
 
 Porém a tarefa de capturar tartarugas não é uma tarefa muito fácil, 
 pois quase todos esses répteis são bem lentos. 
 
 Cada tartaruga é classificada em um nível dependendo de sua velocidade:

Nível 1: Se a velocidade é menor que 10 cm/h .

Nível 2: Se a velocidade é maior ou igual a 10 cm/h e menor que 20 cm/h .

Nível 3: Se a velocidade é maior ou igual a 20 cm/h .

Sua tarefa é identificar qual o nível de velocidade da tartaruga 
mais veloz de um grupo.

#Entrada
A entrada consiste de múltiplos casos de teste, 
e cada um consiste em duas linhas: 

A primeira linha contém um inteiro L (1 <= L <= 500) 
representando o número de tartarugas do grupo, 
e a segunda linha contém L inteiros Vi (1 <= Vi <= 50) 
representando as velocidades de cada tartaruga do grupo.

#Saída
Para cada caso de teste, imprima uma única linha indicando 
o nível de velocidade da tartaruga mais veloz do grupo.

 
Exemplo de Entrada	|Exemplo de Saída
---|---
10<br>10 10 10 10 15 18 20 15 11 10<br>10<br>1 5 2 9 5 5 8 4 4 3<br>10<br>19 9 1 4 5 8 6 11 9 7|3<br>1<br>2


```javascript
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados


    

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

let L1 = parseInt(gets());
let Vi1 = gets().split(" ");

let L2 = parseInt(gets());
let Vi2 = gets().split(" ");

let L3 = parseInt(gets());
let Vi3 = gets().split(" ");

let lista_tartaruga_rapida = []

for(let i = 0; i < L1 ; i++) {
  if(i == 0){
      lista_tartaruga_rapida[0] = parseInt(Vi1[i]);
  }
  
  if(parseInt(Vi1[i]) > lista_tartaruga_rapida[0]){
      lista_tartaruga_rapida[0] = parseInt(Vi1[i])
  }  
}

for(let i = 0; i < L2 ; i++) {
  if(i == 0){
      lista_tartaruga_rapida[1] = parseInt(Vi2[i]);
  }
  
  if(parseInt(Vi2[i]) > lista_tartaruga_rapida[1]){
      lista_tartaruga_rapida[1] = parseInt(Vi2[i])
  }  
}

for(let i = 0; i < L3 ; i++) {
  if(i == 0){
      lista_tartaruga_rapida[2] = parseInt(Vi3[i]);
  }
  
  if(parseInt(Vi[i]) > lista_tartaruga_rapida[2]){
      lista_tartaruga_rapida[2] = parseInt(Vi3[i])
  }  
}

for(let i = 0; i < lista_tartaruga_rapida.length ; i++) {
  console.log(getNivelTartarugaFrom(lista_tartaruga_rapida[i]))
}


```