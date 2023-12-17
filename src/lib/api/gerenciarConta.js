export const alterarSenha = (senha) => {
    if(senha.length <= 6){
        return { sucesso: false };
    }

    const stringSalvaUsuariosLog = localStorage.getItem('user');
    const stringSalvaUsuarios = localStorage.getItem('usuariosCadastrados');
    const usuarios = JSON.parse(stringSalvaUsuarios);
    const usuarioLogado = JSON.parse(stringSalvaUsuariosLog);

    const indexUsuario = usuarios.findIndex(usuario => usuario.email === usuarioLogado.email);

    usuarios[indexUsuario].senha = senha;    
    usuarioLogado.senha = senha;

    localStorage.setItem('user', JSON.stringify(usuarioLogado))
    localStorage.setItem('usuariosCadastrados', JSON.stringify(usuarios))

    return { sucesso: true };

};
export const alterarDados = (nome, email, telefone) => {
    if(nome.length < 0 && email.length <= 5 && telefone <14 ){
        return { sucesso: false };
    }

    const stringSalvaUsuariosLog = localStorage.getItem('user');
    const stringSalvaUsuarios = localStorage.getItem('usuariosCadastrados');
    const usuarios = JSON.parse(stringSalvaUsuarios);
    const usuarioLogado = JSON.parse(stringSalvaUsuariosLog);

    const indexUsuario = usuarios.findIndex(usuario => usuario.email === usuarioLogado.email);


    usuarios[indexUsuario].nome = nome;    
    usuarioLogado.nome = nome;

    usuarios[indexUsuario].email = email;    
    usuarioLogado.email = email;

    usuarios[indexUsuario].telefone = telefone;    
    usuarioLogado.telefone = telefone;

   

    localStorage.setItem('user', JSON.stringify(usuarioLogado))
    localStorage.setItem('usuariosCadastrados', JSON.stringify(usuarios))

    return { sucesso: true };

}
export const alterarFoto = (foto = '') => {
    if(foto.length === 0){
        return { sucesso: false };
    }

    const stringSalvaUsuarioLogado = localStorage.getItem('user');
    const stringSalvaUsuarios = localStorage.getItem('usuariosCadastrados');
    const usuarios = JSON.parse(stringSalvaUsuarios);
    const usuarioLogado = JSON.parse(stringSalvaUsuarioLogado);

    const indexUsuario = usuarios.findIndex(usuario => usuario.email === usuarioLogado.email);

    usuarios[indexUsuario].imagem = foto;    
    usuarioLogado.imagem = foto;

    localStorage.setItem('user', JSON.stringify(usuarioLogado))
    localStorage.setItem('usuariosCadastrados', JSON.stringify(usuarios))

    return { sucesso: true };
}
