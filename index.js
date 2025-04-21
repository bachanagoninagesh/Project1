import express from 'express';
import db from './models/index.js';
import productRoutes from './routes/product.routes.js';
import categoryRoutes from './routes/category.routes.js';

const app = express();
app.use(express.json());

// Connect DB
db.sequelize.authenticate()
  .then(() => {
    console.log('✅ MySQL connected.');
    return db.sequelize.sync(); // ✅ Safe sync: only creates tables if not exists
  })
  .then(() => {
    console.log('✅ Database synced.');
  })
  .catch(err => {
    console.error('❌ Error connecting DB:', err);
  });

// Routes
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

app.get('/', (req, res) => {
  res.send('☕ Coffee Shop API is running!');
});

app.listen(3000, () => {
  console.log('🚀 Server is running on port 3000');
});
