import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-violet-950 via-purple-900 to-indigo-900">
      {/* Анимированные звезды на фоне */}
      <div className="inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-200 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        <div className="transform hover:scale-110 transition-transform duration-500">
          <div className="w-48 h-48 mb-4 mx-auto animate-pulse drop-shadow-2xl bg-gradient-to-r from-amber-300 to-orange-400 rounded-full flex items-center justify-center text-6xl">
            🪬
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent">
          Welcome to our Magical Service
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-amber-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Create your own individual talisman helping in your life
        </p>
        <Link to="/create-talisman">
          <button className="inline-block mt-6 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xl font-semibold rounded-full hover:from-amber-400 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 cursor-pointer">
            Create Your Talisman! ✨
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;