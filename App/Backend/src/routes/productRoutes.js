import { Router } from 'express';
import { getProducts } from '../controllers/productController';

const routes = Router();

routes.get('/', getProducts);

export default routes;