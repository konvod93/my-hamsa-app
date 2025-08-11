import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="text-amber-300 p-4">
        <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
        </ul>
    </nav>
  );
}

export default Navigation;
    