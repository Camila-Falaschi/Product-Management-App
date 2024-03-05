import { Router } from 'express';
import 'express-async-errors';
import userController from '../controllers/userController';
import validateRegisterInputs from '../middlewares/validateRegisterInputs';

const routes = Router();
routes.use(validateRegisterInputs);
routes.post('/', userController.createUser);

export default routes;