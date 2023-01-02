function addItem(item){
    let itemHTML=`
    <div class="card" id="CardItems" style="width: 18rem;">
    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="'${item.img1}'" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="'${item.img2}'" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="'${item.img3}'" class="d-block w-100" alt="...">
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
  </div>`
  let itemsContainer= document.getElementById ("CardItems");
  itemsContainer.innerHTML += itemHTML;
}
addItem({"'img1'":'fotos/FotosActividades/ActBernal02.jpg','img2':'fotos/FotosActividades/ActBernal01.jpeg','img3':'fotos/FotosActividades/ActBernal03.jpg', 'title': "Bernal", 'resume':'Este pueblo de interesantes construcciones virreinales está asentado a los pies de uno de los peñones más llamativos del continente americano, con vasta vegetación entre las rocas. Todo está ligado a interesantes leyendas e historias que la gente cuenta, en un ambiente provinciano ideal para el descanso.'
})