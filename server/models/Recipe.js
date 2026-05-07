import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: [String],
  instructions: { type: String, required: true },
  cuisine: { type: String },
  prepTime: { type: String },
  calories: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Recipe', recipeSchema);