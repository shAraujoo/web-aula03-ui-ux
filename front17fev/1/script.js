const cards = document.querySelector('main');

fetch('./dados.json')
    .then(resp => resp.json())
    .then(produtos => {
        produtos.forEach(produto => {
            const card = document.createElement('div');
            card.innerHTML = `
                <h3>${produto.nome}</h3>
                <img src="${produto.imagem}" alt="${produto.nome}">
                <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            `;
            cards.appendChild(card);
        });
    })
    .catch(error => console.error("Erro ao carregar os produtos:", error));
