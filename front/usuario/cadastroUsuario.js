document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obter valores dos campos do formulário
    var matricula = document.getElementById("matricula").value;
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;

    // Verificar se as senhas coincidem
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem. Por favor, verifique.");
        return;
    }

    // Construir objeto de dados do usuário
    var usuario = {
        matricula: matricula,
        nome: nome,
        cpf: cpf,
        email: email,
        senha: senha
    };

    // Enviar dados para a API REST usando Fetch
    fetch("URL_DA_SUA_API_REST", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Cadastro realizado com sucesso:", data);
        // Adicione lógica adicional conforme necessário
    })
    .catch(error => {
        console.error("Erro no cadastro:", error);
        // Trate erros conforme necessário
    });
});