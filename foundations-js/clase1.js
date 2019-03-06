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
    edad: 28,
    peso: 75,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true,
    altura: 1.80,
    cantidadDeLibros: 25
}

var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 12,
    altura: 1.35,
    cantidadDeLibros: 7
}
var peter = {
    nombre: 'Peter',
    apellido: 'Stratovia',
    edad: 18,
    altura: 1.90,
    cantidadDeLibros: 50
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
    nombre: 'desconocido',
    apellido: 'Lifszyc',
    edad: 28,
    altura: 1.70,
    cantidadDeLibros: 17
}

var nuevoObjeto = {
    ...sacha 
    }

    function imprimirProfesioneS(persona) {
        console.log(`${persona.nombre} es:`)
        if (persona.ingeniero === true) console.log('Igeniero')
        if (persona.cocinero === true) console.log('Cocinero')
        if (persona.cantante === true) console.log('Cantante')
        if (persona.dj === true) console.log('Dj')
        if (persona.guitarrista === true) console.log('Guitarrista')
        if (persona.drone === true) console.log('Piloto de drone')
    }


    // function imprimirSiEsMayorDeEdad(persona) {
    //     if (persona.edad >= 18) console.log(`${persona.nombre} es mayor de edad`)
    //     else console.log(`${persona.nombre} no es mayor de edad`)
    // }
    // function imprimirSiEsMayorDeEdad({nombre, edad}) {
    //     console.log(`${nombre} es ${edad >= 18 ? 'mayor':'menor'} de edad`)
    // }

    const MAYORIA_DE_EDAD = 18

    const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD

    function imprimirSiEsMayorDeEdad(persona) {
       if (esMayorDeEdad(persona)) {
           console.log(`${persona.nombre} es mayor de edad`)
       } else {
           console.log(`${persona.nombre} es menor de edad`)
       }
    }

    imprimirSiEsMayorDeEdad(sacha)
    imprimirSiEsMayorDeEdad(dario)
    imprimirSiEsMayorDeEdad(peter)

    function permitirAcceso(persona) {
        if(!esMayorDeEdad(persona)) console.log('ACCESO DENEGADO')
    }
    
    const esMenorDeEdad = ({edad}) => !esMayorDeEdad({edad})

    console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso}kg`)    

    const INCREMENTO_PESO = 0.200
    const DIAS_DEL_AÑO = 365

    const aumentarDePeso = (persona, incremento) => persona.peso += INCREMENTO_PESO
    const adelgazar = persona => persona.peso -= INCREMENTO_PESO
    const comeMucho = () => Math.random() < 0.3
    const realizaDeporte = () => Math.random() < 0.4

    // for (var i = 1; i <= DIAS_DEL_AÑO; i++) {
    //     var random = Math.random()

    //     if (random < 0.25) {
    //         aumentarDePeso(sacha)
    //     } else if (random < 0.5) {
    //         adelgazar(sacha)
    //      }
    // }

    const META = sacha.peso - 3
    var dias = 0
    
    while (sacha.peso > META) {
        if (comeMucho()) {
            aumentarDePeso(sacha)
        }
        if (realizaDeporte()) {
            adelgazar(sacha)
        }
        dias += 1
    }

    // console.log(`Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)}kg`)    
    console.log(`Pasaron ${dias} hasta que ${sacha.nombre} adelgazó 3kg`)

    var contador = 0

    const llueve = () => Math.random() < 0.25

    do {
        contador++
    } while (!llueve())

    var frecuencia = contador === 1 ? 'vez' : 'veces';
    console.log(`Fui a ver si llovia ${contador} ${frecuencia}`);
    // if(contador > 1) console.log(`Fui a ver si llovia ${contador} veces`)
    // else console.log(`Fui a ver si llovia ${contador} vez`)

    var color //= prompt('¿Verde, Rojo o Amarillo?')
    console.log(color)

    switch (color) {
        case 'Verde':
        case 'verde':
            console.log('Verde hoja')
        break
        case 'Rojo':
        case 'rojo':
            console.log('Rojo fuego')
        break
        case 'Amarillo':
        case 'amarillo':
            console.log('Amarillo trueno')
        break
        default:
            console.log('Por favor, elige un color')
        break
    }

    var personas = [sacha, dario, peter, otraPersona]

    for (var i = 0; i < personas.length; i++) {
        var persona = personas[i]
        console.log(`${persona.nombre} mide ${persona.altura.toFixed(2)}mts`)
    }

    const esAlta = ({ altura }) => altura >= 1.8
    const esBaja = ({ altura }) => altura < 1.8

    var personasAltas = personas.filter(esAlta)
    var personasBajas = personas.filter(esBaja)

    console.log(personasAltas)
    console.log(personasBajas)

    var betty = {
        nombre: 'Betty',
        apellido: 'Jimenez',
        edad: 21
    }

    const imprimir = ({ nombre, edad }) => console.log(`Hola me llamdo ${nombre.toUpperCase()} y tengo ${edad} años`)
    imprimir(betty)

    const pasarAlturaACms = (persona) => ({ 
            ...persona,
            altura: persona.altura * 100
    })

    var personasCms = personas.map(pasarAlturaACms)
    console.log(personasCms)

    // var acum = 0
    // for (var i = 0; i < personas.length; i++) {
    //     acum = acum + personas[i].cantidadDeLibros
    // }

    const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros

    var totalDeLibros = personas.reduce(reducer, 0)

    console.log(`En total todos tienen ${totalDeLibros} libros`)

    // function heredaDe(prototipoHijo, prototipoPadre) {
    //     var fn = function() {}
    //     fn.prototype = prototipoPadre.prototype
    //     prototipoHijo.prototype = new fn
    //     prototipoHijo.prototype.constructor = prototipoHijo
    // }

    
    
    // function Persona(nombre, apellido, altura) {
    //     this.nombre = nombre
    //     this.apellido = apellido
    //     this.altura = altura
    // }
    
    
    // Persona.prototype.saludar = function() {
        //     console.log(`Hola me llamo ${this.nombre} ${apellido}`)
        // }
        
        // Persona.prototype.soyAlto = function() {
            //     return this.altura > 1.8 
            // }
            
    class Persona {
        constructor(nombre, apellido, altura) {
            this.nombre = nombre
            this.apellido = apellido
            this.altura = altura
        }

        saludar() {
            console.log(`Hola me llamo ${this.nombre} ${apellido}`)
        }

        soyAlto() {
            return this.altura > 1.8 
        }
    }
    
    // function Desarrollador(nombre, apellido) {
    //     this.nombre = nombre
    //     this.apellido = apellido
    // }
    
    // Desarrollador.prototype.saludar = function () {
    //     console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a `)
    // }

    class Desarrollador extends Persona {
        constructor(nombre, apellido, altura) {
            super(nombre, apellido, altura)
        }

        saludar() {
            console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a `)
        }
    }

    // heredaDe(Desarrollador, Persona)


    var sacha = new Persona('Sacha', 'Lifszyc', 1.72)
    // var erika = new Persona('Erika', 'Luna', 1.65)
    var arturo = new Desarrollador('Arturo', 'Martinez', 1.89)

    // sacha.saludar()
    // sacha.soyAlto()

    // function miPersona(nombre, altura) {
    //     this.nombre = nombre
    //     this.altura = altura
    // }

    // var yo = new miPersona('yo', 1.80)

    