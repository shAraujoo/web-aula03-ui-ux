const conteudo = document.getElementById('conteudo');
const btnCards = document.getElementById('btnCards');
const btnLista = document.getElementById('btnLista');

function carregarProdutos(exibirComo) {
    fetch('./dados.json')
        .then(resp => resp.json())
        .then(produtos => {
            conteudo.innerHTML = ""; 

            if (exibirComo === 'cards') {
                produtos.forEach(produto => {
                    const card = document.createElement('div');
                    card.classList.add('card');

                    card.innerHTML = `
                        <img src="${produto.imagem}" alt="${produto.nome}">
                        <h3>${produto.nome}</h3>
                        <p>R$ ${produto.preco.toFixed(2)}</p>
                    `;

                    conteudo.appendChild(card);
                });
            } else if (exibirComo === 'lista') {
                const lista = document.createElement('ul');
                lista.classList.add('lista');

                produtos.forEach(produto => {
                    const item = document.createElement('li');
                    item.classList.add('item-lista');

                    item.innerHTML = `
                        <span>${produto.nome}</span>
                        <span>R$ ${produto.preco.toFixed(2)}</span>
                    `;

                    lista.appendChild(item);
                });

                conteudo.appendChild(lista);
            }
        })
        .catch(error => console.error("Erro ao carregar os produtos:", error));
}


btnCards.addEventListener('click', () => carregarProdutos('cards'));
btnLista.addEventListener('click', () => carregarProdutos('lista'));


carregarProdutos('cards');
