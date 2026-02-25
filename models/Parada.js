class Parada {
    constructor(idParada, nombre, latitud, longitud) {
        this.idParada = idParada;
        this.nombre = nombre;
        this.latitud = latitud;
        this.longitud = longitud;
    }

    get getIdParada() {
        return this.idParada;
    }

    get getNombre() {
        return this.nombre;
    }

    get getLatitud() {
        return this.latitud;
    }

    get getLongitud() {
        return this.longitud;
    }
}

export default Parada;
