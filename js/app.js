function adicionar() {
    let produtoAdicionar = capturarDadosProduto();

    if (validarQtde(produtoAdicionar[2])) {
        criarEAdicionarSecaoProduto(produtoAdicionar);
        valorTotalProduto = produtoAdicionar[1] * produtoAdicionar[2];
        calcularValorTotal(valorTotalProduto);        
    } else {
        alert("Insira a quantidade do produto.");
    }
}

function obterValorProduto(produto) {
    let indiceDoReal = produto.indexOf("R$");
    return produto.substring(indiceDoReal + 2);
}

function obterNomeProduto(produto) {
    let indiceDoHifen = produto.indexOf("-");
    return produto.substring(0, indiceDoHifen - 1);
}

function capturarDadosProduto() {
    let produtos = document.getElementById("produto");
    let indice = produto.selectedIndex;
    let produtoSelecionado = produtos.options[indice].text;
    let nomeProduto = obterNomeProduto(produtoSelecionado);
    let valorProduto = parseInt(obterValorProduto(produtoSelecionado));
    let quantidade = parseInt(document.getElementById("quantidade").value);
    return [nomeProduto, valorProduto, quantidade];
}

function validarQtde(quantidade) {
    let validado = true;
    if (isNaN(quantidade)) validado = false;
    return validado;
}

function criarEAdicionarSecaoProduto(produto) {
    let novaSecao = document.createElement("section");
    novaSecao.classList.add("carrinho__produtos__produto");
    novaSecao.innerHTML = `<span class="texto-azul">${produto[2]}x</span> ${produto[0]} <span class="texto-azul">R$${produto[1]}</span>`
    let container = document.getElementById("lista-produtos");
    container.appendChild(novaSecao);
}

function limpar() { 
    valorTotal = 0;
    document.getElementById("valor-total").textContent = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("lista-produtos").innerHTML = "";
}

function calcularValorTotal(valorProduto) {
    valorTotal += valorProduto
    let textoValorTotal = `R$${valorTotal}`;
    document.getElementById("valor-total").textContent = textoValorTotal;
}

document.addEventListener('DOMContentLoaded', function () {
    limpar();
});

let valorTotal = parseInt(document.getElementById("valor-total").textContent);
valorTotal = 0;

