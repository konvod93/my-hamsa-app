import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="text-amber-300 text-lg font-semibold p-4">
        <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/what-is" className="hover:text-gray-400">What is it?</Link></li>
            <li><Link to="/how-it-works" className="hover:text-gray-400">How It Works?</Link></li>
            <li><Link to="/manual" className="hover:text-gray-400">Manual</Link></li>
            <li><Link to="/create-talisman" className="hover:text-gray-400">Create Talisman</Link></li>
        </ul>
    </nav>
  );
}

export default Navigation;
    