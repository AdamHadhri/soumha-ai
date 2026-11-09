import React, { useState, useEffect } from 'react';
import HomeCar from "../assets/cars/homecar.png";

const WS_URL = import.meta.env.VITE_WS_URL || import.meta.env.VITE_API_URL?.replace(/^http/, 'ws');

export default function HomePage({ navigateTo, onSelectMood }) {
  const [activeMood, setActiveMood] = useState('Sedan');
  const [ws, setWs] = useState(null);
  const [livePrediction, setLivePrediction] = useState(null);

useEffect(() => {
    const socket = new WebSocket(
        `${WS_URL}/ws/predict`
    );

    socket.onopen = () => {
        console.log("WebSocket connected!");

        socket.send(JSON.stringify({
            Make: "Mercedes-Benz",
            Model: "CLS 63 AMG",
            Year: 2015,
            Mileage: 120000,
            Color: "Blue",
            Transmission: "Automatic",
            Engine_Size: 5.5,
            Horsepower: 11,
            Body_Type: "Sedan",
            Fuel_Type: "Petrol"
        }));
    };

    socket.onmessage = (event) => {
        try {
            const data = JSON.parse(event.data);
            setLivePrediction(data);

        } catch (err) {
            console.error("Failed to parse WebSocket message:", err);
        }
    };

    socket.onerror = (error) => {
        console.error("WebSocket error:", error);
    };

    socket.onclose = (event) => {
        console.log("WebSocket disconnected:", event.code, event.reason);
    };

    setWs(socket);

    return () => {
        socket.close();
    };
}, []);

  const livePrice =
    livePrediction?.prediction ??
    livePrediction?.predicted_price ??
    livePrediction?.price ??
    (typeof livePrediction === 'number' ? livePrediction : null);

  const moods = [
    { label: 'Sedan', type: 'Sedan', bg: 'bg-secondary-fixed', text: 'text-on-secondary-fixed', dot: 'bg-primary' },
    { label: 'Hatchback', type: 'Hatchback', bg: 'bg-error-container', text: 'text-on-error-container', dot: 'bg-error' },
    { label: 'SUV', type: 'SUV', bg: 'bg-on-tertiary-container/30', text: 'text-tertiary', dot: 'bg-tertiary' },
    { label: 'Coupe', type: 'Coupe', bg: 'bg-surface-container-highest', text: 'text-on-surface', dot: 'bg-inverse-surface' },
    { label: 'Station Wagon', type: 'Station Wagon', bg: 'bg-surface-container-high', text: 'text-on-surface', dot: 'bg-primary' },
    { label: 'Pickup', type: 'Pickup', bg: 'bg-primary-fixed', text: 'text-primary', dot: 'bg-primary' },
    { label: 'Van / MPV', type: 'Van / MPV', bg: 'bg-secondary-fixed-dim', text: 'text-on-secondary-fixed-variant', dot: 'bg-secondary' },
  ];

  const automakers = [
    { name: 'Renault', models: 'Clio, Megane, Symbol' },
    { name: 'Volkswagen', models: 'Golf, Polo, Passat' },
    { name: 'Peugeot', models: '208, 206+, 3008, Partner' },
    { name: 'Kia', models: 'Rio, Sportage, Picanto' },
    { name: 'Fiat', models: 'Doblo, Punto, 500' },
    { name: 'BMW', models: 'Serie 1-5, X1-X6' },
    { name: 'Mercedes-Benz', models: 'Classe A-S, CLS, GLA' },
    { name: 'Ford', models: 'Fiesta, Focus, Ranger' },
  ];

  const handleMoodClick = (moodType) => {
    setActiveMood(moodType);
    if (onSelectMood) onSelectMood(moodType);
  };

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO VIEWPORT */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest">
        {/* Subtle Ambient Instrument Gradients */}
        <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-surface-container/60 blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-margin-mobile sm:px-margin py-6 sm:py-space-xl lg:py-24 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-10 items-stretch">
            {/* Left: Hero Content */}
            <div className="lg:w-[55%] flex flex-col items-start gap-space-md">
              {/* AI Badge */}
              <div className="inline-flex items-center gap-space-xs px-2.5 sm:px-3 py-1.5 rounded-full bg-surface-container-low shadow-sm max-w-full">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse shrink-0"></span>
                <span className="font-label-sm text-[11px] sm:text-label-sm text-primary tracking-wide uppercase font-semibold truncate">
                  ⚡ Soumha AI · Tunisian Car Price Valuation
                </span>
              </div>

              {/* Heading and Description */}
              <div className="flex flex-col gap-space-xs w-full">
                <h1 className="font-display-lg text-display-lg-mobile sm:text-display-lg text-on-surface tracking-tight leading-[1.12] sm:leading-[1.08]">
                  Predict Your Car's{" "}
                  <span className="text-primary">True Value</span>
                </h1>

                <p className="font-body-lg text-body-md sm:text-body-lg text-on-surface-variant w-full">
                  Get an instant AI-powered market estimate in Tunisian Dinars (DT) based on your vehicle's exact specifications, real Tunisian car listings, and powertrain telemetry.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-space-sm w-full py-space-xs">
                <div className="flex items-center gap-space-xs">
                  <span
                    className="material-symbols-outlined text-tertiary text-xl shrink-0"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    verified
                  </span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    +80% AI Precision
                  </span>
                </div>

                <div className="flex items-center gap-space-xs">
                  <span
                    className="material-symbols-outlined text-primary text-xl shrink-0"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    speed
                  </span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Instant DT Appraisal
                  </span>
                </div>

                <div className="flex items-center gap-space-xs">
                  <span
                    className="material-symbols-outlined text-secondary text-xl shrink-0"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    database
                  </span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    3,300+ TN Listings
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-space-md w-full pt-2">
                <button
                  onClick={() => navigateTo('predict-price')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-3.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 group cursor-pointer"
                >
                  <span>Predict Price</span>
                  <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </button>

                <button
                  onClick={() => navigateTo('how-it-works')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg text-on-surface-variant">
                    analytics
                  </span>
                  <span>Explore Methodology</span>
                </button>
              </div>

              {/* Statistics */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-space-md pt-space-sm w-full">
                <div className="flex items-center gap-space-xs px-3 py-1.5 rounded-md bg-surface-container-high/60 shadow-sm">
                  <span className="text-tertiary font-headline-sm text-headline-sm shrink-0">
                    ±5%
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    estimated price range corridor
                  </span>
                </div>

                <div className="flex items-center gap-space-xs px-3 py-1.5 rounded-md bg-surface-container-high/60 shadow-sm">
                  <span className="text-primary font-headline-sm text-headline-sm shrink-0">
                    10 Specs
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    analyzed per vehicle appraisal
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Full-Height Image */}
            <div className="lg:w-[45%] relative flex items-stretch min-w-0">
              <div className="relative w-full min-h-[280px] sm:min-h-[380px] lg:min-h-0 group">
                {/* Floating Valuation Card */}
                <div className="absolute top-3 sm:top-4 left-3 right-3 sm:right-auto sm:left-4 z-20 flex items-center gap-space-sm bg-surface-container-lowest/95 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl shadow-xl transition-transform duration-300 sm:group-hover:scale-105">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-tertiary animate-ping shrink-0"></div>

                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-[11px] sm:text-label-sm text-on-surface-variant leading-none">
                      Live Valuation Benchmark
                    </span>

                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mt-0.5">
                      <span className="font-data-metric text-xl sm:text-data-metric text-on-surface tracking-tight font-bold">
                        {livePrice !== null && livePrice !== undefined && !isNaN(livePrice)
                          ? `${Math.round(livePrice).toLocaleString()} DT`
                          : "--,--- DT"}
                      </span>
                      <span className="font-label-sm text-[11px] sm:text-label-sm text-tertiary font-semibold">
                        ● +80% High Confidence
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Vehicle Information Card */}
                <div className="absolute bottom-3 sm:-bottom-4 left-3 right-3 sm:left-auto sm:right-6 z-20 flex items-center gap-2.5 sm:gap-3 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-2 sm:px-3.5 sm:py-2 rounded-lg shadow-md">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0">
                    <span className="material-symbols-outlined text-[14px]">
                      speed
                    </span>
                  </div>

                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-xs sm:text-label-sm text-on-surface font-semibold truncate">
                      Mercedes-Benz CLS 63 AMG · 2015
                    </span>
                    <span className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant truncate">
                      5.5L Petrol · 11 CV · 120,000 km
                    </span>
                  </div>
                </div>

                {/* Image fills the available column height */}
                <div className="relative w-full h-full min-h-[280px] sm:min-h-[380px] lg:min-h-0 rounded-2xl overflow-hidden bg-gradient-to-b from-surface-container-low to-surface-container-lowest p-1.5 sm:p-2 shadow-sm">
                  <img
                    alt="Mercedes-Benz CLS 63 AMG Blue Sedan"
                    className="absolute inset-1.5 sm:inset-2 w-[calc(100%-0.75rem)] sm:w-[calc(100%-1rem)] h-[calc(100%-0.75rem)] sm:h-[calc(100%-1rem)] object-cover rounded-xl transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    src={HomeCar}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ADAPTIVE VEHICLE INTELLIGENCE (CHASSIS & BODY CONFIGURATION) */}
      <section className="w-full bg-surface-container-low py-4 sm:py-space-lg border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-margin-mobile sm:px-margin">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md bg-surface-container-lowest rounded-xl p-4 sm:p-space-md shadow-sm">
            <div className="flex items-start sm:items-center gap-space-sm">
              <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-xl">tune</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface">Chassis & Body Configuration</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Dynamic valuation parameters calibrated across 7 vehicle body types</span>
              </div>
            </div>

            {/* Interactive Mood Display Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {moods.map((m) => {
                const isSelected = activeMood === m.type;
                return (
                  <button
                    key={m.type}
                    onClick={() => handleMoodClick(m.type)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${m.bg} ${m.text} shadow-sm transition-all cursor-pointer ${isSelected ? 'ring-2 ring-primary scale-105' : 'opacity-80 hover:opacity-100'
                      }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${m.dot}`}></span>
                    <span className="font-label-sm text-label-sm font-semibold">{m.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THREE-STEP HOW IT WORKS */}
      <section className="w-full bg-background py-8 sm:py-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile sm:px-margin flex flex-col gap-6 sm:gap-space-xl">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-space-xs">
            <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase font-semibold">
              How Soumha AI Works
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-on-surface">Simple, Transparent, Data-Driven</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Value any vehicle in Tunisian Dinars (DT) in three steps—from entering your car's specifications to reviewing feature-by-feature price impacts and saving your history.
            </p>
          </div>

          {/* 3 Step Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-space-lg">
            {/* Step 1 */}
            <div className="relative bg-surface-container-lowest rounded-xl p-5 sm:p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
              <div className="w-full h-1 bg-surface-variant absolute top-0 left-0 rounded-t-xl group-hover:bg-primary transition-colors"></div>
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-2xl">directions_car</span>
                  </div>
                  <span className="font-headline-lg text-headline-lg text-outline-variant/60 font-black">01</span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">1. Enter Vehicle Specs</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Select your make, model, registration year, exterior color, and body type, then enter mileage (km), transmission, engine size (L), fiscal power (CV), and fuel type.
                  </p>
                </div>
              </div>
              <div className="mt-space-lg pt-space-sm bg-surface-container-low/50 rounded-lg p-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-base shrink-0">pin</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Quick presets (Clio, Golf, Rio, Polo) & auto body detection</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative bg-surface-container-lowest rounded-xl p-5 sm:p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
              <div className="w-full h-1 bg-primary absolute top-0 left-0 rounded-t-xl"></div>
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-2xl">psychology</span>
                  </div>
                  <span className="font-headline-lg text-headline-lg text-primary/40 font-black">02</span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">2. AI Ensemble Valuation</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Soumha AI analyzes your vehicle using a weighted ensemble of CatBoost, XGBoost, and ExtraTrees models trained on over 3,300 Tunisian market listings.
                  </p>
                </div>
              </div>
              <div className="mt-space-lg pt-space-sm bg-surface-container-low/50 rounded-lg p-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary text-base shrink-0">monitoring</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">81.29% R² score · Calibrated for the Tunisian market</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative bg-surface-container-lowest rounded-xl p-5 sm:p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
              <div className="w-full h-1 bg-surface-variant absolute top-0 left-0 rounded-t-xl group-hover:bg-tertiary transition-colors"></div>
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-tertiary shrink-0">
                    <span className="material-symbols-outlined text-2xl">price_check</span>
                  </div>
                  <span className="font-headline-lg text-headline-lg text-outline-variant/60 font-black">03</span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">3. Get Price & Save Report</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    View your estimated market price in DT, a ±5% price range corridor, and normalized regression factor weights showing how each spec affects the value.
                  </p>
                </div>
              </div>
              <div className="mt-space-lg pt-space-sm bg-surface-container-low/50 rounded-lg p-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-base shrink-0">verified_user</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Save to Prediction History & export PDF certificate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TRUST & COVERED VEHICLE PLATFORMS */}
      <section className="w-full bg-surface-container-lowest py-8 sm:py-space-xl border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-margin-mobile sm:px-margin flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row items-baseline justify-between gap-space-sm pb-space-xs">
            <div>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                Tunisian Market Coverage
              </span>
              <h3 className="font-headline-lg text-xl sm:text-headline-lg text-on-surface">Optimized for Leading Automakers in Tunisia</h3>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Backed by 3,300+ transactional vehicle listings across Tunisian car registries
            </p>
          </div>

          {/* OEM Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-space-sm">
            {automakers.map((brand) => (
              <div
                key={brand.name}
                onClick={() => navigateTo('predict-price')}
                className="flex flex-col items-center justify-center p-3.5 sm:p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer shadow-sm hover:scale-105 text-center"
              >
                <span className="font-headline-sm text-sm sm:text-headline-sm text-on-surface font-bold tracking-tight">
                  {brand.name}
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant mt-1 text-center text-[11px]">
                  {brand.models}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CALL TO ACTION STRIP */}
      <section className="w-full bg-background py-8 sm:py-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile sm:px-margin">
          <div className="relative overflow-hidden bg-inverse-surface text-inverse-on-surface rounded-2xl p-6 sm:p-space-xl md:p-12 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
            {/* Decorative Glow Accents within card */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>
            <div className="absolute left-1/3 -top-12 w-48 h-48 rounded-full bg-secondary-container/10 blur-2xl pointer-events-none"></div>

            <div className="flex flex-col gap-space-xs relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest/10 w-fit">
                <span className="w-2 h-2 rounded-full bg-tertiary-fixed"></span>
                <span className="font-label-sm text-label-sm text-on-tertiary-container tracking-wider uppercase font-semibold">
                  Ready in 30 seconds
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-inverse-on-surface">Ready to Value Your Car?</h2>
              <p className="font-body-md text-body-md text-surface-variant">
                Join car buyers, sellers, and enthusiasts across Tunisia who use Soumha AI to estimate accurate market prices in DT and track their valuation history.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-space-md w-full md:w-auto">
              <button
                onClick={() => navigateTo('predict-price')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-space-xl py-3.5 sm:py-4 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-bold hover:bg-primary transition-all duration-200 shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Start Valuation Now</span>
                <span className="material-symbols-outlined text-lg">bolt</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
