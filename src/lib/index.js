// aqui exportaras las funciones que necesites
import { components } from '../pageview/viewlist.js';

const changeView = (name) => {
  const container = document.getElementById('container');
  container.innerHTML = ' ';
  switch (name) {
    case '': { return container.appendChild(components.login()); }
    case '#/login': { return container.appendChild(components.login()); }
    case '#/Registrate': { return container.appendChild(components.registro()); }
    default: { return container.appendChild(components.login()); }
  }
};

export { changeView };
