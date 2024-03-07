import { Router } from 'express';
import loginRouter from './loginRoutes';
import registerRouter from './registerRoutes';
import productRouter from './productRoutes';

const routers = Router();

routers.use('/login', loginRouter);
routers.use('/register', registerRouter);
routers.use('/product', productRouter);

export default routers;