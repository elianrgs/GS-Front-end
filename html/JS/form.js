
let currentIndex = 0;

function mudarImagem() {
    const imagens = document.querySelectorAll('.carrossel-img');
    const carrosselContainer = document.querySelector('.carrossel-container');
    
    currentIndex = (currentIndex + 1) % imagens.length;
    carrosselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(mudarImagem, 3000);

function validarFormulario(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome === "") {
        alert("Por favor, coloque seu nome.");
        return false;
    } 

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "" || !emailRegex.test(email)) {
        alert("Por favor, insira um email valido.");
        return false;
    }

    const telefoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    if (telefone === "" || !telefoneRegex.test(telefone)) {
        alert("Por favor, insira um número de telefone valido Ex: (11) 99955-2314.");
        return false
    }
    
    if (mensagem === "") {
        alert ("Por favor, preencha o campo Mensagem.");
        return false;
    }

    alert ("Obrigado por entrar em contato sobre Energia Sustentável!");

    document.getElementById('form-contato').reset();

};
