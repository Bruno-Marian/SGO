function addAnimal(animal) {
    console.log("passou")
    listaAnimal.push({
        nome: animal.nome,
        idade: animal.idade,
        especie: animal.especie,
        sexo: animal.sexo,
        porte: animal.porte,
        saude: animal.saude
    })
    console.log(listaAnimal)
}

function retonarIdadeString(idade) {
    idadeStr = idade.toString().split(".")
    if (idadeStr.length > 1)
        return `${idadeStr[0]} ano(s) e ${idadeStr[1]} mês(es)`
    else if (idadeStr != "")
        return `${idadeStr[0]} ano(s)`

    return idade
}

function retornaTableAnimal() {
    var tipoList = ["Nome", "Idade", "Espécie", "Sexo", "Porte", "Saúde"]
    var html = "<table border='1|1'>";
    html += "<tr>";
    for (let i = 0; i < tipoList.length; i++) {
        html += `<td>${tipoList[i]}</td>`;
    }
    html += "</tr>";
    for (var i = 0; i < listaAnimal.length; i++) {
        html += "<tr>";
        html += `<td>${listaAnimal[i].nome}</td>`;
        html += `<td>${listaAnimal[i].idade}</td>`;
        html += `<td>${listaAnimal[i].especie}</td>`;
        html += `<td>${listaAnimal[i].sexo}</td>`;
        html += `<td>${listaAnimal[i].porte}</td>`;
        html += `<td>${listaAnimal[i].saude}</td>`;
        html += "</tr>";
    }
    html += "</table>";

    return html;
}

const listaAnimal = [
    {
        nome: "Miu",
        idade: '1.5',
        especie: "Gato",
        sexo: "Feminino",
        porte: "Pequeno",
        saude: "Boa, mais revoltado com a Minerva."
    },
    {
        nome: "Minerva",
        idade: '2.5',
        especie: "Gato",
        sexo: "Feminino",
        porte: "Pequeno",
        saude: "Boa, mais com medo da sombra."
    },
    {
        nome: "Tigresa",
        idade: '2.5',
        especie: "Gato",
        sexo: "Feminino",
        porte: "Pequeno",
        saude: "Boa, mas acima do peso."
    },
]