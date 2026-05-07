import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/recipes';
export const generateRecipe = (ingredients, cuisine) =>
  axios.post(`${BASE_URL}/generate`, { ingredients, cuisine });

export const saveRecipe = (recipe) =>
  axios.post(`${BASE_URL}/save`, recipe);

export const getSavedRecipes = () =>
  axios.get(`${BASE_URL}/saved`);

export const deleteRecipe = (id) =>
  axios.delete(`${BASE_URL}/${id}`);