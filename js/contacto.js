//AlertEscritura
let InputCorreo = document.getElementById("InputCorreo");
let AlertEscritura = document.getElementById("AlertEscritura");
let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
let btnEnviar = document.getElementById("btnEnviar");



btnEnviar.addEventListener("click", function(event){
    event.preventDefault();

    if (InputCorreo.value.match(emailRegex) == null) {

        AlertEscritura.style.display = "block";
        AlertEscritura.innerHTML += "<br/>El correo electrónico no es válido.";
        InputCorreo.style.border = "solid red 1px"; 

    }
    else{
        InputCorreo.style.border = "solid green 1px";

    }

});