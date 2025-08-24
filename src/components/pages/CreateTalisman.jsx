import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreateTalisman = () => {
  const [intention, setIntention] = useState("");
  const [processedLetters, setProcessedLetters] = useState("");
  const [selectedSymbols, setSelectedSymbols] = useState({
    planetary: [],
    elemental: [],
    runes: [],
    hebrew: [],
    other: []
  });
  const [activeSymbolCategory, setActiveSymbolCategory] = useState(null);
  const [customSymbol, setCustomSymbol] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const navigate = useNavigate();

  // Symbol collections
  const symbolCategories = {
    planetary: [
      { symbol: "☉", name: "Sun", meaning: "Vitality, Success, Leadership" },
      { symbol: "☽", name: "Moon", meaning: "Intuition, Emotions, Dreams" },
      { symbol: "☿", name: "Mercury", meaning: "Communication, Trade, Travel" },
      { symbol: "♀", name: "Venus", meaning: "Love, Beauty, Harmony" },
      { symbol: "♂", name: "Mars", meaning: "Courage, Strength, Action" },
      { symbol: "♃", name: "Jupiter", meaning: "Abundance, Wisdom, Growth" },
      { symbol: "♄", name: "Saturn", meaning: "Structure, Discipline, Time" },
      { symbol: "⛢", name: "Uranus", meaning: "Innovation, Freedom, Change" },
      { symbol: "♆", name: "Neptune", meaning: "Spirituality, Mystic, Dreams" }
    ],
    elemental: [
      { symbol: "🔥", name: "Fire", meaning: "Energy, Passion, Transformation" },
      { symbol: "💧", name: "Water", meaning: "Emotion, Healing, Purification" },
      { symbol: "🌬️", name: "Air", meaning: "Mind, Communication, Freedom" },
      { symbol: "🌍", name: "Earth", meaning: "Stability, Growth, Abundance" },
      { symbol: "⚡", name: "Spirit", meaning: "Divine Connection, Higher Self" },
      { symbol: "🔺", name: "Fire Triangle", meaning: "Active Fire Energy" },
      { symbol: "🔻", name: "Water Triangle", meaning: "Receptive Water Energy" },
      { symbol: "△", name: "Air Triangle", meaning: "Mental Clarity" },
      { symbol: "▽", name: "Earth Triangle", meaning: "Material Manifestation" }
    ],
    runes: [
      { symbol: "ᚠ", name: "Fehu", meaning: "Wealth, Prosperity, Success" },
      { symbol: "ᚢ", name: "Uruz", meaning: "Strength, Health, Wild Energy" },
      { symbol: "ᚦ", name: "Thurisaz", meaning: "Protection, Defense, Power" },
      { symbol: "ᚨ", name: "Ansuz", meaning: "Wisdom, Communication, Divine" },
      { symbol: "ᚱ", name: "Raidho", meaning: "Journey, Travel, Progress" },
      { symbol: "ᚲ", name: "Kenaz", meaning: "Knowledge, Creativity, Fire" },
      { symbol: "ᚷ", name: "Gebo", meaning: "Gift, Partnership, Balance" },
      { symbol: "ᚹ", name: "Wunjo", meaning: "Joy, Harmony, Success" },
      { symbol: "ᚺ", name: "Hagalaz", meaning: "Change, Breakthrough, Hail" },
      { symbol: "ᚾ", name: "Nauthiz", meaning: "Need, Resistance, Strength" },
      { symbol: "ᛁ", name: "Isa", meaning: "Ice, Stillness, Focus" },
      { symbol: "ᛃ", name: "Jera", meaning: "Harvest, Cycles, Reward" },
      { symbol: "ᛇ", name: "Eihwaz", meaning: "Protection, Endurance, Yew" },
      { symbol: "ᛈ", name: "Perthro", meaning: "Mystery, Fate, Luck" },
      { symbol: "ᛉ", name: "Algiz", meaning: "Protection, Shield, Elk" },
      { symbol: "ᛋ", name: "Sowilo", meaning: "Sun, Victory, Success" },
      { symbol: "ᛏ", name: "Tiwaz", meaning: "Justice, Honor, Warrior" },
      { symbol: "ᛒ", name: "Berkano", meaning: "Birth, Growth, Birch" },
      { symbol: "ᛖ", name: "Ehwaz", meaning: "Movement, Progress, Horse" },
      { symbol: "ᛗ", name: "Mannaz", meaning: "Humanity, Self, Community" },
      { symbol: "ᛚ", name: "Laguz", meaning: "Water, Flow, Intuition" },
      { symbol: "ᛜ", name: "Ingwaz", meaning: "Fertility, New Beginnings" },
      { symbol: "ᛞ", name: "Dagaz", meaning: "Dawn, Breakthrough, Day" },
      { symbol: "ᛟ", name: "Othala", meaning: "Heritage, Home, Inheritance" }
    ],
    hebrew: [
      { symbol: "א", name: "Aleph", meaning: "Unity, Divine Breath, Beginning" },
      { symbol: "ב", name: "Beth", meaning: "House, Duality, Container" },
      { symbol: "ג", name: "Gimel", meaning: "Camel, Movement, Reward" },
      { symbol: "ד", name: "Daleth", meaning: "Door, Path, Revelation" },
      { symbol: "ה", name: "Heh", meaning: "Window, Divine Grace, Spirit" },
      { symbol: "ו", name: "Vav", meaning: "Hook, Connection, And" },
      { symbol: "ז", name: "Zayin", meaning: "Weapon, Struggle, Victory" },
      { symbol: "ח", name: "Chet", meaning: "Fence, Life Force, Completion" },
      { symbol: "ט", name: "Tet", meaning: "Serpent, Objective Good" },
      { symbol: "י", name: "Yod", meaning: "Hand, Divine Spark, Creation" },
      { symbol: "כ", name: "Kaph", meaning: "Palm, Potential, Container" },
      { symbol: "ל", name: "Lamed", meaning: "Goad, Learning, Teaching" },
      { symbol: "מ", name: "Mem", meaning: "Water, Chaos, Revealed" },
      { symbol: "נ", name: "Nun", meaning: "Fish, Activity, Faithfulness" },
      { symbol: "ס", name: "Samech", meaning: "Support, Trust, Divine" },
      { symbol: "ע", name: "Ayin", meaning: "Eye, Insight, Experience" },
      { symbol: "פ", name: "Peh", meaning: "Mouth, Communication, Breath" },
      { symbol: "צ", name: "Tzaddi", meaning: "Hook, Righteousness, Goal" },
      { symbol: "ק", name: "Qoph", meaning: "Back of Head, Holiness" },
      { symbol: "ר", name: "Resh", meaning: "Head, Beginning, Person" },
      { symbol: "ש", name: "Shin", meaning: "Tooth, Fire, Transformation" },
      { symbol: "ת", name: "Tav", meaning: "Mark, Truth, Completion" }
    ]
  };

  // Process intention to remove duplicate letters
  useEffect(() => {
    if (intention) {
      const seen = new Set();
      let result = '';
      for (let char of intention.toLowerCase()) {
        if (char.match(/[a-z]/) && !seen.has(char)) {
          seen.add(char);
          result += char;
        }
      }
      setProcessedLetters(result);
    } else {
      setProcessedLetters("");
    }
  }, [intention]);

  const toggleSymbol = (category, symbol) => {
    setSelectedSymbols(prev => {
      const categorySymbols = [...prev[category]];
      const index = categorySymbols.findIndex(s => s.symbol === symbol.symbol);
      
      if (index > -1) {
        categorySymbols.splice(index, 1);
      } else {
        categorySymbols.push(symbol);
      }
      
      return {
        ...prev,
        [category]: categorySymbols
      };
    });
  };

  const addCustomSymbol = () => {
    if (customSymbol.trim()) {
      setSelectedSymbols(prev => ({
        ...prev,
        other: [...prev.other, { symbol: customSymbol, name: "Custom", meaning: "Personal Symbol" }]
      }));
      setCustomSymbol("");
    }
  };

  const generateTalisman = () => {
    if (!intention.trim()) {
      alert("Please enter your intention first!");
      return;
    }
    
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowPreview(true);
    }, 3000);
  };

  const getTotalSymbols = () => {
    return Object.values(selectedSymbols).reduce((total, category) => total + category.length, 0);
  };

  const SymbolGrid = ({ category, symbols }) => (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
      {symbols.map((symbolData, index) => {
        const isSelected = selectedSymbols[category].some(s => s.symbol === symbolData.symbol);
        return (
          <div
            key={index}
            onClick={() => toggleSymbol(category, symbolData)}
            className={`relative p-4 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
              isSelected
                ? 'bg-gradient-to-br from-amber-500/40 to-orange-500/40 border-2 border-amber-400 shadow-lg shadow-amber-500/30'
                : 'bg-black/30 border border-purple-500/30 hover:border-purple-400/50 hover:bg-black/50'
            }`}
            title={`${symbolData.name}: ${symbolData.meaning}`}
          >
            <div className={`text-2xl md:text-3xl text-center mb-2 ${isSelected ? 'text-amber-200' : 'text-white'}`}>
              {symbolData.symbol}
            </div>
            <div className={`text-xs text-center font-semibold ${isSelected ? 'text-amber-200' : 'text-purple-300'}`}>
              {symbolData.name}
            </div>
            {isSelected && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  const TalismanPreview = () => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl p-8 max-w-2xl w-full border-2 border-amber-400 shadow-2xl shadow-amber-500/30">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-amber-200 mb-4">Your Talisman Preview</h3>
          <div className="w-64 h-64 mx-auto bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full border-4 border-amber-400 flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
            {/* Central Hamsa */}
            <div className="text-6xl text-amber-200 mb-4">🪬</div>
            
            {/* Processed letters arranged in circle */}
            <div className="absolute inset-0">
              {processedLetters.split('').map((letter, index) => {
                const angle = (360 / processedLetters.length) * index;
                const radius = 90;
                const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
                const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
                
                return (
                  <div
                    key={index}
                    className="absolute text-amber-300 font-bold text-lg"
                    style={{
                      left: `calc(50% + ${x}px - 8px)`,
                      top: `calc(50% + ${y}px - 12px)`,
                      transform: `rotate(${angle}deg)`
                    }}
                  >
                    {letter.toUpperCase()}
                  </div>
                );
              })}
            </div>
            
            {/* Selected symbols around the edge */}
            <div className="absolute inset-0">
              {Object.values(selectedSymbols).flat().slice(0, 12).map((symbol, index) => {
                const angle = (360 / 12) * index;
                const radius = 110;
                const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
                const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
                
                return (
                  <div
                    key={index}
                    className="absolute text-orange-300 text-sm"
                    style={{
                      left: `calc(50% + ${x}px - 8px)`,
                      top: `calc(50% + ${y}px - 8px)`
                    }}
                  >
                    {symbol.symbol}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="text-center space-y-4">
          <p className="text-amber-100">
            <strong>Intention:</strong> {intention}
          </p>
          <p className="text-amber-100">
            <strong>Core Letters:</strong> {processedLetters.toUpperCase()}
          </p>
          <p className="text-amber-100">
            <strong>Power Symbols:</strong> {getTotalSymbols()} selected
          </p>
        </div>
        
        <div className="flex justify-center space-x-4 mt-8 mb-24">
          <button
            onClick={() => setShowPreview(false)}
            className="px-8 py-3 bg-transparent border-2 border-amber-500 text-amber-500 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300"
          >
            Modify
          </button>
          <button onClick={() => navigate('/manual-payment')} className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full hover:from-amber-400 hover:to-orange-400 transition-all duration-300">
            Order Talisman ✨
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-amber-200/10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              fontSize: `${1.5 + Math.random()}rem`
            }}
          >
            {['🪬', '✨', '🔮', '⚡'][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div>

      {/* Header */}
      <section className="relative z-10 pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-7xl mb-6">🪬</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent">
            Create Your Talisman
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Transform your intention into a powerful mystical symbol
          </p>
        </div>
      </section>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pb-20">
        {/* Step 1: Intention Input */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-black/30 to-purple-900/30 rounded-3xl p-8 backdrop-blur-sm border border-amber-200/20">
            <h2 className="text-3xl font-bold text-amber-200 mb-6 flex items-center">
              <span className="text-4xl mr-4">💭</span>
              Input Your Intention
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-amber-200 text-lg font-semibold mb-3">
                  Write your intention (be specific and affirmative):
                </label>
                <textarea
                  value={intention}
                  onChange={(e) => setIntention(e.target.value)}
                  placeholder="e.g., I will receive $10,000 within the next three months"
                  className="w-full p-4 bg-black/50 border border-amber-200/30 rounded-xl text-amber-100 placeholder-amber-300/50 focus:outline-none focus:border-amber-400 min-h-[100px] resize-none"
                  maxLength={200}
                />
                <div className="text-amber-300/70 text-sm mt-2">
                  {intention.length}/200 characters
                </div>
              </div>
              
              {processedLetters && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-amber-200 font-semibold mb-2">Your Intention:</h3>
                    <div className="bg-black/40 p-4 rounded-xl text-amber-100 border border-purple-500/30">
                      {intention}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-amber-200 font-semibold mb-2">Core Letters (duplicates removed):</h3>
                    <div className="bg-black/40 p-4 rounded-xl text-amber-100 font-mono text-xl tracking-widest border border-purple-500/30">
                      {processedLetters.toUpperCase()}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Step 2: Symbol Selection */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-black/30 to-purple-900/30 rounded-3xl p-8 backdrop-blur-sm border border-amber-200/20">
            <h2 className="text-3xl font-bold text-amber-200 mb-6 flex items-center">
              <span className="text-4xl mr-4">🌟</span>
              Add Additional Symbols {getTotalSymbols() > 0 && <span className="ml-2 text-lg">({getTotalSymbols()} selected)</span>}
            </h2>
            
            {/* Category Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {Object.keys(symbolCategories).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveSymbolCategory(activeSymbolCategory === category ? null : category)}
                  className={`px-6 py-3 rounded-xl font-semibold capitalize transition-all duration-300 ${
                    activeSymbolCategory === category
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                      : 'bg-black/40 text-amber-200 border border-amber-200/30 hover:bg-black/60'
                  }`}
                >
                  {category} {selectedSymbols[category].length > 0 && `(${selectedSymbols[category].length})`}
                </button>
              ))}
              <button
                onClick={() => setActiveSymbolCategory(activeSymbolCategory === 'other' ? null : 'other')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeSymbolCategory === 'other'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                    : 'bg-black/40 text-amber-200 border border-amber-200/30 hover:bg-black/60'
                }`}
              >
                Other {selectedSymbols.other.length > 0 && `(${selectedSymbols.other.length})`}
              </button>
            </div>

            {/* Symbol Grids */}
            {activeSymbolCategory && activeSymbolCategory !== 'other' && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-amber-200 mb-4 capitalize">
                  {activeSymbolCategory} Symbols
                </h3>
                <SymbolGrid 
                  category={activeSymbolCategory} 
                  symbols={symbolCategories[activeSymbolCategory]} 
                />
              </div>
            )}

            {/* Custom Symbol Input */}
            {activeSymbolCategory === 'other' && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-amber-200 mb-4">Custom Symbols</h3>
                <div className="flex gap-4 mb-4">
                  <input
                    type="text"
                    value={customSymbol}
                    onChange={(e) => setCustomSymbol(e.target.value)}
                    placeholder="Enter custom symbol (e.g., ♡, ★, 卍)"
                    className="flex-1 p-4 bg-black/50 border border-amber-200/30 rounded-xl text-amber-100 placeholder-amber-300/50 focus:outline-none focus:border-amber-400"
                  />
                  <button
                    onClick={addCustomSymbol}
                    className="px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-400 hover:to-orange-400 transition-all duration-300"
                  >
                    Add
                  </button>
                </div>
                {selectedSymbols.other.length > 0 && (
                  <div className="grid grid-cols-6 gap-4">
                    {selectedSymbols.other.map((symbolData, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setSelectedSymbols(prev => ({
                            ...prev,
                            other: prev.other.filter((_, i) => i !== index)
                          }));
                        }}
                        className="p-4 bg-gradient-to-br from-amber-500/40 to-orange-500/40 border-2 border-amber-400 rounded-xl cursor-pointer hover:bg-red-500/20 transition-all duration-300"
                      >
                        <div className="text-2xl text-center text-amber-200">{symbolData.symbol}</div>
                        <div className="text-xs text-center text-amber-200 mt-1">Custom</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Selected Symbols Summary */}
            {getTotalSymbols() > 0 && (
              <div className="mt-8 p-6 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl border border-amber-200/30">
                <h3 className="text-amber-200 font-semibold mb-3">Selected Symbols ({getTotalSymbols()}):</h3>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(selectedSymbols).map(([category, symbols]) =>
                    symbols.map((symbol, index) => (
                      <span
                        key={`${category}-${index}`}
                        className="inline-flex items-center px-3 py-2 bg-black/40 rounded-lg text-amber-100 border border-amber-200/30"
                      >
                        <span className="mr-2">{symbol.symbol}</span>
                        <span className="text-sm">{symbol.name}</span>
                      </span>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Generate Button */}
        <div className="text-center">
          <button
            onClick={generateTalisman}
            disabled={!intention.trim() || isGenerating}
            className={`px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 ${
              intention.trim() && !isGenerating
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-400 hover:to-orange-400 shadow-2xl hover:shadow-amber-500/50'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isGenerating ? (
              <span className="flex items-center">
                <span className="animate-spin mr-3">🔮</span>
                Generating Your Talisman...
              </span>
            ) : (
              'Generate Talisman ✨'
            )}
          </button>
          
          {!intention.trim() && (
            <p className="text-amber-300/70 mt-4">Please enter your intention to continue</p>
          )}
        </div>
      </div>

      {/* Talisman Preview Modal */}
      {showPreview && <TalismanPreview />}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CreateTalisman;