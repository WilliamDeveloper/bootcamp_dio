const lista_pessoas = [
  {
    name: "Guilherme",
    age: 26,
    gender: "M"
  },
  {
    name: "Pedro",
    age: 43,
    gender: "M"
  },
  {
    name: "Jennifer",
    age: 18,
    gender: "F"
  }
];

// Iterar os itens do array
lista_pessoas.forEach(person => {
  console.log(`Nome: ${person.name}`);
});
