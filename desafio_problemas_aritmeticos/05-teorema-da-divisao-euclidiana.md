#Desafio
Você recebeu desafio de desenvolver um programa que calcule 

o quociente e o resto da divisão de dois números inteiros. 

Não se esqueça que o quociente  e o resto da divisão 

de um inteiro **a** por um inteiro não-nulo **b** 

são respectivamente os únicos inteiros q e r tais que:

0 <= r < |b|

Se r < 0: 

r = r - |b|

a = b x q + r

q = ( a - r ) / b

Caso você não saiba, o teorema que garante a existência
 
 e a unicidade dos inteiros **q** e **r** 

é conhecido como 

**Teorema da Divisão Euclidiana** ou **Algoritmo da Divisão**.

**  |b| (Módulo / Valor absoluto): É o valor representado de forma positiva;

#Entrada
A entrada é composta por dois números inteiros a e b (-1.000 <= a, b < 1.000).

#Saída
Imprima o quociente **q** seguido pelo resto **r** da divisão 

de **a** por **b**, considerando as regras apresentadas a cima.

 
Exemplos de Entrada |	Exemplos de Saída
---|---
7 3|2 1
7 -3|-2 1
-7 -3|3 2




```javascript
let line = gets().split(" ");
let numero = parseInt(line[0]);
let divisor = parseInt(line[1]);


let numero_a = numero;
let divisor_b = divisor;

let resultado_q = parseInt(numero_a/divisor_b)
let resto_r = numero_a % divisor_b

if(resto_r < 0){
    resto_r = resto_r - divisor_b
    
    numero_a = divisor_b * resultado_q + resto_r

    resultado_q = ( numero_a - resto_r ) / divisor_b

}

let resposta = resultado_q+' '+resto_r

console.log(resposta);
```