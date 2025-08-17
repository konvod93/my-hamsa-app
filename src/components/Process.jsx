const Process = () => {
   const steps = [
    {
      number: "1",
      title: "Invoke Your Intention",
      description: "Articulate the desire, challenge, or transformation you seek — this becomes the seed of your talisman."
    },
    {
      number: "2",
      title: "Weave Symbolic Threads",
      description: "Select archetypes, glyphs, and digital motifs that resonate with your path — each element carries meaning."
    },
    {
      number: "3",
      title: "Ritual Encoding",
      description: "Your talisman is algorithmically conjured through symbolic logic, mythic mappings, and encoded resonance."
    },
    {
      number: "4",
      title: "Awaken the Artifact",
      description: "Receive your living digital talisman — a companion, mirror, and guide woven from your intent and our ritual."
    }
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