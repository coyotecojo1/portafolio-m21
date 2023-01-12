// Variables
const carrito = document.querySelector('#carrito');
const listaProductos = document.querySelector('#lista-productos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = [];

// Listeners
cargarEventListeners();

function cargarEventListeners() {
     // Dispara cuando se presiona "Agregar Carrito"
     listaProductos.addEventListener('click', agregarProducto);

     // Cuando se elimina un curso del carrito
     carrito.addEventListener('click', eliminarProducto);

     // Al Vaciar el carrito
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}

// Funciones
// Función que añade el curso al carrito
function agregarProducto(e) {
    e.preventDefault();
    // Delegation para agregar-carrito
    if(e.target.classList.contains('agregar-carrito')) {
         const promo = e.target.parentElement.parentElement;
         // Enviamos el curso seleccionado para tomar sus datos
         leerDatosCurso(promo);
    }
}

