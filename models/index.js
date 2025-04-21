// models/index.js
import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import ProductModel from './product.model.js';
import CategoryModel from './category.model.js';

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = ProductModel(sequelize, Sequelize.DataTypes);
db.categories = CategoryModel(sequelize, Sequelize.DataTypes);

// Associations
db.categories.hasMany(db.products, { foreignKey: 'categoryId' });
db.products.belongsTo(db.categories, { foreignKey: 'categoryId' });

export default db;
