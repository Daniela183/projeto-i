export const efetuarLogin = (user) => {
    const stringSalvaUsuarios = localStorage.getItem('usuariosCadastrados');
    const usuarios = stringSalvaUsuarios ? JSON.parse(stringSalvaUsuarios) : [];

    const usuarioEncontrado = usuarios.find(usuario => usuario.email === user.email);
     
    if(usuarioEncontrado){
        if (user.senha === usuarioEncontrado.senha) {
            return { sucesso: true, error: '', dados: usuarioEncontrado };
        }
        return { sucesso: false, error: 'senha' }
    }

    return { sucesso: false, error: 'email' };
}

export const cadastrar = (novoUsuario) => {
    
    const stringSalvaUsuarios = localStorage.getItem('usuariosCadastrados');
    const usuario = stringSalvaUsuarios ? JSON.parse(stringSalvaUsuarios) : [];

    const retornarUsuario = usuario.find(usuario => usuario.email === novoUsuario.email);
     
    if(retornarUsuario){
        return {sucesso: false, error: 'email'};
        
    }
    usuario.push(novoUsuario);
    
    localStorage.setItem('usuariosCadastrados', JSON.stringify(usuario));

    return {sucesso: true, error: ''};
   
}
