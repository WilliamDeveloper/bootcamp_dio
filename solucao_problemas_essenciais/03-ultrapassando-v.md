#Desafio
Como um bom desenvolvedor, voc� precisa fazer um programa que leia dois ingeiros: R e V (devem ser lidos tantos valores para V quantos necess�rios, at� que seja digitado um valor maior do que R para ele). Conte quantos n�meros inteiros devem ser somados em sequ�ncia (considerando o R nesta soma) para que a soma ultrapasse a V o m�nimo poss�vel. Escreva o valor final da contagem.

A entrada pode conter, por exemplo, os valores 21 21 15 30. Neste caso, � ent�o assumido o valor 21 para R enquanto os valores 21 e 15 devem ser desconsiderados pois s�o menores ou iguais a R. Como o valor 30 est� dentro da especifica��o (maior do que R) ele ser� v�lido e ent�o deve-se processar os c�lculos para apresentar na sa�da o valor 2, pois � a quantidade de valores somados para se produzir um valor maior do que 30 (21 + 22).

#Entrada
A entrada cont�m somente valores inteiros, um por linha, podendo ser positivos ou negativos. O primeiro valor da entrada ser� o valor de R. A pr�xima linha da entrada ir� conter V. Se V n�o atender a especifica��o do problema, ele dever� ser lido novamente, tantas vezes quantas forem necess�rias.

#Sa�da
Imprima uma linha com um n�mero inteiro que representa a quantidade de n�meros inteiros que devem ser somadas, de acordo com a especifica��o acima.

 
Exemplo de Entrada	|Exemplo de Sa�da
---|---
3<br>1<br>20|5


```javascript
// a fun��o gets � implementada dentro do sistema para ler as entradas(inputs) dos dados
let R = parseInt(gets());
let V = parseInt(gets());
```