import { Router } from 'express';
import registerRouter from './registerRoutes';
import productRouter from './productRoutes';

const routers = Router();

routers.use('/register', registerRouter);
routers.use('/products', productRouter);

export default routers;