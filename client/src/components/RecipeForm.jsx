import { useState } from 'react';

export default function RecipeForm({ onGenerate, loading }) {
  const [input, setInput] = useState('');
  const [cuisine, setCuisine] = useState('');

  const handleSubmit = () => {
    if (!input.trim()) return alert('Please enter ingredients!');
    const ingredients = input.split(',').map(i => i.trim());
    onGenerate(ingredients, cuisine);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-xl mx-auto mt-8">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Enter Ingredients
      </h2>

      <textarea
        className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
        rows={3}
        placeholder="e.g. tomato, onion, garlic, chicken"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <select
        className="w-full mt-3 border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
      >
        <option value="">Any Cuisine</option>
        <option value="Indian">Indian</option>
        <option value="Italian">Italian</option>
        <option value="Chinese">Chinese</option>
        <option value="Mexican">Mexican</option>
        <option value="Continental">Continental</option>
      </select>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition disabled:opacity-50"
      >
        {loading ? '🍳 Generating...' : '✨ Generate Recipe'}
      </button>
    </div>
  );
}