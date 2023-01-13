const InputNombre = document.getElementById("InputNombre")
const InputNumero = document.getElementById("InputNumero")
const InputCorreo = document.getElementById("InputCorreo")
const InputContraseña = document.getElementById("InputContraseña")
const parrafo = document.getElementById("warnings")
let btnEnviar=document.getElementById("btnEnviar");

btnEnviar.addEventListener("click",function(event) {
    event.preventDefault();
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(InputNombre.value.length <3){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }//if
    if(InputNumero.value.length <10){
        warnings += `El número no es válido <br>`
        entrar = true
    }//if
    if(!regexEmail.test(InputCorreo.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }//if
    if(InputContraseña.value.length < 4){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }//if

    if(entrar){
        parrafo.innerHTML = warnings
    }//if
    
    else{
        parrafo.innerHTML = "Enviado"
    }//else
});//event,clik