let itemsContainer= document.getElementById ("CardItems");
function addItem(item){
    let itemHTML=`
    <div class="card" style="width: 18rem;">
    <div id="carouselExample" class="carousel slide card-img-top">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="${item.img1}" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${item.img2}" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${item.img3}" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
    </div>

    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${item.resume}</p>
      <a href="#" class="btn btn-primary">Ver más.</a>
    </div>
  </div> `;
  itemsContainer.innerHTML += itemHTML;
}

//agregar los 10 productos
addItem({'img1':'https://heraldodemexico.com.mx/u/fotografias/m/2021/7/16/f1280x720-397282_528957_5050.jpg',
'img2':'https://hoteleseconomicosmexico.com/fotos/queretaro/g-bernal/pueblo-magico-de-bernal-3.jpg',
'img3':'http://audaznews.com/wp-content/uploads/2022/04/Visita-el-Pueblo-Magico-Pena-de-Bernal-uno-de-los-lugares-mas-concurridos-de-Mexico-2.jpg',
'title': "Bernal", 
'resume':'Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso.'}
);
addItem({'img1':'/fotos/FotosActividades/ActMazatlan01.jpg',
'img2':'/fotos/FotosActividades/ActMazatlan02.jpg',
'img3':'/fotos/FotosActividades/ActMazatlan03.jpg',
'title': "Mazatlan", 
'resume':'Las extensas y hermosas playas de Mazatlán, ubicado en el estado de Sinaloa, lo convierten en el destino playero más famoso del noroeste de México.'}
);
addItem({'img1':'/fotos/FotosActividades/ActOaxaca01.jpg',
'img2':'/fotos/FotosActividades/ActOaxaca02.jpg',
'img3':'/fotos/FotosActividades/ActOaxaca03.jpg',
'title': "Oaxaca", 
'resume':'En Oaxaca puedes bailar sin parar en sus fechas de festividades y encontrar tiendas artesanales para comprar recuerdos para tus seres queridos. Aquí también encontrarás platillos exquisitos tradicionales de la región.'}
);
addItem({'img1':'/fotos/FotosActividades/ActRiveraMaya01.jpeg',
'img2':'/fotos/FotosActividades/ActRiveraMaya02.jpg',
'img3':'/fotos/FotosActividades/ActRiveraMaya03.jpg',
'title': "Rivera Maya", 
'resume':'La riqueza natural, histórica y cultural de la Riviera Maya la convierten en un lugar único en el mundo. Los más de 100 km que la conforman, que van desde Puerto Morelos hasta Punta Allen, se componen por paraísos de arena blanca y aguas turquesas, propios del Mar Caribe.'}
);
addItem({'img1':'/fotos/FotosActividades/ActSMA01.jpg',
'img2':'/fotos/FotosActividades/ActSMA02.jpeg',
'img3':'/fotos/FotosActividades/ActSMA03.jpg',
'title': "San Miguel de Allende", 
'resume':'Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso.'}
);
addItem({'img1':'/fotos/FotosActividades/ActSMA01.jpg',
'img2':'/fotos/FotosActividades/ActSMA02.jpeg',
'img3':'/fotos/FotosActividades/ActSMA03.jpg',
'title': "San Miguel de Allende", 
'resume':'Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso.'}
);
addItem({'img1':'/fotos/FotosActividades/ActSMA01.jpg',
'img2':'/fotos/FotosActividades/ActSMA02.jpeg',
'img3':'/fotos/FotosActividades/ActSMA03.jpg',
'title': "San Miguel de Allende", 
'resume':'Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso.'}
);
addItem({'img1':'/fotos/FotosActividades/ActSMA01.jpg',
'img2':'/fotos/FotosActividades/ActSMA02.jpeg',
'img3':'/fotos/FotosActividades/ActSMA03.jpg',
'title': "San Miguel de Allende", 
'resume':'Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso.'}
);
addItem({'img1':'/fotos/FotosActividades/ActSMA01.jpg',
'img2':'/fotos/FotosActividades/ActSMA02.jpeg',
'img3':'/fotos/FotosActividades/ActSMA03.jpg',
'title': "San Miguel de Allende", 
'resume':'Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso.'}
);
addItem({'img1':'/fotos/FotosActividades/ActSMA01.jpg',
'img2':'/fotos/FotosActividades/ActSMA02.jpeg',
'img3':'/fotos/FotosActividades/ActSMA03.jpg',
'title': "San Miguel de Allende", 
'resume':'Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso.'}
);