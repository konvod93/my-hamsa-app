import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Manual = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [intentionExample, setIntentionExample] = useState("");
  const [processedExample, setProcessedExample] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      id: 1,
      title: "Express Your Intention",
      icon: "💭",
      description: "Create a powerful, affirmative sentence that defines your goal",
      details: [
        "Make it concise and clear",
        "Use affirmative language only", 
        "Avoid phrases like 'I want' or 'I would like'",
        "Be specific with amounts, timeframes, and details",
        "Focus on receiving, not wanting"
      ],
      examples: [
        { wrong: "❌ I want a lot of money", right: "✅ I will receive $5,000 within the next month" },
        { wrong: "❌ I would like to find love", right: "✅ I attract my perfect soulmate this year" },
        { wrong: "❌ I want to be healthier", right: "✅ My body heals completely and radiates vitality" }
      ]
    },
    {
      id: 2,
      title: "Remove Repeating Letters",
      icon: "🔤",
      description: "Eliminate duplicate letters to create your unique talisman code",
      details: [
        "Go through your sentence letter by letter",
        "Keep only the first occurrence of each letter",
        "Ignore spaces and punctuation",
        "Case doesn't matter - treat A and a as the same",
        "This creates your personal magical formula"
      ],
      process: "Within the next month, my income will increase by 1.5 times → Withenlaxmoucresb.y15"
    },
    {
      id: 3,
      title: "Enter Letters into Generator",
      icon: "⚙️",
      description: "Input your unique letter set into our mystical talisman generator",
      details: [
        "Use our specialized talisman creation tool",
        "Input letters in the exact order you processed them",
        "The generator will arrange them according to sacred geometry",
        "Each position corresponds to different energy centers",
        "The system calculates optimal symbol placement"
      ]
    },
    {
      id: 4,
      title: "Add Strengthening Symbols",
      icon: "🌟",
      description: "Enhance your talisman with planetary and elemental symbols",
      details: [
        "Choose symbols that align with your intention",
        "Planetary attributes add cosmic power",
        "Elemental symbols provide foundational energy",
        "Sacred geometry amplifies the overall effect",
        "Each symbol has specific vibrational qualities"
      ],
      symbols: {
        money: ["☿ Mercury", "♃ Jupiter", "💰 Gold symbol", "🔺 Earth triangle"],
        love: ["♀ Venus", "❤️ Heart", "🌹 Rose symbol", "💕 Union sign"],
        health: ["☉ Sun", "🌿 Life force", "⚕️ Healing symbol", "💚 Vitality"],
        protection: ["♂ Mars", "🛡️ Shield", "👁️ Evil eye", "🔮 Crystal"]
      }
    },
    {
      id: 5,
      title: "Receive Your Talisman",
      icon: "🪬",
      description: "Your personalized talisman is created and energetically activated",
      details: [
        "The talisman is crafted during optimal lunar timing",
        "Blessed with appropriate ritual ceremonies",
        "Charged with your specific intention energy",
        "Packaged with activation and care instructions",
        "Ready to begin transforming your reality"
      ]
    }
  ];

  const processIntentionExample = (text) => {
    const seen = new Set();
    let result = '';
    for (let char of text.toLowerCase()) {
      if (char.match(/[a-z]/) && !seen.has(char)) {
        seen.add(char);
        result += char;
      }
    }
    return result;
  };

  const handleExampleChange = (text) => {
    setIntentionExample(text);
    setProcessedExample(processIntentionExample(text));
  };

  const StepCard = ({ step, index, isActive }) => (
    <div 
      className={`relative p-8 rounded-3xl backdrop-blur-lg border-2 transition-all duration-700 cursor-pointer ${
        isActive 
          ? 'bg-gradient-to-br from-amber-500/30 to-orange-500/30 border-amber-400 shadow-2xl shadow-amber-500/30 scale-105' 
          : 'bg-black/20 border-purple-500/30 hover:border-purple-400/50 hover:scale-102'
      }`}
      onClick={() => setCurrentStep(index)}
    >
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full text-3xl mb-6 ${
        isActive ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 'bg-gradient-to-r from-purple-500 to-indigo-600'
      }`}>
        {step.icon}
      </div>
      
      <h3 className={`text-2xl font-bold mb-4 ${isActive ? 'text-amber-200' : 'text-white'}`}>
        Step {step.id}: {step.title}
      </h3>
      
      <p className={`text-lg mb-6 ${isActive ? 'text-amber-100' : 'text-gray-300'}`}>
        {step.description}
      </p>
      
      {isActive && (
        <div className="space-y-4">
          {step.details.map((detail, idx) => (
            <div key={idx} className="flex items-start space-x-3">
              <span className="text-amber-400 mt-1 text-lg">✨</span>
              <span className="text-amber-100">{detail}</span>
            </div>
          ))}
          
          {step.examples && (
            <div className="mt-6 space-y-3">
              <h4 className="text-amber-200 font-semibold text-lg">Examples:</h4>
              {step.examples.map((ex, idx) => (
                <div key={idx} className="bg-black/30 p-4 rounded-xl">
                  <div className="text-red-300 mb-2">{ex.wrong}</div>
                  <div className="text-green-300">{ex.right}</div>
                </div>
              ))}
            </div>
          )}
          
          {step.process && (
            <div className="mt-6">
              <h4 className="text-amber-200 font-semibold text-lg mb-2">Process Example:</h4>
              <div className="bg-black/30 p-4 rounded-xl">
                <div className="text-amber-100 font-mono text-sm leading-relaxed">
                  {step.process}
                </div>
              </div>
            </div>
          )}
          
          {step.symbols && (
            <div className="mt-6">
              <h4 className="text-amber-200 font-semibold text-lg mb-3">Strengthening Symbols by Purpose:</h4>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(step.symbols).map(([purpose, symbols]) => (
                  <div key={purpose} className="bg-black/30 p-4 rounded-xl">
                    <h5 className="text-amber-300 font-semibold capitalize mb-2">{purpose}:</h5>
                    <div className="space-y-1">
                      {symbols.map((symbol, idx) => (
                        <div key={idx} className="text-amber-100 text-sm">{symbol}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
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
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-amber-200/10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              fontSize: `${1.5 + Math.random() * 1.5}rem`
            }}
          >
            {['📜', '✨', '🔮', '🌟', '⚡', '🪬'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-8xl mb-8">📜</div>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent">
            Talisman Manual
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed mb-12">
            Step-by-step instructions for creating your personalized protective talisman
          </p>
          
          {/* Step indicator */}
          <div className="flex justify-center items-center space-x-2 mb-8">
            {steps.map((_, index) => (
              <div key={index} className="flex items-center">
                <div 
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                    index <= currentStep 
                      ? 'bg-amber-400' 
                      : 'bg-purple-600 hover:bg-purple-500'
                  }`}
                  onClick={() => setCurrentStep(index)}
                />
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 mx-1 ${index < currentStep ? 'bg-amber-400' : 'bg-purple-600'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Example Section */}
      <section className="relative z-10 py-12 px-4 bg-gradient-to-r from-black/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-200 text-center mb-8">
            Try It Yourself
          </h2>
          <div className="bg-gradient-to-r from-purple-800/30 to-indigo-800/30 rounded-2xl p-8 backdrop-blur-sm border border-amber-200/20">
            <div className="space-y-6">
              <div>
                <label className="block text-amber-200 text-lg font-semibold mb-2">
                  Enter your intention sentence:
                </label>
                <input
                  type="text"
                  value={intentionExample}
                  onChange={(e) => handleExampleChange(e.target.value)}
                  placeholder="e.g., I will receive $5000 within the next month"
                  className="w-full p-4 bg-black/50 border border-amber-200/30 rounded-xl text-amber-100 placeholder-amber-300/50 focus:outline-none focus:border-amber-400"
                />
              </div>
              {intentionExample && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-amber-200 font-semibold mb-2">Original Sentence:</h3>
                    <div className="bg-black/30 p-4 rounded-xl text-amber-100">
                      {intentionExample}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-amber-200 font-semibold mb-2">Processed Letters:</h3>
                    <div className="bg-black/30 p-4 rounded-xl text-amber-100 font-mono text-lg tracking-wider">
                      {processedExample || "Enter text to see result"}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Steps Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-200 text-center mb-16">
            Creation Process
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <StepCard
                key={step.id}
                step={step}
                index={index}
                isActive={currentStep === index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Important Tips Section */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-r from-black/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-200 text-center mb-16">
            Sacred Guidelines
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "⚡ Energy Alignment",
                tips: [
                  "Create your intention during a waxing moon for growth",
                  "Use present tense, as if already manifested",
                  "Feel the emotion of already having achieved your goal",
                  "Speak your intention aloud with conviction"
                ]
              },
              {
                title: "🔮 Letter Processing",
                tips: [
                  "Work in a quiet, sacred space",
                  "Go through letters methodically",
                  "Keep original sentence for reference",
                  "Trust the process - each letter holds power"
                ]
              },
              {
                title: "🌟 Symbol Selection",
                tips: [
                  "Choose symbols that resonate personally",
                  "Research planetary correspondences",
                  "Consider your astrological elements",
                  "Less is more - quality over quantity"
                ]
              },
              {
                title: "🪬 Activation Ritual",
                tips: [
                  "Hold your completed talisman with intention",
                  "Charge under moonlight for 3 nights",
                  "Carry it close to your body initially",
                  "Speak your intention daily for the first week"
                ]
              }
            ].map((section, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-800/30 to-indigo-800/30 rounded-2xl p-8 backdrop-blur-sm border border-amber-200/20">
                <h3 className="text-2xl font-bold text-amber-200 mb-6">{section.title}</h3>
                <div className="space-y-3">
                  {section.tips.map((tip, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <span className="text-amber-400 mt-1">✨</span>
                      <span className="text-amber-100">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-200 mb-8">
            Ready to Create Your Talisman?
          </h2>
          <p className="text-xl text-amber-100 mb-12">
            Now that you understand the process, begin crafting your personalized protective talisman.
          </p>
          <button 
            onClick={() => navigate('/create-talisman')}
            className="px-12 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xl font-bold rounded-full hover:from-amber-400 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/50"
          >
            Start Creating ✨
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(20px) rotate(240deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Manual;