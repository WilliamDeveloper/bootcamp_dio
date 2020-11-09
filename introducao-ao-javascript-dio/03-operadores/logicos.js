// and logico &&
var a = true && true;  // true
var a = false && true;  // false

// ou logicos ||
var a = false || true;  // true
var a = false || false;  // false


// not logico !
var n1 = !true; //false
var n2 = !false; //true
var n3 = !"gato"; //false
var n4 = !!"gato"; //true casta para saber se tem valor

//cast double negation

var n5 = !!"gato"; //true, se tiver valor e nao for vazio eh true

var name2;
resposta_bool = !!name2;
if(name2){   }

var name3="tem valor";
resposta_bool = !!name3;
if(name3){  }



------

    var number=5;
if(number){ // vai dar true se for um numero >=0
  blau();
}


-------------------------------------
//nos casos abaixo nao faria o if pq daria false
var number;
if(number){ // 'undefined'  == false
  blau();
}

var number=0;
if(number){ // 0 = false e number maior q zero true
  blau();
}


//-------------------------------------
//retorna true
" "
1
['teste']
" tem valor"
!!"tem valor"


//retorna false
""
0
[]
//-------------------------------------

var palavra;
if(palavra){  // 'undefined'  == false
  blau();
}


var palavra = "";
if(palavra){  // ""  == false
  blau();
}

var palavra = "valor";
if(palavra){  // ""valor"; "  == true
  blau();
}


//equivaliente ao ultimo if
var valor_boleano = !!palavra;