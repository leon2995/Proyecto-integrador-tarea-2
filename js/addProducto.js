let inputNombre = document.getElementById("InputNombre");
let InputPrecio=document.getElementById("InputPrecio");
let InputComentario=document.getElementById("InputComentario");
let UploadImg=document.getElementById("seleccionArchivos");

let Alert=document.getElementById("Alert");
let btnEnviar=document.getElementById("btnEnviar");
let fileImage=document.getElementById("imagen");
let base64 = '';
let preview= document.getElementById('imageFile');

let validos = 0;
const regexImg = new RegExp(/[^\s]+(.*?).(jpg|jpeg|png|JPG|JPEG|PNG)$/);

const $seleccionArchivos = document.querySelector("#seleccionArchivos"),
$imagenPrevisualizacion = document.querySelector("#imagenPrevisualizacion");

// Escuchar cuando cambie
$seleccionArchivos.addEventListener("change", () => {
  // Los archivos seleccionados, pueden ser muchos o uno
  const archivos = $seleccionArchivos.files;
  // Si no hay archivos salimos de la función y quitamos la imagen
  if (!archivos || !archivos.length) {
    $imagenPrevisualizacion.src = "";
    return;
  }
  // Ahora tomamos el primer archivo, el cual vamos a previsualizar
  const primerArchivo = archivos[0];
  // Lo convertimos a un objeto de tipo objectURL
  const objectURL = URL.createObjectURL(primerArchivo);
  // Y a la fuente de la imagen le ponemos el objectURL
  $imagenPrevisualizacion.src = objectURL;
});

