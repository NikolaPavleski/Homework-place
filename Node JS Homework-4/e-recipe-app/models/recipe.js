import mongoose from 'mongoose';
const recipeSchema = new mongoose.Schema({
  recipeName: { type: String, required: true },
  description: { type: String, required: true },
  cookingDuration: { type: String, required: true },
  ingredients: { type: [String], required: true },
  servings: { type: Number, required: true },
  difficulty: { type: String, required: true },
  cuisine: { type: String, required: true },
  chef: { type: mongoose.Schema.Types.ObjectId, ref: 'Chef' }
});
const Recipe = mongoose.model('Recipe', recipeSchema);
export default Recipe;