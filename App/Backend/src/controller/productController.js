import productService from '../services/productService';

const getProducts = async (_req, res) => {
  const products = await productService.findAllProducts();
  res.status(200).json(products);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await productService.deleteProduct(id);
  return res.status(201).end();
};

export default {
  getProducts,
  deleteProduct,
};