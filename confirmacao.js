

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

function formatarTelefone(input) {
    const telefone = input.value.replace(/\D/g, '');

    if (telefone.length < 10 || telefone.length > 12) {
        input.setCustomValidity("Informe um número de telefone válido.");
    } else {
        input.setCustomValidity("");
    }

    if (telefone.length === 11) {
        input.value = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (telefone.length === 10) {
        input.value = telefone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const telefoneInput = document.getElementById('telefone');
    telefoneInput.addEventListener('input', function () {
        formatarTelefone(this);
    });
});
