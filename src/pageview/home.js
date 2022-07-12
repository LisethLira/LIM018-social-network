import { signOutUser } from '../firebaseConfig.js';

export default () => {
  const viewHome = `<section class= "sectionHome">
    <header>
        <nav>
            <input type="checkbox" id="check">
            <label for="check" class="checkbtn">
                <img class="btnMenuBar" src="image/menu.png" >
            </label>

            <div class=logoComplete>
                <img class="logoNav" src="image/GATITO LOGO.png">
                <label class="logoNameNav">PUUR LOVE</label>
            </div>
            
            <ul class="menuLeft">
                <li>
                    <a href="#/home">
                        <img class="icon" src="image/home.png">
                        <label class="home">Inicio</label>
                    </a>
                </li>
                <li>
                    <a href="#/perfil">
                        <img class="icon" src="image/perfil.png">
                        <label class="profile">Perfil</label>
                    </a>
                </li>
            </ul>
            
            <ul class="menuTop">
                <li>
                    <a href="#/home">
                        <img class="icon home" src="image/home.png">
                        <label class="home">Inicio</label>
                    </a>
                </li>
                <li>
                    <a href="#/perfil">
                        <img class="icon profile" src="image/perfil.png">
                        <label class="profile">Perfil</label>
                    </a>
                </li>
                <li>
                    <div class= "search">
                        <img class="icon searchIcon" src="image/buscar.png">
                        <input class="searchInput" type="search" placeholder="Buscar">
                    </div>           
                </li>
                <li>
                    <button type="submit" id="signOut">Salir</button>
                </li>
            </ul>
        </nav>
    </header>
    <section class= "secHome">
        <div class="postAddBtn">
            <textarea class= "addPost" placeholder="Agrega una publicación:"></textarea>
            <button type="submit" class="btnPost">Publicar</button>
        </div>
        
        <div class="postComplete">
            <div class="userNameDots">
                <label class="userNamePost">Nombre de usuario</label> 
                <img class="dots" src="image/tresPuntos.png">
            </div>
            
            <label class="postDescription">Publicación</label> 
            
            <div class="likeComment">
                <div class="likeContainer">
                <img class="likeIcon" src="image/like.png">
                <label class="likeNumber">N°</label>
                </div>
                <button class="btnComment">Comentar</button>
            </div>
        </div>
    </section>
    </section>`;

  const divElem = document.createElement('div');
  divElem.classList.add('divElem');
  divElem.innerHTML = viewHome;
  return divElem;
};

export const SignOutActive = (idElementSignOut) => {
  const idBtnSignOut = document.getElementById(idElementSignOut);
  idBtnSignOut.addEventListener('click', () => {
    signOutUser()
      .then(() => {
        // Sign-out successful.
        console.log('Salió');
        window.location.href = '#/login';
      })
      .catch((error) => {
        // An error happened.
        console.log('Ocurrió un error al querer salir' + error);
      });
  });
};
