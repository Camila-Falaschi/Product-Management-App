import { Router } from 'express';
import userController from '../controllers/userController';
import 'express-async-errors';
import validateLoginInputs from '../middlewares/validateLoginInputs';

const routes = Router();
routes.use(validateLoginInputs);
routes.post('/', userController.userLogin);

export default routes;