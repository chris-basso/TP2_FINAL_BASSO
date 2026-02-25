class Colectivo {

    constructor(id, latitud, longitud, velocidad) {

       this.validarId(id);
        this.id = id;

        this.validarUbicacion(latitud)
        this.latitud = latitud;

        this.validarUbicacion(longitud)
        this.longitud = longitud;

        this.validarVelocidad(velocidad)
        this.velocidad = velocidad;

        this.timestamp = new Date().toString();
    }


    getId() {
        return this.id;
    }

    validarId(id) {
        if (typeof id !== "string" || id.length !== 6 || !/^[A-Za-z0-9]{6}$/.test(id)) {
            throw new Error("id debe ser una cadena de exactamente 6 caracteres alfanuméricos");
        }
    }
    validarUbicacion(ubicacion) {
        if (typeof ubicacion !== "number") {
            throw new Error("La ubicación debe ser un número");
        }
    }

    validarVelocidad(velocidad) {
        if (typeof velocidad !== "number" || velocidad < 0) {
            throw new Error("La velocidad debe ser un valor numérico no negativo");
        }
    }
}

export default Colectivo;