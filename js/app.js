//variables
const btnEnviar = document.querySelector('#enviar');



eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', IniciarApp);
}

//funciones
function IniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')

}



