import productService from '../services/productService';

const getProducts = async (_req, res) => {
  const products = await productService.findAllProducts();
  res.status(200).json(products);
};

const createProduct = async (req, res) => {
  const product = req.body;
  const newProduct = await productService.createProduct(product);
  return res.status(201).json(newProduct);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  const updatedProduct = await productService.updateProduct(id, product);
  return res.status(201).json(updatedProduct);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await productService.deleteProduct(id);
  return res.status(201).end();
};

export default {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};