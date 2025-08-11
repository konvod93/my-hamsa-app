import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      icon: "🔮",
      title: "Personal Magic",
      description: "Each talisman is uniquely crafted based on your personal energy and intentions"
    },
    {
      icon: "⭐",
      title: "Ancient Wisdom",
      description: "Drawing from centuries-old traditions and mystical knowledge"
    },
    {
      icon: "🌙",
      title: "Lunar Alignment",
      description: "Created in harmony with lunar cycles for maximum spiritual power"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-indigo-900 to-purple-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-200 text-center mb-16">
          Why Choose Hamsa?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;