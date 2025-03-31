import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import recipeRoutes from './routes/recipeRoutes.js';
import chefRoutes from './routes/chefRoutes.js';
dotenv.config();
console.log('MONGO_URI:', process.env.MONGO_URI);
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use('/api/recipes', recipeRoutes);
app.use('/api/chefs', chefRoutes);
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});