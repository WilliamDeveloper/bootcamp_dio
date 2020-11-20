import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Stack;

public class Ex01{

    public static List<String> listaGets = new ArrayList<String>();
    public static int vContGets = 0;
    public static String[] vEntrada = {
            "2",
            "1 1 1",
            "2 0 4",
            "3",
            "1 0 0",
            "0 1 0",
            "0 0 0",
            "0",
    };

    public static boolean isListaComDados(){
        if(listaGets.size()>0) return true;
        listaGets = Arrays.asList(vEntrada);
        return true;
    }

    public static String gets(){
        String vRetorno = "";
        if(isListaComDados()){
            vRetorno = listaGets.get( vContGets % listaGets.size());
            vContGets++;
        }
        return vRetorno;
    }

//        System.out.println("OI");
//        Stack pilhasCartas = new Stack();
//        pilhasCartas.add("oi");
//        pilhasCartas.add("oi2");
//        pilhasCartas.push("9");
//        pilhasCartas.push("9");
//        pilhasCartas.pop();
//        pilhasCartas.pop();
//        for (int i=0;i<pilhasCartas.size();i++){
//            System.out.println("OI"+pilhasCartas.get(i));
//        }



    public static int retornarSoma(int[] cartas, int indiceMax){
        int soma = 0;
        for(int i=0; i <= indiceMax; i++){
            soma += cartas[i];
        }
        return soma;
    }

    public static Boolean verificarRetirada(int[] cartas){
        int tipo1 = cartas[0];
        int tipo2 = retornarSoma(cartas, 1);
        int tipo3 = retornarSoma(cartas, 2);

        if(tipo1 % 3 == 0 || tipo2 % 3 == 0 || tipo3 % 3 == 0){
            return true;
        }
        else{
            return false;
        }
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


        Stack pilhasCartas = new Stack();
        String leitura = "";
        do{
            leitura = gets();
            if(!"0".equalsIgnoreCase(leitura)){
                int qtdPilha = Integer.valueOf(leitura);
                Stack pilha = new Stack();
                for (int i = 0; i < qtdPilha; i++) {
                   pilha.push(gets());
                }
                pilhasCartas.push(pilha);
            }
        }while( !"0".equalsIgnoreCase(leitura) );

        Stack resultados = new Stack();
        for (int i = 0; i < pilhasCartas.size(); i++) {
            Stack pilhas = (Stack)pilhasCartas.get(i);
            Stack resultadoJogo = new Stack();
            for (int j = 0; j < pilhas.size(); j++) {
                String pilha = (String)pilhas.get(j);
                int[] cartas = parserStrToIntArray(pilha);
                resultadoJogo.push( verificarRetirada(cartas)   );
            }
            resultados.push( resultadoJogo );
        }


        for (int i = 0; i < resultados.size(); i++) {
            Stack resultado = (Stack) resultados.get(i);
            boolean jogo = true;
            for (int j = 0; j < resultado.size(); j++) {
                jogo = jogo && ((Boolean)resultado.get(j));
            }
            if(jogo){
                System.out.println(1);
            }else{
                System.out.println(0);
            }
        }



    }
}
