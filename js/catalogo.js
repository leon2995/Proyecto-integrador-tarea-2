let itemsContainer= document.getElementById ("CardItems");
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
    "title": "San Miguel de Ayende",
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
    
//Se agregaron los 10 productos
    // Los carruseñes cuentan con sus propios id
    //cada uno de los productos cuentan con su precio, y texto para las tarjetas todo se manejo como areglo de objetos
//let data
]
function getData() {
    setTimeout(()=>{ 
        console.log(data);},2000);
    return new Promise( (resolve, reject) =>{
    if(data==null){
    reject(new Error("No existen datos"));
    };//if data == null
    setTimeout(()=>resolve(data), 2000);
    } );
}//function getData
async function accessData() {
    const prod = await getData();
}//async function
accessData();
getData().then((datos)=>{
    console.log(datos);
    addItem(data);
    }).catch((error)=> console.error(error.message));
// Inician cards y carrusel ( recuerda que se usaron dos tipos de cards de bootstrap)
// cada paquete iten esta anclado con los id de carusel para que recorra cada uno done debe ser cada producto
// las imagenes cuentan con su propio item.img que a su vez cuenta con 3 imagenes
function addItem(items){
    items.forEach(item => {
        itemsContainer.insertAdjacentHTML("beforeend",`
        <div class="card mb-3 card border-0" style="width: 5040px;" data-ride="carousel">
        <div class="row g-0">
          <div class="col-md-4">
          <div id="carouselExample_${item.id}" class="carousel slide card-img-top">
          <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="${item.img}" class="d-block w-100" alt="..." >
          
            </div>
          <div class="carousel-item ">
                <img src="${item.img2}" class="d-block w-100" alt="..." >
              </div>
              <div class="carousel-item">
                <img src="${item.img3}" class="d-block w-100" alt="...">
              </div>
              </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample_${item.id}" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample_${item.id}" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
            </div>
            </div>
          <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.resume}</p>
          
        <div  class="position-absolute bottom-0 end-0  d-grid gap-2 col-2 mx-auto"><a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal_${item.id}">Ver más</a></div>  
        <!-- Modal -->
<div class="modal fade" id="exampleModal_${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel">Paquete</h3>
      
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <h2 class="card-text1">Tour ${item.title}</h2>
      <div class="descripcion">
      ${item.text}

<div class="precio">
     <h1 > ${item.price}</h1>
     </div>
      </div>
      <div class="modal-footer">
       
        <button type="button" class="btn btn-primary">Agregar al carrito <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg></button>
        
      </div>
    </div>
  </div>
</div>
           </div>
        </div>
      </div>
    </div> `);   
    });
  }
// en el body de la cars se agregraron lo s item de resumen y titulo
// Card emergente cuenta con sus propios item de precio y text, se repite item..title 
// item,id esta anclado al id de la card para que sea independiente cada una.
//Se agrego un boton de agregar a carrito con un icono de carrito todo de bootstrap con una etiqueta svg