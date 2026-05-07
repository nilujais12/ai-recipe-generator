import { useState } from 'react';
import RecipeForm from '../components/RecipeForm';
import RecipeCard from '../components/RecipeCard';
import { generateRecipe } from '../api/recipeApi';

export default function Home() {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async (ingredients, cuisine) => {
    setLoading(true);
    setError('');
    setRecipe(null);
    try {
      const res = await generateRecipe(ingredients, cuisine);
      setRecipe(res.data.recipe);
    } catch {
      setError('Something went wrong. Try again!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-4 pb-10">
      <div className="text-center pt-10">
        <h1 className="text-3xl font-bold text-gray-800">
          What's in your kitchen? 🥘
        </h1>
        <p className="text-gray-500 mt-2">
          Enter ingredients and let AI create a recipe for you!
        </p>
      </div>

      <RecipeForm onGenerate={handleGenerate} loading={loading} />

      {error && (
        <p className="text-center text-red-500 mt-4">{error}</p>
      )}

      {recipe && <RecipeCard recipe={recipe} />}
    </div>
  );
}