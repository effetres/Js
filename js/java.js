console.log('Desafio pre entrega');

const productos = [
    { id: 1, nombre: "Hamburguesas", precio: 900 },
    { id: 2, nombre: "Papas fritas", precio: 350 },
    { id: 3, nombre: "Milanesas", precio: 1100 },
    { id: 4, nombre: "Pizzas", precio: 1500 }


]
const carrito = []



function agregarAlCarrito(id) {
    const producto = productos.find ( p => p.id == id )
    carrito.push({ id: producto.id, nombre: producto.nombre, precio: producto.precio })
}


function verCarrito () {
    carrito.forEach ( p => {
        console.log(p);
       
    })
    
}
function calcularTotal() {
    let total = 0
    carrito.forEach(p => {
        total += p.precio
    })
    return total
}


  

    
const preciosBajos = productos.filter (p => p.precio < 500)
const preciosIntermedios = productos.filter(p => p.precio >500  && p.precio < 1000)
const preciosElevados = productos.filter(p => p.precio > 1000 && p.precio < 2000)






// variables 
let op = 0
let filtro = 0
let borrar = 0

// Pregunta al usuario 

let operacion  = 0

operacion  = parseInt(prompt('Elige la operacion que desees realizar \n 1- Ver productos \n 2- Filtrar productos por precio \n 3- ver carrito \n -4 Total'))
do{


if (operacion == 1) {

    let elegirProducto = parseInt(prompt(' Elige el producto que desees. \n 1 Hamburguesas. \n 2 Papas fritas. \n 3 Milanesas. \n 4 Pizzas.'))
    switch (elegirProducto) {
            case 1: alert('Se ha añadido Hamburguesa a su carrito')
                agregarAlCarrito(1)
                console.log(carrito);

                break;
            case 2: alert('Se ha añadido Papas fritas a su carrito')
                agregarAlCarrito(2)
                console.log(carrito);


                break;
            case 3: alert('Se ha añadido Milanesas a su carrito')
                agregarAlCarrito(3)
                console.log(carrito);

                break;
            case 4: alert('Se ha añadido Pizzas a su carrito')
                agregarAlCarrito(4)
                console.log(carrito);

                break;

            default: alert('la opcion ingresada es incorrecta')
                break;
        }
       
}

if (operacion == 2) {
    filtro = parseInt(prompt('Filtrar : \n 1- De 0 a 500 \n 2- De 500 a 1000 \n  3- De 1000 a 2000 '))
switch (filtro) {
    case 1: console.log(preciosBajos);
        
        
        break;
    case 2: console.log(preciosIntermedios);
        
        break;
    case 3:console.log(preciosElevados);
        
        break;

    default: alert('El dato ingresado es incorrecto')
        break;
}
}
if (operacion == 3)
{
    verCarrito()
}
if (operacion == 4){
    alert('El precio total es : ' + calcularTotal())

}
op = prompt('¿Desea hacer alguna otra accion? \n1.-Si \t2.-No')
//Pregunta 
if (op == 1){
    operacion  = parseInt(prompt('Elige la operacion que desees realizar \n 1- Ver productos \n 2- Filtrar productos por precio \n 3- ver carrito \n -4 Total'))
   
}

}while(op == 1);