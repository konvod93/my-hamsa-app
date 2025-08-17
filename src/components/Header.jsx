import ConnectWalletButton from "./ConnectWalletButton";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full bg-indigo-900 text-amber-300 p-4 z-50 opacity-50 backdrop-blur-md shadow-lg">
      <div className="flex items-center justify-between w-full">
        {/* Левый блок: логотип + навигация */}
        <div className="flex items-center space-x-4">
          <img
            src="/hamsa.png"
            alt="Hamsa Logo"
            className="w-12 h-12 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <Navigation />
        </div>

        {/* Правый блок: кнопка подключения — всегда видна */}
        <div className="flex items-center">
          <ConnectWalletButton />
        </div>
      </div>
    </header>
  );
};

export default Header;