let itemsContainer= document.getElementById ("CardItems");
let data = [{ 
    "id": 1,
    "title": "Bernal",
    "resume": "Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso",
    "img": "/fotos/FotosActividades/ActBernal02.jpg",
    "price": 2479},
    {"id": 2,
    "title": "DF",
    "resume": "Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso",
    "img": "/fotos/FotosActividades/ActBernal02.jpg",
    "price": 2479},
    {"id": 3,
    "title": "Zacatecas",
    "resume": "Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso",
    "img": "/fotos/FotosActividades/ActBernal02.jpg",
    "price": 2479},
    {"id": 4,
    "title": "Zacatecas",
    "resume": "Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso",
    "img": "/fotos/FotosActividades/ActBernal02.jpg",
    "price": 2479},
    {"id": 5,
    "title": "Zacatecas",
    "resume": "Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso",
    "img": "/fotos/FotosActividades/ActBernal02.jpg",
    "price": 2479},
    {"id": 6,
    "title": "Zacatecas",
    "resume": "Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso",
    "img": "/fotos/FotosActividades/ActBernal02.jpg",
    "price": 2479},
    {"id": 7,
    "title": "Zacatecas",
    "resume": "Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso",
    "img": "/fotos/FotosActividades/ActBernal02.jpg",
    "price": 2479},
    {"id": 8,
    "title": "Zacatecas",
    "resume": "Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso",
    "img": "/fotos/FotosActividades/ActBernal02.jpg", 
    "price": 2479},
    {"id": 9,
    "title": "Zacatecas",
    "resume": "Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso",
    "img": "/fotos/FotosActividades/ActBernal02.jpg",
    "price": 2479},
    {"id": 10,
    "title": "Zacatecas",
    "resume": "Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso",
    "img": "/fotos/FotosActividades/ActBernal02.jpg",
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
                <img src="${item.img}" class="d-block w-100" alt="..." >
              </div>
              <div class="carousel-item">
                <img src="${item.img}" class="d-block w-100" alt="...">
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
