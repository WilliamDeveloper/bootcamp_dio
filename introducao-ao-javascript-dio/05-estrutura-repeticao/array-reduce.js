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


// Transformar um array em outro tipo
const totalAge = lista_pessoas.reduce((age, person) => {
  age += person.age;
  return age;
}, 0);


console.log('totalAge: ',totalAge);




// Juntando operações
const totalEvenAges = lista_pessoas
  .filter(person => person.age % 2 === 0)
  .reduce((age, person) => {
    age += person.age;
    return age;
  }, 0);
console.log(
  "\nSoma de idades das pessoas que possuem idade par",
  totalEvenAges
);
