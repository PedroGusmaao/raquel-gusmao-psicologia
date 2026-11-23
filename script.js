// =========================================================
// 1. FAQ INTERATIVO (ACCORDION) COM DOM MANIPULATION
// =========================================================
const botoesFaq = document.querySelectorAll(".faq-pergunta");

botoesFaq.forEach((botao) => {
    botao.addEventListener("click", () => {
        const itemAtual = botao.parentElement;
        
        // Fecha outros itens para deixar apenas um aberto por vez (UX limpa)
        document.querySelectorAll(".faq-item").forEach((item) => {
            if (item !== itemAtual) {
                item.classList.remove("ativo");
            }
        });

        // Alterna o estado do item clicado
        itemAtual.classList.toggle("ativo");
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