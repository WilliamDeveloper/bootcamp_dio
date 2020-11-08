 const lista_estudante = [
    {
      name: "Grace",
      grade: 7
    },
    {
      name: "Paul",
      grade: 4
    },
    {
      name: "Jennifer",
      grade: 10
    }
  ];


const lista_estudante_filtrada = lista_estudante.filter(student => student.grade >= 7);
console.log("# ",lista_estudante_filtrada);