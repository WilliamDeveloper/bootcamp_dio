#Desafio
Voc� deve calcular o consumo m�dio de um autom�vel onde ser� informada a dist�ncia total percorrida (em Km) e o total de combust�vel consumido (em litros).

#Entrada
Voc� receber� dois valores: um valor inteiro X com a dist�ncia total percorrida (em Km), e um valor real Y que representa o total de combust�vel consumido, com um d�gito ap�s o ponto decimal.

#Sa�da
Exiba o valor que representa o consumo m�dio do autom�vel (3 casas ap�s a v�rgula), incluindo no final a mensagem "km/l".

 
Exemplo de Entrada	|Exemplo de Sa�da
---|---
500 <BR> 35.0 | 14.286 km/l
2254 <BR> 124.4 | 18.119 km/l
4554 <BR> 464.6 | 9.802 km/l



```
let line = gets().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);

let total = 0;
total = A + B;
console.log("X = " + total);
```