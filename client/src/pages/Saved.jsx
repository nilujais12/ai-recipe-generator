import { useEffect, useState } from 'react';
import SavedRecipes from '../components/SavedRecipes';
import { getSavedRecipes } from '../api/recipeApi';

export default function Saved() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSavedRecipes()
      .then(res => setRecipes(res.data.recipes))
      .catch(() => alert('Failed to load recipes'))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = (id) => {
    setRecipes(prev => prev.filter(r => r._id !== id));
  };

  return (
    <div className="min-h-screen px-4 pb-10">
      <div className="text-center pt-10">
        <h1 className="text-3xl font-bold text-gray-800">💾 Saved Recipes</h1>
        <p className="text-gray-500 mt-2">Your personal recipe collection</p>
      </div>
      {loading
        ? <p className="text-center mt-10 text-gray-400">Loading...</p>
        : <SavedRecipes recipes={recipes} onDelete={handleDelete} />
      }
    </div>
  );
}