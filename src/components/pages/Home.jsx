import Hero from "../Hero";
import Features from "../Features";
import Process from "../Process";
import Testimonials from "../Testinomials";
import CallToAction from "../CallToAction";

// Home component that combines all sections

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen text-black">
        <Hero />
        <Features />
        <Process />
        <Testimonials />
        <CallToAction />
    </div>
  );
}

export default Home;
