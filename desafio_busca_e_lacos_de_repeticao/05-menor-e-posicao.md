#Desafio
Desenvolva um código que leia um valor E. Este E será o tamanho de um vetor X[E]. A seguir, leia cada um dos valores de X, encontre o menor elemento deste vetor e a sua posição dentro do vetor, mostrando esta informação.

#Entrada
A primeira linha de entrada contem um único inteiro E (1 < E < 1000), indicando o número de elementos que deverão ser lidos em seguida para o vetor X[E] de inteiros. A segunda linha contém cada um dos E valores, separados por um espaço.

#Saída
A primeira linha apresenta a mensagem “Menor valor:” seguida de um espaço e do menor valor lido na entrada. A segunda linha apresenta a mensagem “Posicao:” seguido de um espaço e da posição do vetor na qual se encontra o menor valor lido, lembrando que o vetor inicia na posição zero.

 
Exemplo de Entrada	| Exemplo de Saída
---|---
10<br>1 2 3 4 -5 6 7 8 9 10 | Menor valor: -5<br> Posicao: 4

````javascript

let quantidade = parseInt(gets())
let entrada = gets().split(' ')

for(let i =0; i < entrada.length; i ++){
    entrada[i] = parseInt(entrada[i])
}

let menor_valor;
let posicao;


for(let i = 0 ; i < quantidade; i++) {
  if (i == 0 ){
      menor_valor = entrada[i]
      posicao = i
  }
  
  if(entrada[i] < menor_valor){
      menor_valor = entrada[i]
      posicao = i
  }
}

console.log('Menor valor: '+menor_valor);
console.log('Posicao: '+posicao);

````