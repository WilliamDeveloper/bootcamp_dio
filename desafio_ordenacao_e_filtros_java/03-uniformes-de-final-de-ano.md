#Desafio
O professor Girafales organizou a confecção de um uniforme para as turmas da escola para comemorar o final do ano. Após algumas conversas, ficou decidido com os alunos que eles poderiam escolher a cor do uniforme entre branco ou vermelho. Assim sendo, Girafales precisa de sua ajuda para organizar as listas de quem quer o uniforme em cada uma das turmas, relacionando estas camisetas pela cor, tamanho (P, M ou G) e por último pelo nome.

#Entrada
Cada caso de teste inicia com um valor N, (1 ≤ N ≤ 60) inteiro e positivo, que indica a quantidade de uniformes a serem feitas para aquela turma. As próximas N*2 linhas contém informações de cada um dos uniformes (serão duas linhas de informação para cada uniforme). A primeira linha irá conter o nome do estudante e a segunda linha irá conter a cor do uniforme ("branco" ou "vermelho") seguido por um espaço e pelo tamanho do uniforme "P" "M" ou "G". A entrada termina quando o valor de N for igual a zero (0) e esta valor não deverá ser processado.

#Saída
Para cada caso de entrada deverão ser impressas as informações ordenadas pela cor em ordem ascendente, seguido pelos tamanhos em ordem descendente e por último por ordem ascendente de nome, conforme o exemplo abaixo.
 

 
Exemplo de Entrada	|Exemplo de Saída
---|---
9<br>
Maria Jose<br>
branco P<br>
Mangojata Mancuda<br>
vermelho P<br>
Cezar Torres Mo<br>
branco P<br>
Baka Lhau<br>
vermelho P<br>
JuJu Mentina<br>
branco M<br>
Amaro Dinha<br>
vermelho P<br>
Adabi Finho<br>
branco G<br>
Severina Rigudinha<br>
branco G<br>
Carlos Chade Losna<br>
vermelho P<br>
0<br>



````javascript
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;
import java.util.stream.Collectors;

public class UniformeFimdeAno {

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        StringTokenizer st2;

        int quatidadeValores = Integer.parseInt(st.nextToken());

        List<String> nomesBrancosP = new ArrayList<>();
        List<String> nomesBrancosM = new ArrayList<>();
        List<String> nomesBrancosG = new ArrayList<>();
        List<String> nomesVermelhosP = new ArrayList<>();
        List<String> nomesVermelhosM = new ArrayList<>();
        List<String> nomesVermelhosG = new ArrayList<>();
        List<String> cores = new ArrayList<>();
        List<String> tamanhosBrancos = new ArrayList<>();
        List<String> tamanhosVermelhos = new ArrayList<>();
        List<String> listaFinal = new ArrayList<>();

        for (int i = 1; i <= quatidadeValores; i++) {
            String nome = "";
            String cor = "";
            String tamanho = "";
            String palavra;
            int j = 0;
            st = new StringTokenizer(br.readLine());
            st2 = new StringTokenizer(br.readLine());
            while (st.hasMoreTokens()) {
                palavra = st.nextToken();
                if (j == 0) {
                    nome = palavra;
                } else {
                    nome = nome + " " + palavra;
                }
                j++;
            }
            j = 0;
            while (st2.hasMoreTokens()) {
                palavra = st2.nextToken();
                if (j == 0) {
                    cor = palavra;
                } else {
                    tamanho = palavra;
                }
                j++;
            }

            if (cor.equals("branco")) {
                switch (tamanho) {
                    case "P":
                        nomesBrancosP.add(nome);
                        break;
                    case "M":
                        nomesBrancosM.add(nome);
                        break;
                    case "G":
                        nomesBrancosG.add(nome);
                }
                tamanhosBrancos.add(tamanho);
            } else {
                switch (tamanho) {
                    case "P":
                        nomesVermelhosP.add(nome);
                        break;
                    case "M":
                        nomesVermelhosM.add(nome);
                        break;
                    case "G":
                        nomesVermelhosG.add(nome);
                }
                tamanhosVermelhos.add(tamanho);
            }

            cores.add(cor);

        }

        List<String> coresBrancas = cores.stream().filter(result -> result.equals("branco")).collect(Collectors.toList());

        List<String> coresVermelhas = cores.stream().filter(result -> result.equals("vermelho")).collect(Collectors.toList());

        List<String> tamanhosBrancosP = tamanhosBrancos.stream().filter(result -> result.equals("P")).collect(Collectors.toList());

        List<String> tamanhosBrancosM = tamanhosBrancos.stream().filter(result -> result.equals("M")).collect(Collectors.toList());

        List<String> tamanhosBrancosG = tamanhosBrancos.stream().filter(result -> result.equals("G")).collect(Collectors.toList());

        List<String> tamanhosVermelhosP = tamanhosVermelhos.stream().filter(result -> result.equals("P")).collect(Collectors.toList());

        List<String> tamanhosVermelhosM = tamanhosVermelhos.stream().filter(result -> result.equals("M")).collect(Collectors.toList());

        List<String> tamanhosVermelhosG = tamanhosVermelhos.stream().filter(result -> result.equals("G")).collect(Collectors.toList());

        for (int j2 = 0; j2 < nomesBrancosP.size(); j2++) {
            listaFinal.add(
                    coresBrancas.stream().sorted().collect(Collectors.toList()).get(j2) + " " +
                            tamanhosBrancosP.get(j2) + " " +
                            nomesBrancosP.stream().sorted().collect(Collectors.toList()).get(j2)
            );
        }

        for (int j3 = 0; j3 < nomesBrancosM.size(); j3++) {
            listaFinal.add(
                    coresBrancas.stream().sorted().collect(Collectors.toList()).get(j3) + " " +
                            tamanhosBrancosM.get(j3) + " " +
                            nomesBrancosM.stream().sorted().collect(Collectors.toList()).get(j3)
            );
        }

        for (int j4 = 0; j4 < nomesBrancosG.size(); j4++) {
            listaFinal.add(
                    coresBrancas.stream().sorted().collect(Collectors.toList()).get(j4) + " " +
                            tamanhosBrancosG.get(j4) + " " +
                            nomesBrancosG.stream().sorted().collect(Collectors.toList()).get(j4)
            );
        }

        for (int j5 = 0; j5 < nomesVermelhosP.size(); j5++) {
            listaFinal.add(
                    coresVermelhas.stream().sorted().collect(Collectors.toList()).get(j5) + " " +
                            tamanhosVermelhosP.get(j5) + " " +
                            nomesVermelhosP.stream().sorted().collect(Collectors.toList()).get(j5)
            );
        }

        for (int j6 = 0; j6 < nomesVermelhosM.size(); j6++) {
            listaFinal.add(
                    coresVermelhas.stream().sorted().collect(Collectors.toList()).get(j6) + " " +
                            tamanhosVermelhosM.get(j6) + " " +
                            nomesVermelhosM.stream().sorted().collect(Collectors.toList()).get(j6)
            );
        }

        for (int j7 = 0; j7 < nomesVermelhosG.size(); j7++) {
            listaFinal.add(
                    coresVermelhas.stream().sorted().collect(Collectors.toList()).get(j7) + " " +
                            tamanhosVermelhosG.get(j7) + " " +
                            nomesVermelhosG.stream().sorted().collect(Collectors.toList()).get(j7)
            );
        }

        st = new StringTokenizer(br.readLine());

        listaFinal.forEach(System.out::println);

    }
}
````