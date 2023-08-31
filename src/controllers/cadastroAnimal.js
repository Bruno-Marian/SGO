function addAnimal(animal){
    console.log("passou")
    listaAnimal.push({nome: animal.nome, idade: animal.idade, especie: animal.especie})
    console.log(listaAnimal)
}

const listaAnimal = [{nome: "Miu", especie: "Gato"}, {nome: "Minerva", especie: "Gato"}]