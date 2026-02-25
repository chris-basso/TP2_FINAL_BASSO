import Colectivo from "../models/Colectivo.js";
import Parada from "../models/Parada.js";   
import { colectivosRepository } from "../repositories/ColectivosRepository.js";
import { paradasRepository } from '../repositories/ParadasRepository.js';

class ColectivosUseCases {

    getAllColectivosUseCases() {

        return colectivosRepository.getAllColectivos();
    }
    getColectivosByIdUseCases(id) {

        return this.listColectivos.find(colectivos => colectivos.id == id);

    }

    createColectivosUseCases(colectivos) {
        let respuesta = {}; 
        try {
        
            const nuevoColectivo = new Colectivo(colectivos.id, colectivos.latitud, colectivos.longitud, colectivos.velocidad);
            const distancias = this.calcularDistanciasParadas(nuevoColectivo.latitud, nuevoColectivo.longitud);
            const paradaCercana = this.getParadaCercana(distancias);
            let alertaGenerada = this.generarAlerta(paradaCercana);
            respuesta = { guardado: true, alerta: alertaGenerada };

            if (colectivosRepository.getColectivoById(colectivos.id)) {
                colectivosRepository.updateColectivo(colectivos.id, nuevoColectivo);
            } else {
                colectivosRepository.createColectivo(nuevoColectivo);
            }
            colectivosRepository.createColectivo(nuevoColectivo);
        } catch (error) {
            respuesta.guardado = false;
            respuesta.alerta = null;
            return respuesta;
        }

        return respuesta;
    }

    calcularDistanciasParadas(latitud, longitud) {
        const paradas = paradasRepository.getAllParadas();
        return paradas.map(parada => ({
            idParada: parada.idParada,
            nombre: parada.nombre,
            distancia: this.distanciaGPS(
                latitud,
                longitud,
                parada.latitud,
                parada.longitud
            )
        }));
    }


    getParadaCercana(distancias) {
        const parada = distancias
            .filter(p => p.distancia < 80)
            .sort((a, b) => a.distancia - b.distancia)[0] || null;
        return parada;
    }


    generarAlerta(paradaCercana) {
        let alerta = null;
        if (paradaCercana) {
            alerta= { idParada: paradaCercana.idParada, nombre: paradaCercana.nombre, distancia: paradaCercana.distancia };
        }
        return alerta;
    }

    distanciaGPS(lat1, lon1, lat2, lon2) {
        const R = 6371000; // radio terrestre en metros
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const lat1Rad = lat1 * Math.PI / 180;
        const lat2Rad = lat2 * Math.PI / 180;
        const a =
            Math.sin(dLat / 2) ** 2 +
            Math.cos(lat1Rad) *
            Math.cos(lat2Rad) *
            Math.sin(dLon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // distancia en metros
    }

}

export default ColectivosUseCases