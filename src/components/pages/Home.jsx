import Hero from "../Hero";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen text-black">
        <Hero />
        <div className="flex-1 p-4 bg-violet-800 text-amber-200">
            <h2 className="text-2xl font-bold mb-4">Home Page Content</h2>
            <p>This is the home page of the Hamsa app. Here you can find various features and information about our magical services.</p>
        </div>
    </div>
  );
}

export default Home;
