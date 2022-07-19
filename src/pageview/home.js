
import { signOutUser,
    savePost, getPost, getUser
} from '../firebaseConfig.js';
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js';
// import { likeCounter } from '../lib/index.js';

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
                
                    <button class="btnSalir" id="signOut">Salir</button>

                </li>
            </ul>
        </nav>
    </header>
    <section class= "secHome">
        <div class="postAddBtn">

        <form class="formPost" id="formPost">
            <textarea type="text" class= "addPost" id="addPost" placeholder="Agrega una publicación:" ></textarea>
            <button type="submit" class="btnPost" id="btnPost" >Publicar</button>
        </form>
        
        </div>

        <button type="button" class="btnProbar" id="btnProbar" >Probando</button>
        
        <div id="postContainer"></div>

        <div class="postComplete">
            <div class="userNameDots">
                <label class="userNamePost">Nombre de usuario</label> 
                <img class="dots" src="image/tresPuntos.png">
            </div>
            <label class="date">16 de Junio a las 16:40</label>
            <label class="postDescription">Publicación</label> 
            <div class="likeComment">
                <div class="likeContainer">
                    <button class= "likeBtn" id="likeBtn">
                        <img class="likeIcon" src="image/likeHeart.png">
                    </button>
                    <label id="likeNumber" class="likeNumber">N°</label>
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
        window.location.href = '#/login';
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


export const postHome = (idPost, formPost, idpostContainer) => {
    const PostH = document.getElementById(formPost);
    PostH.addEventListener('submit', async (e) => {
      e.preventDefault();
      const auth = getAuth();
      const user = auth.currentUser;
      const uid = user.uid;
    //   const fecha = new Date();
      const fecha = Date();
      const newpost = document.getElementById(idPost).value;
      let arrayId = [];

     const response = await getUser()
    response.forEach((doc) => {
                const arrayDocsId = doc.id;
                const arrayDocsData = doc.data();
                arrayId.push({
                    id: arrayDocsId,
                    name : arrayDocsData.name
                })
    });
        let pruebaName;
        for (let i = 0; i < arrayId.length; i++) {
            if (uid == arrayId[i].id) {
                pruebaName = arrayId[i].name
            }    
        }
        console.log(pruebaName);
        const nameUser=pruebaName;


      console.log(savePost(nameUser, fecha, newpost, uid));
    });
};


export const getP = (idbtnProbar, idpostContainer) => {
  const btnProbar = document.getElementById(idbtnProbar);
  const postContainer = document.getElementById(idpostContainer);
  btnProbar.addEventListener('click', (e) => {
     e.preventDefault();
     getPost()
     .then((dataPost) => {
            dataPost.forEach((doc) => {
                //console.log(doc.data());
                const dataNewPost = doc.data();
                // const dataUid = doc.data().uid;
                postContainer.innerHTML += `
                <div class="postComplete">
                    <div class="userNameDots">
                        <label class="userNamePost">${dataNewPost.nameUser}</label>
                        <img class="dots" src="image/tresPuntos.png">
                    </div>
                    <label class="date">${dataNewPost.fecha}</label>
                    <label class="postDescription">
                        ${dataNewPost.newpost}
                    </label> 
                    <div class="likeComment">
                        <div class="likeContainer">
                            <button class= "likeBtn" id="likeBtn">
                                <img class="likeIcon" src="image/likeHeart.png">
                            </button>
                            <label id="likeNumber" class="likeNumber">N°</label>
                        </div>
                        <button class="btnComment">Comentar</button>
                    </div>
                </div>`
            });
      });
    });
};


export const btnLikeCounter = (idBtn, idLikeNumber) =>{
  let counter = 0;
  const likeBtn = document.getElementById(idBtn);
  likeBtn.addEventListener('click', (e)=>{
    counter++;
    // let like = likeCounter(likeBtn);
    console.log(counter);
    document.getElementById(idLikeNumber).innerHTML = counter;
});
}
