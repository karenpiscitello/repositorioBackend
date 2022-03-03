class Usuario {

    constructor (nombre, apellido) {
        
        this.nombre = nombre;
        this.apellido = apellido;
        //this.mascotas = mascotas || [];
        //this.libros = libros || [];
    }
    
    getFullName() {
        console.log(`${nombre} + ${apellido}`)
    }
}
const usuario = new Usuario('Karen', 'Piscitello');//, { mascotas, libros })

getFullName();

// const datosCompletos = (datos) => {
//     const { nombre, apellido } = datos;
//     return {
//         nombre_completo: `${nombre} ${apellido}`
//     }
// }



// const usuario = new Usuario('Karen', 'Piscitello', { mascotas, libros })
// console.log(usuario)