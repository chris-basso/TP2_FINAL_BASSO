import Parada from "../models/Parada.js";
class ParadasRepository {

    listParadas = [];

    constructor() {
        this.listParadas = [
            new Parada("P01", "Plaza Central", -34.6037, -58.3816),
            new Parada("P02", "Hospital", -34.6060, -58.3850),
            new Parada("P03", "Estación", -34.6095, -58.3920),
            new Parada("P04", "Universidad", -34.5982, -58.3731)
        ];
    }

    getAllParadas() {
        return this.listParadas;
    }
}

export const paradasRepository = new ParadasRepository();