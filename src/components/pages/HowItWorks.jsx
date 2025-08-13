import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HowItWorksPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();

  const steps = [
    {
      id: 1,
      title: "Formulate Your Intention",
      shortTitle: "Intention",
      description:
        "Create a powerful, specific intention sentence that defines your spiritual goal",
      details: [
        "Write your intention in present tense as if already achieved",
        "Be specific with amounts, timeframes, and details",
        "Use positive, affirmative language only",
        "Focus on what you want to receive, not what you lack",
      ],
      icon: "💭",
      color: "from-purple-500 to-indigo-600",
      time: "5-10 minutes",
    },
    {
      id: 2,
      title: "Letter Processing",
      shortTitle: "Processing",
      description:
        "Our mystical algorithm extracts unique letters from your intention",
      details: [
        "System analyzes your intention sentence letter by letter",
        "Removes duplicate letters to create your personal code",
        "Each remaining letter holds specific vibrational energy",
        "Creates a unique mystical formula based on your words",
      ],
      icon: "🔤",
      color: "from-indigo-500 to-blue-600",
      time: "Instant",
    },
    {
      id: 3,
      title: "Symbol Selection",
      shortTitle: "Symbols",
      description:
        "Choose additional sacred symbols to amplify your talisman's power",
      details: [
        "Select from planetary symbols aligned with your goals",
        "Add elemental energies (fire, water, air, earth, spirit)",
        "Include ancient runes for specific intentions",
        "Incorporate Hebrew letters for divine connection",
      ],
      icon: "🌟",
      color: "from-blue-500 to-cyan-600",
      time: "5-15 minutes",
    },
    {
      id: 4,
      title: "Sacred Geometry Generation",
      shortTitle: "Generation",
      description:
        "Advanced mystical algorithms arrange your elements within the Hamsa",
      details: [
        "Letters arranged according to ancient sacred patterns",
        "Symbols positioned at energetically optimal points",
        "Hamsa geometry calculated for maximum spiritual resonance",
        "Each element precisely placed for harmonic balance",
      ],
      icon: "⚙️",
      color: "from-cyan-500 to-teal-600",
      time: "Processing...",
    },
    {
      id: 5,
      title: "Digital Manifestation",
      shortTitle: "Creation",
      description:
        "Your personalized talisman materializes with your unique energy signature",
      details: [
        "Visual representation of your spiritual intention",
        "High-resolution sacred design ready for use",
        "Embedded with your personal vibrational frequency",
        "Can be printed, saved, or used as digital protection",
      ],
      icon: "🪬",
      color: "from-teal-500 to-green-600",
      time: "Complete!",
    },
    {
      id: 6,
      title: "Spiritual Activation",
      shortTitle: "Activation",
      description: "Learn how to activate and use your newly created talisman",
      details: [
        "Receive detailed instructions for spiritual activation",
        "Learn meditation techniques with your talisman",
        "Understand optimal placement and usage methods",
        "Connect with the energy you've created",
      ],
      icon: "✨",
      color: "from-green-500 to-amber-600",
      time: "Ongoing practice",
    },
  ];

  const StepCard = ({ step, index, isActive }) => (
    <div
      className={`relative p-8 rounded-3xl backdrop-blur-lg border-2 transition-all duration-700 cursor-pointer transform hover:scale-105 ${
        isActive
          ? "bg-gradient-to-br from-amber-500/30 to-orange-500/30 border-amber-400 shadow-2xl shadow-amber-500/30"
          : "bg-black/20 border-purple-500/30 hover:border-purple-400/50"
      }`}
      onClick={() => setActiveStep(index)}
    >
      <div
        className={`inline-flex items-center justify-center w-16 h-16 rounded-full text-3xl mb-6 bg-gradient-to-r ${step.color}`}
      >
        {step.icon}
      </div>

      <div className="flex items-center justify-between mb-4">
        <h3
          className={`text-2xl font-bold ${
            isActive ? "text-amber-200" : "text-white"
          }`}
        >
          {step.shortTitle}
        </h3>
        <span
          className={`text-sm px-3 py-1 rounded-full ${
            isActive
              ? "bg-amber-500/30 text-amber-200"
              : "bg-purple-500/30 text-purple-200"
          }`}
        >
          {step.time}
        </span>
      </div>

      <p
        className={`text-lg mb-6 ${
          isActive ? "text-amber-100" : "text-gray-300"
        }`}
      >
        {step.description}
      </p>

      {isActive && (
        <div className="space-y-3">
          {step.details.map((detail, idx) => (
            <div key={idx} className="flex items-start space-x-3">
              <span className="text-amber-400 mt-1">✨</span>
              <span className="text-amber-100">{detail}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 text-white relative overflow-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/30 z-50">
        <div
          className="h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating magical elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute text-amber-200/10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              fontSize: `${1 + Math.random() * 2}rem`,
            }}
          >
            {
              ["⭐", "✨", "🌙", "🔮", "💎", "🌟"][
                Math.floor(Math.random() * 6)
              ]
            }
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent">
            How It Works
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed mb-12">
            Experience the ancient art of talisman creation through our mystical
            6-step process
          </p>

          {/* Timeline preview */}
          <div className="flex justify-center items-center space-x-4 mb-16">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-xl cursor-pointer transition-all duration-300 ${
                    index <= activeStep
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
                      : "bg-purple-800/50 text-purple-300 hover:bg-purple-700/50"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-8 h-1 mx-2 ${
                      index < activeStep ? "bg-amber-400" : "bg-purple-600"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Steps Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <StepCard
                key={step.id}
                step={step}
                index={index}
                isActive={activeStep === index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Guarantee */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-r from-black/30 to-purple-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-200 text-center mb-16">
            Our Ritual Guarantees
          </h2>
          <p className="mb-16 text-lg text-amber-200 italic text-center">
            Each talisman is born from a unique moment — a fusion of your
            intent, the algorithm’s rhythm, and symbolic resonance.
          </p>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🧿",
                title: "Symbolic Integrity",
                description:
                  "Every Hamsa is crafted with archetypal precision and cultural respect",
              },
              {
                icon: "🌀",
                title: "Temporal Uniqueness",
                description:
                  "No talisman is ever repeated. Each is a one-time echo of your moment",
              },
              {
                icon: "🔐",
                title: "Privacy as Sacred Space",
                description:
                  "Your input is never stored. The ritual leaves no trace",
              },
              {
                icon: "🧬",
                title: "Algorithmic Alchemy",
                description:
                  "Our system blends randomness, intention, and mythic logic to generate resonance",
              },
            ].map((guarantee, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl backdrop-blur-sm border border-amber-200/30"
              >
                <div className="text-6xl mb-4">{guarantee.icon}</div>
                <h3 className="text-2xl font-bold text-amber-200 mb-4">
                  {guarantee.title}
                </h3>
                <p className="text-amber-100 leading-relaxed">
                  {guarantee.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-200 text-center mb-16">
            🌘 Threshold Doubts
          </h2>
          <p className="mb-12 text-lg text-amber-200 italic text-center">
            Before you cross the threshold, you may ask:
          </p>
          <div className="space-y-6">
            {[
              {
                q: "Is this real magic or just code?",
                a: "Both. Code is our wand; myth is our spellbook.",
              },
              {
                q: "Can I choose my talisman’s meaning?",
                a: "You offer intent. The system responds with symbolic echo.",
              },
              {
                q: "Why Hamsa?",
                a: "The Hamsa is a portal: ancient, protective, and open to reinterpretation.",
              },
              {
                q: "What if I don’t believe in symbols?",
                a: "Belief is optional. Resonance is inevitable",
              },
              {
                q: "Can I share my talisman?",
                a: "Yes. But remember: its power is tied to the moment of creation",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-purple-800/30 to-indigo-800/30 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30"
              >
                <h3 className="text-xl font-bold text-amber-200 mb-3">
                  ❓{faq.q}
                </h3>
                <p className="text-amber-100 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-20 px-4 mb-18">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-200 mb-8">
            Begin Your Mystical Journey
          </h2>
          <p className="text-xl text-amber-100 mb-12">
            Ready to experience the power of a personally crafted Hamsa
            talisman?
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
            <button onClick={() => navigate('/create-talisman')}  className="px-12 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xl font-bold rounded-full hover:from-amber-400 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/50">
              Create Talisman! ✨
            </button>
            <button className="px-12 py-4 bg-transparent border-2 border-amber-500 text-amber-500 text-xl font-bold rounded-full hover:bg-amber-500 hover:text-white transform hover:scale-105 transition-all duration-300">
              View Gallery 🎨)
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-30px) rotate(120deg);
          }
          66% {
            transform: translateY(30px) rotate(240deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HowItWorksPage;