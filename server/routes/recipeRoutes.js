import express from 'express';
import {
  generateRecipe,
  saveRecipe,
  getSavedRecipes,
  deleteRecipe
} from '../controllers/recipeController.js';

const router = express.Router();

router.post('/generate', generateRecipe);
router.post('/save', saveRecipe);
router.get('/saved', getSavedRecipes);
router.delete('/:id', deleteRecipe);

export default router;