#Desafio
Nas férias de Dezembro, várias escolas se organizam e levam seus alunos para um acampamento de férias por uma semana. Nestes acampamentos os alunos são divididos em cabanas coletivos por gênero e idade, sempre com um adulto que, além de dormir com o grupo no cabana, também são responsáveis por criar e executar várias atividades, como por exemplo jogos, excursões, Gincanas Noturnas, etc.

No primeiro dia foi realizada uma gincana em que a atividade constituia em agrupar os alunos em um círculo (organizado no sentido anti-horário) do qual seriam retiradas uma a uma até que sobrasse apenas um aluno, que seria o vencedor.

No momento em que entra no círculo, cada aluno recebe uma pequena ficha que contém um valor de 1 a 500. Depois que o círculo é formado, conta-se, iniciando no aluno que está ao lado da primeira que entrou no círculo, o número correspondente à ficha que o primeiro detém. O aluno onde o número contado cair, deve ser retirado do grupo, e a contagem inicia novamente segundo a ficha do aluno que acabou de ser eliminado. Para ficar mais interessante, quando o valor que consta na ficha é par, a contagem é feita no sentido horário e quando o valor que consta na ficha é ímpar, a contagem é feita no sentido anti-horário.

Desenvolva um programa para que no próximo evento o responsável pela brincadeira saiba previamente qual criança irá ser a vencedora de cada grupo, com base nas informações fornecidas.

#Entrada
A entrada contém vários casos de teste. A primeira linha de cada caso de teste contém um inteiro N (1 ≤ N ≤ 100), indicando a quantidade de alunos que farão parte de cada círculo. Em seguida, as N linhas de cada caso de teste conterão duas informações, o Nome e o Valor (1 ≤ Valor ≤ 500) que consta na ficha de cada aluno, separados por um espaço, na ordem de entrada na formação do círculo inicial.

OBS: O Nome de cada aluno não deverá ultrapassar 30 caracteres e contém apenas letras maiúsculas e minúsculas, sem acentos, e o caractere “_”. O final da entrada é indicado pelo número zero.

#Saída
Para cada caso de teste, deve-se apresentar a mensagem Vencedor(a): xxxxxx, com um espaço após o sinal ":" indicando qual é o aluno do grupo que venceu a brincadeira.

 
Exemplo de Entrada	| Exemplo de Saída
---|---
3<br>Fernanda 7<br>Fernando 9<br>Gustavo 11<br>5<br>Maria 7<br>Pedro 9<br>Joao_Vitor 5<br>Isabel 12<br>Laura 8<br>3<br>Maria 4<br>Pedro 3<br>Joao 2<br>0<br>|Vencedor(a): Fernanda<br>Vencedor(a): Pedro<br>Vencedor(a): Pedro<br>



````javascript

var joga = true;
var numbers = [];
var names = [];
var x;
var veio;
var novo;

while (joga == true) { // termina quando a linha de entrada for '0'
  let kids = gets(); // captura a 1a linha de entrada
  if (kids != 0) {
    for (i=0; i<kids; i++) { // loop para cada grupo
      let input = gets();
      let pos = input.indexOf(" ");
      names[i] = input.slice(0,pos); // array com os nomes
      numbers[i] = Number(input.slice(pos+1)); // array com os números
    }
    
    for (i=0; i<kids-1; i++) { // loop com o número de crianças - 1
    
      let n = numbers.length; // tem que declarar o n porque o length vai mudando
      
      // ações só para a 1a jogada
      if (i == 0) {
        // define a contagem
        veio = numbers[0];
        // se for maior que o length, calcula o resto, para facilitar
        if (veio >= n) {
          x = veio % n;
        }
        else {
          x = veio;
        }
        // se o número for par, já tem que inverter a ordem e mudar o x
        if (veio % 2 == 0) {
            numbers.reverse();
            names.reverse();
            if (x == 0) {
              x = n - 1;
            }
            else {
              x = x - 1;
            }
        }
      }
      // ações a partir da 2a rodada
      else {
        // define a nova contagem
        veio = novo;
        // se for maior que o length, calcula o resto, para facilitar
        if (veio >= n) {
          x = (veio % n) - 1;
          if (x < 0) x = n - 1;
        }
        else {
          x = veio - 1;
        }
      }
      
      // ações gerais
      novo = numbers[x];
      
      if ((veio + novo) % 2 == 0) { // par/par ou impar/impar mantém a ordem
        if (x == 0) {
          names.shift();
          numbers.shift();
        }
        else if (x == n - 1) {
          names.pop();
          numbers.pop();
        }
        else { // Retira o index x e reestrutura as listas
          let numA = numbers.slice(0,x);
          let numB = numbers.slice(x+1);
          numbers = numB.concat(numA);
          
          let namA = names.slice(0,x);
          let namB = names.slice(x+1);
          names = namB.concat(namA);
        }
      }
      else { // par/impar || impar/par
        if (x == 0) {
          names.shift();
          numbers.shift();
          names.reverse();
          numbers.reverse();
        }
        else if (x == names.length -1) {
          names.pop();
          numbers.pop();
          names.reverse();
          numbers.reverse();
        }
        else {
          let numA = numbers.slice(0,x);
          numA.reverse();
          let numB = numbers.slice(x+1);
          numB.reverse();
          numbers = numA.concat(numB);
          
          let namA = names.slice(0,x);
          namA.reverse();
          let namB = names.slice(x+1);
          namB.reverse();
          names = namA.concat(namB);
        }
      }
    }
    console.log(names);
    // names = [];
    // numbers = [];
  }
  else {
    joga = false;
  }
}


````