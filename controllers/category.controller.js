// controllers/category.controller.js
import db from '../models/index.js';
const Category = db.categories;

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await Category.create({ name });
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({ include: db.products });
    res.json(categories);
  } catch (err) {
    let errorMessage = err?.message ? err.message : 'An error occurred while fetching categories.';
    res.status(500).json({ message: errorMessage });
  }
};

export const deleteCategory = async (req, res) => {
    try {
      const id = req.params.id;
      const deleted = await Category.destroy({ where: { id } });
  
      if (deleted) {
        res.json({ message: 'Category deleted successfully.' });
      } else {
        res.status(404).json({ message: 'Category not found.' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  

export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, { include: db.products });
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
