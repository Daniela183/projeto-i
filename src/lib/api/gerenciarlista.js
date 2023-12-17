export const cadastrarItem = (itemCadastrado) => {
    const itens = listaItens();
    
    itens.push(itemCadastrado);
    
    localStorage.setItem('itensCadastrados', JSON.stringify(itens));

    return {sucesso: true, error: ''};   
}

export const alterarItem = (item) => {

    const itens = listaItens();

    const indexItem = itens.findIndex(itemBanco => itemBanco.id === item.id);

    itens[indexItem].checked = item.checked;
    itens[indexItem].titulo = item.titulo;

    localStorage.setItem('itensCadastrados', JSON.stringify(itens))

    return { sucesso: true };
};

export const excluirItem = (item) => {

    const itens = listaItens();

    const indexItem = itens.findIndex(itemBanco => itemBanco.id === item.id);

    itens.splice(indexItem, 1);

    localStorage.setItem('itensCadastrados', JSON.stringify(itens))

    return { sucesso: true };
}
 
export const listaItens = () => {
    const stringPeg = localStorage.getItem('itensCadastrados');
    const itens = stringPeg ? JSON.parse(stringPeg) : [];
    return itens;
}

////////////////////////////////////
