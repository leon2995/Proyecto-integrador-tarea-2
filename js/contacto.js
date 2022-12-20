
let InputCorreo = document.getElementById("InputCorreo");
let AlertEscritura = document.getElementById("AlertEscritura");
let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
let btnEnviar = document.getElementById("btnEnviar");
let InputNombre = document.getElementById("InputNombre");
let InputTelefono = document.getElementById("InputTelefono");


btnEnviar.addEventListener("click", function(event){
    event.preventDefault();

    if (InputCorreo.value.match(emailRegex) == null) {
        AlertEscritura.style.display = "block";
        AlertEscritura.innerHTML += "<br/>El correo electrónico no es válido.";
        InputCorreo.style.border = "solid red 1px"; 
    }// if
    else{
        InputCorreo.style.border = "solid green 1px";

    }// else

    InputNombre.innerHTML="";
    if (InputNombre.value.length < 3) {
        AlertEscritura.innerHTML = "El mensaje debe contener 3 caracteres o más.";
        AlertEscritura.style.display="block";
         InputNombre.focus();
         InputNombre.select();
         InputNombre.style.border = "solid red 1px";   
    }
    else{
        InputNombre.style.border = "solid green 1px";

    }// else
    /*InputTelefono.innerHTML="";
    if (InputTelefono.value.length < 3) {
        AlertEscritura.innerHTML = "El mensaje debe contener 3 caracteres o más.";
        AlertEscritura.style.display="block";
        InputTelefono.focus();
        InputTelefono.select();
        InputTelefono.style.border = "solid red 1px";   
    }
    else{
        InputTelefono.style.border = "solid green 1px";

    }*/

});//btEnviar