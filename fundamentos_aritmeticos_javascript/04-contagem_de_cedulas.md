#Desafio
Fa�a a leitura de um valor inteiro. Em seguida, calcule o menor n�mero de notas poss�veis (c�dulas) onde o valor pode ser decomposto. As notas que voc� deve considerar s�o de 100, 50, 20, 10, 5, 2 e 1. Na sequ�ncia mostre o valor lido e a rela��o de notas necess�rias.

#Entrada
Voc� receber� um valor inteiro N (0 < N < 1000000).

#Sa�da
Exiba o valor lido e a quantidade m�nima de notas de cada tipo necess�rias, seguindo o exemplo de sa�da abaixo. Ap�s cada linha deve ser imprimido o fim de linha.

 
Exemplo de Entrada	| Exemplo de Sa�da
---|---
576 | 576 <br> 5 nota(s) de R$ 100,00 <br>1 nota(s) de R$ 50,00 <br>1 nota(s) de R$ 20,00 <br>0 nota(s) de R$ 10,00<br>1 nota(s) de R$ 5,00<br>0 nota(s) de R$ 2,00<br>1 nota(s) de R$ 1,00<br>
11257 | 11257 <br> 112 nota(s) de R$ 100,00 <br> 1 nota(s) de R$ 50,00<br> 0 nota(s) de R$ 20,00<br> 0 nota(s) de R$ 10,00<br> 1 nota(s) de R$ 5,00<br> 1 nota(s) de R$ 2,00<br> 0 nota(s) de R$ 1,00<br>
503 | 503 <br> 5 nota(s) de R$ 100,00<br> 0 nota(s) de R$ 50,00<br> 0 nota(s) de R$ 20,00<br> 0 nota(s) de R$ 10,00<br> 0 nota(s) de R$ 5,00<br> 1 nota(s) de R$ 2,00<br> 1 nota(s) de R$ 1,00

```
let line = gets().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);

let total = 0;
total = A + B;
console.log("X = " + total);
``` 