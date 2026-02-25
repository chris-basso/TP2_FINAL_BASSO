
import { paradasRepository } from "../repositories/ParadasRepository.js";

class ParadasUseCases {

    getAllParadas() {
        return paradasRepository.getAllParadas();
    }

}

export default ParadasUseCases;
