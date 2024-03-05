import { Product } from '../database/models';

const findAllProducts = async () => Product.findAll();

const deleteProduct = async (id) => Product.destroy({ where: { id } });

export default {
  findAllProducts,
  deleteProduct,
};