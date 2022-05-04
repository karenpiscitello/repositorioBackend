class Usuario {

    constructor (nombre, apellido, libros, mascotas) {
        
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = mascotas || [];
        this.libros = libros || [];
    }
    
    getFullName = () =>{
        return `${nombre} + ${apellido}`;
    }
    addMascota(mascota){
        this.mascotas.push = mascota;
    }
    countMascotas(){
    
    }

    addBook(nombre, autor) {
        this.libros.push({ 
        nombre: nombre,
        autor: autor
    })
    }

    getBookNames(){
        const nombresLibros = this.libros.map((libro) => libro.nombre)
        return nombresLibros 
    }
    
    
}
const usuario1 = new Usuario('Karen', 'Piscitello', [{nombre: "Harry Potter", autor: "JK Rowling"}], ["Perrito"]);
usuario1.getFullName()
console.log(getFullName());

usuario1.addMascota("Oveja") 
usuario1.addMascota("Gatito")

console.log(Usuario.countMascotas())

usuario1.addBook("El señor de los anillos", "J. R. R. Tolkien") 
usuario1.addBook("Libro inventado", "Yo") 

console.log( usuario1.getBookNames() )
