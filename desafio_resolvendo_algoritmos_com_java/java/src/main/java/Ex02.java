import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Stack;

public class Ex02 {

    public  static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    public static List<String> listaGets = new ArrayList<String>();
    public static int vContGets = 0;
    public static String[] vEntrada = {
            "abcdef abc abc abc",
            ".",
    };

    public static boolean isListaComDados(){
        if(listaGets.size()>0) return true;
        listaGets = Arrays.asList(vEntrada);
        return true;
    }

    public static String gets(){
//                String vRetorno;
//        try {
//            vRetorno= br.readLine();
//        } catch (IOException e) {
//            vRetorno= "";
//        }
//        return String.valueOf(vRetorno);



        String vRetorno = "";
        if(isListaComDados()){
            vRetorno = listaGets.get( vContGets % listaGets.size());
            vContGets++;
        }
        return vRetorno;
    }



    public static int[] parserStrToIntArray(String arrayStr){
        String[] valores = arrayStr.split(" ");
        int[] resultado = new int[valores.length];
        for (int i = 0; i < valores.length; i++) {
            resultado[i] = Integer.valueOf(valores[i]);
        }
        return resultado;
    }

    public static void main(String[] args) {


        Stack leituras = new Stack();
        String dado = "";
        do{
            dado = gets();
            if(!".".equalsIgnoreCase(dado)){
                leituras.push(dado);
            }
        }while(!".".equalsIgnoreCase(dado));



        Stack novasLeituras = new Stack();
        for (int i = 0; i < leituras.size(); i++) {
            String leitura = (String) leituras.get(i);
//            System.out.println("leitura "+leitura+" "+ leituras);
            String[] arrayLeitura = leitura.split(" ");
            Stack novasLinhas = new Stack();
            Stack palavra = new Stack();
            Stack palavraTrocada = new Stack();
            Stack trocas = new Stack();
            int contadorTroca = 0;

            for(int j=0; j < arrayLeitura.length; j++){
//                System.out.println("\n i="+j);
//                System.out.println("arrayLeitura "+Arrays.toString(arrayLeitura));

                String subs = arrayLeitura[j];

//                System.out.println("subs "+subs);

                palavra.push(subs);
                if(subs.length() > 2){
                    String novaPalavra = arrayLeitura[j].substring(0, 1).concat(".");

//                    System.out.println("novaPalavra "+novaPalavra+" ");

                    palavraTrocada.push(novaPalavra);

//                    System.out.println("palavraTrocada "+palavraTrocada+" ");

                    List novaLinha = new ArrayList();
                    for (int k = 0; k < arrayLeitura.length; k++) {
                        String linha = arrayLeitura[k];
//                        System.out.println("linha "+linha+" "+ arrayLeitura[k] +" "+contadorTroca);
                        if(linha.equalsIgnoreCase(arrayLeitura[j])){
                            contadorTroca++;
                            novaLinha.add(novaPalavra);
                        }else{
                            novaLinha.add(linha);
                        }
                    }

//                    System.out.println("novaLinha "+novaLinha);

                    novasLinhas.push(String.join(" ", novaLinha));
                    trocas.push(contadorTroca);
                }
            }




            int menorPalavra = 9999999;
            int indice = 0;
            for (int k=0;k< novasLinhas.size();k++){
                int novaLinha = i;
                if(novasLinhas.get(k).toString().length() < menorPalavra){
                    menorPalavra = novasLinhas.get(novaLinha).toString().length();
                    indice = novaLinha;
                }
            }

//            System.out.println("indice"+indice+" "+novasLinhas+trocas+palavraTrocada+palavra);

//            System.out.println();
            System.out.println(novasLinhas.get(indice));
            System.out.println(trocas.get(indice));
            System.out.println(palavraTrocada.get(indice)+ " = "+ palavra.get(indice));


        }


    }
}
