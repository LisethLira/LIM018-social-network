import { signOutUser,
    savePost, getPost, getUser, onGetPost, deletePost, gettingPost, editPost } from '../firebaseConfig.js';
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js';
import { imageUrl } from '../storage.js';
// import { likeCounter } from '../lib/index.js';

export default () => {
    const viewHome = `<section class= "sectionHome">
    <header class= "headerHome">
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
        
        <div class="backgroundModal" id="backgroundModal">    
            <form class="formPost" id="formPost">
                <div class= "modalCreatePost">
                    <div class="createPostTitle">
                        <p class="modalTitle" id="modalTitle">Crear Publicación</p>
                        <button type="button" class="cerrarModalPost" id="cerrarModalPost">X</button>
                    </div>
                    <div class="DescriptionUser">
                        <div class= "userPost">
                            <label class="userNamePost">nombre</label>
                        </div>
                        <textarea type="text" class= "addPost" id="addPost" placeholder="Agrega una publicación" ></textarea>   
                        <p id="textEmptyModal"></p>
                        <label type="button" class="btnCatImg" for="btnImgFile">
                        <input id="btnImgFile" type ="file">   
                        <img class="iconCatImg" alt="icono imagen" src="image/iconCatImg.png">
                        </label>
                        <button type="submit" class="btnPost" id="btnPost">Publicar</button>
                    </div>
                </div>
            </form>
        </div>
    
        <div id="containerDelete"></div>
        <div id= "containerEmpty"></div>
        <div class="postAddBtn">
            <button type="button" class= "addPost" id="btnModalPost" >Agrega una publicación:</button>
            <div id="postContainer"></div>
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

let editingPost = false;
let id = '';
export const postHome = (idPost, formPost, idBtnModalPost, idBackgroundModal, idCerrarModalPost, idBtnPost, idModalTitle, idTextEmptyModal, idBtnImgFile) => {
    const btnModalPost = document.getElementById(idBtnModalPost);
    const backgroundModal = document.getElementById(idBackgroundModal);
    const cerrarModalPost = document.getElementById (idCerrarModalPost);
    const btnPost = document.getElementById (idBtnPost);
    const modalTitle = document.getElementById (idModalTitle);
    const textEmptyModal = document.getElementById(idTextEmptyModal);
    const btnImgFile = document.getElementById(idBtnImgFile);
    backgroundModal.style.display = 'none';
    btnModalPost.addEventListener('click', ()=>{
        backgroundModal.style.display = 'flex';
        btnPost.innerText = 'Publicar';
        modalTitle.innerText = 'Crear Publicación';
    })

    // btnPost.disabled = false;
    const PostH = document.getElementById(formPost);
    PostH.addEventListener('submit', async (e) => {
      e.preventDefault();
      const auth = getAuth();
      const user = auth.currentUser;
      const uid = user.uid;
      const fecha = new Date().toDateString();
      const fileImage = btnImgFile;  
      console.log(fileImage);
      const newpost = document.getElementById(idPost).value;
      let imagen;
      let arrayId = [];

      if(fileImage){
        const urlImage = fileImage.files[0].name;
        const nameFile = fileImage.files[0];

        imagen = await imageUrl (urlImage,nameFile);
        console.log(imagen);
    }
      
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

    if (!editingPost){
        if(newpost.length === 0){
            //     containerEmpty.innerHTML = `<div class="backgroundModal" id="backgroundModalEmpty">
        //     <div id="warningEmpty" class="modalDeletePost">
        //         <button type="button" class="cerrar" id="cerrarModalEmpty">X</button>
        //         <img class="gatitoWarning" src="image/gatoTriste.png">
        //         <p class="modalTitleDelete" id="warningTextLogin">Agrega contenido a tu publicación</p>
        //     </div>
        // </div>`
        // btnPost.disabled = true;
        // backgroundModal.style.display = 'flex';
        textEmptyModal.innerText ='Publicación vacía, agrega contenido a tu publicación';
        }
        else{
            textEmptyModal.innerHTML='';
            console.log(imagen);
            savePost(nameUser, fecha, newpost, uid, imagen);
            backgroundModal.style.display = 'none';
            
        }
    }else {
        editPost(id, newpost);
    }
    // const cerrarModalEmpty = document.getElementById('cerrarModalEmpty');
    // cerrarModalEmpty.addEventListener('click', ()=>{
    //     containerEmpty.innerHTML = '';
    // })
    
    editingPost = false;
      PostH.reset();
    //   backgroundModal.style.display = 'none';

    });

    cerrarModalPost.addEventListener('click', ()=> {
        backgroundModal.style.display = 'none';
        PostH.reset();
        textEmptyModal.innerHTML='';
    })

};



