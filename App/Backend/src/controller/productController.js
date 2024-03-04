import productService from '../services/productService';

const getProducts = async (_req, res) => {
  const products = await productService.findAllProducts();
  res.status(200).json(products);
};

export default {
  getProducts,
};