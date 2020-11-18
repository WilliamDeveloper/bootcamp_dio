#Desafio
Crie um programa onde você receberá valores inteiros não negativos como entrada.

Ordene estes valores de acordo com o seguinte critério:

Primeiro os Pares
Depois os Ímpares
Você deve exibir os pares em ordem crescente e na sequência os ímpares em ordem decrescente.

#Entrada
A primeira linha de entrada contém um único inteiro positivo N (1 < N < 10000) Este é o número de linhas de entrada que vem logo a seguir. As próximas N linhas terão, cada uma delas, um valor inteiro não negativo.

#Saída
Exiba todos os valores lidos na entrada segundo a ordem apresentada acima. Cada número deve ser impresso em uma linha, conforme exemplo de saída abaixo.

 
Exemplo de Entrada	|Exemplo de Saída
---|---
10<br>4<br>32<br>34<br>543<br>3456<br>654<br>567<br>87<br>6789<br>98<br> | 4<br>32<br>34<br>98<br>654<br>3456<br>6789<br>567<br>543<br>87<br>


````
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
//import java.util.StringTokenizer;

public class JavaApplication1 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));        
        //StringTokenizer st = new StringTokenizer(br.readLine()); // Lê a linha de entrada
        //int N = Integer.parseInt(st.nextToken());
        int N = Integer.valueOf(br.readLine());
        //System.out.println(a); // Imprime o dado  
  
        List lista_impar = new ArrayList();
        List lista_par = new ArrayList();
        
        for (int i = 0; i < N; i++) {
            int valor = Integer.valueOf(br.readLine());
            if(valor % 2 == 0){
                lista_par.add(valor);
            }else{
                lista_impar.add(valor);
            } 
        } 
        
        Collections.sort(lista_par);        
        Collections.sort(lista_impar,  Collections.reverseOrder()); 

        for (int i = 0; i < lista_par.size(); i++) {
            System.out.println(lista_par.get(i));
        }
        
        for (int i = 0; i < lista_impar.size(); i++) {
            System.out.println(lista_impar.get(i));
        }
        
        
    }    
}

````