function cadastraClick() {
    let page = "cadastroUsuario.html";
    document.body.innerHTML = `<object type="text/html" data="${page}"></object>`;
}

function retornaTableUsuario() {
    var tipoList = ["Nome", "Função", "CEP"]
    var html = "<table border='1|1'>";
    html += "<tr>";
    for (let i = 0; i < tipoList.length; i++) {
        html += `<th>${tipoList[i]}</th>`;
    }
    html += "</tr></table>";
    return html;
}
