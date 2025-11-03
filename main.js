let imagem = document.getElementById("oculta")
let Botao = document.getElementById("mostrarImagem")
alert("Funcionando")

Botao.addEventListener("click",(e) => {
    imagem.classList.remove("oculta")
})