/*** @jest-environment jsdom*/
import { loginActive } from '../src/pageview/login.js'
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
    it('', () => {    
    const idform = document.getElementById('formLogin');
        idform.dispatchEvent(new Event('submit'));
        expect(document.getElementById('emailLogin').value).toBe('');
        expect(document.getElementById('passwordLogin').value).toBe('');
    });
});

// describe('Login', () => {
//     it('', () => {
//         // document.body.appendChild(loginActive());
//         loginActive();
//         const idform = document.getElementById('formLogin');
//         idform.dispatchEvent(new Event('submit'));
//         expect(document.getElementById('emailLogin').value).toBe('* correo electrónico');
//         expect(document.getElementById('passwordLogin').value).toBe('*contraseña');
//         console.log(signInWithEmailAndPassword.mock);
//     });
// });