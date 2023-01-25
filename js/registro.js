let btnEnviar = document.getElementById("btn-enviar");
let dataUser = JSON.parse(localStorage.getItem("dataUser")) || [];
let inputNombre = document.getElementById("nombre");
let inputEmail = document.getElementById("correo");
let inputTel = document.getElementById("telefono");
let inputPassword = document.getElementById("password");
let inputPasswordR = document.getElementById("passwordR");
let alertError = document.getElementById("alert-error");
let alertSuccess = document.getElementById("alert-success");

// Validaciones
function validaNombre(nombre) {
  return nombre.trim().replace(/ /g, "").length >= 3;
}
function validaCorreo(correo) {
  let email =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return correo.match(email) !== null;
}
function validaTelefono(telefono) {
  let telefonoRegex = /^\d{10}$/;
  return telefono.match(telefonoRegex) !== null;
}
function validaPassword(password) {
  let passwordRegex =
    /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
  return password.match(passwordRegex) !== null;
}
function validaPasswordR(password, passwordR) {
  if (password == passwordR) {
    return true !== null;
  }
}

btnEnviar.addEventListener("click", function (event) {
  event.preventDefault();

  if (
    validaNombre(inputNombre.value) &&
    validaCorreo(inputEmail.value) &&
    validaTelefono(inputTel.value) &&
    validaPassword(inputPassword.value)
  ) {
    // Agregar los datos del usuario al arreglo
    dataUser.push({
      nombre: inputNombre.value,
      correo: inputEmail.value,
      telefono: inputTel.value,
      password: inputPassword.value,
    });

    // Almacenar el objeto en el LocalStorage
    localStorage.setItem("dataUser", JSON.stringify(dataUser));

    // Mostrar mensaje de éxito
    //alertSuccess.innerHTML = "Registro exitoso";
    //alertSuccess.style.display = 'block';
    Swal.fire("Registro Exitoso!", "", "success");
    inputNombre.value = "";
    inputEmail.value = "";
    inputTel.value = "";
    inputPassword.value = "";
    inputPasswordR.value = "";
  } else {
    // Mostrar mensajes de error
    if (!validaNombre(inputNombre.value)) {
      alertError.style.display = "block";
      alertError.innerHTML += "El nombre debe contener 3 caracteres o más.";
      inputNombre.style.border = "solid red 2px";
    }
    if (!validaCorreo(inputEmail.value)) {
      alertError.style.display = "block";
      alertError.innerHTML += "<br/>El correo electrónico no es válido.";
      inputEmail.style.border = "solid red 2px";
    }
    if (!validaTelefono(inputTel.value)) {
      alertError.style.display = "block";
      alertError.innerHTML += "<br/>El teléfono no es válido.";
      inputTel.style.border = "solid red 2px";
    }
    if (!validaPassword(inputPassword.value)) {
      alertError.style.display = "block";
      alertError.innerHTML +=
        "<br/>La contraseña debe contener Numeros, letras mayúsculas, minúsculas, y un carácter especial con almenos 8 caracteres";
      inputPassword.style.border = "solid red 2px";
    }
    if (!validaPasswordR(inputPassword.value, inputPasswordR.value)) {
      alertError.style.display = "block";
      alertError.innerHTML += "<br/>La contraseña no coincide";
      inputPasswordR.style.border = "solid red 2px";
    }
    //alertError.style.display = 'block';
    setTimeout(() => {
      alertError.style.display = "none";
      alertError.innerHTML = "";
      inputNombre.style.border = "";
      inputEmail.style.border = "";
      inputTel.style.border = "";
      inputPassword.style.border = "";
      inputPasswordR.style.border = "";
    }, 4000);
  }
});
