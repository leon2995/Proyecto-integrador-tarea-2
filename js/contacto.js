let InputCorreo = document.getElementById("InputCorreo");
let AlertEscritura = document.getElementById("AlertEscritura");
let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
let btnEnviar = document.getElementById("btnEnviar");
let InputNombre = document.getElementById("InputNombre");
let InputTelefono = document.getElementById("InputTelefono");
let InputComentario = document.getElementById("InputComentario");
let alertSuccess = document.getElementById('alert-success');
let idTimeout;
let validos = 0;


btnEnviar.addEventListener("click", function(event){
    event.preventDefault();
    AlertEscritura.style.display="none";
    if(InputTelefono.value.length < 10 ){
        AlertEscritura.style.display = "block";
        AlertEscritura.innerHTML += "<br/>Debes ingresar un numero válido.";
        InputTelefono.style.border = "solid red 1px"; 
    }  else{
        InputTelefono.style.border = "solid green 1px";
        validos++;
    }// else
    

    if (InputCorreo.value.match(emailRegex) == null) {
        AlertEscritura.style.display = "block";
        AlertEscritura.innerHTML += "<br/>El correo electrónico no es válido.";
        InputCorreo.style.border = "solid red 1px"; 
    }// if
    else{
        InputCorreo.style.border = "solid green 1px";
        validos++;
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
        validos++;
    }// else

    if (InputComentario.value.trim().length < 5){
        AlertEscritura.innerHTML = "El comentario debe de contener 5 caracteres o más";
        AlertEscritura.style.display= "block";
        InputComentario.focus(); 
        InputComentario.select();
        InputComentario.style.border = "solid red 1px";
        
    }//if
    else{
        InputComentario.style.border = "solid green 1px";
        validos++;
    }//else
   
  
    if(validos == 4){    
   
    console.log(InputCorreo.value);
    Email.send({
    Host : "smtp.elasticemail.com",
        Username : "aajolote9.adventure@gmail.com",
            Password : "1B35D6E2483ABB0DFB136766A57A96C6E0F2",
            To : 'aajolote9.adventure@gmail.com',
            From : 'aajolote9.adventure@gmail.com', 
        Subject : "Adventure Travel Contact",
        Body : ` ${InputNombre.value} quiere ponerse en contacto.
            Su correo es: ${InputCorreo.value}.
            Su telefono es: ${InputTelefono.value}.
            Su comentario:  ${InputComentario.value} `
        }).then((message) => alert(message));//then 
        setTimeout(function () {
            InputCorreo.style.border ="";
            InputNombre.style.border ="";
            InputTelefono.style.border ="";
            InputComentario.style.border =""; 
            alertSuccess.innerHTML = "Su mensaje fue enviado con éxito ";
            alertSuccess.style.display = 'block';
                         }, 2000);
        
          
    }//==4 
});//Email send
