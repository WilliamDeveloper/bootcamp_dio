# Desafio
Voc� deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos valores informados s�o pares, quantos valores informados s�o �mpares, quantos valores informados s�o positivos e quantos valores informados s�o negativos.

# Entrada
Voc� receber� 5 valores inteiros.

# Sa�da
Exiba a mensagem conforme o exemplo de sa�da abaixo, sendo uma mensagem por linha e n�o esquecendo o final de linha ap�s cada uma.

 
Exemplo de Entrada | Exemplo de Sa�da
---|---
-5 <br> 0 <br> -3 <br> -4 <br> 12 |  3 valor(es) par(es) <br> 2 valor(es) impar(es) <br> 1 valor(es) positivo(s) <br> 3 valor(es) negativo(s)


```
let line = gets().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);

let total = 0;
total = A + B;
console.log("X = " + total);
```