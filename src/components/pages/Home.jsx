import Hero from "../Hero";
import Features from "../Features";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen text-black">
        <Hero />
        <Features />
    </div>
  );
}

export default Home;
