// Botão da mensagem
const botao = document.getElementById("btnMensagem");

if (botao) {
    botao.addEventListener("click", () => {
        alert("🌱 Agro Forte, Futuro Sustentável!");
    });
}

// Acessibilidade - Controle de fonte
let tamanhoFonte = 100;

function aumentarFonte() {
    tamanhoFonte += 10;
    document.body.style.fontSize = tamanhoFonte + "%";
}

function diminuirFonte() {
    if (tamanhoFonte > 70) {
        tamanhoFonte -= 10;
        document.body.style.fontSize = tamanhoFonte + "%";
    }
}
