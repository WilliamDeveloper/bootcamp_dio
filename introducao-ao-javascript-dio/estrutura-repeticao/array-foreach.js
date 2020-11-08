const lista_pessoas = [
  {
    name: "Guilherme",
    age: 26,
    gender: gender.MAN
  },
  {
    name: "Pedro",
    age: 43,
    gender: gender.MAN
  },
  {
    name: "Jennifer",
    age: 18,
    gender: gender.WOMAN
  }
];

// Iterar os itens do array
lista_pessoas.forEach(person => {
  console.log(`Nome: ${person.name}`);
});
