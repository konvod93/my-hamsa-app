const CallToAction = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-indigo-950 via-purple-900 to-violet-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-200 mb-8">
          Ready to Transform Your Life?
        </h2>
        <p className="text-xl text-amber-100 mb-12 max-w-2xl mx-auto">
          Join thousands who have discovered the power of personalized talismans. Your journey to spiritual empowerment begins now.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
          <button className="inline-block px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xl font-bold rounded-full hover:from-amber-400 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/50">
            Start Creating ✨
          </button>
          <button className="inline-block px-10 py-4 bg-transparent border-2 border-amber-500 text-amber-500 text-xl font-bold rounded-full hover:bg-amber-500 hover:text-white transform hover:scale-105 transition-all duration-300">
            Learn More 📚
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;