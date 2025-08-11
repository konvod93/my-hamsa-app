import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
  return (
    <header className="fixed flex top-0 left-0 w-full bg-indigo-900 text-amber-300 p-4 z-50 opacity-75 backdrop-blur-md shadow-lg">
      <div className="flex-shrink-2">
        <img src="/hamsa.png" alt="Hamsa Logo" className="w-12 h-12 inline-block mr-2 cursor-pointer" onClick={() => navigate('/')} />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;