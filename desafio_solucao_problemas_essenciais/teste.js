// L = 10
// Vi1 = "10 10 10 10 15 18 20 15 11 10".split(" ");
// Vi2 = "1 5 2 9 5 5 8 4 4 3".split(" ");
// Vi3 = "19 9 1 4 5 8 6 11 9 7".split(" ");

// 19 9 1 4 5 8 6 11 9 7

function getNivelTartarugaFrom(velocidade){
  let nivel = 0;
  if(velocidade < 10){
      nivel = 1;
  }else if(velocidade >= 10 && velocidade < 20){
      nivel = 2;
  }else{
      nivel = 3;
  }       
  return nivel;
}

// let L1 = parseInt(gets());
// let Vi1 = gets().split(" ");

// let L2 = parseInt(gets());
// let Vi2 = gets().split(" ");

// let L3 = parseInt(gets());
// let Vi3 = gets().split(" ");

let L1 = 10
let Vi1 = "10 10 10 10 15 18 20 15 11 10".split(" ");
let L2 = 10
let Vi2 = "1 5 2 9 5 5 8 4 4 3".split(" ");
let L3 = 10
let Vi3 = "19 9 1 4 5 8 6 11 9 7".split(" ");

let lista_tartaruga_rapida = []

for(let i = 0; i < L1 ; i++) {
if(i == 0){
    lista_tartaruga_rapida[0] = parseInt(Vi1[i]);
}

if(parseInt(Vi1[i]) > lista_tartaruga_rapida[0]){
    lista_tartaruga_rapida[0] = parseInt(Vi1[i])
}  
}

for(let i = 0; i < L2 ; i++) {
if(i == 0){
    lista_tartaruga_rapida[1] = parseInt(Vi2[i]);
}

if(parseInt(Vi2[i]) > lista_tartaruga_rapida[1]){
    lista_tartaruga_rapida[1] = parseInt(Vi2[i])
}  
}

for(let i = 0; i < L3 ; i++) {
if(i == 0){
    lista_tartaruga_rapida[2] = parseInt(Vi3[i]);
}

if(parseInt(Vi3[i]) > lista_tartaruga_rapida[2]){
    lista_tartaruga_rapida[2] = parseInt(Vi3[i])
}  
}

for(let i = 0; i < lista_tartaruga_rapida.length ; i++) {
  console.log(getNivelTartarugaFrom(lista_tartaruga_rapida[i]))
}