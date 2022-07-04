// Este es el punto de entrada de tu aplicacion

import { changeView } from './lib/index.js';
import { components } from '../pageview/viewlist.js';
//import { hola } from './firebaseConfig.js';

const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);



// let registerInput= components.registro();
// console.log(registerInput);
// console.log(registerInput.firstElementChild.firstElementChild[4]);
// let newBtn = registerInput.firstElementChild.firstElementChild[4];
// let sectionRegis= registerInput.firstElementChild;
// console.log(sectionRegis);
// console.log(registerInput.id);
// console.log(newBtn);
// console.log(newBtnId);
// console.log(newBtn);

// newBtn = document.getElementsByClassName("btnRegister");
// console.log(newBtn);
// newBtn.addEventListener('submit',()=>{
//      console.log("funciona");
//      });

// let btnId= registerInput.firstElementChild.firstElementChild[4].id;
// console.log(typeof(btnId));
// let btnRegister= document.getElementById(btnId);
// btnRegister.innerHTML= 
// console.log(btnRegister);

// btnRegister.addEventListener('click',()=>{
//     console.log("funciona");
// });





//let registerInput= components.registro().firstElementChild.firstElementChild[4];
//let registerInput= components.registro().firstElementChild.firstElementChild;
//console.log(registerInput);
//console.log(btnRegister);
//Obteniendo correo y contraseña de formulario (registro)
//let btnRegister= document.getElementById("btnRegister");
//let btnRegister= document.getElementById(registerInput.id);
//console.log(btnRegister);
//btnRegister.addEventListener('click',()=>{
//console.log("funciona");
//});
//btnRegister.addEventListener('click', ()=>{
   // console.log("prueba");
//})
//let resgisterForm= document.getElementById("regiter");
//resgisterForm.addEventListener('submit', ()=>{
//e.preventDefault;
//console.log("register");
//});