import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home'
import WhatIsPage from './components/pages/WhatIsPage';
import HowItWorksPage from './components/pages/HowItWorks';
import Manual from './components/pages/Manual';
import CreateTalisman from './components/pages/CreateTalisman';
import NotFound from './components/pages/NotFound';

// Main App component

function App() {
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950">
      <Header />
      <main className="flex-1 overflow-auto">
        <Routes>          
          <Route path="/" element={<Home />} />
          <Route path="/what-is" element={<WhatIsPage/>} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/manual" element={<Manual />} />
          <Route path="/create-talisman" element={<CreateTalisman />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<Navigate to="/not-found" replace />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      
    </div>
  )
}

export default App
