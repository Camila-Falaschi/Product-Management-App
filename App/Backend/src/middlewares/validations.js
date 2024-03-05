const validateEmail = (email) => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(email)) throw new Error('Invalid email');
};

const validatePassword = (password) => {
  if (password.length < 6) {
    throw new Error('Password must have at least 6 characters');
  }
};

const validateLoginInputs = (req, _res, next) => {
  const { email, password } = req.body;
  if (!email || !password) throw new Error('Invalid empty fields');
  validateEmail(email);
  validatePassword(password);
  next();
};

const validateRegisterInputs = (req, _res, next) => {
  const { email, password } = req.body;
  if (!email || !password) throw new Error('Invalid empty fields');
  validateEmail(email);
  validatePassword(password);
  next();
};

const validatePriceValue = (price) => {
  if (typeof price !== 'number') throw new Error('Price must be a number');
  if (price < 0) throw new Error('Price must be greater than 0');
};

const validateProductInputs = (req, _res, next) => {
  const { name, brand, model, price, color } = req.body;
  if (!name || !brand || !model || !price || !color) throw new Error('Invalid empty fields');
  validatePriceValue(price);
  next();
};

export default { validateLoginInputs, validateRegisterInputs, validateProductInputs };