import { useState } from 'react';
import { deleteRecipe } from '../api/recipeApi';

export default function SavedRecipes({ recipes, onDelete }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleDelete = async (id) => {
    try {
      await deleteRecipe(id);
      onDelete(id);
    } catch {
      alert('Delete failed!');
    }
  };

  if (recipes.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-10">
        No saved recipes yet. Generate one! 🍳
      </p>
    );
  }

  return (
    <div className="grid gap-4 mt-6 max-w-2xl mx-auto">
      {recipes.map((recipe) => (
        <div
          key={recipe._id}
          className="bg-white rounded-2xl shadow p-5 cursor-pointer hover:shadow-lg transition"
          onClick={() => setSelectedRecipe(recipe)}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg text-orange-500">{recipe.title}</h3>
              <p className="text-xs text-gray-400 mt-1">
                🕐 {recipe.prepTime} &nbsp;|&nbsp; 🔥 {recipe.calories} &nbsp;|&nbsp; 🍽️ {recipe.cuisine}
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(recipe._id);
              }}
              className="text-red-400 hover:text-red-600 text-sm font-medium"
            >
              🗑️ Delete
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Click to view full recipe →
          </p>
        </div>
      ))}

      {/* Modal */}
      {selectedRecipe && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedRecipe(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-2xl font-bold text-orange-500">
                {selectedRecipe.title}
              </h2>
              <button
                onClick={() => setSelectedRecipe(null)}
                className="text-gray-400 hover:text-gray-600 text-xl font-bold"
              >
                ✕
              </button>
            </div>

            {/* Info */}
            <div className="flex gap-4 text-sm text-gray-500 mb-4">
              <span>🕐 {selectedRecipe.prepTime}</span>
              <span>🔥 {selectedRecipe.calories}</span>
              <span>🍽️ {selectedRecipe.cuisine}</span>
            </div>

            {/* Ingredients */}
            <h3 className="font-semibold text-gray-700 mb-2">Ingredients:</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4 space-y-1">
              {selectedRecipe.ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>

            {/* Instructions */}
            <h3 className="font-semibold text-gray-700 mb-2">Instructions:</h3>
            <div className="text-sm text-gray-600 space-y-2">
              {selectedRecipe.instructions
                .split(/Step \d+:/i)
                .filter(Boolean)
                .map((step, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="font-bold text-orange-500 min-w-fit">
                      Step {i + 1}:
                    </span>
                    <span>{step.trim()}</span>
                  </div>
                ))}
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedRecipe(null)}
              className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-xl transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}