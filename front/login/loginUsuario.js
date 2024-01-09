document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obter valores dos campos do formulário
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    // Simule uma verificação de login (substitua isso com lógica real no seu backend)
    if (usuario === "seuUsuario" && senha === "suaSenha") {
        alert("Login bem-sucedido!");
        // Redirecione para a página principal ou execute a lógica desejada
    } else {
        alert("Login falhou. Verifique suas credenciais.");
    }
});

