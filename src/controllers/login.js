function validaLogar(usuario) {
    if(usuario.user === "sgo" && usuario.password === "sysmaster"){
        return true;
    }
    else {
        alert("Usuário e/ou senha inválido(s)!")
    }
}