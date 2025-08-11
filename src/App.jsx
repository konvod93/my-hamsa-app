
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

// Main App component

function App() {
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Welcome to My Hamsa App</h1>
        <p className="mt-2">This is a simple React application with Tailwind CSS.</p>
      </main>
      <Footer />
      
    </div>
  )
}

export default App
