const botoes = document.querySelectorAll('.botao');
const produtos = document.querySelectorAll(".produto");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");
        botao.classList.add("selecionado");
        
        const produtoSelecionado = document.querySelector(".produto.selecionado");
        produtoSelecionado.classList.remove("selecionado");
        produtos[indice].classList.add("selecionado");
    });
});