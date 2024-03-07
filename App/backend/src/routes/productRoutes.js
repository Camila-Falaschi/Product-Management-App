import { Router } from 'express';
import productController from '../controllers/productController';
import 'express-async-errors';
import validateProductInputs from '../middlewares/validateProductInputs';

const routes = Router();

routes.use(validateProductInputs);
routes.get('/', productController.getProducts);
routes.post('/', productController.createProduct);
routes.put('/:id', productController.updateProduct);
routes.delete('/:id', productController.deleteProduct);

export default routes;