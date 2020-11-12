#Desafio
Você terá o desafio de escrever um programa que leia um valor inteiro N (1 < N < 1000). Este N é a quantidade de linhas de saída que serão apresentadas na execução do programa.

#Entrada
O arquivo de entrada contém um número inteiro positivo N.

#Saída
Imprima a saída conforme o exemplo fornecido.

 
Exemplo de Entrada	|Exemplo de Saída
---|---
5 |1 1 1<br>2 4 8<br>3 9 27<br>4 16 64<br>5 25 125


```javascript
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
let N = parseInt(gets());
for(let i =1; i <= N;i++){
    console.log(i+" "+i**2+" "+i**3)
}
```