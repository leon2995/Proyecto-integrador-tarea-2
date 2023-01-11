let inputNombre = document.getElementById("InputNombre");
let InputComentario=document.getElementById("InputComentario");

let Alert=document.getElementById("Alert");
let btnEnviar=document.getElementById("btnEnviar");
let imagen=document.getElementById("imagen");

let validos = 0;

btnEnviar.addEventListener("click",function(event) {
    event.preventDefault();
    Alert.style.display="none";
    inputNombre.innerHTML="";
    if (inputNombre.value.length < 3) {
        Alert.innerHTML +="El mensaje debe contener 3 caracteres o más.";
        Alert.style.display="block";
         inputNombre.focus();
         inputNombre.select();
         inputNombre.style.border = "solid red 1px";   
    }else{
        inputNombre.style.border = "solid green 1px";
        validos++;
    }// else

    InputComentario.innerHTML="";
    if (InputComentario.value.length < 5|| InputComentario.value.length > 250) {
        Alert.innerHTML +="<br/>El comentario debe contener mas de 5 caracteres y menos de 250 caracteres (Cpontando espacios).";
        Alert.style.display="block";
        InputComentario.focus();
        InputComentario.select();
        InputComentario.style.border = "solid red 1px";   
    }else{
        InputComentario.style.border = "solid green 1px";
        validos++;
    }// else
    
    if(validos == 2){
        setTimeout(function(){
            inputNombre.style.border ="";
            InputComentario.style.border ="";
            Swal.fire(
                '!Se agrego exitosamente!',
                'You clicked the button!',
                'success'
            ) 
              /* Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: '!Se agrego exitosamente! ',
                showConfirmButton: false,
                timer: 1500
              }) */
        }, 1000)
    }//==4


});



addItem({'img1':'https://a.cdn-hotels.com/gdcs/production76/d1681/e2088a33-187a-4e40-b014-f7442c831f68.jpg?impolicy=fcrop&w=800&h=533&q=medium',
'img2':'https://content.r9cdn.net/rimg/dimg/99/b2/20036525-city-18853-1653972eb13.jpg?crop=true&width=1366&height=768&xhint=1500&yhint=1333',
'img3':'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/62000/62698-Rotonda-De-Los-Hombres-Ilustres.jpg',
'title': "GUADALAJARA", 
'resume':'Esta es la capital de uno de los estados más llenos de cultura en México, además de ser una ciudad famosa por el tequila y los mariachis. Definitivamente, es un paraíso para los fanáticos de la cultura mexicana.'}
);

