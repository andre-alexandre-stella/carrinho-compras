function adicionar() {
    let produtoAdicionar = capturarDadosProduto();

    if (produtoAdicionar[2] == 0) {
        alert("Insira a quantidade do produto.");
        return;
    }
    if (produtoAdicionar[2] < 0) {
        alert("A quantidade deve ser um valor positivo.");
        return;
    }

    valorTotalProduto = produtoAdicionar[1] * produtoAdicionar[2];
    criarEAdicionarSecaoProduto(produtoAdicionar, valorTotalProduto);
    document.getElementById("quantidade").value = 0;
    calcularValorTotal(valorTotalProduto);
}

function capturarDadosProduto() {
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split(" -")[0];
    let valorProduto = parseInt(produto.split("R$")[1]);
    let quantidade = parseInt(document.getElementById("quantidade").value);
    return [nomeProduto, valorProduto, quantidade];
}

function criarEAdicionarSecaoProduto(produto, valorTotal) {
    let novaSecao = document.createElement("section");
    novaSecao.classList.add("carrinho__produtos__produto");
    novaSecao.innerHTML = `<span class="texto-azul">${produto[2]}x</span> ${produto[0]} <span class="texto-azul">R$${valorTotal}</span>`
    let container = document.getElementById("lista-produtos");
    container.appendChild(novaSecao);
}

function limpar() {
    valorTotal = 0;
    document.getElementById("valor-total").textContent = "";
    document.getElementById("quantidade").value = 0;
    document.getElementById("lista-produtos").innerHTML = "";
}

function calcularValorTotal(valorProduto) {
    valorTotal += valorProduto
    let textoValorTotal = `R$${valorTotal}`;
    document.getElementById("valor-total").textContent = textoValorTotal;
}

let valorTotal = 0;
limpar();

