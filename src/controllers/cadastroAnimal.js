function addAnimal(animal){
    console.log("passou")
    listaAnimal.push({nome: animal.nome, 
        idade: animal.idade, 
        especie: animal.especie,
        sexo: animal.sexo,
        porte: animal.porte,
        saude: animal.saude})
    console.log(listaAnimal)
}

const listaAnimal = [
    {nome: "Miu", 
    idade: '1.5', 
    especie: "Gato",
    sexo: "Feminino",
    porte: "Pequeno",
    saude: "Boa"}, 
    {nome: "Minerva", 
    idade: '2.5', 
    especie: "Gato",
    sexo: "Feminino",
    porte: "Pequeno",
    saude: "Boa"}, 
]