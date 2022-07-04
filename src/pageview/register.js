export default () => {
  const viewRegister = `<section>
  <form>
    <legend>Crea tu cuenta</legend>
    <label>Nombre de usuario</label>
    <input id="userName">
    <label>Correo electrónico:</label>
    <input id="emailRegister">
    <label>Crear contraseña:</label>
    <input id="passwordCreateRegister">
    <label>Repetir contraseña:</label>
    <input id="passwordRepeatCreateRegister">
    <button id="btnRegister">Registrarte</button>
    <legend>o</legend>
  </form>
  <div>
    <button id="btnRegisterGoogle">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAgRJREFUWEftltsxREEQhv+NABEgAyJABIgAGRABIkAEyMBGgAyIABkQAfVVzVYdx/Rl9titfdiu2tqHM5dvuv++jLRgNlowHi2BoogM9dCupG9JW5I+Jb1L+pL0El1sfZ8G6EDSkSRgVo2DAXuSdFkg03wtQACcF5D0BZLuJJ0VD4b7skDHkm7D0+wFhPOweM09JgPECwnREENXeDjUVgQ01DM8Ig3DYg+IFz06bvko+uDV/AgL2YboechKK0wERJbsGEA3ki4coZJ9fCfcYZi6d1ge8kKFOB+GCMrbawFx4X5lI545nRWMFzKqb99eS6aglZlZzUOWmKm66MIyvtUeYq1/rtWlFqC9oLC1wABZDX8NiJfSIvq2FpT/ViA8RDR+WQvQZtAoZwZkaei/Q1bVZIuGIlFTSC2rFdg0EIeS2pT+rjHjbGfHiM7GDUlvFdJqgZ1HYbSSpHq3BeQ11pPSozLF0TpnXJrwnzO8bu81V1oLYF7VpsVQPmpjrpkgHhCjBFB9LU1ehaYAo5vTVriY1McrjCDsr5npHRbPY0DrQjGsIXLTsxEQh+H6q4xggjWpyTEDxD3MR9dO+CJepkvCGA5rWSAuxNVMgNYUaUHdFy+nxpYWoMmFiBaP8b9uUCByEgKvIv60TQPUPZxM6qc1AE0Q3QOHAqVfnl24BIo8tXAe+gFPeGwlzWWFWwAAAABJRU5ErkJggg=="/>
      Registrate con Google</button>
  </div>
</section>

`;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewRegister;

  return divElem;
};
