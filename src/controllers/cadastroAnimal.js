function addAnimal(animal) {
    //Valida as informações do animal
    if (!validateAnimal(animal)) return false;

    let listaAnimal = retornaAnimal();
    let id = null;
    if(animal.id == null || animal.id == "null"){
        if (listaAnimal.length == 0) {
            id = 1;
        }
        else{
            id = Math.max.apply(Math, listaAnimal.map(object => {
                return object.id;
            }));
            id++;
        }
    }

    var animalResult = buscaAnimal(animal.id)
    if (animalResult != -1) {
        listaAnimal[animalResult] = animal
    }else {
        listaAnimal.push({
            id: id,
            nome: animal.nome,
            idade: animal.idade,
            especie: animal.especie,
            sexo: animal.sexo,
            porte: animal.porte,
            saude: animal.saude,
            disponivel: animal.disponivel
        })
    }
    localStorage.setItem("animalList", JSON.stringify(listaAnimal))

    return true;
}

retornaAnimal()
function retornaAnimal() {
    let animal = localStorage.getItem('animalList');

    if (animal == undefined) {
        return [];
    }else{
        return JSON.parse(animal);
    } 
}

function buscaAnimal(id) {
    let animal = retornaAnimal();

    if (animal == undefined) {
        return null;
    }else{
        return animal.findIndex(obj => obj.id == id);
    } 
}

function addNewAnimal(isAnimal) {
    if (isAnimal) {
        const animal = {
            "id": animalEdit,
            "nome": nome.value,
            "idade": idade.value,
            "especie": document.querySelector("input[type='radio'][name=especie]:checked").value,
            "sexo": document.querySelector("input[type='radio'][name=sexo]:checked").value,
            "porte": porte.value,
            "saude": saude.value,
            "disponivel": true,
        }
        if (addAnimal(animal)){
            reloadPage()
        }
    }
}

function reloadPage() {
    window.location.reload();
}

function loadAnimal(id) {
    let animalList = retornaAnimal()
    console.log(animalList)
    let animal = animalList.filter(obj => obj.id == id)[0]
    
    console.log(animal.especie)
    console.log(animal)
    if (animal){
        nome.value = animal.nome
        idade.value = animal.idade
        porte.value = animal.porte
        saude.value = animal.saude

        if (animal.especie == "Gato"){
            document.getElementById("gato").checked = true
        }else{
            document.getElementById("cachorro").checked = true
        }

        if (animal.sexo == "Macho"){
            document.getElementById("macho").checked = true
        }else{
            document.getElementById("femea").checked = true
        }
    }
}

function validateAnimal(animal) {
    obrigatorioList = ["nome", "idade"]
    for (var i in obrigatorioList){
        if (animal[obrigatorioList[i]] == "" || animal[obrigatorioList[i]] == null){
            alert(`Campo obrigatório ${obrigatorioList[i]} não informado`)
            return false;
        }
    }

    return true;
}
