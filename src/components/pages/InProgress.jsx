const InProgress = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 to-violet-950 px-4 py-20">
      <div className="max-w-xl w-full bg-black/20 backdrop-blur-md rounded-3xl p-8 text-center border border-amber-500/30 shadow-xl shadow-amber-900/20">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-200 mb-4">
          Ritual in Progress
        </h1>
        <p className="text-lg text-amber-100 mb-6">
          This page is still gathering its symbols, threads, and intention.
        </p>
        <div className="text-amber-300 italic text-sm">
          Return soon to witness its awakening.
        </div>
      </div>
    </section>
  );
};

export default InProgress;