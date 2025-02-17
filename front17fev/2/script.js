const listaProdutos = document.getElementById('lista-produtos');

fetch('./dados.json')
    .then(resp => resp.json())
    .then(produtos => {
        produtos.forEach(produto => {
            const item = document.createElement('li');
            item.classList.add('item-lista');

            item.innerHTML = `
                <span>${produto.nome}</span>
                <span>R$ ${produto.preco.toFixed(2)}</span>
            `;

            listaProdutos.appendChild(item);
        });
    })
    .catch(error => console.error("Erro ao carregar os produtos:", error));
