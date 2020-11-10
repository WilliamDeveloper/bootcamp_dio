#Desafio
Rubens quer calcular e mostrar a quantidade de litros de combust�vel gastos em uma viagem de carro, sendo que seu carro faz 12 KM/L. Como ele n�o sabe fazer um programa que o auxilie nessa miss�o, ele te pede ajuda. Para efetuar o c�lculo, deve-se fornecer o tempo gasto em horas na viagem e a velocidade m�dia durante a mesma em km/h. Assim, voc� conseguir� passar para Rubens qual a dist�ncia percorrida e, em seguida, calcular quantos litros ser�o necess�rios para a viagem que ele quer fazer. Mostre o valor com 3 casas decimais ap�s o ponto.

#Entrada
O arquivo de entrada cont�m dois inteiros. O primeiro � o tempo gasto na viagem em horas e o segundo � a velocidade m�dia durante a mesma em km/h.

#Sa�da
Imprima a quantidade de litros necess�ria para realizar a viagem, com tr�s d�gitos ap�s o ponto decimal

 
Exemplo de Entrada	|Exemplo de Sa�da
---|---
10 85|70.833
22 67|122.833


```javascript
let line = gets().split(" ");
let tempo_em_horas = parseInt(line[0]);
let velocidade_media = parseInt(line[1]);

let calculo = parseFloat(H / P).toFixed(3);
console.log(calculo);
```