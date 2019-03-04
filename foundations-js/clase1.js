var nombre = 'Sacha', apellido = 'Lifszyc'

var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLowerCase();

var primeraLetraDelNombre = nombre.charAt(0);
var cantidadDeLetrasDelNombre = nombre.length;

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.substr(1,2);

const ultimaLetra = nombre.charAt(nombre.length-1)
const otraSolucion = nombre.substr(-1);
const otraSolucionMas = nombre.slice(-1);

var edad = 27;

var precioDeVino = 200.33

var total = Math.round(precioDeVino * 100 * 3) / 100

function imprimirEdad(n, e = 25) {
    console.log(`${n} tiene ${e} años`)
}

imprimirEdad(nombre, edad)

// function imprimirNombreEnMayusculas({ nombre }) {
//     console.log(nombre.toUpperCase());
// }
function imprimirNombreEnMayusculas(persona) {
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
}


var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}

var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 27
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
// imprimirNombreEnMayusculas({ nombre: "pepito" })

function imprimirNombreYEdad({ nombre, edad }) {
    console.log(`Holita, me llamdo ${nombre} y tengo ${edad} años`)
}

imprimirNombreYEdad(sacha);

function cumpleaños(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}


var x = 4, y = '4'

var otraPersona = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}

var nuevoObjeto = {
    ...sacha 
    }