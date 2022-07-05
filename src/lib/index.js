// aqui exportaras las funciones que necesites
/* import login from '../pageview/login.js'; */
import { components } from '../pageview/viewlist.js';
import { loginActive } from '../pageview/login.js';
import { registerActive } from '../pageview/register.js';

const changeView = (name) => {
  const container = document.getElementById('container');
  container.innerHTML = ' ';

  switch (name) {
    case '': case '#/login':
    { container.appendChild(components.login());
      loginActive('formLogin');
      break;
    }

    case '#/Registrate':
    { container.appendChild(components.registro());
      registerActive('formRegister');
      break; }

    default:
      break;
  }
};

export { changeView };
