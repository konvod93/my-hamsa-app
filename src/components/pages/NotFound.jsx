import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-950 via-violet-900 to-amber-900 px-6 py-20">
      <div className="max-w-xl w-full bg-black/30 backdrop-blur-md rounded-3xl p-8 text-center border border-amber-500/30 shadow-xl shadow-amber-900/30">
        <div className="text-6xl font-bold text-amber-300 mb-4 tracking-widest">
          404
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold text-amber-100 mb-2">
          The Path Is Closed
        </h1>
        <p className="text-md text-amber-200 mb-6">
          You’ve summoned a page that does not exist.  
          Perhaps it’s a sign. Perhaps a mistake.  
          But even missteps are part of initiation.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-full bg-amber-600 hover:bg-amber-700 text-black font-semibold transition-all duration-300 shadow-md"
        >
          Return to the Circle
        </Link>
      </div>
    </section>
  );
};

export default NotFound;