btnEnviar.addEventListener("click",function(event) {
    event.preventDefault(); 
    Alert.style.display="none";
    console.log(UploadImg.value);
    if (inputNombre.value.length ==0 || inputNombre.value.length<2) {
        console.log(inputNombre.value.length);
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

            inputNombre.style.border = ""; 
            InputComentario.style.border = "";
            InputPrecio.style.border = "";
            UploadImg.style.border = "";
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
    }else if(InputComentario.value.trim().replaceAll('  ', '').length < 5|| InputComentario.value.length > 250) {
        Alert.innerHTML +="<br/>Debe contener una descripcion de mas de 5 caracteres y menos de 250 caracteres (Contando espacios).";
        Alert.style.display="block";
        InputComentario.focus();
        InputComentario.select();
        InputComentario.style.border = "solid red 1px";
        setTimeout(function(){
            Alert.style.display="none";
            Alert.innerHTML ="";
        }, 2000)
    } else if(UploadImg.value == false || UploadImg.value.match(regexImg) == null) {
        Alert.innerHTML +="<br/>Debes subir una imagen de tu producto con formato JPG, JPEG o PNG.";
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
    

        let data = [{ 
            "id": 1,
            "title": "Bernal",
            "resume": "Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso",
            "img": "/fotos/FotosActividades/ActBernal01.jpg",
            'img2':'/fotos/FotosActividades/ActBernal02.jpg',
            'img3':'/fotos/FotosActividades/ActBernal03.jpg', 
            "price": "$" + 1479,
            "text":"Suba a la cima del tercer monolito más alto del mundo durante esta excursión privada de un día completo desde la Ciudad de México a la Peña de Bernal, que incluye una visita a Tequisquiapan. Viaje cómodamente desde la capital en un vehículo con aire acondicionado con su propio conductor y guía personal. Combine la corta caminata con horas para explorar las pintorescas calles y las artesanías tradicionales de uno de los Pueblos Mágicos designados de México.",
          },
            {"id": 2,
            "title": "Mazatlan",
            "resume": "Las extensas y hermosas playas de Mazatlán, ubicado en el estado de Sinaloa, lo convierten en el destino playero más famoso del noroeste de México.",
            'img':'/fotos/FotosActividades/ActMazatlan01.jpg',
            'img2':'/fotos/FotosActividades/ActMazatlan02.jpg',
            'img3':'/fotos/FotosActividades/ActMazatlan03.jpg',
            "price": "$" + 3479,
            "text":"Olvídate del recorrido a pie: deslízate sin esfuerzo por Mazatlán y recorre dos siglos de su historia a bordo de un Segway. Durante esta visita guiada por el casco antiguo y el paseo marítimo, recorra lugares emblemáticos como la Plazuela Machado, la hermosa Catedral, Olas Altas y el Clavadista. Descubrirá más con menos esfuerzo y tiempo con un Segway. Este tour para grupos pequeños está limitado a seis personas, lo que garantiza una atención personalizada. Tour guiado en Segway por Mazatlán Navega por el casco antiguo y el paseo marítimo Admira la arquitectura de la ciudad y observa a los temerarios buceadores saltar desde un acantilado Aprende sobre los orígenes y la evolución de la ciudad. Elige entre varios horarios de salida El tour en grupos pequeños está limitado a seis personas",
            },
            {"id": 3,
            "title": "Oaxaca",
            "resume": "En Oaxaca puedes bailar sin parar en sus fechas de festividades y encontrar tiendas artesanales para comprar recuerdos para tus seres queridos. Aquí también encontrarás platillos exquisitos tradicionales de la región.",
            'img':'/fotos/FotosActividades/ActOaxaca01.jpg',
            'img2':'/fotos/FotosActividades/ActOaxaca02.jpg',
            'img3':'/fotos/FotosActividades/ActOaxaca03.jpg',
            "price": "$" + 2987,
            "text":"Tour por la Ciudad de Oaxaca es un tour que te permitirá conocer el centro de Oaxaca a pie, acompañado en todo momento de un guía. Comienza tu recorrido visitando el Templo de Santo Domingo, una muestra del barroco mexicano, construida por la orden dominica. Continúa tu camino sobre el andador turístico donde podrás ver varias tiendas, restaurantes, museos y galerías, hasta llegar al centro de la ciudad. En este sitio disfrutarás de la música de banda y marimba, además conocerás los portales ubicados en el Jardín de la Constitución. Durante este recorrido podrás disfrutar de una deliciosa nieve oaxaqueña o un Tejate bebida prehispánica refrescante. Para finalizar visitarás los dos mercados más famosos, 20 de Noviembre y Benito Juárez, dentro de ellos encontrarás una gran variedad de comida típica y productos de la región que seguramente no te resistirás a probarlos",
            },
            {"id": 4,
            "title": "Rivera Maya",
            "resume": "La riqueza natural, histórica y cultural de la Riviera Maya la convierten en un lugar único en el mundo. Los más de 100 km que la conforman, que van desde Puerto Morelos hasta Punta Allen, se componen por paraísos de arena blanca y aguas turquesas, propios del Mar Caribe.",
            'img':'/fotos/FotosActividades/ActRiveraMaya01.jpg',
            'img2':'/fotos/FotosActividades/ActRiveraMaya02.jpg',
            'img3':'/fotos/FotosActividades/ActRiveraMaya03.jpg',
            "price": "$" + 5700,
            "text":"El paraíso tiene un nuevo nombre: Isla Contoy, la única isla virgen del Caribe Mexicano. Prepárate para disfrutar y enamorarte de la belleza y actividades de este hermoso Parque Nacional. Si lo que buscas es disfrutar de una bella playa de arena fina y aguas tranquilas y cristalinas, te contamos por que debes visitar esta maravillosa isla, una auténtica joya natural. Relaja tu mente, cuerpo y alma y descubre una sensación de tranquilidad total, sus contrastes entre agua turquesa y arena blanca quedarán marcados a fuego en las retinas de todo aquel que la visite. Además disfrutarás de una actividad de snorkel en uno de los arrecifes de coral más grandes del mundo",
            },
            {"id": 5,
            "title": "San Miguel de Allende",
            "resume": "Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso",
            'img':'/fotos/FotosActividades/ActSMA01.jpg',
            'img2':'/fotos/FotosActividades/ActSMA02.jpg',
            'img3':'/fotos/FotosActividades/ActSMA03.jpg',
            "price": "$" + 1300,
            "text":"El recorrido cuenta con un guía que lo acercará a la arquitectura barroca de esta ciudad colonial durante un recorrido que incluye el mercado de artesanías. Luego podrá pasear por las calles empedradas por su cuenta por la tarde. Excursión de un día a San Miguel de Allende, ida y vuelta desde la Ciudad de México Visite una de las principales ciudades coloniales de México, a 3 o 4 horas en auto Explora las coloridas calles y la arquitectura histórica con un guía. Tenga tiempo libre para pasear por cafés, tiendas y plazas por su cuenta.",
            },
            {"id": 6,
            "title": "Valle de Bravo",
            "resume": "Valle de Bravo es un Pueblo Mágico localizado en las cercanías de Ciudad de México, que tiene mucha historia y bellos paisajes naturales. Un destino turístico ideal para descansar, relajarse y alejarse de la rutina de la gran ciudad, que también es conocido como ‘la Suiza de México’. El paisaje es encantador: una ciudad rodeada de montañas que están llenas de pinos. con un gran lago al costado. Calles empedradas y un aire colonial componen el ambiente ideal para una experiencia incomparable.",
            'img':'/fotos/FotosActividades/ActValleBravo01.jpg',
            'img2':'/fotos/FotosActividades/ActValleBravo02.jpg',
            'img3':'/fotos/FotosActividades/ActValleBravo03.jpg',
            "price": "$" + 2479,
            "text":"El Tour en Valle de Bravo o también conocido como Recorrido City Full es el recorrido más completo e importante que ofrecemos para visitar los principales sitios de interés que tiene Valle de Bravo como lo son: Cascada Velo de Novia, Stupa de la Paz, Avándaro Cascada del Molino, Cristo Negro, Árbol Ahuehuete, Centro Histórico, Muelle Municipal, Alameda y Mirador. Este tour es ideal si es de tus primeras veces que visitas Valle de Bravo y deseas conocer más.",
            },
            {"id": 7,
            "title": "Puerto Vallarta",
            "resume": "Puerto Vallarta es un destino internacionalmente reconocido por sus playas bañadas por el Pacífico, belleza natural e instalaciones de primer nivel que se mezclan con una cálida hospitalidad. Existe una infinidad de lugares por descubrir y elegir tu favorita; tarea nada fácil, pues cada una de las playas de Puerto Vallarta cuenta con un encanto particular",
            'img':'/fotos/FotosActividades/ActPVallarta01.jpg',
            'img2':'/fotos/FotosActividades/ActPVallarta02.jpg',
            'img3':'/fotos/FotosActividades/ActPVallarta03.jpg',
            "price": "$" + 4500,
            "text":"Pocas experiencias se comparan a nadar con los delfines en su hábitat natural y Puerto Vallarta es el hogar de un gran número de ellos. Conoce más sobre estos simpáticos mamíferos y su comportamiento así como la organización de sus grupos sociales mientras te deslizas por el agua tomado de sus aletas. Los delfines son animales sociables que disfrutan de la interacción con los humanos, por lo que puedes convivir con estas maravillosas criaturas sabiendo que el bienestar de los delfines es una prioridad para Puerto Vallarta, y todas las actividades certificadas son seguras para ti y para ellos.",
            },
            {"id": 8,
            "title": "Los Cabos",
            "resume": "Reconocido por su belleza natural, Los Cabos es un destino de clase mundial compuesto de hermosos paisajes desérticos y tropicales. Ofrece hoteles de lujo, playas galardonadas, buen clima durante todo el año y cocina de renombre a nivel internacional con chefs poseedores de estrellas Michelin. Hogar del icónico Arco, donde se encuentran el Mar de Cortés y el Océano Pacífico",
            'img':'/fotos/FotosActividades/ActLosCabos01.jpg',
            'img2':'/fotos/FotosActividades/ActLosCabos02.jpg',
            'img3':'/fotos/FotosActividades/ActLosCabos03.jpg',
            "price": "$" + 4620,
            "text":"Disfrute del recorrido por los principales lugares de Cabo, guarde un recuerdo en la famosa roca “El arco”, además  este tour cuenta con un recorrido  de observación de ballenas y fauna marina en grupos pequeños en Cabo San Lucas, sabiendo cómodamente que su guía es un biólogo marino que brinda solo recorridos educativos y no invasivos. Aprende todo sobre las especies que ves, que pueden incluir jorobadas, delfines, tortugas marinas e incluso a veces ballenas grises, espermatozoides, azules y asesinas.",
            },
            {"id": 9,
            "title": "Michoacan",
            "resume": "Cada año, millones de lepidópteros anaranjados recorren más de 8,000 kilómetros (desde el sur de Canadá y norte de Estados Unidos) para cubrir los árboles de oyamel, pino y cedro de la entidad michoacana con el objetivo de hibernar. Este magnífico fenómeno ocurre en la Reserva de la Biosfera de la Mariposa Monarca, considerada Patrimonio de la Humanidad por la UNESCO",
            'img':'/fotos/FotosActividades/ActMariposas01.jpg',
            'img2':'/fotos/FotosActividades/ActMariposas02.jpg',
            'img3':'/fotos/FotosActividades/ActMariposas03.jpg',
            "price": "$" + 2890,
            "text":"Escape de la ciudad con una visita memorable al santuario de la mariposa monarca, donde estas coloridas mariposas pasan sus inviernos después de viajar más de 4000 kilómetros (2500 millas) desde Estados Unidos y Canadá. Esta excursión sin complicaciones incluye recogida en el hotel y traslado de ida y vuelta, almuerzo y una visita al pueblo mágico de El Oro.",
            },
            {"id": 10,
            "title": "Guadalajara",
            "resume": "Esta es la capital de uno de los estados más llenos de cultura en México, además de ser una ciudad famosa por el tequila y los mariachis. Definitivamente, es un paraíso para los fanáticos de la cultura mexicana.",
            'img':'/fotos/FotosActividades/ActGuadalajara01.jpg',
            'img2':'/fotos/FotosActividades/ActGuadalajara02.jpg',
            'img3':'/fotos/FotosActividades/ActGuadalajara03.jpg',
            "price": "$" + 3200,
            "text":"Recorrido turístico en Guadalajara para conocer la ciudad. Se inicia conociendo la zona de La Minerva, Los Arcos de Guadalajara, el impresionante puente atirantado “Puente Matute Remus, para luego circular por la zona más exclusiva de Guadalajara en el siglo XVIII. Paramos en una de las iglesias más bellas de la Perla Tapatía: El Expiatorio, donde después de una reseña de la historia conoceremos su interior. Diviértete en el parían del nuevo Pueblo Mágico de Tlaquepaque, lugar de bellas artesanías, galerías y restaurantes, compra souvenirs tradicionales de la región",
            },
            
        //let data
        ];

    

    if(validos == 4){
        localStorage.setItem('obj', JSON.stringify(data));
        setTimeout(function(){
           /*  data.push( {"id": 11,
            "title": `"${inputNombre.value}"`,
            "resume": `"${InputComentario.value}"`,
            'img':'/fotos/FotosActividades/ActGuadalajara01.jpg',
            'img2':'/fotos/FotosActividades/ActGuadalajara02.jpg',
            'img3':'/fotos/FotosActividades/ActGuadalajara03.jpg',
            "price": "$" + `${InputPrecio.value}`,
            "text":"Recorrido turístico en Guadalajara para conocer la ciudad. Se inicia conociendo la zona de La Minerva, Los Arcos de Guadalajara, el impresionante puente atirantado “Puente Matute Remus, para luego circular por la zona más exclusiva de Guadalajara en el siglo XVIII. Paramos en una de las iglesias más bellas de la Perla Tapatía: El Expiatorio, donde después de una reseña de la historia conoceremos su interior. Diviértete en el parían del nuevo Pueblo Mágico de Tlaquepaque, lugar de bellas artesanías, galerías y restaurantes, compra souvenirs tradicionales de la región",
            }) */
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

});

let productNameRegex = /^[A-Z][a-z\s]*$/;
function validate(input) {
    let value = input.value;
    let isValid = productNameRegex.test(value);
    input.style.borderColor = isValid ? "green" : "red";
}


function validateNumbers(input) {
    let value = input.value;
    let isValid = !isNaN(value) && value > 0;
    input.style.borderColor = isValid ? "green" : "red";
}

let productDescriptionRegex = /^[a-zA-Z0-9\s,\.\?]*$/;
function validateDescripcion(input) {
    let value = input.value;
    let isValid = productDescriptionRegex.test(value);
    input.style.borderColor = isValid ? "green" : "red";
}

regexImg
function validateInputFormatIMG(input) {
    let value = input.value;
    let isValid = regexImg.test(value);
    input.style.borderColor = isValid ? "green" : "red";
}

/* addItem({'img1':'https://a.cdn-hotels.com/gdcs/production76/d1681/e2088a33-187a-4e40-b014-f7442c831f68.jpg?impolicy=fcrop&w=800&h=533&q=medium',
'img2':'https://content.r9cdn.net/rimg/dimg/99/b2/20036525-city-18853-1653972eb13.jpg?crop=true&width=1366&height=768&xhint=1500&yhint=1333',
'img3':'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/62000/62698-Rotonda-De-Los-Hombres-Ilustres.jpg',
'title': "GUADALAJARA", 
'resume':'Esta es la capital de uno de los estados más llenos de cultura en México, además de ser una ciudad famosa por el tequila y los mariachis. Definitivamente, es un paraíso para los fanáticos de la cultura mexicana.'}
);
 */
