import { saveRecipe } from '../api/recipeApi';
import { useState } from 'react';

export default function RecipeCard({ recipe }) {
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    try {
      await saveRecipe(recipe);
      setSaved(true);
    } catch {
      alert('Save failed!');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-xl mx-auto mt-6">
      <h2 className="text-2xl font-bold text-orange-500 mb-2">{recipe.title}</h2>

      <div className="flex gap-4 text-sm text-gray-500 mb-4">
        <span>🕐 {recipe.prepTime}</span>
        <span>🔥 {recipe.calories}</span>
        <span>🍽️ {recipe.cuisine}</span>
      </div>

      <h3 className="font-semibold text-gray-700 mb-2">Ingredients:</h3>
      <ul className="list-disc list-inside text-sm text-gray-600 mb-4 space-y-1">
        {recipe.ingredients.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>

      <h3 className="font-semibold text-gray-700 mb-2">Instructions:</h3>
      <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
        {recipe.instructions}
      </p>

      <button
        onClick={handleSave}
        disabled={saved}
        className="mt-5 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-xl transition disabled:opacity-50"
      >
        {saved ? '✅ Saved!' : '💾 Save Recipe'}
      </button>
    </div>
  );
}