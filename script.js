// =========================================================
// 1. FAQ INTERATIVO (ACCORDION) COM DOM MANIPULATION
// =========================================================
// =========================================================
// FAQ INTERATIVO (ACCORDION)
// =========================================================
const perguntasFaq = document.querySelectorAll(".faq-pergunta");

perguntasFaq.forEach((botao) => {
    botao.addEventListener("click", () => {
        const itemPai = botao.closest(".faq-item");

        // Fecha todos os outros itens
        document.querySelectorAll(".faq-item").forEach((item) => {
            if (item !== itemPai) {
                item.classList.remove("ativo");
            }
        });

        // Abre ou fecha o item clicado
        itemPai.classList.toggle("ativo");
    });
});

// =========================================================
// 2. FORMULÁRIO DE TRIAGEM COM ENVIO DIRETO PARA O WHATSAPP
// =========================================================
const formTriagem = document.getElementById("formTriagem");

// Telefone profissional da Raquel Gusmão (com DDI 55 do Brasil)
const NUMERO_WHATSAPP = "5531998434893";

formTriagem.addEventListener("submit", (evento) => {
    // Impede o recarregamento padrão da página
    evento.preventDefault();

    // Captura os dados preenchidos
    const nome = document.getElementById("nome").value.trim();
    const tipoAtendimento = document.getElementById("tipoAtendimento").value;
    const formato = document.getElementById("formato").value;
    const periodo = document.getElementById("periodo").value;

    // Monta a mensagem acolhedora e formatada
    const mensagem = `Olá, Raquel Gusmão! 👋
Meu nome é *${nome}* e gostaria de agendar uma consulta.

📋 *Detalhes do atendimento:*
• Modalidade: ${tipoAtendimento}
• Formato: ${formato}
• Período de preferência: ${periodo}

Vim através do seu site. Poderia me informar os próximos horários disponíveis?`;

    // Converte os caracteres especiais para o formato de URL da Web
    const mensagemCodificada = encodeURIComponent(mensagem);

    // Cria a URL oficial da API do WhatsApp
    const urlWhatsapp = `https://api.whatsapp.com/send?phone=${NUMERO_WHATSAPP}&text=${mensagemCodificada}`;

    // Abre a conversa em uma nova aba
    window.open(urlWhatsapp, "_blank");
});