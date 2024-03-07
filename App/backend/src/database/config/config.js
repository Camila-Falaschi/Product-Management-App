require('dotenv').config();

const suffix = {
  prod: "",
  production: "",
  dev: "-dev",
  development: "-dev",
  test: "-test",
};

const options = {
  host: process.env.POSTGRES_HOST || 'localhost',
  port: process.env.POSTGRES_PORT || '5432',
  database: 
    `${process.env.POSTGRES_NAME || 'productManagementAppDB'}${suffix[environment] || suffix.test}`,
  username: process.env.POSTGRES_USER || 'root',
  password: process.env.POSTGRES_PASSWORD || 'password',
  dialect: process.env.DB_DIALECT || 'postgres',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};
export const development = {
    ...options,
};
export const test = {
    ...options,
};
export const production = {
    ...options,
};