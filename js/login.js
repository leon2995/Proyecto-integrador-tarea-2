let btnIniciar = document.getElementById('btn-iniciar');
let dataUser = localStorage.getItem('dataUser');
if (dataUser) {
    dataUser = JSON.parse(dataUser);
} else {
    dataUser = [];
}

// Manejo de eventos
btnIniciar.addEventListener('click', function (event) {
    event.preventDefault();
    let inputEmail = document.getElementById('correo');
    let inputPassword = document.getElementById('password');
    let alertError = document.getElementById('alert-error');
    let alertSuccess = document.getElementById('alert-success');

    alertError.style.display = 'none';
    alertError.innerHTML = '';
    alertSuccess.style.display = 'none';
    alertSuccess.innerHTML = '';

    // Validar que el correo y la contraseña existan en el Local Storage
    let usuarioEncontrado = false;
    for (let i = 0; i < dataUser.length; i++) {
        if (dataUser[i].correo === inputEmail.value && dataUser[i].password === inputPassword.value) {
            usuarioEncontrado = true;
            break;
        }
    }

    if (usuarioEncontrado) {
        // Redireccion en caso exitoso
        window.location.href ="/index.html";
    } else {
        
        // Mostrar mensaje de error si la validacion falla
        alertError.innerHTML = 'El correo electrónico o la contraseña son incorrectos.';
        alertError.style.display = 'block';
    }
});