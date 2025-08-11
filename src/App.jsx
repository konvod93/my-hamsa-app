import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home'
import WhatIsPage from './components/pages/WhatIsPage';

// Main App component

function App() {
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 overflow-auto">
        <Routes>          
          <Route path="/" element={<Home />} />
          <Route path="/what-is" element={<WhatIsPage/>} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
      <Footer />
      
    </div>
  )
}

export default App
