
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

/* export const postHome = (idPost, formPost) => {
    const PostH = document.getElementById(formPost);
    PostH.addEventListener('submit', (e) => {
        e.preventDefault();
        const auth = getAuth();
        const uid = auth.currentUser.uid;
        const post = document.getElementById(idPost).value;
        savePost(uid, post);
        console.log(savePost);
        createPost(post);
    });
}; */

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






/* function createPost(post){
const postContainer = document.getElementById('postContainer');
const postComplete = document.createElement('div');
postContainer.appendChild(postComplete);
postComplete.classList.add('postComplete');

    const postContainer = document.getElementById('postContainer');
    const postComplete = document.createElement('div');
    postContainer.appendChild(postComplete);
    postComplete.classList.add('postComplete');

    const userNameDots = document.createElement('div');
    postComplete.appendChild(userNameDots);
    userNameDots.classList.add('userNameDots');

    const userNamePost = document.createElement('label');
    userNameDots.appendChild(userNamePost);
    userNamePost.classList.add('userNamePost');
    userNamePost.innerText = 'Nombre de usuario';

    const dots = document.createElement('img');
    userNameDots.appendChild(dots);
    dots.classList.add('dots');
    dots.src = 'image/tresPuntos.png';

    const postDescription = document.createElement('label');
    postComplete.appendChild(postDescription);
    postDescription.innerHTML = post;
    postDescription.classList.add('postDescription');

    const likeComment = document.createElement('div');
    postComplete.appendChild(likeComment);
    likeComment.classList.add('likeComment');

    const likeContainer = document.createElement('div');
    likeComment.appendChild(likeContainer);
    likeContainer.classList.add('likeContainer');

    const likeBtn = document.createElement('button');
    likeContainer.appendChild(likeBtn);
    likeBtn.classList.add('likeBtn');
    likeBtn.setAttribute('id', 'likeBtn');

    const likeIcon = document.createElement('img');
    likeBtn.appendChild(likeIcon);
    likeIcon.classList.add('likeIcon');
    likeIcon.src = 'image/likeHeart.png';

    const likeNumber = document.createElement('label');
    likeContainer.appendChild(likeNumber);
    likeNumber.classList.add('likeNumber');
    likeBtn.setAttribute('id', 'likeNumber');
    likeNumber.innerText = 'N°';

    const btnComment = document.createElement('button');
    likeComment.appendChild(btnComment);
    btnComment.classList.add('btnComment');
    btnComment.innerText = 'Comentar';

} */

/*window.addEventListener('load', (e) => {
/* window.addEventListener('load', (e)=>{
    const auth = getAuth();
    console.log(auth.currentUser);
    const uid = auth.currentUser.uid;
    getPost(uid);
    console.log(getPost);
}); */

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
