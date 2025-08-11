import Hero from "../Hero";
import Features from "../Features";
import Process from "../Process";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen text-black">
        <Hero />
        <Features />
        <Process />
    </div>
  );
}

export default Home;
