let carrinho = 0;

function adicionarAoCarrinho(produto) {

    carrinho++;

    document.getElementById("cart-count").innerText = carrinho;

    alert(produto + " foi adicionado ao carrinho 🛒");

}

function scrollToProdutos() {

    document.getElementById("produtos").scrollIntoView({
        behavior: "smooth"
    });

}