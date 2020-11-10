#Desafio
Voc� recebeu desafio de desenvolver um programa que calcule 

o quociente e o resto da divis�o de dois n�meros inteiros. 

N�o se esque�a que o quociente  e o resto da divis�o 

de um inteiro **a** por um inteiro n�o-nulo **b** 

s�o respectivamente os �nicos inteiros q e r tais que:

0 <= r < |b|

Se r < 0: 

r = r - |b|

a = b x q + r

q = ( a - r ) / b

Caso voc� n�o saiba, o teorema que garante a exist�ncia
 
 e a unicidade dos inteiros **q** e **r** 

� conhecido como 

**Teorema da Divis�o Euclidiana** ou **Algoritmo da Divis�o**.

**  |b| (M�dulo / Valor absoluto): � o valor representado de forma positiva;

#Entrada
A entrada � composta por dois n�meros inteiros a e b (-1.000 <= a, b < 1.000).

#Sa�da
Imprima o quociente **q** seguido pelo resto **r** da divis�o 

de **a** por **b**, considerando as regras apresentadas a cima.

 
Exemplos de Entrada |	Exemplos de Sa�da
---|---
7 3|2 1
7 -3|-2 1
-7 -3|3 2

````javascript
let array = [-7,-3]
let a = parseInt(array[0])
let b = parseInt(array[1])
let r = a % b;
let q = (a - r) / b;

r = r - b 
q = ( a - r ) / b 

console.log(q + " " + r);
````


```javascript
let line = gets().split(" ");
let numero = parseInt(line[0]);
let divisor = parseInt(line[1]);


let numero_a = numero;
let divisor_b = divisor;

//console.log(numero_a,' # ',divisor_b)

let quociente_q = parseInt(numero_a/divisor_b)
let resto_r = numero_a % divisor_b

//console.log(quociente_q,' # ',resto_r,' # ', numero_a,' # ', quociente_q)

if(resto_r < 0){
    resto_r = resto_r - divisor_b
    
}

quociente_q =  (numero_a - resto_r)  / divisor_b

//console.log(quociente_q,' # ',resto_r,' # ', numero_a,' # ', quociente_q,' # ', divisor_b)

let resposta = quociente_q+' '+resto_r

console.log(resposta);
```


````javascript
let line = gets().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let q = 0;
let r = 0;
for (resto = 0; resto < Math.abs(B); resto++) {
    quoc = parseInt(((A - resto)/B).toFixed(0));
    if (A === (B * quoc) + resto ) {
      q = quoc;
      r = resto;
    }
}
console.log(q + ' ' +r);
````