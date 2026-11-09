import React from 'react';

export default function Footer({ navigateTo }) {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 mt-auto">
      <div className="max-w-7xl mx-auto px-margin-mobile sm:px-margin py-6 sm:py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg items-start pb-2 sm:pb-space-lg">
          <div className="md:col-span-7 flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-sm flex-wrap">
              <span className="font-headline-sm text-headline-sm text-on-surface">Soumha AI</span>
              <span className="font-label-sm text-label-sm text-tertiary bg-surface-container px-space-xs py-0.5 rounded font-semibold">
                Tunisian Car Registries Core
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
              AI statistical valuations are calculated utilizing multi-variable telemetry and transactional registry data aggregated across European vehicle markets. Models represent probabilistic market estimates intended for analytical benchmarking and insurance underwriting appraisal.
            </p>
          </div>
          <div className="md:col-span-5 flex flex-col md:items-end gap-space-sm pt-2 md:pt-0 border-t md:border-t-0 border-outline-variant/20">
            <div className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-space-md font-label-sm text-label-sm text-on-surface-variant">
              <button onClick={() => navigateTo('home')} className="hover:text-on-surface cursor-pointer transition-colors py-1">
                Home
              </button>
              <button onClick={() => navigateTo('predict-price')} className="hover:text-on-surface cursor-pointer transition-colors py-1">
                Predict Price
              </button>
              <button onClick={() => navigateTo('prediction-history')} className="hover:text-on-surface cursor-pointer transition-colors py-1">
                History
              </button>
              <button onClick={() => navigateTo('how-it-works')} className="hover:text-on-surface cursor-pointer transition-colors py-1">
                Methodology
              </button>
            </div>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              © 2026 Soumha AI Technologies. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
