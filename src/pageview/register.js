import { createUser, createUserRegisterDB } from "../firebaseConfig.js";


export default () => {
  const viewRegister = `<header class="nameLogo">
  <img class="gatitoLogo" src="GATITO LOGO.png">
  <h1>PUUR LOVE</h1>
  <h2>Una comunidad hecha para los amantes de los gatos.</h2>
   <a href="#/login"></a>
</header>
  <section class="secRegister">
  <form  id="formRegister" class="formRegister">
    <legend>Crea tu cuenta</legend>
    <label>Nombre de usuario</label>
    <input id="userName" class="userName" required>
    <label>Correo electrónico:</label>
    <input type="email" id="emailRegister" class="emailRegister" required>
    <label>Crear contraseña:</label>
    <div class="container-password-register">
      <input type="password" id="passwordRegister" class="passwordRegister" required>
      <div>
        <button class="btn-passwor-register"  id="btnRegister"> 
          <img src="face.png" class="img-password-register">
        </button>
      </div>
    </div>
    <label>Repetir contraseña:</label>
    <div class="container-repeat-password">
      <input type="password" id="passwordRepeatRegister" class="passwordRepeatRegister" required>
      <div>
        <button class="btn-passwor-register"  id="btnRepeatRegister"> 
          <img src="face.png" class="img-password-register">
        </button>
      </div>
    </div>
    <button type="submit" class="btnRegister" id="btnRegisterRepeat">Registrarte</button>
    <legend>o</legend>
  </form>
  <div>
    <button class="btnRegisterGoogle" id="btnRegisterGoogle">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAgRJREFUWEftltsxREEQhv+NABEgAyJABIgAGRABIkAEyMBGgAyIABkQAfVVzVYdx/Rl9titfdiu2tqHM5dvuv++jLRgNlowHi2BoogM9dCupG9JW5I+Jb1L+pL0El1sfZ8G6EDSkSRgVo2DAXuSdFkg03wtQACcF5D0BZLuJJ0VD4b7skDHkm7D0+wFhPOweM09JgPECwnREENXeDjUVgQ01DM8Ig3DYg+IFz06bvko+uDV/AgL2YboechKK0wERJbsGEA3ki4coZJ9fCfcYZi6d1ge8kKFOB+GCMrbawFx4X5lI545nRWMFzKqb99eS6aglZlZzUOWmKm66MIyvtUeYq1/rtWlFqC9oLC1wABZDX8NiJfSIvq2FpT/ViA8RDR+WQvQZtAoZwZkaei/Q1bVZIuGIlFTSC2rFdg0EIeS2pT+rjHjbGfHiM7GDUlvFdJqgZ1HYbSSpHq3BeQ11pPSozLF0TpnXJrwnzO8bu81V1oLYF7VpsVQPmpjrpkgHhCjBFB9LU1ehaYAo5vTVriY1McrjCDsr5npHRbPY0DrQjGsIXLTsxEQh+H6q4xggjWpyTEDxD3MR9dO+CJepkvCGA5rWSAuxNVMgNYUaUHdFy+nxpYWoMmFiBaP8b9uUCByEgKvIv60TQPUPZxM6qc1AE0Q3QOHAqVfnl24BIo8tXAe+gFPeGwlzWWFWwAAAABJRU5ErkJggg=="/>
      Registrate con Google</button>
  </div>
</section>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewRegister;

  return divElem;
};

export const registerActive = (idElementoForm) => {
  const idForm = document.getElementById(idElementoForm);
  idForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = document.getElementById('userName').value;
    const emailRegister = document.getElementById('emailRegister').value;
    const passwordRegister = document.getElementById('passwordRegister').value;
    const passwordRepeatRegister = document.getElementById('passwordRepeatRegister').value;
    // aqui se puede colocar el método del firebase
    if (passwordRepeatRegister != passwordRegister) {
      return alert("no es la misma contraseña");
    }

    createUser(emailRegister,passwordRegister)
      .then((userCredential) => {
       console.log(emailRegister);
      
     // Signed in
        const user = userCredential.user;
      console.log(user.uid);
      createUserRegisterDB(user.uid, userName, emailRegister, passwordRegister);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Revisa tus datos<br>" + errorMessage);
      // ..
    });
    
     console.log(userName, emailRegister, passwordRegister, "REGISTRADO");
      
  });
};

export const buttonShowRegister = (idbtn, idInput) => {
  const viewPassword = document.getElementById(idbtn);
  const password = document.getElementById(idInput);
  let click = false;
  viewPassword.addEventListener('click', (e) => {
    e.preventDefault();
    if (!click) {
      password.type = 'text';
      click = true;
    } else if (click) {
      password.type = 'password';
      click = false;
    }
  });
};



