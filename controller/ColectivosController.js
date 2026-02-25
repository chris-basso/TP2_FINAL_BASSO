
import ColectivosUseCases from '../usecases/ColectivosUseCases.js';

class ColectivosController {

    colectivosUseCases = new ColectivosUseCases();

    getAllColectivosController = (req, res) => {
        const colectivos = this.colectivosUseCases.getAllColectivosUseCases();
        res.status(200).send({
            message: "Colectivos encontrados",
            status: 'success',
            data: colectivos
        });
    }

    createColectivosController = (req, res) => {
        const colectivos = req.body;
        try {
            const nuevoColectivos = this.colectivosUseCases.createColectivosUseCases(colectivos);
            res.status(201).send({
                message: `Colectivo created successfully`,
                status: 'success',
                data: nuevoColectivos
            });
        } catch (error) {
            res.status(409).send({
                message: error.message,
                status: 'error'
            });
        }
    }

}
export default ColectivosController;