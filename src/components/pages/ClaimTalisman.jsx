// src/pages/ClaimTalisman.jsx
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { useEffect } from 'react';

export default function ClaimTalisman() {
  const { state } = useLocation();
  const { intention, processedLetters, selectedSymbols } = state || {};

  useEffect(() => {
    if (!state) {
      // Redirect or show error if no data
    }
  }, [state]);

  const downloadTalisman = () => {
    const element = document.getElementById('talisman-preview');
    html2canvas(element).then(canvas => {
      const link = document.createElement('a');
      link.download = 'talisman.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">🔮 Your Talisman is ready</h1>
      <p className="mb-6 text-center max-w-xl">
        This artefact contains your intrent: <span className="italic">{intention}</span>
      </p>

      <div id="talisman-preview" className="relative w-64 h-64 bg-white rounded-lg shadow-lg mb-6">
        {/* Здесь можно вставить компонент визуализации */}
        {/* Например: <TalismanCanvas {...props} /> */}
      </div>

      <button
        onClick={downloadTalisman}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
      >
        📥 Download talisman
      </button>
    </div>
  );
}