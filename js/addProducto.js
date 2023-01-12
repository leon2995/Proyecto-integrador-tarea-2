let inputNombre = document.getElementById("InputNombre");
let InputPrecio=document.getElementById("InputPrecio");
let InputComentario=document.getElementById("InputComentario");
let UploadImg=document.getElementById("inputGroupImg04");

let Alert=document.getElementById("Alert");
let btnEnviar=document.getElementById("btnEnviar");
let imagen=document.getElementById("imagen");

let validos = 0;

btnEnviar.addEventListener("click",function(event) {
    event.preventDefault();
    Alert.style.display="none";
    console.log(UploadImg.value);
    if (inputNombre.value.length ==0 || inputNombre.value.length<2) {
        Alert.innerHTML ="Debes ingresar tu nombre .";
        Alert.style.display="block";
        inputNombre.focus();
        inputNombre.select();
        inputNombre.style.border = "solid red 1px"; 
        InputComentario.style.border = "solid red 1px";
        InputPrecio.style.border = "solid red 1px";
        UploadImg.style.border = "solid red 1px";
        setTimeout(function(){
            Alert.style.display="none";
            Alert.innerHTML ="";
        }, 2000)
        
    }else if (InputPrecio.value.length == 0) {
        Alert.innerHTML += "<br/> Debes ingresar un precio";
        Alert.style.display="block";
        InputPrecio.focus();
        InputPrecio.select();
        InputPrecio.style.border = "solid red 1px";
        
        setTimeout(function(){
            Alert.style.display="none";
            Alert.innerHTML ="";
        }, 2000)
    }else if(InputComentario.value.length == 0) {
        Alert.innerHTML +="<br/>Debes Agregar una descripción";
        Alert.style.display="block";
        InputComentario.focus();
        InputComentario.select();
        InputComentario.style.border = "solid red 1px";
        setTimeout(function(){
            Alert.style.display="none";
            Alert.innerHTML ="";
        }, 2000) 
    }else if(InputComentario.value.length < 5|| InputComentario.value.length > 250) {
        Alert.innerHTML +="<br/>Debe contener una descripcion de mas de 5 caracteres y menos de 250 caracteres (Contando espacios).";
        Alert.style.display="block";
        InputComentario.focus();
        InputComentario.select();
        InputComentario.style.border = "solid red 1px";
        setTimeout(function(){
            Alert.style.display="none";
            Alert.innerHTML ="";
        }, 2000)
    } else if(UploadImg.value == false) {
        Alert.innerHTML +="<br/>Debes subir una imagen de tu producto";
        Alert.style.display="block";
        UploadImg.focus();
        UploadImg.select();
        UploadImg.style.border = "solid red 1px";
        setTimeout(function(){
            Alert.style.display="none";
            Alert.innerHTML ="";
        }, 2000)
        
    } else{
            inputNombre.style.border = "solid green 2px";
            validos++;
            InputPrecio.style.border = "solid green 2px";
            validos++;
            InputComentario.style.border = "solid green 2px";
            validos++;
            UploadImg.style.border = "solid green 2px";
            validos++;
        }// else
    


    if(validos == 4){
        setTimeout(function(){
            inputNombre.style.border ="";
            InputPrecio.style.border ="";
            InputComentario.style.border ="";
            UploadImg.style.border = "";
            inputNombre.value = "";
            InputPrecio.value ="";
            InputComentario.value ="";
            UploadImg.value="";
        }, 1000)
        Swal.fire(
            '¡Se agrego exitosamente!',
            '',
            'success'
        ) 
    }//==4

    setTimeout(function(){
        
    }, 2000)


});


/* addItem({'img1':'https://a.cdn-hotels.com/gdcs/production76/d1681/e2088a33-187a-4e40-b014-f7442c831f68.jpg?impolicy=fcrop&w=800&h=533&q=medium',
'img2':'https://content.r9cdn.net/rimg/dimg/99/b2/20036525-city-18853-1653972eb13.jpg?crop=true&width=1366&height=768&xhint=1500&yhint=1333',
'img3':'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/62000/62698-Rotonda-De-Los-Hombres-Ilustres.jpg',
'title': "GUADALAJARA", 
'resume':'Esta es la capital de uno de los estados más llenos de cultura en México, además de ser una ciudad famosa por el tequila y los mariachis. Definitivamente, es un paraíso para los fanáticos de la cultura mexicana.'}
);
 */
