import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home'

// Main App component

function App() {
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
      <Footer />
      
    </div>
  )
}

export default App
