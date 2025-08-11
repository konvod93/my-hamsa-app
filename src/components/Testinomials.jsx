const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      text: "My Hamsa talisman brought incredible luck and protection into my life!",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "David K.",
      text: "The energy from my custom talisman is amazing. I feel more centered and confident.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Luna R.",
      text: "Beautiful craftsmanship and powerful spiritual connection. Highly recommended!",
      rating: "⭐⭐⭐⭐⭐"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-violet-950 to-indigo-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-200 text-center mb-16">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-800/50 to-indigo-800/50 p-8 rounded-2xl backdrop-blur-sm border border-amber-200/20">
              <div className="text-center mb-4 text-2xl">{testimonial.rating}</div>
              <p className="text-amber-100 text-center mb-4 italic">"{testimonial.text}"</p>
              <p className="text-amber-200 text-center font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;