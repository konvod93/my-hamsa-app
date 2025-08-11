import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WhatIsPage = () => {
  const [activeTab, setActiveTab] = useState('history');
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { id: 'history', label: 'History', icon: '📜' },
    { id: 'meaning', label: 'Meaning', icon: '✨' },
    { id: 'power', label: 'Power', icon: '🔮' },
    { id: 'modern', label: 'Modern Use', icon: '🌟' }
  ];

  const tabContent = {
    history: {
      title: "Ancient Origins",
      content: [
        {
          subtitle: "5000 Years of Protection",
          text: "The Hamsa symbol dates back over 5,000 years, originating in ancient Mesopotamia and Carthage. It has been cherished across cultures - from ancient Egypt to modern times.",
          visual: "🏺"
        },
        {
          subtitle: "Cross-Cultural Symbol",
          text: "Known as the Hand of Fatima in Islam, Hand of Miriam in Judaism, and Hand of Mary in Christianity, the Hamsa transcends religious boundaries.",
          visual: "🤝"
        },
        {
          subtitle: "Archaeological Evidence",
          text: "Ancient amulets and wall carvings featuring the Hamsa have been discovered throughout the Middle East, North Africa, and Mediterranean regions.",
          visual: "🔍"
        }
      ]
    },
    meaning: {
      title: "Sacred Symbolism",
      content: [
        {
          subtitle: "The Five Fingers",
          text: "Each finger represents different aspects: the thumb for the element of fire, index for air, middle for ether, ring for earth, and pinky for water.",
          visual: "✋"
        },
        {
          subtitle: "The Evil Eye Protection",
          text: "The eye in the center ward off negative energy, jealousy, and ill intentions, creating a protective barrier around the wearer.",
          visual: "👁️"
        },
        {
          subtitle: "Divine Connection",
          text: "The upward-facing hand represents blessings, power, and strength, while the downward position brings peace and answers prayers.",
          visual: "🙏"
        }
      ]
    },
    power: {
      title: "Mystical Powers",
      content: [
        {
          subtitle: "Energy Shield",
          text: "Creates an invisible protective field that deflects negative energies and psychic attacks, keeping your aura pure and strong.",
          visual: "🛡️"
        },
        {
          subtitle: "Luck Amplifier",
          text: "Attracts positive opportunities, synchronicities, and fortunate encounters by aligning your energy with universal abundance.",
          visual: "🍀"
        },
        {
          subtitle: "Spiritual Awakening",
          text: "Enhances intuition, meditation, and connection to higher consciousness, opening pathways to inner wisdom and enlightenment.",
          visual: "🌌"
        }
      ]
    },
    modern: {
      title: "Contemporary Applications",
      content: [
        {
          subtitle: "Personal Talismans",
          text: "Modern practitioners customize Hamsa designs with personal symbols, birthstones, and intentions to create powerful individual protection.",
          visual: "💎"
        },
        {
          subtitle: "Home Protection",
          text: "Placed in homes and offices to create sacred spaces, promote harmony, and protect against negative influences and stress.",
          visual: "🏠"
        },
        {
          subtitle: "Mindful Living",
          text: "Used as meditation focus points and daily reminders to stay centered, grateful, and connected to spiritual practices.",
          visual: "🧘"
        }
      ]
    }
  };

  const FloatingElement = ({ children, delay = 0 }) => (
    <div 
      className="transform transition-all duration-1000 ease-out"
      style={{
        transform: `translateY(${Math.sin((scrollY + delay) * 0.01) * 10}px)`,
      }}
    >
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <FloatingElement key={i} delay={i * 100}>
            <div
              className="absolute text-amber-200/20 text-4xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              {['✨', '🌙', '⭐', '🔮'][Math.floor(Math.random() * 4)]}
            </div>
          </FloatingElement>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-8xl mb-8 animate-pulse">🪬</div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent">
            What Is Hamsa?
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Discover the ancient wisdom and mystical power behind one of humanity's most revered protective symbols
          </p>
        </div>
      </section>

      {/* Interactive Tabs */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-2xl shadow-amber-500/30'
                    : 'bg-black/30 text-amber-200 hover:bg-black/50 backdrop-blur-sm'
                }`}
              >
                <span className="text-2xl">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-gradient-to-r from-black/30 to-purple-900/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-amber-200/20">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-200 mb-12 text-center">
              {tabContent[activeTab].title}
            </h2>
            
            <div className="grid md:grid-cols-1 gap-8">
              {tabContent[activeTab].content.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-6 p-6 bg-gradient-to-r from-purple-800/30 to-indigo-800/30 rounded-2xl backdrop-blur-sm transform transition-all duration-500 hover:scale-105"
                >
                  <div className="text-6xl flex-shrink-0">{item.visual}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-amber-200 mb-4">{item.subtitle}</h3>
                    <p className="text-amber-100 text-lg leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Geometry Section */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-r from-black/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-200 mb-8">
            Sacred Geometry
          </h2>
          <p className="text-xl text-amber-100 mb-12 leading-relaxed">
            The Hamsa contains perfect mathematical proportions found throughout nature, 
            from flower petals to galaxy spirals, connecting us to universal harmony.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Golden Ratio", desc: "Perfect proportions in finger placement", icon: "📐" },
              { title: "Five Elements", desc: "Each finger represents elemental energy", icon: "🌊" },
              { title: "Sacred Numbers", desc: "Based on numerological significance", icon: "🔢" }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 p-8 rounded-2xl backdrop-blur-sm border border-amber-200/30">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-amber-200 mb-2">{item.title}</h3>
                <p className="text-amber-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-200 mb-8">
            Ready to Harness This Ancient Power?
          </h2>
          <p className="text-xl text-amber-100 mb-12">
            Create your personalized Hamsa talisman and connect with thousands of years of protective wisdom.
          </p>
          <button onClick={() => navigate('/create-talisman')} className="px-12 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xl font-bold rounded-full hover:from-amber-400 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/50">
            Begin Your Journey ✨
          </button>
        </div>
      </section>
    </div>
  );
};

export default WhatIsPage;