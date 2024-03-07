import { DataTypes } from 'sequelize';
import { define } from '../config/database';

const Produto = define('Produto', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER 
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  brand: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  model: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.DECIMAL(10, 2)
  },
  color: {
    allowNull: false,
    type: DataTypes.STRING,
  }
});

export default Produto;
