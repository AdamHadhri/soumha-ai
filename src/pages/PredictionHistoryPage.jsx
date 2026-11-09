import React, { useState, useEffect } from 'react';

export default function PredictionHistoryPage({ navigateTo, historyItems = [], onDeleteItem, showToast }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [savedCars, setSavedCars] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cars') || '[]');
    } catch (e) {
      console.error('Failed to parse cars from localStorage:', e);
      return [];
    }
  });

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('cars') || '[]');
      setSavedCars(stored);
    } catch (e) {
      console.error('Failed to load cars from localStorage:', e);
    }

    const handleStorageChange = () => {
      try {
        const stored = JSON.parse(localStorage.getItem('cars') || '[]');
        setSavedCars(stored);
      } catch (e) {
        console.error('Failed to reload cars on storage change:', e);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleDeleteItem = (itemToDelete) => {
    try {
      const currentCars = JSON.parse(localStorage.getItem('cars') || '[]');

      const index = currentCars.findIndex((car) => {
        if (itemToDelete.id && car.id) {
          return car.id === itemToDelete.id;
        }
        if (itemToDelete.dateOfCreation && car.dateOfCreation) {
          return car.dateOfCreation === itemToDelete.dateOfCreation;
        }
        return (
          car.carName === itemToDelete.carName &&
          String(car.year) === String(itemToDelete.year) &&
          String(car.mileage) === String(itemToDelete.mileage) &&
          String(car.price) === String(itemToDelete.price) &&
          car.fuel === itemToDelete.fuel
        );
      });

      if (index !== -1) {
        currentCars.splice(index, 1);
      } else {
        const filtered = currentCars.filter((car) => {
          if (itemToDelete.id && car.id) return car.id !== itemToDelete.id;
          if (itemToDelete.dateOfCreation && car.dateOfCreation) return car.dateOfCreation !== itemToDelete.dateOfCreation;
          return car.carName !== itemToDelete.carName || car.price !== itemToDelete.price;
        });
        currentCars.length = 0;
        currentCars.push(...filtered);
      }

      localStorage.setItem('cars', JSON.stringify(currentCars));
      setSavedCars([...currentCars]);

      if (onDeleteItem && itemToDelete.id) {
        onDeleteItem(itemToDelete.id);
      }

      if (showToast) {
        showToast('Record removed from history.');
      }
    } catch (err) {
      console.error('Failed to remove car from localStorage:', err);
      if (showToast) {
        showToast('Failed to remove record.');
      }
    }
  };

  // Filter & Sort
  const filteredItems = savedCars
    .filter((item) => {
      const q = searchTerm.toLowerCase();
      const carName = item.carName || `${item.make || ''} ${item.model || ''}`;
      const fuel = item.fuel || '';
      return (
        carName.toLowerCase().includes(q) ||
        fuel.toLowerCase().includes(q)
      );
    })
    .sort((a, b) => {
      if (sortBy === 'price-high') return (Number(b.price) || 0) - (Number(a.price) || 0);
      if (sortBy === 'price-low') return (Number(a.price) || 0) - (Number(b.price) || 0);
      const timeB = b.dateOfCreation ? new Date(b.dateOfCreation).getTime() : (b.id || 0);
      const timeA = a.dateOfCreation ? new Date(a.dateOfCreation).getTime() : (a.id || 0);
      return timeB - timeA;
    });

  const totalPortfolioValue = savedCars.reduce((acc, item) => acc + (Number(item.price) || 0), 0);
  const avgValue = savedCars.length > 0 ? Math.round(totalPortfolioValue / savedCars.length) : 0;

  return (
    <div className="w-full max-w-7xl mx-auto px-margin-mobile sm:px-margin py-4 sm:py-space-lg flex flex-col gap-4 sm:gap-space-lg">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-space-md">
        <div className="flex flex-col gap-1">
          <h1 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-on-surface tracking-tight">
            Valuation History & Saved Logs
          </h1>
        </div>

        <button
          onClick={() => navigateTo('predict-price')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container transition-all shadow-sm cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
          <span>New Valuation</span>
        </button>
      </div>

      {/* Overview Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-space-md">
        <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex items-center gap-3.5 sm:gap-4">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0">
            <span className="material-symbols-outlined text-2xl">history</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-body-sm text-body-sm text-on-surface-variant">Total Appraisals</span>
            <span className="font-display-lg text-headline-lg lg:text-headline-xl text-on-surface font-bold truncate">
              {savedCars.length} Records
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex items-center gap-3.5 sm:gap-4">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0">
            <span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-body-sm text-body-sm text-on-surface-variant">Average Portfolio Value</span>
            <span className="font-display-lg text-headline-lg lg:text-headline-xl text-on-surface font-bold truncate">
              {avgValue.toLocaleString()} DT
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex items-center gap-3.5 sm:gap-4">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-tertiary-container/30 flex items-center justify-center text-tertiary shrink-0">
            <span className="material-symbols-outlined text-2xl">verified</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-body-sm text-body-sm text-on-surface-variant">AI Accuracy Grade</span>
            <span className="font-display-lg text-headline-lg lg:text-headline-xl text-tertiary font-bold truncate">
              +80% Precision
            </span>
          </div>
        </div>
      </div>

      {/* Search & Sort Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-space-md bg-surface-container-lowest p-3.5 sm:p-4 rounded-xl border border-outline-variant/30 shadow-sm">
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            placeholder="Search by make, model, or fuel..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-10 pl-10 pr-4 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-[18px]">
            search
          </span>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <span className="font-label-sm text-label-sm text-on-surface-variant shrink-0">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="flex-1 sm:flex-initial h-10 px-3 bg-surface-container-low rounded-lg font-label-sm text-label-sm text-on-surface focus:outline-none cursor-pointer"
          >
            <option value="newest">Newest First</option>
            <option value="price-high">Price: High to Low</option>
            <option value="price-low">Price: Low to High</option>
          </select>
        </div>
      </div>

      {/* History Items List */}
      {filteredItems.length === 0 ? (
        <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-12 text-center border border-outline-variant/30 flex flex-col items-center gap-4">
          <span className="material-symbols-outlined text-5xl text-outline-variant">folder_off</span>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">No Valuation Records Found</h3>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            {searchTerm ? 'No results matched your search query.' : 'You have not saved any vehicle price predictions yet.'}
          </p>
          <button
            onClick={() => navigateTo('predict-price')}
            className="w-full sm:w-auto px-space-lg py-3 rounded-xl bg-primary text-on-primary font-label-md font-semibold hover:bg-primary-container transition-colors cursor-pointer"
          >
            Run Your First Valuation
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-space-md">
          {filteredItems.map((item, index) => (
            <div
              key={item.id || item.dateOfCreation || index}
              className="bg-surface-container-lowest rounded-2xl p-4 sm:p-5 border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-4"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-col min-w-0">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">
                      {item.carName || `${item.make || ''} ${item.model || ''}`.trim() || 'Vehicle'}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {item.year} · {(Number(item.mileage) || 0).toLocaleString()} km
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-surface-container-low text-primary font-label-sm text-label-sm font-semibold shrink-0">
                    {(item.fuel || 'Gasoline').split(' ')[0]}
                  </span>
                </div>

                <div className="flex items-baseline justify-between pt-3 border-t border-surface-container-low">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Estimated Market Value</span>
                    <span className="font-data-metric text-2xl sm:text-data-metric text-on-surface font-extrabold">
                      {(Number(item.price) || 0).toLocaleString()} DT
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-surface-container-low text-body-sm text-on-surface-variant">
                <span className="text-[12px]">
                  {item.date || (item.dateOfCreation ? new Date(item.dateOfCreation).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Recently')}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDeleteItem(item)}
                    className="p-2 sm:p-1.5 rounded-lg bg-surface-container-low hover:bg-error-container text-error transition-colors cursor-pointer flex items-center justify-center"
                    title="Delete Record"
                  >
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
