#Desafio
Voc� ter� o desafio de escrever um algoritmo que 
leia 2 n�meros 
e imprima o resultado da divis�o do primeiro pelo segundo. 

Caso n�o for poss�vel mostre a mensagem ?divisao impossivel? para os valores em quest�o.

#Entrada
A entrada cont�m um n�mero inteiro N. Este N ser� a quantidade de pares de valores inteiros (X e Y) que ser�o lidos em seguida.

#Sa�da
Para cada caso mostre o resultado da divis�o com um d�gito ap�s o ponto decimal, ou ?divisao impossivel? caso n�o seja poss�vel efetuar o c�lculo.

 
Exemplo de Entrada |	Exemplo de Sa�da
---|---
3<br>3 -2 <br> -8 0 <br> 0 8 | -1.5 <br> divisao impossivel<br>0.0



```javascript
let limit = parseInt(gets());
for (let i = 0; i < limit; i++) {
    let line = gets().split(" ");
    let X = parseInt(line[0]);
    let Y = parseInt(line[1]);
    if (Y == 0) {
        console.log("divisao impossivel");
    } else {
        let divisao = parseFloat(X / Y).toFixed(1); // Digite aqui o calculo da divisao
        console.log(divisao);
    }
}
```