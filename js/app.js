//variables
const btnEnviar = document.querySelector('#enviar');

//variables campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

eventListeners();
function eventListeners(){
    //cuando se carga la app
    document.addEventListener('DOMContentLoaded', IniciarApp);

    //campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
}

//funciones
function IniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')
}

function validarFormulario(e) {
    if (e.target.value.length > 0) {
        console.log('tiene algo')
    } else {
        e.target.classList.add('border', 'border-red-500')
    }
}

