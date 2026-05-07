import dotenv from 'dotenv';
dotenv.config();


import Groq from 'groq-sdk';
import Recipe from '../models/Recipe.js';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const generateRecipe = async (req, res) => {
  const { ingredients, cuisine } = req.body;

  if (!ingredients || ingredients.length === 0) {
    return res.status(400).json({ message: 'Ingredients required' });
  }

  try {
    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        {
          role: 'user',
          content: `You are a professional chef. Generate a detailed recipe using these ingredients: ${ingredients.join(', ')}.
          ${cuisine ? `Cuisine type: ${cuisine}` : ''}
          
          Respond in this exact JSON format only, no extra text, no markdown:
          {
            "title": "Recipe Name",
            "ingredients": ["ingredient 1 with quantity", "ingredient 2 with quantity"],
            "instructions": "Step 1: ... Step 2: ... Step 3: ...",
            "cuisine": "cuisine type",
            "prepTime": "30 minutes",
            "calories": "approximately 450 calories"
          }`
        }
      ],
      temperature: 1,
      max_tokens: 1024,
    });

    const text = completion.choices[0]?.message?.content || '';
    const cleaned = text.replace(/```json|```/g, '').trim();
    const recipeData = JSON.parse(cleaned);

    res.json({ success: true, recipe: recipeData });

  } catch (error) {
    console.error('Groq error:', error);
    res.status(500).json({ message: 'Recipe generation failed', error: error.message });
  }
};

export const saveRecipe = async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).json({ success: true, recipe });
  } catch (error) {
    res.status(500).json({ message: 'Save failed', error: error.message });
  }
};

export const getSavedRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().sort({ createdAt: -1 });
    res.json({ success: true, recipes });
  } catch (error) {
    res.status(500).json({ message: 'Fetch failed', error: error.message });
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Recipe deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Delete failed', error: error.message });
  }
};