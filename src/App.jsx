import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';
import HomePage from './pages/HomePage';
import PredictPricePage from './pages/PredictPricePage';
import PredictionHistoryPage from './pages/PredictionHistoryPage';
import HowItWorksPage from './pages/HowItWorksPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState('home');
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  // Initial Saved Valuation History Logs
  const [historyItems, setHistoryItems] = useState([
    {
      id: 1,
      make: 'BMW',
      model: '330e M-Sport Steptronic',
      year: '2022',
      price: 38450,
      mileage: 42500,
      fuel: 'Plug-in Hybrid',
      date: '02 Oct 2026',
    },
    {
      id: 2,
      make: 'Porsche',
      model: '911 Carrera S PDK',
      year: '2023',
      price: 134800,
      mileage: 14800,
      fuel: 'Petrol / Gasoline',
      date: '28 Sep 2026',
    },
    {
      id: 3,
      make: 'Audi',
      model: 'Q5 45 TFSI quattro S line',
      year: '2021',
      price: 44900,
      mileage: 58200,
      fuel: 'Mild-Hybrid (MHEV)',
      date: '24 Sep 2026',
    },
    {
      id: 4,
      make: 'Tesla',
      model: 'Model 3 Long Range AWD',
      year: '2023',
      price: 41250,
      mileage: 21400,
      fuel: 'Pure Electric (BEV)',
      date: '18 Sep 2026',
    },
  ]);

  const navigateTo = (path) => {
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 4000);
  };

  const handleSavePrediction = (newRecord) => {
    setHistoryItems((prev) => [newRecord, ...prev]);
  };

  const handleDeleteItem = (id) => {
    setHistoryItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-body-md text-on-surface antialiased overflow-x-clip">
      <Navbar currentPath={currentPath} navigateTo={navigateTo} />

      <main className="flex-1 w-full pt-16 sm:pt-20">
        {currentPath === 'home' && (
          <HomePage navigateTo={navigateTo} />
        )}
        {currentPath === 'predict-price' && (
          <PredictPricePage
            navigateTo={navigateTo}
            onSavePrediction={handleSavePrediction}
            showToast={showToast}
          />
        )}
        {currentPath === 'prediction-history' && (
          <PredictionHistoryPage
            navigateTo={navigateTo}
            historyItems={historyItems}
            onDeleteItem={handleDeleteItem}
            showToast={showToast}
          />
        )}
        {currentPath === 'how-it-works' && (
          <HowItWorksPage navigateTo={navigateTo} />
        )}
      </main>

      <Footer navigateTo={navigateTo} />

      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
}
