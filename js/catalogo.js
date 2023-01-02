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
addItem({'img1':'https://heraldodemexico.com.mx/u/fotografias/m/2021/7/16/f1280x720-397282_528957_5050.jpg',
'img2':'https://hoteleseconomicosmexico.com/fotos/queretaro/g-bernal/pueblo-magico-de-bernal-3.jpg',
'img3':'http://audaznews.com/wp-content/uploads/2022/04/Visita-el-Pueblo-Magico-Pena-de-Bernal-uno-de-los-lugares-mas-concurridos-de-Mexico-2.jpg',
'title': "Poco", 
'resume':'Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso.'}
);

