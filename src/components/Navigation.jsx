import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="text-amber-300 text-lg font-semibold p-4 ralative">
      <div className="flex justify-between items-center">
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {        isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-2 w-1/4 absolute bg-gray-800 text-amber-200 text-sm p-4 rounded shadow-lg">
          <ul className="space-y-2 mt-2">
            <li>
              <Link to="/" onClick={closeMenu} className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/what-is" onClick={closeMenu} className="hover:text-gray-400">
                What is it?
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" onClick={closeMenu} className="hover:text-gray-400">
                How It Works?
              </Link>
            </li>
            <li>
              <Link to="/manual" onClick={closeMenu} className="hover:text-gray-400">
                Manual
              </Link>
            </li>
            <li>
              <Link to="/create-talisman" onClick={closeMenu} className="hover:text-gray-400">
                Create Talisman
              </Link>
            </li>
          </ul>
        </div>
      )}
      <ul className="hidden md:flex space-x-4  text-center">
        <li>
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/what-is" className="hover:text-gray-400">
            What is it?
          </Link>
        </li>
        <li>
          <Link to="/how-it-works" className="hover:text-gray-400">
            How It Works?
          </Link>
        </li>
        <li>
          <Link to="/manual" className="hover:text-gray-400">
            Manual
          </Link>
        </li>
        <li>
          <Link to="/create-talisman" className="hover:text-gray-400">
            Create Talisman
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
    