function validaLogar(usuario) {
    if(usuario.user === "sgo" && usuario.password === "sysmaster"){
        return true;
    }
    else {
        document.getElementById("mensagemErro").style.display = "block"
    }
}