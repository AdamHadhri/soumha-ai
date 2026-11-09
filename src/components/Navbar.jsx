import React, { useState } from 'react';

export default function Navbar({ currentPath, navigateTo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: 'home' },
    { label: 'Predict Price', path: 'predict-price' },
    { label: 'Prediction History', path: 'prediction-history' },
    { label: 'How It Works', path: 'how-it-works' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 sm:h-20 max-w-7xl mx-auto px-margin-mobile sm:px-margin flex items-center justify-between gap-2 sm:gap-space-lg">
        {/* Logo & Brand */}
        <div
          className="flex items-center gap-2.5 sm:gap-space-md cursor-pointer shrink-0"
          onClick={() => {
            navigateTo('home');
            setMobileMenuOpen(false);
          }}
        >
          <img src="/images/logo.png" className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" alt="S" />
          <div className="flex flex-col">
            <span className="font-headline-sm text-base sm:text-headline-sm text-on-surface tracking-tight leading-none font-bold">
              Soumha AI
            </span>
            <span className="font-label-sm text-[10px] sm:text-label-sm text-primary leading-none uppercase mt-0.5 tracking-wider font-semibold">
              AI Analytics
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-space-xl">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigateTo(item.path)}
                className={`cursor-pointer transition-colors font-label-md text-label-md font-semibold px-space-md py-space-sm rounded-lg ${isActive
                  ? 'text-primary bg-surface-container-low'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low/50'
                  }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Status Pill & Actions */}
        <div className="flex items-center gap-2 sm:gap-space-md">
          <div className="hidden md:flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-low">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
              HIGH PRECISION MODEL
            </span>
          </div>

          <button
            onClick={() => {
              navigateTo('predict-price');
              setMobileMenuOpen(false);
            }}
            className="inline-flex gap-1 cursor-pointer items-center justify-center px-3 py-1.5 sm:px-space-md sm:py-space-sm rounded-lg bg-primary text-on-primary font-label-md text-xs sm:text-label-md font-semibold hover:bg-primary-container transition-colors shadow-[0_1px_2px_rgba(0,74,198,0.2)] whitespace-nowrap"
          >
            <span>Soumha Now</span>
            <span className="material-symbols-outlined text-[16px] sm:text-[18px]">
              arrow_forward
            </span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container-low flex items-center justify-center cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-t border-outline-variant/30 px-margin-mobile sm:px-margin py-3 flex flex-col gap-1.5 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => {
                  navigateTo(item.path);
                  setMobileMenuOpen(false);
                }}
                className={`cursor-pointer text-left px-4 py-3 rounded-xl font-label-md text-label-md font-semibold transition-colors flex items-center justify-between ${isActive
                  ? 'text-primary bg-surface-container-low'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low/50'
                  }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                )}
              </button>
            );
          })}

          <div className="mt-2 pt-3 border-t border-outline-variant/20 flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                High Precision Model
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-primary font-semibold">
              +80% R²
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
