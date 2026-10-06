const atalhos = document.querySelectorAll(".atalho");
const botoes_fechar = document.querySelectorAll(".fechar");
const hora_atual = document.querySelector("#hora_atual");

atalhos.forEach(function(atalho) {
    atalho.addEventListener("click", function() {
        const janela_id = atalho.dataset.janela;
        const janela_selecionada = document.querySelector("#" + janela_id);

        janela_selecionada.classList.remove("escondida");
    });
});

botoes_fechar.forEach(function(botao) {
    botao.addEventListener("click", function() {
        const janela_aberta = botao.closest(".janela_secundaria");

        janela_aberta.classList.add("escondida");
    });
});

function atualizar_hora() {
    const agora = new Date();

    const horas = String(agora.getHours()).padStart(2, "0");
    const minutos = String(agora.getMinutes()).padStart(2, "0");

    hora_atual.textContent = horas + ":" + minutos;
}

atualizar_hora();

setInterval(atualizar_hora, 60000);