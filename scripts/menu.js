// menu.js
function cerrarMenu() {
    var checkbox = document.getElementById('check');
    if (checkbox.checked) {
        checkbox.checked = false;
    }
}

// Agrega un escuchador de eventos al documento para cerrar el menú al hacer clic fuera de él
document.addEventListener('click', function(event) {
    var menu = document.getElementById('menuopciones');
    if (!menu.contains(event.target)) {
        cerrarMenu();
    }
});
