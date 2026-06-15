// Dark mode
document.getElementById('darkBtn').addEventListener('click', function () {
    this.classList.toggle('active');
    document.body.classList.toggle('dark-mode');
    const icon = this.querySelector('i');
    icon.className = document.body.classList.contains('dark-mode')
        ? 'ti ti-sun'
        : 'ti ti-moon';
});

// Acessibilidade — aumentar/diminuir fonte
let tamanhoFonte = 16;
document.getElementById('a11yBtn').addEventListener('click', function () {
    tamanhoFonte = tamanhoFonte >= 20 ? 14 : tamanhoFonte + 2;
    document.body.style.fontSize = tamanhoFonte + 'px';
    this.title = `Fonte atual: ${tamanhoFonte}px (clique para ajustar)`;
});

// Validação do formulário de contato
function enviarFormulario(event) {
    event.preventDefault();

    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');
    let valido = true;

    document.querySelectorAll('.form-erro').forEach(el => el.style.display = 'none');

    if (!nome || nome.value.trim() === '') {
        document.getElementById('erro-nome').style.display = 'block';
        valido = false;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        document.getElementById('erro-email').style.display = 'block';
        valido = false;
    }
    if (!mensagem || mensagem.value.trim() === '') {
        document.getElementById('erro-mensagem').style.display = 'block';
        valido = false;
    }

    if (valido) {
        document.getElementById('sucesso-msg').style.display = 'block';
        nome.value = '';
        email.value = '';
        mensagem.value = '';
    }
}