import db from '../models/index.js';

const Product = db.products;

// Create a new product
export const createProduct = async (req, res) => {
  try {
    const { name, price, description, imageUrl, categoryId } = req.body;

    // Validation check
    if (!name || !price || !categoryId) {
      return res.status(400).json({
        message: "Name, price, and categoryId are required.",
      });
    }

    const product = await Product.create({
      name,
      price,
      description,
      imageUrl,
      categoryId,
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all products or filter by category name
export const getAllProducts = async (req, res) => {
  try {
    const { category } = req.query;

    if (category) {
      const products = await Product.findAll({
        include: {
          model: db.categories,
          where: { name: category },
        },
      });
      return res.json(products);
    }

    // No filter → return all with categories
    const products = await Product.findAll({
      include: db.categories,
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: db.categories,
    });

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update product
export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const [updated] = await Product.update(req.body, { where: { id } });
    if (updated) {
      const updatedProduct = await Product.findByPk(id);
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get products by categoryId
export const getProductsByCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const products = await Product.findAll({ where: { categoryId } });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Delete product
export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Product.destroy({ where: { id } });
    if (deleted) {
      res.json({ message: 'Product deleted successfully' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
