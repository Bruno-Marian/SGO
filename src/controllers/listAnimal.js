function retornaTableAnimal() {
    var tipoList = ["Nome", "Idade", "Espécie", "Gênero", "Porte", "Saúde", "Editar", "Excluir"]
    var html = "<table border='1|1'>";
    html += "<tr>";
    for (let i = 0; i < tipoList.length; i++) {
        html += `<th>${tipoList[i]}</th>`;
    }
    let listaAnimal = retornaAnimal();
    html += "</tr>";
    for (var i = 0; i < listaAnimal.length; i++) {
        html += "<tr>";
        html += `<td>${listaAnimal[i].nome}</td>`;
        html += `<td>${retonarIdadeString(listaAnimal[i].idade)}</td>`;
        html += `<td>${listaAnimal[i].especie}</td>`;
        html += `<td>${listaAnimal[i].genero}</td>`;
        html += `<td>${listaAnimal[i].porte}</td>`;
        html += `<td>${listaAnimal[i].saude}</td>`;
        html += `<td><button id=${listaAnimal[i].id} onclick="editAnimal(this.id)" class="btn btn-primary">Editar</button></td>`;
        html += `<td><button id=${listaAnimal[i].id} onclick="deleteAnimal(this.id)" class="btn btn-danger">Excluir</butoon></td>`;
        html += "</tr>";
    }
    html += "</table>";

    return html;
}

function retonarIdadeString(idade) {
    idadeStr = idade.toString().split(".")
    if (idadeStr.length > 1)
        return `${idadeStr[0]} ano(s) e ${idadeStr[1]} mês(es)`
    else if (idadeStr != "")
        return `${idadeStr[0]} ano(s)`

    return idade
}

function retornaAnimal() {
    let animal = localStorage.getItem('animalList');

    if (animal == undefined) {
        return [];
    }else{
        return JSON.parse(animal)
    } 
}

function deleteAnimal(id) {
    let animalList = retornaAnimal()
    let posicaoAnimal = animalList.findIndex(obj => obj.id == id)

    if (posicaoAnimal > -1){
        animalList.splice(posicaoAnimal, 1)
    }
    
    localStorage.setItem("animalList", JSON.stringify(animalList))
    window.location.reload()
}

function cadastraClick() {
    let page = "cadastroAnimal.html";
    document.body.innerHTML = `<object type="text/html" data="${page}"></object>`;
}

function editAnimal(id) {
    localStorage.setItem("animalEdit", id);
    cadastraClick();
}