// routes/category.routes.js
import express from 'express';
import {
  createCategory,
  getAllCategories,
  getCategoryById,
} from '../controllers/category.controller.js';

const router = express.Router();

router.post('/', createCategory);       // POST /api/categories
router.get('/', getAllCategories);      // GET /api/categories
router.get('/:id', getCategoryById);    // GET /api/categories/:id

export default router;
