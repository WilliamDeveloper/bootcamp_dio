#Desafio
Para ajudar a calcular as notas referentes �s duas avalia��es dos alunos, 
uma professora pediu para que voc� desenvolva um programa que calcule 
e imprima a m�dia semestral. 

Fa�a com que o algoritmo s� aceite notas v�lidas 
(uma nota v�lida deve pertencer ao intervalo [0,10]). 
Cada nota deve ser validada separadamente.

#Entrada
A entrada cont�m v�rios valores reais, positivos ou negativos. 
O programa deve ser encerrado quando forem lidas duas notas v�lidas.

#Sa�da
Se uma nota inv�lida  for lida, deve ser impressa a mensagem "nota invalida".

Quando duas notas v�lidas forem lidas, 
deve ser impressa a mensagem "media = " seguido do valor do c�lculo. 

O valor deve ser apresentado com duas casas ap�s o ponto decimal.

 
Exemplo de Entrada	|Exemplo de Sa�da
---|---
-3.5<br>3.5<br>11.0<br>10.0|nota invalida<br>nota invalida<br>media = 6.75

```javascript

lista_notas = []
while (true){
    let valor_digitado = parseFloat(gets())
    if(valor_digitado >= 0 && valor_digitado <=10){
        lista_notas.push(valor_digitado)
        
        if(lista_notas.length === 2){
            let media = lista_notas.reduce((acum, nota) => acum += nota, 0) / lista_notas.length;
            console.log('media = '+media.toFixed(2))
            break;
        }
    }else{
        console.log('nota invalida')
    }
} 

```