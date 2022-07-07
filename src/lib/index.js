// aqui exportaras las funciones que necesites
/* import login from '../pageview/login.js'; */
import { components } from '../pageview/viewlist.js';
import { buttonShow, loginActive } from '../pageview/login.js';
import { registerActive, buttonShowRegister } from '../pageview/register.js';

const changeView = (name) => {
  const container = document.getElementById('container');
  container.innerHTML = ' ';

  switch (name) {
    case '': case '#/login':
    { container.appendChild(components.login());
      loginActive('formLogin');
      buttonShow('btn-password-login', 'passwordLogin');
      break;
    }

    case '#/Registrate':
    { container.appendChild(components.registro());
      registerActive('formRegister');
      buttonShowRegister('btnRegister', 'passwordRegister');
      buttonShowRegister('btnRepeatRegister', 'passwordRepeatRegister');
      break; }

    default:
      break;
  }
};

export { changeView };
