import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-orange-500 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold tracking-wide">🍳 AI Recipe Generator</h1>
      <div className="flex gap-6">
        <Link to="/" className="hover:underline font-medium">Generate</Link>
        <Link to="/saved" className="hover:underline font-medium">Saved Recipes</Link>
      </div>
    </nav>
  );
}