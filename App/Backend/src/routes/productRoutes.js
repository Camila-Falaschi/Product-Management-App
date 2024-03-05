import { Router } from 'express';
import productController from '../controllers/productController';

const routes = Router();

routes.get('/', productController.getProducts);
routes.delete('/:id', productController.deleteProduct);

export default routes;