let navBar = document.getElementById("menu");

function menu() {
  navBar.innerHTML = ` <header class="encabezado">
  <nav class="navegador">


    <a  href="/index.html">
      <img id="ajolotito" src="/fotos/logo2.png" alt="Link to homepage">
    </a>
    <button class="hamburguesa" aria-labelledby="Abrir menú">
      <i class="fas fa-bars"></i>
    </button>
    <ul class="nave-menudo">
      <li class="nav-menudo-item">
        <a href="/html/catalogo.html" class="nave-menudo-link navegador-link" >Destinos</a>
      </li>
      <li class="nav-menudo-item">
        <a href="/html/contacto.html" class="nave-menudo-link navegador-link">Contacto</a>
      </li>
      <li class="nav-menudo-item">
        <a href="/html/aboutus.html" class="nave-menudo-link navegador-link">Nosotros</a>
      </li>


      <div class="boton-container ">
      <span class="spanSesion">SESIÓN</span>
        <ul>
            <li>
                <a href="../html/login.html" class="nave-menudo-link navegador-link">Iniciar sesión</a>
            </li>
            <li>
                <a href="../html/login.html" class="nave-menudo-link navegador-link">Cerrar sesión</a>
            </li>
        </ul>
      </div>


      <li class="nav-menudo-item" id="registro">
        <a href="/html/registro.html" class="nave-menudo-link navegador-link">Registro</a>
      </li>
      <li>
       <a href="/html/carrito.html">
       <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-cart-plus" viewBox="0 0 16 16">
  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
      </a>
      </li>


    </ul>
    


  </nav>
</header>
`;
}
/*<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
 <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"  fill="white" class=" bi-airplane-engines" viewBox="0 0 16 16">
  <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0ZM7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1c.213 0 .458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7V3Z"/>
</svg>*/
menu();



const hambur = document.querySelector(".hamburguesa");
const naveM = document.querySelector(".nave-menudo");

hambur.addEventListener("click", () => {
  naveM.classList.toggle("nave-menudo_visible");

  if (naveM.classList.contains("nave-menudo_visible")) {
    hambur.setAttribute("aria-labelledby", "Cerrar menú");
  } else {
    hambur.setAttribute("aria-labelledby", "Abrir menú");
  }
});





