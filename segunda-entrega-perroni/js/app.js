// El objetivo es crear un algoritmo para pasar productos(con sus determinadas propiedades) a un array

//creo un array en donde se van a guardar todos los productos ingresados como objetos
const listaDeProductos = [];

// creo una clase constructora par apoder crear los objetos que se guarden en el array (los productos)
class Producto {
    constructor(nombre, precio, stock, marca) {
        this.nombre = nombre;
        this.precio = Number(precio);
        this.stock = Number(stock);
        this.marca = marca;
    }
}

//una funcion para agregar los listaDeProductos al array
const agregarProductos = () => {
    // creo una variable para guardar en un objeto el producto ingresado, cada prompt me va a servir para
    // ingresar los parametros de la clase constructora Producto
    let producto1 = new Producto(
        prompt("Que tipo de producto desea ingresar"),
        prompt("Precio del producto"),
        prompt("Cantidad de stock"),
        prompt("Marca del producto")
    );
    listaDeProductos.push(producto1);
    let mensaje = prompt(
        "Si desea ingresar otro producto escriba 'si'"
    ).toUpperCase();
    if (mensaje === "SI") {
        agregarProductos();
    } else {
        listaDeProductos.forEach((i) => {
            console.log(i);
        });
    }
};
agregarProductos();

//creo la variable para pasarle el valor del numero por el que se quiere filtrar, lo creo afuera del filter
//porque si no me ejecuta el prompt cada vez que itera el array

let precioConsultado = Number(
    prompt(
        "Si desea filtrar por precio ingrese un valor y le devolveremos los precios menores a ese"
    )
);

// y creo una funcion que filtre los valores por el precio de cada producto de acuerdo al valor que le pase el prompt

const filtrarPorPrecio = listaDeProductos.filter(function (elemento) {
    return elemento.precio < precioConsultado;
});
filtrarPorPrecio.forEach((element) => {
    console.log("Este producto es menor al valor que ingreso ", element);
});

//uso el metodo sort para ordenar los objetos del array alfabeticamente de acuerdo a su propiedad nombre
const ordernarPorNombre = () => {
    listaDeProductos.sort((a, b) => {
        if (a.nombre < b.nombre) {
            return -1;
        } else if (a.nombre > b.nombre) {
            return 1;
        } else {
            return 0;
        }
    });
    console.log(listaDeProductos);
};

//uso el metodo sort para ordenar los objetos del array numericamente de acuerdo a su propiedad precio
const ordernarPorPrecio = () => {
    listaDeProductos.sort(function (a, b) {
        return a.precio - b.precio;
    });
    console.log(listaDeProductos);
};

// creo una funcion para poder ordenar los objetos del array por su propiedad nombre o precio
const ordenarPor = () => {
    let msj = prompt(
        "Desea ordenar los productos por su precio o por su nombre? (escribir precio o nombre)"
    ).toLowerCase();
    if (msj === "precio") {
        ordernarPorPrecio();
    } else if (msj === "nombre") {
        ordernarPorNombre();
    } else {
        console.log("No elegiste ordenar los productos del array");
    }
};
ordenarPor();

// aca creo una funcion que cuente cuantos productos hay en stock, intente hacerlo con un forEach pero me sumaba el valor cada vez que iteraba el array, haciendo que se sume mas veces de acuerdo a cuantos items tenia en el array

let total = 0;
const acumular = () => {
    for (let i = 0; i < listaDeProductos.length; i++) {
        total += listaDeProductos[i].stock;
    }
    return total;
};
console.log("La cantidad de productos que hay en stock son: ", acumular());
console.log("Tenes ", listaDeProductos.length, "tipos distintos de productos.");
