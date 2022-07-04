// aqui exportaras las funciones que necesites
import { components } from '../pageview/viewlist.js';

const changeView = (name) => {
  const container = document.getElementById('container');
  container.innerHTML = ' ';
  switch (name) {
    case '': { container.appendChild(components.login());
      console.log(document.getElementById("btnRegister"));}
    break;
    case '#/login': { container.appendChild(components.login()); 
      console.log(document.getElementById("btnRegister"));}
    break;
    
    case '#/Registrate': { container.appendChild(components.registro());
      console.log();}
    break;
    default: { return container.appendChild(components.login()); }
  }
};

export { changeView };
