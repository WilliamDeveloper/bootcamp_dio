#Desafio
Para ajudar a calcular as notas referentes às duas avaliações dos alunos, 
uma professora pediu para que você desenvolva um programa que calcule 
e imprima a média semestral. 

Faça com que o algoritmo só aceite notas válidas 
(uma nota válida deve pertencer ao intervalo [0,10]). 
Cada nota deve ser validada separadamente.

#Entrada
A entrada contém vários valores reais, positivos ou negativos. 
O programa deve ser encerrado quando forem lidas duas notas válidas.

#Saída
Se uma nota inválida  for lida, deve ser impressa a mensagem "nota invalida".

Quando duas notas válidas forem lidas, 
deve ser impressa a mensagem "media = " seguido do valor do cálculo. 

O valor deve ser apresentado com duas casas após o ponto decimal.

 
Exemplo de Entrada	|Exemplo de Saída
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