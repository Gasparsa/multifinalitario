document.getElementById("recuperarSenhaForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obter o valor do campo de e-mail
    var email = document.getElementById("email").value;

    // Simule uma solicitação de recuperação de senha (substitua isso com lógica real no seu backend)
    alert("Um e-mail de recuperação de senha foi enviado para " + email);
    // Adicione lógica real para recuperação de senha
});

document.getElementById("recuperarSenha").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Um e-mail de recuperação de senha foi enviado para o seu endereço de e-mail.");
    // Adicione lógica real para recuperação de senha
});
