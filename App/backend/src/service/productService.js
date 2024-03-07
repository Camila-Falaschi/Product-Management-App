import { Product } from '../database/models';

const findAllProducts = async () => Product.findAll();

const createProduct = async (product) => Product.create(product);

const updateProduct = async (id, product) => Product.update(product, { where: { id } });

const deleteProduct = async (id) => Product.destroy({ where: { id } });

export default {
  findAllProducts,
  deleteProduct,
};