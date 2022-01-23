//variables
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');

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

        //eliminar los errores...

        const error = document.querySelector('p.error');
        if( error ){
            error.remove();
         }
        
        e.target.classList.remove('border', 'border-red-500')
        e.target.classList.add('border', 'border-green-500')
    } else {
        e.target.classList.remove('border', 'border-green-500')
        e.target.classList.add('border', 'border-red-500')

        mostrarError('Todos los campos son obligatorios');
    }

    if (e.target.type === 'email') {
        const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if( er.test( e.target.value ) ) {
            const error = document.querySelector('p.error');
            if( error ){
                error.remove();
            }
            
            e.target.classList.remove('border', 'border-red-500')
            e.target.classList.add('border', 'border-green-500')
        } else {
            e.target.classList.remove('border', 'border-green-500')
            e.target.classList.add('border', 'border-red-500')

            mostrarError('Email No Válido');
        }
        
    }
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje; 
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');
    if (errores.length === 0) {
        formulario.appendChild(mensajeError);
    }

    
}