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
let lista = []
let cont_positivo = 0;
let cont_negativo = 0;
let cont_par = 0;
let cont_impar = 0;

for(var i = 0; i < 5; i++){
    let valor = parseInt(gets())
    lista.push(valor);
    
    if(valor > 0){
        cont_positivo ++;
    }
    
    if(valor < 0){
        cont_negativo ++;
    }
    
    if( valor % 2 == 0){
        cont_par ++;
    }else{
        cont_impar++;
    }
}

console.log(cont_par+' valor(es) par(es)'); 
console.log(cont_impar+' valor(es) impar(es)'); 
console.log(cont_positivo+' valor(es) positivo(s)');
console.log(cont_negativo+' valor(es) negativo(s)');

```