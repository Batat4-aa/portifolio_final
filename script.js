const atalhos = document.querySelectorAll(".atalho");
const botoes_fechar = document.querySelectorAll(".fechar");
const botoes_fechar_alerta = document.querySelectorAll(".fechar_alerta");
const hora_atual = document.querySelector("#hora_atual");
const campo_telefone = document.querySelector("#telefone");
const formulario_contato = document.querySelector("#formulario_contato");
const botao_claro = document.querySelector("#botao_claro");
const botao_escuro = document.querySelector("#botao_escuro");
const janela_alerta = document.querySelector("#janela_alerta");
const texto_alerta = document.querySelector("#texto_alerta");
const texto_terminal = document.querySelector("#texto_terminal");
const frase_terminal = "C:\\Users\\Calebe> iniciar_portfolio.exe";
let indice_terminal = 0;

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

botoes_fechar_alerta.forEach(function(botao) {
    botao.addEventListener("click", function() {
        janela_alerta.classList.add("escondida");
    });
});

function atualizar_hora() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, "0");
    const minutos = String(agora.getMinutes()).padStart(2, "0");
    hora_atual.textContent = horas + ":" + minutos;
}

function escrever_terminal() {
    if (indice_terminal < frase_terminal.length) {
        texto_terminal.textContent += frase_terminal.charAt(indice_terminal);
        indice_terminal++;
        setTimeout(escrever_terminal, 45);
    }
}

campo_telefone.addEventListener("input", function() {
    let telefone = campo_telefone.value.replace(/\D/g, "").slice(0, 11);
    if (telefone.length > 10) {
        telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else if (telefone.length > 6) {
        telefone = telefone.replace(/(\d{2})(\d{4})(\d+)/, "($1) $2-$3");
    } else if (telefone.length > 2) {
        telefone = telefone.replace(/(\d{2})(\d+)/, "($1) $2");
    }
    campo_telefone.value = telefone;
});

botao_escuro.addEventListener("click", function() {
    document.body.classList.add("modo_escuro");
    localStorage.setItem("tema_portfolio", "escuro");
});

botao_claro.addEventListener("click", function() {
    document.body.classList.remove("modo_escuro");
    localStorage.setItem("tema_portfolio", "claro");
});

formulario_contato.addEventListener("submit", function(evento) {
    evento.preventDefault();
    texto_alerta.textContent = "Formulário validado. Para envio real, conecte o site a um serviço de formulário.";
    janela_alerta.classList.remove("escondida");
    formulario_contato.reset();
});

const tema_salvo = localStorage.getItem("tema_portfolio");
if (tema_salvo === "escuro") {
    document.body.classList.add("modo_escuro");
}

atualizar_hora();
escrever_terminal();
setInterval(atualizar_hora, 60000);
