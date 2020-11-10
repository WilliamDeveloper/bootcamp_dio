# Desafio
Crie um programa que leia 6 valores. 

Voc� poder� receber valores negativos e/ou positivos como entrada, devendo desconsiderar os valores nulos. 

Em seguida, apresente a quantidade de valores positivos digitados.

# Entrada
Voc� receber� seis valores, negativos e/ou positivos.

# Sa�da
Exiba uma mensagem dizendo quantos valores positivos foram lidos assim como � exibido abaixo no exemplo de sa�da. N�o esque�a da mensagem "valores positivos" ao final.

 
Exemplo de Entrada	| Exemplo de Sa�da
---|---
7<br> -5 <br> 6 <br> -3.4 <br> 4.6 <br> 12 | 4 valores positivos


```
let lista = []
let cont_positivo = 0;

for(var i = 0; i < 6; i++){
    let valor = parseInt(gets())
    lista.push(valor);
    
    if(valor > 0){
        cont_positivo ++;
    }
}

console.log(cont_positivo + " valores positivos");

```
