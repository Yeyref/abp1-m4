class Trabajador {
    constructor(nombre, rut, cargo) {
        this.nombre = nombre;
        this.rut = rut;
        this.cargo = cargo;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getRut() {
        return this.rut;
    }

    setRut(rut) {
        this.rut = rut;
    }

    getCargo() {
        return this.cargo;
    }

    setCargo(cargo) {
        this.cargo = cargo;
    }
}

class Proyecto {
    constructor(nombre_proyecto) {
        this.nombre_proyecto = nombre_proyecto;
        this.trabajadores = [];
    }

    addTrabajador(trabajador) {
        this.trabajadores.push(trabajador);
    }

    buscarTrabajadorPorNombre(nombre) {
        return this.trabajadores.find(trabajador => trabajador.getNombre() === nombre) || null;
    }

    mostrarTodosLosTrabajadores() {
        return this.trabajadores;
    }
}

function agregarProyecto() {
    let nombre_proyecto = document.getElementById('nombre_proyecto').value;
    let nombre = document.getElementById('nombre').value;
    let rut = document.getElementById('rut').value;
    let cargo = document.getElementById('cargo').value;

    let nuevoProyecto = new Proyecto(nombre_proyecto);
    let nuevoTrabajador = new Trabajador(nombre, rut, cargo);

    nuevoProyecto.addTrabajador(nuevoTrabajador);

    console.log(nuevoProyecto);
    alert('Proyecto y Trabajador agregados correctamente');
}