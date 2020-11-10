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

//reduzindo para um inteiro acumulado
var totalTodosAnimais = pets.reduce( (acum, pet) => {
    console.log(`acum ${acum} pet ${pet.name}`)
    return acum +pet.age
},0)

console.log(totalTodosAnimais)


//reduzindo para um objeto acumulado
var totalWeight = pets.reduce( (acum, pet) =>{
    return {
        totalAge: acum.totalAge + pet.age,
        totalWeight: acum.totalWeight + pet.weight
    }
}, { totalAge: 0, totalWeight:0 })

console.log(totalWeight)


//reduzindo para um inteiro acumulado
var totalIdadeDosDogs = pets.reduce( (acum, pet) => {
    console.log(`acum ${acum} pet ${pet.name}`)

    // filtrando dentro do reduce
    if(pet.type ==='dog') return acum + pet.age

    return acum
},0);

console.log(totalIdadeDosDogs)