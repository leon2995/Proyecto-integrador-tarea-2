//Variables globales
let btnEnviar = document.getElementById('btn-enviar');
let dataUser = JSON.parse(localStorage.getItem('dataUser')) || [];

// Validaciones
function validaNombre(nombre) {
  return nombre.trim().replace(/ /g, '').length >= 3;
}
function validaCorreo(correo) {
    let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return correo.match(email) !== null;
}
function validaTelefono(telefono) {
  let telefonoRegex = /^\d{10}$/;
  return telefono.match(telefonoRegex) !== null;
}
function validaPassword(password) {
  let passwordRegex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
  return password.match(passwordRegex) !== null;
}

// Manejo de eventos
btnEnviar.addEventListener('click', function (event) {
    event.preventDefault();
    let inputNombre = document.getElementById('nombre');
    let inputEmail = document.getElementById('correo');
    let inputTel = document.getElementById('telefono');
    let inputPassword = document.getElementById('password');
    let alertError = document.getElementById('alert-error');
    let alertSuccess = document.getElementById('alert-success');

    alertError.style.display = 'none';
    alertError.innerHTML = '';

    if (validaNombre(inputNombre.value) &&
        validaCorreo(inputEmail.value) &&
        validaTelefono(inputTel.value) &&
        validaPassword(inputPassword.value)) {
            // Agregar los datos del usuario al arreglo
            dataUser.push({
              nombre: inputNombre.value,
              correo: inputEmail.value,
              telefono: inputTel.value,
              password: inputPassword.value
          });
  
          // Almacenar el objeto en el LocalStorage
          localStorage.setItem('dataUser', JSON.stringify(dataUser));
  
          // Mostrar mensaje de éxito
          alertSuccess.innerHTML = "Registro exitoso";
          alertSuccess.style.display = 'block';
          inputNombre.value = '';
          inputEmail.value = '';
          inputTel.value = '';
          inputPassword.value = '';
      } else {
          // Mostrar mensajes de error
          if (!validaNombre(inputNombre.value)) {
              alertError.innerHTML += 'El nombre debe contener 3 caracteres o más.';
          }
          if (!validaCorreo(inputEmail.value)) {
              alertError.innerHTML += 'El correo electrónico no es válido.';
          }
          if (!validaTelefono(inputTel.value)) {
              alertError.innerHTML += 'El teléfono no es válido.';
          }
          if (!validaPassword(inputPassword.value)) {
              alertError.innerHTML += 'La contraseña no es válida.';
          }
          alertError.style.display = 'block';
      }
      
  });