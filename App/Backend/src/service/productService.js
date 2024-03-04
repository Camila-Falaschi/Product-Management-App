import { Product } from '../database/models';

const findAllProducts = async () => Product.findAll();

export default {
  findAllProducts,
};