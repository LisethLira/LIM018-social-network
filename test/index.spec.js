/*** @jest-environment jsdom*/

// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';
// import { createUserWithEmailAndPassword } from '../src/firebase/firebaseConfig.js';
// import { createUser } from '../src/firebase/firebaseAuth.js';

// jest.mock('../src/firebase/firebaseConfig.js');


// describe('crear usuario', () => {
//   it('debería ser una función', () => {
//         expect(typeof createUser).toBe('function');
//         console.log('prueba');
//        });
// });

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });
/*** @jest-environment jsdom*/

//import { loginActive, loginUser, buttonShow } from '../src/pageview/login.js'
import viewLogin from '../src/pageview/login.js'

jest.mock('../src/firebase/firebaseAuth.js');
jest.mock('../src/firebase/baseDatos.js');


describe('Login', () => {
    it('debería ', () => {
        document.body.appendChild(viewLogin());
        const login = viewLogin();
        expect(login instanceof HTMLElement).toBe(true);
        // loginActive();
    });
});
