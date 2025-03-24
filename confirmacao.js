const enviarButton = document.getElementById('enviar-btn');

enviarButton.addEventListener('click', function (event) {
    event.preventDefault();

    Swal.fire({
        position: "center",
        icon: "success",
        title: "E-mail enviado com sucesso!",
        showConfirmButton: false,
        timer: 1500
    }).then(() => {

        document.querySelector('form').submit();
    });
});