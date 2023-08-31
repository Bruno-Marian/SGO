function addAnimal(animal){
    console.log("passou")
    listaAnimal.push({nome: animal.nome, tipo: animal.tipo})
    console.log(listaAnimal)
}

const listaAnimal = [{nome: "Miu", tipo: "Gato"}, {nome: "Minerva", tipo: "Gato"}]