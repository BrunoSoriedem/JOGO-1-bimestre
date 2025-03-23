// Seleciona o botão pelo id
const enviarButton = document.getElementById('enviar-btn');

// Adiciona um evento de clique ao botão
enviarButton.addEventListener('click', function (event) {
    event.preventDefault();

    enviarEmail();
});


function enviarEmail() {

    Swal.fire({
        position: "center",
        icon: "success",
        title: "E-mail enviado com sucesso!",
        showConfirmButton: false,
        timer: 1500
    });

}