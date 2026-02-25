import { Router } from 'express';
import ColectivosController from '../controller/ColectivosController.js';

const colectivosController = new ColectivosController();

const colectivosRouter = Router();

colectivosRouter.get('/', colectivosController.getAllColectivosController);
colectivosRouter.post('/', colectivosController.createColectivosController);


export default colectivosRouter;