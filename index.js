import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import db from './models/index.js';
import productRoutes from './routes/product.routes.js';
import categoryRoutes from './routes/category.routes.js';

const app = express(); // ✅ Declare this early

// For __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());

// Serve static files from frontend
app.use(express.static(path.join(__dirname, 'frontend')));

// Connect to DB
db.sequelize.authenticate()
  .then(() => {
    console.log('✅ MySQL connected.');
    return db.sequelize.sync(); // sync all models (no force)
  })
  .then(() => {
    console.log('✅ Database synced.');
  })
  .catch(err => {
    console.error('❌ Error connecting DB:', err);
  });

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

// Default Route
app.get('/', (req, res) => {
  res.send('☕ Coffee Shop API is running!');
});

app.listen(3000, () => {
  console.log('🚀 Server is running on port 3000');
});
