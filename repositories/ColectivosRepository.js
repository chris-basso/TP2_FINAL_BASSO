class ColectivosRepository {

    constructor() {
        this.listColectivos = [];
    }

    getAllColectivos() {

        return this.listColectivos;
    }

    getColectivoById(id) {

        return this.listColectivos.find(colectivo => colectivo.id == id);

    }

    createColectivo(colectivo) {
        this.listColectivos.push(colectivo);
    }

    updateColectivo(id, colectivo) {
        const index = this.listColectivos.findIndex(colectivo => colectivo.id == id);

        this.listColectivos[index] = { id, ...colectivo };

        return colectivo;
    }
}
export const colectivosRepository = new ColectivosRepository();