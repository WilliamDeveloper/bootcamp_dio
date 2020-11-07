#Desafio
Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido e a relação de notas necessárias.

#Entrada
Você receberá um valor inteiro N (0 < N < 1000000).

#Saída
Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o exemplo de saída abaixo. Após cada linha deve ser imprimido o fim de linha.

 
Exemplo de Entrada	| Exemplo de Saída
---|---
576 | 576 <br> 5 nota(s) de R$ 100,00 <br>1 nota(s) de R$ 50,00 <br>1 nota(s) de R$ 20,00 <br>0 nota(s) de R$ 10,00<br>1 nota(s) de R$ 5,00<br>0 nota(s) de R$ 2,00<br>1 nota(s) de R$ 1,00<br>
11257 | 11257 <br> 112 nota(s) de R$ 100,00 <br> 1 nota(s) de R$ 50,00<br> 0 nota(s) de R$ 20,00<br> 0 nota(s) de R$ 10,00<br> 1 nota(s) de R$ 5,00<br> 1 nota(s) de R$ 2,00<br> 0 nota(s) de R$ 1,00<br>
503 | 503 <br> 5 nota(s) de R$ 100,00<br> 0 nota(s) de R$ 50,00<br> 0 nota(s) de R$ 20,00<br> 0 nota(s) de R$ 10,00<br> 0 nota(s) de R$ 5,00<br> 1 nota(s) de R$ 2,00<br> 1 nota(s) de R$ 1,00

```


let cont_nota100 = 0;
let cont_nota50 = 0;
let cont_nota20 = 0;
let cont_nota10 = 0;
let cont_nota5 = 0;
let cont_nota2 = 0;
let cont_nota1 = 0;

let valor_saque = parseInt(gets());

let valor_restante = valor_saque;

cont_nota100 = parseInt(valor_restante / 100);
valor_restante = valor_restante % 100;

cont_nota50 = parseInt(valor_restante / 50);
valor_restante = valor_restante % 50;

cont_nota20 = parseInt(valor_restante / 20);
valor_restante = valor_restante % 20;

cont_nota10 = parseInt(valor_restante / 10);
valor_restante = valor_restante % 10;

cont_nota5 = parseInt(valor_restante / 5);
valor_restante = valor_restante % 5;

cont_nota2 = parseInt(valor_restante / 2);
valor_restante = valor_restante % 2;

cont_nota1 = parseInt(valor_restante / 1);
valor_restante = valor_restante % 1;

console.log(valor_saque);
console.log(cont_nota100+' nota(s) de R$ 100,00');
console.log(cont_nota50+' nota(s) de R$ 50,00');
console.log(cont_nota20+' nota(s) de R$ 20,00');
console.log(cont_nota10+' nota(s) de R$ 10,00');
console.log(cont_nota5+' nota(s) de R$ 5,00');
console.log(cont_nota2+' nota(s) de R$ 2,00');
console.log(cont_nota1+' nota(s) de R$ 1,00');

``` 