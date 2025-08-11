import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-violet-950">
        <img src="/hamsa.png" alt="Hamsa" className="w-48 h-48 mb-4" />
        <h1 className="text-4xl font-bold text-amber-200">Welcome to out Magical Service</h1>
        <p className="mt-4 text-lg text-amber-200">Creater your own individual talisman helping in your life</p>
        <Link to="/" className="mt-6 px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-300">Create!</Link>
    </div>
  );
}

export default Hero;