#Desafio
Voc� recebeu desafio de desenvolver um programa que calcule o quociente e o resto da divis�o de dois n�meros inteiros. N�o se esque�a que o quociente e o resto da divis�o de um inteiro a por um inteiro n�o-nulo b s�o respectivamente os �nicos inteiros q e r tais que:

0 ? r < |b|

Se r < 0: r = r - |b|

a = b � q + r

q = ( a - r ) / b

Caso voc� n�o saiba, o teorema que garante a exist�ncia e a unicidade dos inteiros q e r � conhecido como ?Teorema da Divis�o Euclidiana? ou ?Algoritmo da Divis�o?.

**  |b| (M�dulo / Valor absoluto): � o valor representado de forma positiva;

#Entrada
A entrada � composta por dois n�meros inteiros a e b (-1.000 ? a, b < 1.000).

#Sa�da
Imprima o quociente q seguido pelo resto r da divis�o de a por b, considerando as regras apresentadas a cima.

 
Exemplos de Entrada |	Exemplos de Sa�da
---|---
7 3|2 1
7 -3|-2 1
-7 -3|3 2