export const getP = async (idpostContainer, idAddPost, idbtnPost, idBackgroundModal, idCerrarModalPost, idModalTitle, idContainerDelete) => {
    const textArea = document.getElementById(idAddPost);
    const postContainer = document.getElementById(idpostContainer);
    const containerDelete = document.getElementById(idContainerDelete);
    // const dataPost = await getPost();
    onGetPost((dataPost) =>{
        postContainer.innerHTML = '';
        dataPost.forEach((doc) => {
            //console.log(doc.data());
            const dataNewPost = doc.data();
            const dataUid = doc.data().uid;
            postContainer.innerHTML += `
            <div class="postComplete">
                <div class="userNameDots">
                    <label class="userNamePost">${dataNewPost.nameUser}</label>
                    <div class="dotsEditDelete">
                        <img id="elementDots" class="dots" src="image/tresPuntos.png">
                    </div>
                </div>
                <div class="optionSetingsPost optionSetingsPostStyle">
                        <label class="editBtn editBtnStyle" data-id="${doc.id}">Editar</label>
                        <label class="deleteBtn deleteBtnStyle" data-id="${doc.id}">Eliminar</label>
                </div>
                <label class="date">${dataNewPost.fecha}</label>
                <label class="postDescription">
                    ${dataNewPost.newpost}
                </label> 
                <img src="${dataNewPost.image}" style= "width:400px">
                <div class="likeComment">
                    <div class="likeContainer">
                        <button class= "likeBtn">
                            <img class="likeIcon" src="image/likeHeart.png">
                        </button>
                        <label id="likeNumber" class="likeNumber">N°</label>
                    </div>
                    <div class= "btnCommentContainer">
                    <button class="btnComment">Comentar</button>
                    </div>
                </div>
            </div>`
        })
    
        const dots = document.querySelectorAll('.dots');
        const optionSetingsPost = document.querySelectorAll('.optionSetingsPost');
        for(let i=0; i<dots.length; i++){
            optionSetingsPost[i].style.display = 'none';
            dots[i].addEventListener('click', () => {
                
                if(optionSetingsPost[i].style.display === 'none'){
                    optionSetingsPost[i].style.display = 'flex';
                }
                 else{ optionSetingsPost[i].style.display = 'none';
                }
            });
        }

        const deleteBtn = document.querySelectorAll('.deleteBtn');
        for(let i=0; i<deleteBtn.length; i++){
            deleteBtn[i].addEventListener('click', ({target : {dataset}}) => {
                containerDelete.innerHTML = ` <div class="backgroundModal" id="backgroundModalDelete">
                <div id="warningPostDelete" class="modalDeletePost">
                <button type="button" class="cerrarModalPost" id="cerrarDelete">X</button>
                <img class="gatitoWarning" src="image/gatoTriste.png">
                <p class="modalTitleDelete">¿Estás seguro que deseas eliminar?</p>
                <div class= "btnsDeleteCancel">
                <button type="button" class="btnPost" id="deletePostModal">Eliminar</button>
                <button type="button" class= "btnPost" id="deleteCancel">Cancelar</button>
              </div>
              </div>
                `
            const deletePostModal = document.getElementById('deletePostModal');
            deletePostModal.addEventListener('click', ()=>{
                deletePost(dataset.id);
                containerDelete.innerHTML = '';
            })
            const deleteCancel = document.getElementById('deleteCancel');
            deleteCancel.addEventListener('click', ()=>{
                containerDelete.innerHTML = '';
            })  
            
            const cerrarDelete = document.getElementById('cerrarDelete');
            cerrarDelete.addEventListener('click', ()=>{
                containerDelete.innerHTML = '';
            })  
            optionSetingsPost[i].style.display = 'none';
            });
        }

        const editBtn = document.querySelectorAll('.editBtn');
        const btnPost = document.getElementById(idbtnPost);
        const backgroundModal = document.getElementById(idBackgroundModal);
        const cerrarModalPost = document.getElementById (idCerrarModalPost);
        const modalTitle = document.getElementById(idModalTitle);
        for(let i=0; i<editBtn.length; i++){
            editBtn[i].addEventListener('click', async ({target : {dataset}}) => {
                backgroundModal.style.display = 'flex';
                const doc = await gettingPost(dataset.id);
                const post = doc.data();
                textArea.value = post.newpost;
                editingPost = true;
                id = dataset.id;
                btnPost.innerText = 'Guardar';
                modalTitle.innerText = 'Editar Publicación';
                optionSetingsPost[i].style.display = 'none';       
            //console.log(doc.data());
            });
        }
        cerrarModalPost.addEventListener('click', ()=> {
            backgroundModal.style.display = 'none';
            textArea.innerHTML = '';
        })

        //cuando se cree el post debemos crear un elemento contador de likes con el valor de 0 para que alli podamos editar y guardar el contador
        const likeAction = document.querySelectorAll('.likeBtn');
        const likeNumber = document.querySelectorAll('.likeNumber');
        // este array lo debemos sacar del doc.data.contadordelikes
        let arrayCounter = [];
        for(let i=0; i<likeAction.length; i++){
            arrayCounter.push(' ');
        }
        // el counter lo deberíamos jalar del array traido del firebase (doc.data.contadordelikes)
        for(let i=0; i<likeAction.length; i++){
            let counter = 0;
            likeAction[i].addEventListener('click', () => {
                counter++;
                arrayCounter[i] = counter;
                likeNumber[i].innerHTML = counter;
            });
        };
    
    });
}
