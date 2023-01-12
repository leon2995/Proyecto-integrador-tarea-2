let navBar = document.getElementById("menu");

function menu() {
  navBar.innerHTML = `<nav class="navbar navbar-expand-lg">
  
  
  <a href="/index.html">}
  <img id="inicio" src="/fotos/logo.png">
  </a>

  <div class="container-fluid">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"> </span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav" aria-current="page">
        <li class="nav-item">
          <a class="navbar-brand"  href="/html/catalogo.html">Catálogo</a>
        </li>
        <li class="nav-item">
          <a class="navbar-brand" href="/html/resenas.html">Reseñas</a>
        </li>
        <li class="nav-item">
          <a class="navbar-brand" href="/html/aboutus.html">Nosotros</a>
        </li>
        <li class="nav-item">
          <a class="navbar-brand" href="/html/contacto.html">Contacto</a>
        </li>

      </ul>
    </div>
  </div>
  <ul class="navbar-nav" aria-current="page">
  <li class="nav-item">
  <a class="navbar-brand" href="/html/registro.html">Registro</a>
  </li>
  </ul>
  <a href="/index.html">
    <img id="carrito" src="/fotos/carrito.png">
  </a>
</nav>
`;
}

menu();


