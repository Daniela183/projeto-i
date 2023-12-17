export const efetuarLogin = (objeto) => {
    if (objeto.email === 'teste@12.com') {
        if (objeto.senha === '1234567') {
            return { sucesso: true, error: '' };
        }
        return { sucesso: false, error: 'senha' }
    }

    return { sucesso: false, error: 'email' };
}

export const cadastrar = (novoUsuario) => {
    const stringSalvaUsuarios = localStorage.getItem('usuariosCadastrados'); 
    const usuarios = stringSalvaUsuarios ? JSON.parse(stringSalvaUsuarios) : [];

    const retornoUsuario = usuarios.find(usuario => usuario.email === novoUsuario.email);

    if (retornoUsuario) {
        return { sucesso: false, error: 'email' };
    }

    usuarios.push(novoUsuario);

    localStorage.setItem('usuariosCadastrados', JSON.stringify(usuarios));

    return { sucesso: true, error: '' };
}
   //     const novoValor = event.target.value || '';
    //     const retornoSplit = novoValor.split(' ');

    //     console.log(retornoSplit)

    //     let novaStringValorMaisculo = '';

    //     retornoSplit.forEach((palavra) => {
    //         let primeiroCaracterePalavra = palavra.charAt(0).toUpperCase();
    //         let restantePalavra = palavra.slice(1, palavra.length);
    //         const novaPalavra = primeiroCaracterePalavra + restantePalavra;

    //         novaStringValorMaisculo = novaStringValorMaisculo + novaPalavra + ' ';
    //     })
    //inputProps={{ style: { textTransform: 'capitalize'}}}