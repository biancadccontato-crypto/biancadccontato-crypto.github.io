// ================================
// CONFIGURAÇÕES INICIAIS
// ================================
// Resgata os valores salvos no localStorage (ou define os padrões)
let tamanhoFonte = parseInt(localStorage.getItem('fontSize')) || 16;
const temaSalvo = localStorage.getItem('theme');

document.addEventListener('DOMContentLoaded', () => {
    // 1. Aplicar Tema Salvo
    // Aplica no <body>, onde o CSS define as regras de dark-mode
    if (temaSalvo === 'dark') {
        document.body.classList.add('dark-mode');
        const btnIcon = document.querySelector('#darkBtn i');
        if (btnIcon) btnIcon.className = 'ti ti-sun';
    }

    // 2. Aplicar Tamanho da Fonte Salvo
    document.documentElement.style.fontSize = tamanhoFonte + 'px';
    const a11yBtn = document.getElementById('a11yBtn');
    if (a11yBtn) {
        a11yBtn.title = `Fonte atual: ${tamanhoFonte}px (clique para ajustar)`;
    }
});

// ================================
// MODO ESCURO
// ================================
document.getElementById('darkBtn').addEventListener('click', function () {
    this.classList.toggle('active');

    // Alterna a classe no <body>, onde o CSS define body.dark-mode
    document.body.classList.toggle('dark-mode');

    const isDark = document.body.classList.contains('dark-mode');
    const icon = this.querySelector('i');
    if (icon) icon.className = isDark ? 'ti ti-sun' : 'ti ti-moon';

    // Salva a preferência no localStorage para persistir entre páginas
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// ================================
// ACESSIBILIDADE (TAMANHO DA FONTE)
// ================================
document.getElementById('a11yBtn').addEventListener('click', function () {
    tamanhoFonte = tamanhoFonte >= 20 ? 14 : tamanhoFonte + 2;
    
    // Aplica no root (html) para que todas as medidas 'rem' escalem proporcionalmente
    document.documentElement.style.fontSize = tamanhoFonte + 'px';
    this.title = `Fonte atual: ${tamanhoFonte}px (clique para ajustar)`;

    // Salva a preferência do usuário no navegador
    localStorage.setItem('fontSize', tamanhoFonte);
});

// ================================
// VALIDAÇÃO DE FORMULÁRIO E CARDS
// ================================
function enviarFormulario(event) { //[cite: 2]
    event.preventDefault(); //[cite: 2]

    const nome = document.getElementById('nome'); //[cite: 2]
    const email = document.getElementById('email'); //[cite: 2]
    const mensagem = document.getElementById('mensagem'); //[cite: 2]
    let valido = true; //[cite: 2]

    document.querySelectorAll('.form-erro').forEach(el => el.style.display = 'none'); //[cite: 2]

    if (!nome || nome.value.trim() === '') { //[cite: 2]
        document.getElementById('erro-nome').style.display = 'block'; //[cite: 2]
        valido = false; //[cite: 2]
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { //[cite: 2]
        document.getElementById('erro-email').style.display = 'block'; //[cite: 2]
        valido = false; //[cite: 2]
    }
    if (!mensagem || mensagem.value.trim() === '') { //[cite: 2]
        document.getElementById('erro-mensagem').style.display = 'block'; //[cite: 2]
        valido = false; //[cite: 2]
    }

    if (valido) { //[cite: 2]
        document.getElementById('sucesso-msg').style.display = 'block'; //[cite: 2]
        nome.value = ''; //[cite: 2]
        email.value = ''; //[cite: 2]
        mensagem.value = ''; //[cite: 2]
    }
}

function toggleCard(header) { //[cite: 2]
    const body = header.nextElementSibling; //[cite: 2]
    header.classList.toggle('open'); //[cite: 2]
    body.classList.toggle('open'); //[cite: 2]
}