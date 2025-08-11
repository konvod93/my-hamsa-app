const Process = () => {
  const steps = [
    { number: "1", title: "Share Your Intent", description: "Tell us about your goals and desires" },
    { number: "2", title: "Choose Your Elements", description: "Select symbols and materials that resonate with you" },
    { number: "3", title: "Mystical Creation", description: "We craft your talisman with ancient rituals" },
    { number: "4", title: "Receive Your Power", description: "Your personal talisman is ready to guide you" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-900 to-violet-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-200 text-center mb-16">
          How It Works
        </h2>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center space-x-6 bg-black/20 p-6 rounded-2xl backdrop-blur-sm">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                {step.number}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-amber-200 mb-2">{step.title}</h3>
                <p className="text-amber-100 text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;