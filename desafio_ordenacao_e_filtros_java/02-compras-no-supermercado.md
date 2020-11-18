#Desafio
Pedro trabalha sempre até tarde todos os dias, com isso tem pouco tempo tempo para as tarefas doméstica. Para economizar tempo ele faz a lista de compras do supermercado em um aplicativo e costuma anotar cada item na mesma hora que percebe a falta dele em casa.

O problema é que o aplicativo não exclui itens duplicados, como Pedro anota o mesmo item mais de uma vez e a lista acaba ficando extensa. Sua tarefa é melhorar o aplicativo de notas desenvolvendo um código que exclua os itens duplicados da lista de compras e que os ordene alfabeticamente.

#Entrada
A primeira linha de entrada contém um inteiro N (N < 100) com a quantidade de casos de teste que vem a seguir, ou melhor, a quantidade de listas de compras para organizar. Cada lista de compra consiste de uma única linha que contém de 1 a 1000 itens ou palavras compostas apenas de letras minúsculas (de 1 a 20 letras), sem acentos e separadas por um espaço.

#Saída
A saída contém N linhas, cada uma representando uma lista de compra, sem os itens repetidos e em ordem alfabética.

 
Exemplo de Entrada	|Exemplo de Saída
---|---
2<br>carne laranja suco picles laranja picles laranja pera laranja pera pera | carne laranja picles suco laranja pera





````java 
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {

    public static void main(String[] args) throws IOException {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            int N = Integer.valueOf(br.readLine());

//            int N = 2;//Integer.valueOf(br.readLine());
        
            List listas_compras = new ArrayList();

            for (int i = 0; i < N; i++) {

                String valor[] = br.readLine().split(" ");
//                String valor[] = "carne laranja suco picles laranja picles".split(" ");//;br.readLine().split(" ");
                ArrayList<String> lista = new ArrayList(Arrays.asList(valor));

                Set<String> listWithoutDuplicates = new LinkedHashSet<String>(lista);
                lista.clear();
                lista.addAll(listWithoutDuplicates);

                Collections.sort(lista);

                listas_compras.add(lista);
            }


            for (int i = 0; i < listas_compras.size(); i++) {

                List<String> vLista = (List) listas_compras.get(i);
                for (int j = 0; j < vLista.size(); j++) {
                    String item = vLista.get(j);
                    String vAddSpace = "";
                    if(j > 0 && j < vLista.size()-1 ){
                        vAddSpace = " ";
                    }else{
                        vAddSpace = " ";
                    }
                    System.out.print(item+vAddSpace);
                }
                System.out.println();

            }
    }
}


````