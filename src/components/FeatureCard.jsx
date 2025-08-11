import { useState, useEffect } from "react";

const FeatureCard = ({ icon, title, description, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`bg-gradient-to-br from-purple-800 to-indigo-900 p-8 rounded-2xl shadow-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-purple-500/30 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
    }`}>
      <div className="text-6xl mb-4 text-center">{icon}</div>
      <h3 className="text-2xl font-bold text-amber-200 mb-4 text-center">{title}</h3>
      <p className="text-amber-100 text-center leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;