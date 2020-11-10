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

var totalTodosAnimais = pets.reduce( (acum, pet) => {
    console.log(`acum ${acum} pet ${pet.name}`)
    return acum +pet.age
},0)

console.log(totalTodosAnimais)