//lista
var lista = [1,2,3,4,5,6,7,8,9];


// retorna um novo array com a mesma quantidade de elementos
var listaMap = lista.map((num) => {
    return num * 2;
});

console.log(listaMap);


//----------------------
var pets = [
    {
        type: 'dog',
        name: 'bolinha',
        age: 15,
        weight: 30
    },
    {
        type: 'cat',
        name: 'mingal',
        age: 6,
        weight: 2
    },
    {
        type: 'dog',
        name: 'rex',
        age: 4,
        weight: 5
    },
    {
        type: 'cat',
        name: 'marrom',
        age: 2,
        weight: 1
    },
    {
        type: 'fish',
        name: 'gulp',
        age: 1,
        weight: 0.01
    },
    {
        type: 'horse',
        name: 'pe de pano',
        age: 1,
        weight: 0.01
    },
]

console.log(pets)

var novoMap = pets.map( (pet) => {
    return pet.name;
})

console.log(novoMap)