const form = document.querySelector('form');

form.addEventListener('submit', function (event) {

    event.preventDefault();

    if (form.checkValidity()) {

        Swal.fire({
            position: "center",
            icon: "success",
            title: "E-mail enviado com sucesso!",
            showConfirmButton: false,
            timer: 1500
        }).then(() => {

            form.submit();
        });
    } else {

        form.reportValidity();
    }
});