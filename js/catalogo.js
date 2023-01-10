let itemsContainer= document.getElementById ("CardItems");
<<<<<<< HEAD
let lsitem;

function addItem(item){
    let itemHTML=`
    <div class="card mb-3" style="width: 5040px;">
    <div class="row g-0">
      <div class="col-md-4">
      <div id="carouselExample_${item.id}" class="carousel slide card-img-top">
      <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="${item.img1}" class="d-block w-100" alt="...">
      
        </div>
      <div class="carousel-item ">
            <img src="${item.img2}" class="d-block w-100" alt="...">
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
        <a href="#" class="btn btn-primary">Ver más.</a>
       </div>
    </div>
  </div>
</div> `;
  itemsContainer.innerHTML += itemHTML;
  lsitem += itemHTML;
  localStorage.setItem('product', JSON.stringify(lsitem));
}



//Guadar en localSorage
//localStorage.setItem('product', JSON.stringify(lsitem));
//Obtener datos de localStorage
document.addEventListener('DOMContentLoaded', (e) => {
  if (localStorage.getItem("itemLS")) {
  loadProduct = JSON.parse(localStorage.getItem('itemLS'));
  console.log("productos desde localStorage", loadProduct)
  }
  });


//agregar los 10 productos

addItem({ 'id':1,
'img1':'/fotos/FotosActividades/ActBernal01.jpg',
'img2':'/fotos/FotosActividades/ActBernal02.jpg',
'img3':'/fotos/FotosActividades/ActBernal03.jpg',
'title': "Bernal", 
'resume':'Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso.'}
);
addItem({'id':2,'img1':'/fotos/FotosActividades/ActMazatlan01.jpg',
'img2':'/fotos/FotosActividades/ActMazatlan02.jpg',
'img3':'/fotos/FotosActividades/ActMazatlan03.jpg',
'title': "Mazatlan", 
'resume':'Las extensas y hermosas playas de Mazatlán, ubicado en el estado de Sinaloa, lo convierten en el destino playero más famoso del noroeste de México.'}
);
addItem({'id':3,'img1':'/fotos/FotosActividades/ActOaxaca01.jpg',
'img2':'/fotos/FotosActividades/ActOaxaca02.jpg',
'img3':'/fotos/FotosActividades/ActOaxaca03.jpg',
'title': "Oaxaca", 
'resume':'En Oaxaca puedes bailar sin parar en sus fechas de festividades y encontrar tiendas artesanales para comprar recuerdos para tus seres queridos. Aquí también encontrarás platillos exquisitos tradicionales de la región.'}
);
addItem({'id':4,'img1':'/fotos/FotosActividades/ActRiveraMaya01.jpg',
'img2':'/fotos/FotosActividades/ActRiveraMaya02.jpg',
'img3':'/fotos/FotosActividades/ActRiveraMaya03.jpg',
'title': "Rivera Maya", 
'resume':'La riqueza natural, histórica y cultural de la Riviera Maya la convierten en un lugar único en el mundo. Los más de 100 km que la conforman, que van desde Puerto Morelos hasta Punta Allen, se componen por paraísos de arena blanca y aguas turquesas, propios del Mar Caribe.'}
);
addItem({'id':8765,'img1':'/fotos/FotosActividades/ActSMA01.jpg',
'img2':'/fotos/FotosActividades/ActSMA02.jpg',
'img3':'/fotos/FotosActividades/ActSMA03.jpg',
'title': "San Miguel de Allende", 
'resume':'Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso.'}
);
addItem({'id':6,'img1':'https://media.staticontent.com/media/pictures/b97a0624-693f-4857-bfd6-d6e45ff7f687',
'img2':'https://media.staticontent.com/media/pictures/65a37fb6-fa4b-4c0b-9344-a0d4e9f62599',
'img3':'https://media.staticontent.com/media/pictures/d8c1d384-bf1e-4dc8-a6ff-c5bbb9d50d28',
'title': "Valle de Bravo", 
'resume':'Valle de Bravo es un Pueblo Mágico localizado en las cercanías de Ciudad de México, que tiene mucha historia y bellos paisajes naturales. Un destino turístico ideal para descansar, relajarse y alejarse de la rutina de la gran ciudad, que también es conocido como ‘la Suiza de México’. El paisaje es encantador: una ciudad rodeada de montañas que están llenas de pinos. con un gran lago al costado. Calles empedradas y un aire colonial componen el ambiente ideal para una experiencia incomparable.'}
);
addItem({'id':7,'img1':'https://visitapuertovallarta.com.mx/uploads/173/playa-yelapa-en-puerto-vallarta.jpg',
'img2':'https://visitapuertovallarta.com.mx/uploads/177/playa-los-muertos-en-puerto-vallarta.jpg',
'img3':'https://visitapuertovallarta.com.mx/uploads/182/playa-las-caletas-en-puerto-vallarta.jpg',
'title': "Puerto Vallarta", 
'resume':'Puerto Vallarta es un destino internacionalmente reconocido por sus playas bañadas por el Pacífico, belleza natural e instalaciones de primer nivel que se mezclan con una cálida hospitalidad. Existe una infinidad de lugares por descubrir y elegir tu favorita; tarea nada fácil, pues cada una de las playas de Puerto Vallarta cuenta con un encanto particular.'}
);
addItem({'id':8,'img1':'https://navarracapital.es/wp-content/uploads/el-arco-los-cabos-768x512.jpg',
'img2':'https://static.barcelo.com/content/dam/bhg/master/es/main-destination-photo/province/los-cabos/destino_los_cabos_01.jpg.bhgimg.optm1100.jpg/1604674361830.jpg',
'img3':'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_450,q_80,w_800/v1/clients/loscabosmx/The_arch_4_34d3ae36-0603-43eb-ad62-1752869856d9.jpg',
'title': "Los Cabos.", 
'resume':'Reconocido por su belleza natural, Los Cabos es un destino de clase mundial compuesto de hermosos paisajes desérticos y tropicales. Ofrece hoteles de lujo, playas galardonadas, buen clima durante todo el año y cocina de renombre a nivel internacional con chefs poseedores de estrellas Michelin. Hogar del icónico Arco, donde se encuentran el Mar de Cortés y el Océano Pacífico.'}
);
addItem({'id':9,'img1':'https://www.mexicodesconocido.com.mx/wp-content/uploads/2018/11/michoacan-mariposa-monarca.jpg',
'img2':'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/03/mariposas_monarca_jorge_de_la_madrid_mexico_desconocido8-1024x768.jpg',
'img3':'http://d2f0ora2gkri0g.cloudfront.net/23/50/235041d3-db14-436c-b2fd-97611162e865.jpg',
'title': "Santuarios de la mariposa Monarca en Michoacán", 
'resume':'Cada año, millones de lepidópteros anaranjados recorren más de 8,000 kilómetros (desde el sur de Canadá y norte de Estados Unidos) para cubrir los árboles de oyamel, pino y cedro de la entidad michoacana con el objetivo de hibernar. Este magnífico fenómeno ocurre en la Reserva de la Biosfera de la Mariposa Monarca, considerada Patrimonio de la Humanidad por la UNESCO.'}
);
addItem({'id':10,'img1':'https://a.cdn-hotels.com/gdcs/production76/d1681/e2088a33-187a-4e40-b014-f7442c831f68.jpg?impolicy=fcrop&w=800&h=533&q=medium',
'img2':'https://content.r9cdn.net/rimg/dimg/99/b2/20036525-city-18853-1653972eb13.jpg?crop=true&width=1366&height=768&xhint=1500&yhint=1333',
'img3':'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/62000/62698-Rotonda-De-Los-Hombres-Ilustres.jpg',
'title': "GUADALAJARA", 
'resume':'Esta es la capital de uno de los estados más llenos de cultura en México, además de ser una ciudad famosa por el tequila y los mariachis. Definitivamente, es un paraíso para los fanáticos de la cultura mexicana.'}
);
=======
let data = [{ 
    "id": 1,
    "title": "Bernal",
    "resume": "Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso",
    "img": "/fotos/FotosActividades/ActBernal02.jpg"},
    {"id": 2,
    "title": "DF",
    "resume": "Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso",
    "img": "/fotos/FotosActividades/ActBernal02.jpg"},
    {"id": 3,
    "title": "Zacatecas",
    "resume": "Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso",
    "img": "/fotos/FotosActividades/ActBernal02.jpg"},
    {"id": 4,
    "title": "Zacatecas",
    "resume": "Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso",
    "img": "/fotos/FotosActividades/ActBernal02.jpg"},
    {"id": 5,
    "title": "Zacatecas",
    "resume": "Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso",
    "img": "/fotos/FotosActividades/ActBernal02.jpg"},
    {"id": 6,
    "title": "Zacatecas",
    "resume": "Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso",
    "img": "/fotos/FotosActividades/ActBernal02.jpg"},
    {"id": 7,
    "title": "Zacatecas",
    "resume": "Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso",
    "img": "/fotos/FotosActividades/ActBernal02.jpg"},
    {"id": 8,
    "title": "Zacatecas",
    "resume": "Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso",
    "img": "/fotos/FotosActividades/ActBernal02.jpg"},
    {"id": 9,
    "title": "Zacatecas",
    "resume": "Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso",
    "img": "/fotos/FotosActividades/ActBernal02.jpg"},
    {"id": 10,
    "title": "Zacatecas",
    "resume": "Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso",
    "img": "/fotos/FotosActividades/ActBernal02.jpg"},
    
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
>>>>>>> 4b1afc68844e991d6f14e443e849346437ec1e62
