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

function retonarIdadeString(idade) {
    
    if (idade != null) {
        idadeStr = idade.toString().split(".")
        if (idadeStr.length > 1)
            return `${idadeStr[0]} ano(s) e ${idadeStr[1]} mes(es)`
        else
            return `${idadeStr[0]} ano(s)`
    }

    return idade
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