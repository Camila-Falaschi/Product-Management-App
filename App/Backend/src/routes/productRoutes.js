import { Router } from 'express';
import productController from '../controllers/productController';

const routes = Router();

routes.get('/', productController.getProducts);

export default routes;