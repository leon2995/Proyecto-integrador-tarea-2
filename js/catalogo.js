let itemsContainer= document.getElementById ("CardItems");
let data = [{ 
    "id": 1,
    "title": "Bernal",
    "resume": "Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso",
    "img": "/fotos/FotosActividades/ActBernal01.jpg",
    'img2':'/fotos/FotosActividades/ActBernal02.jpg',
    'img3':'/fotos/FotosActividades/ActBernal03.jpg', 
    "price": 2479},
    {"id": 2,
    "title": "Mazatlan",
    "resume": "Las extensas y hermosas playas de Mazatlán, ubicado en el estado de Sinaloa, lo convierten en el destino playero más famoso del noroeste de México.",
    'img':'/fotos/FotosActividades/ActMazatlan01.jpg',
    'img2':'/fotos/FotosActividades/ActMazatlan02.jpg',
    'img3':'/fotos/FotosActividades/ActMazatlan03.jpg',
    "price": 2479},
    {"id": 3,
    "title": "Oaxaca",
    "resume": "En Oaxaca puedes bailar sin parar en sus fechas de festividades y encontrar tiendas artesanales para comprar recuerdos para tus seres queridos. Aquí también encontrarás platillos exquisitos tradicionales de la región.",
    'img':'/fotos/FotosActividades/ActOaxaca01.jpg',
    'img2':'/fotos/FotosActividades/ActOaxaca02.jpg',
    'img3':'/fotos/FotosActividades/ActOaxaca03.jpg',
    "price": 2479},
    {"id": 4,
    "title": "Rivera Maya",
    "resume": "La riqueza natural, histórica y cultural de la Riviera Maya la convierten en un lugar único en el mundo. Los más de 100 km que la conforman, que van desde Puerto Morelos hasta Punta Allen, se componen por paraísos de arena blanca y aguas turquesas, propios del Mar Caribe.",
    'img':'/fotos/FotosActividades/ActRiveraMaya01.jpg',
    'img2':'/fotos/FotosActividades/ActRiveraMaya02.jpg',
    'img3':'/fotos/FotosActividades/ActRiveraMaya03.jpg',
    "price": 2479},
    {"id": 5,
    "title": "San Miguel de Ayende",
    "resume": "Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso",
    'img':'/fotos/FotosActividades/ActSMA01.jpg',
    'img2':'/fotos/FotosActividades/ActSMA02.jpg',
    'img3':'/fotos/FotosActividades/ActSMA03.jpg',
    "price": 2479},
    {"id": 6,
    "title": "Valle de Bravo",
    "resume": "Valle de Bravo es un Pueblo Mágico localizado en las cercanías de Ciudad de México, que tiene mucha historia y bellos paisajes naturales. Un destino turístico ideal para descansar, relajarse y alejarse de la rutina de la gran ciudad, que también es conocido como ‘la Suiza de México’. El paisaje es encantador: una ciudad rodeada de montañas que están llenas de pinos. con un gran lago al costado. Calles empedradas y un aire colonial componen el ambiente ideal para una experiencia incomparable.",
    'img':'/fotos/FotosActividades/ActValleBravo01.jpg',
    'img2':'/fotos/FotosActividades/ActValleBravo02.jpg',
    'img3':'/fotos/FotosActividades/ActValleBravo03.jpg',
    "price": 2479},
    {"id": 7,
    "title": "Puerto Vallarta",
    "resume": "Puerto Vallarta es un destino internacionalmente reconocido por sus playas bañadas por el Pacífico, belleza natural e instalaciones de primer nivel que se mezclan con una cálida hospitalidad. Existe una infinidad de lugares por descubrir y elegir tu favorita; tarea nada fácil, pues cada una de las playas de Puerto Vallarta cuenta con un encanto particular",
    'img':'/fotos/FotosActividades/ActPVallarta01.jpg',
    'img2':'/fotos/FotosActividades/ActPVallarta02.jpg',
    'img3':'/fotos/FotosActividades/ActPVallarta03.jpg',
    "price": 2479},
    {"id": 8,
    "title": "Los Cabos",
    "resume": "Reconocido por su belleza natural, Los Cabos es un destino de clase mundial compuesto de hermosos paisajes desérticos y tropicales. Ofrece hoteles de lujo, playas galardonadas, buen clima durante todo el año y cocina de renombre a nivel internacional con chefs poseedores de estrellas Michelin. Hogar del icónico Arco, donde se encuentran el Mar de Cortés y el Océano Pacífico",
    'img':'/fotos/FotosActividades/ActLosCabos01.jpg',
    'img2':'/fotos/FotosActividades/ActLosCabos02.jpg',
    'img3':'/fotos/FotosActividades/ActLosCabos03.jpg',
    "price": 2479},
    {"id": 9,
    "title": "Michoacan",
    "resume": "Cada año, millones de lepidópteros anaranjados recorren más de 8,000 kilómetros (desde el sur de Canadá y norte de Estados Unidos) para cubrir los árboles de oyamel, pino y cedro de la entidad michoacana con el objetivo de hibernar. Este magnífico fenómeno ocurre en la Reserva de la Biosfera de la Mariposa Monarca, considerada Patrimonio de la Humanidad por la UNESCO",
    'img':'/fotos/FotosActividades/ActMariposas01.jpg',
    'img2':'/fotos/FotosActividades/ActMariposas02.jpg',
    'img3':'/fotos/FotosActividades/ActMariposas03.jpg',
    "price": 2479},
    {"id": 10,
    "title": "Guadalajara",
    "resume": "Esta es la capital de uno de los estados más llenos de cultura en México, además de ser una ciudad famosa por el tequila y los mariachis. Definitivamente, es un paraíso para los fanáticos de la cultura mexicana.",
    'img':'/fotos/FotosActividades/ActGuadalajara01.jpg',
    'img2':'/fotos/FotosActividades/ActGuadalajara02.jpg',
    'img3':'/fotos/FotosActividades/ActGuadalajara03.jpg',
    "price": 2479},
    
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
//agregar los 10 productos

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
        <div class="position-absolute bottom-0 end-0"><a href="#" class="btn btn-primary">Ver más</a></div>  
           </div>
        </div>
      </div>
    </div> ` );   
    });}
