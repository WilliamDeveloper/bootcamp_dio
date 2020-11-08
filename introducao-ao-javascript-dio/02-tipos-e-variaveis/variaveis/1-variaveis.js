
// cria variavel no escopo global window
var nameVar = "Guilherme";

// cria variavel mas nao cria fora do escopo (nao cria no window)
let nameLet = "Guilherme";

// faz nao muda tipo primitivo (int, boolean, str)
const nameConst = "Guilherme";
// mas é possivel mudar conteudo de:
// (objeto, array, funcao)


console.log(`nameVar: ${nameVar}`);
console.log(`nameLet: ${nameLet}`);
console.log(`nameConst: ${nameConst}`);
