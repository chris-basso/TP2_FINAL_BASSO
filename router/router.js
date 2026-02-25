import { Router } from 'express';
import colectivosRouter from './colectivosRouter.js';
import paradasRouter from './paradasRouter.js';

const router = Router();

router.use('/colectivos', colectivosRouter);
router.use('/paradas', paradasRouter);

export default router;