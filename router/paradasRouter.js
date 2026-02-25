import { Router } from 'express';
import ParadasController from '../controller/ParadasController.js';

const paradasController = new ParadasController();

const paradasRouter = Router();

paradasRouter.get('/', paradasController.getAllParadasController);


export default paradasRouter;