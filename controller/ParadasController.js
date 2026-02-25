
import ParadasUseCases from '../usecases/ParadasUseCases.js';

class ParadasController {

    getAllParadasUseCases = new ParadasUseCases();

    getAllParadasController = (req, res) => {
        const paradas = this.getAllParadasUseCases.getAllParadas();
        console.log(paradas);

        res.status(200).send({
            message: "Paradas encontradas",
            status: 'success',
            data: paradas
        });
    }
}
export default ParadasController;