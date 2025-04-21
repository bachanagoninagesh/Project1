// routes/product.routes.js
import express from 'express';
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller.js';

const router = express.Router();

router.post('/', createProduct);           // POST /api/products
router.get('/', getAllProducts);           // GET /api/products
router.get('/:id', getProductById);        // GET /api/products/:id
router.put('/:id', updateProduct);         // PUT /api/products/:id
router.delete('/:id', deleteProduct);      // DELETE /api/products/:id

export default router;
