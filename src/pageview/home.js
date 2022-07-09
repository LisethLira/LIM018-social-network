export default () => {
  const viewHome = `<section class= "sectionHome">
    <header>
        <nav>
        <img src="image/GATITO LOGO.png">
        <h1>PUUR LOVE</h1>
        <ul>
            <li>
                <a href="#/home">
                    <img src="image/home.png">
                </a>
            </li>
            <li>
                <a href="#/perfil">
                    <img src="image/perfil.png">
                </a>
            </li>
            <li>
                <img src="image/buscar.png">
                <input type="search" placeholder="Buscar">
            </li>
            <li>
                <a href="#/salir">Salir</a>
            </li>
        </ul>
        <img src="image/menu.png">
        </nav>
    </header>
    <section class= "secHome">
        <input class= "agregarPublicacion" placeholder="Agrega una publicación:">
        <button class="btnPublicar">Publicar</button>
        <div>
            <label class="NameUser">Nombre de usuario</label> 
            <img src="image/tresPuntos.png">
            <label class="publicacion">Publicación</label> 
            <img src="image/like.png">
            <label class="contadorLikes">"N°"</label>
            <button class="btnComentar">Comentar</button>
            </div>
    </section>
    </section>`;

  const divElem = document.createElement('div');
  divElem.classList.add('divElem');
  divElem.innerHTML = viewHome;
  return divElem;
};
