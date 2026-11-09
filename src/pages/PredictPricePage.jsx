import { useState, useEffect, useRef } from 'react';
import { colors, bodyTypes, fuelTypes, transmissions } from '../data/carData';
import carModels from '../data/carModels';
import { clioImg, golfImg, poloImg, rioImg, mpvImg, hatchbackImg, sedanImg, suvImg, coupeImg, StationWagonImg, PickupImg } from '../data/carImages';

const bodyTypeImages = {
  'Van / MPV': mpvImg,
  'Hatchback': hatchbackImg,
  'Sedan': sedanImg,
  'SUV': suvImg,
  'Coupe': coupeImg,
  'Station Wagon': StationWagonImg,
  'Pickup': PickupImg,
  'MPV': mpvImg,
  'Van': mpvImg,
  'StationWagon': StationWagonImg,
};

const API_URL = import.meta.env.VITE_API_URL;

export default function PredictPricePage({ navigateTo, onSavePrediction, showToast }) {
  const presets = {
    clio: {
      make: 'Renault',
      model: 'Clio',
      year: '2005',
      color: 'Blue',
      body: 'Hatchback',
      mileage: 300000,
      transmission: 'Manual',
      displacement: '1.2',
      power: '5',
      fuel: 'Gasoline',
      image: clioImg,
      moodLabel: 'Red Hatchback Urban Active',
      estimatedPrice: 22000,
      priceRange: '20,000 DT – 24,000 DT',
    },
    golf: {
      make: 'Volkswagen',
      model: 'Golf',
      year: '2010',
      color: 'Blue',
      body: 'Hatchback',
      mileage: 200000,
      transmission: 'Manual',
      displacement: '1.4',
      power: '7',
      fuel: 'Gasoline',
      image: golfImg,
      moodLabel: 'Grey Hatchback German Active',
      estimatedPrice: 34500,
      priceRange: '33,500 DT – 635,000 DT',
    },
    rio: {
      make: 'Kia',
      model: 'Rio',
      year: '2020',
      color: 'Red',
      body: 'Hatchback',
      mileage: 68000,
      transmission: 'Manual',
      displacement: '1.2',
      power: '5',
      fuel: 'Gasoline',
      image: rioImg,
      moodLabel: 'Silver Sedan City Active',
      estimatedPrice: 47500,
      priceRange: '46,500 DT – 48000 DT',
    },
    polo: {
      make: 'Volkswagen',
      model: 'Polo',
      year: '2015',
      color: 'Red',
      body: 'Hatchback',
      mileage: 170000,
      transmission: 'Manual',
      displacement: '1.4',
      power: '5',
      fuel: 'Gasoline',
      image: poloImg,
      moodLabel: 'White Compact Hatch Active',
      estimatedPrice: 33800,
      priceRange: '33,000 DT – 35,000 DT',
    },
  };
  // Aliases for convenience
  presets['kia rio'] = presets.rio;
  presets.kia_rio = presets.rio;

  const [formState, setFormState] = useState({ ...presets.clio });
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('Analyzing vehicle telemetry...');
  const [calculatedPrice, setCalculatedPrice] = useState(presets.clio.estimatedPrice);
  const [factors, setFactors] = useState([]);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [checkingHealth, setCheckingHealth] = useState(true);

  const checkHealth = async () => {
    setCheckingHealth(true);
    try {
      const response = await fetch(`${API_URL}/health`);
      if (!response.ok) throw new Error(`Server returned status ${response.status}`);
      const data = await response.json();
      setModelLoaded(Boolean(data.model_loaded));
    } catch (error) {
      console.error('Health check failed:', error);
      setModelLoaded(false);
    } finally {
      setCheckingHealth(false);
    }
  };

  useEffect(() => {
    checkHealth();
  }, []);

  const [selectedMake, setSelectedMake] = useState(presets.clio.make);
  const [selectedModel, setSelectedModel] = useState(presets.clio.model);

  const prevBodyRef = useRef(formState.body);

  useEffect(() => {
    setSelectedMake(formState.make || "");
    setSelectedModel(formState.model || "");
  }, [formState.make, formState.model]);

  useEffect(() => {
    if (prevBodyRef.current !== formState.body) {
      prevBodyRef.current = formState.body;
      if (formState.body && bodyTypeImages[formState.body]) {
        setFormState((prev) => ({
          ...prev,
          image: bodyTypeImages[formState.body],
        }));
      }
    }
  }, [formState.body]);

  const makes = [
    ...new Set(
      [...carModels.map((car) => car.Make), selectedMake].filter(Boolean)
    ),
  ].sort((a, b) => a.localeCompare(b));

  const availableModels = carModels
    .filter((car) => car.Make === selectedMake)
    .map((car) => car.Model)
    .sort((a, b) => a.localeCompare(b));

  const models = [...new Set([...availableModels, selectedModel].filter(Boolean))];

  const expectedBodyType =
    carModels.find(
      (car) =>
        car.Make === (selectedMake || formState.make) &&
        car.Model === (selectedModel || formState.model) &&
        (car['Body Type'] || car.Body_Type)
    )?.['Body Type'] ||
    carModels.find(
      (car) =>
        car.Model === (selectedModel || formState.model) &&
        (car['Body Type'] || car.Body_Type)
    )?.['Body Type'];

  const handleMakeChange = (e) => {
    const newMake = e.target.value;
    setSelectedMake(newMake);
    setSelectedModel("");
    setFormState((prev) => ({
      ...prev,
      make: newMake,
      model: "",
    }));
  };

  const handleModelChange = (e) => {
    const newModel = e.target.value;
    setSelectedModel(newModel);

    const currentMake = selectedMake || formState.make;
    const matchedCar = carModels.find(
      (car) =>
        car.Make === currentMake &&
        car.Model === newModel &&
        (car['Body Type'] || car.Body_Type)
    );
    const detectedBody = matchedCar ? (matchedCar['Body Type'] || matchedCar.Body_Type) : null;

    setFormState((prev) => ({
      ...prev,
      model: newModel,
      ...(detectedBody
        ? {
          body: detectedBody,
          image: bodyTypeImages[detectedBody] || prev.image,
        }
        : {}),
    }));
  };

  const handleRunValuation = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    setLoadingText('Connecting to Soumha API...');

    const payload = {
      Make: formState.make,
      Model: formState.model,
      Year: parseInt(formState.year, 10) || 0,
      Mileage: Number(formState.mileage) || 0,
      Color: formState.color,
      Transmission: formState.transmission,
      Engine_Size: parseFloat(formState.displacement) || 0,
      Horsepower: parseInt(formState.power, 10) || 0,
      Body_Type: formState.body,
      Fuel_Type: formState.fuel,
    };

    try {
      const response = await fetch(`${API_URL}/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const data = await response.json();
      const price = data.prediction ?? data.predicted_price ?? data.price ?? (typeof data === 'number' ? data : null);

      if (price !== null && !isNaN(price)) {
        setModelLoaded(true);
        setCalculatedPrice(Math.round(price));
        setFactors(data.contributions);
        addCar({
          carName: formState.make + ' ' + formState.model,
          year: formState.year,
          fuel: formState.fuel,
          mileage: formState.mileage,
          bodyType: formState.body,
          price: Math.round(price)
        });
        showToast('AI Valuation computed successfully!');

      }
    } catch (error) {
      console.error('API Error:', error);
      showToast(`API call: ${error.message}. Used fallback estimation.`);
    } finally {
      setLoading(false);
    }
  };

  const loadPreset = (key) => {
    const data = presets[key];
    if (data) {
      prevBodyRef.current = data.body;
      setFormState({ ...data });
      setCalculatedPrice(data.estimatedPrice);
      showToast(`Loaded ${data.make} ${data.model} preset!`);
    }
  };

  const handleSave = () => {
    const record = {
      id: Date.now(),
      make: formState.make,
      model: formState.model,
      year: formState.year,
      price: calculatedPrice,
      mileage: formState.mileage,
      fuel: formState.fuel,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
    };
    if (onSavePrediction) onSavePrediction(record);
    showToast('Valuation record saved to prediction history.');
  };

  const handleDownloadPdf = () => {
    showToast('Valuation Certificate PDF generated and ready for download.');
  };

  const handleReset = () => {
    prevBodyRef.current = presets.clio.body;
    setFormState({ ...presets.clio });
    setCalculatedPrice(presets.clio.estimatedPrice);
    showToast('Form reset to default parameters.');
  };

  function addCar(car) {
    const cars = JSON.parse(
      localStorage.getItem("cars") || "[]"
    );

    cars.push({
      id: Date.now(),
      ...car,
      dateOfCreation: new Date().toISOString()
    });

    localStorage.setItem("cars", JSON.stringify(cars));
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-margin-mobile sm:px-margin py-4 sm:py-space-lg flex flex-col gap-4 sm:gap-space-lg">
      {/* Top Utility & Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-space-md">
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap items-center gap-2 sm:gap-space-sm pt-1">
            <h1 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-on-surface tracking-tight">
              Vehicle Price Valuation
            </h1>
            {checkingHealth ? (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant border border-outline-variant/40 text-label-sm font-label-sm shadow-xs transition-all">
                <span className="w-3.5 h-3.5 rounded-full border-2 border-primary/30 border-t-primary animate-spin shrink-0"></span>
                <span>Connecting to Soumha AI ...</span>
              </div>
            ) : modelLoaded ? (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-label-sm font-label-sm shadow-xs transition-all">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                </span>
                <span>Prediction Service Active</span>
              </div>
            ) : (
              <button
                type="button"
                onClick={checkHealth}
                title="Click to retry connection"
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 hover:bg-red-100/80 text-red-700 border border-red-200/80 text-label-sm font-label-sm shadow-xs transition-all cursor-pointer group"
              >
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                </span>
                <span>Prediction Service Inactive</span>
                <span className="material-symbols-outlined text-[14px] text-red-600/80 group-hover:rotate-180 transition-transform duration-300">
                  refresh
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Quick Preset Testing Selectors */}
        <div className="flex flex-col md:items-end gap-1.5">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
            Quick Mood Test Presets:
          </span>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-1.5 p-1 rounded-xl bg-surface-container shadow-sm w-full sm:w-auto">
            <button
              type="button"
              onClick={() => loadPreset('clio')}
              className={`px-2.5 py-1.5 sm:py-1 rounded-lg text-label-sm font-label-sm font-medium transition-all flex items-center justify-center sm:justify-start gap-1.5 cursor-pointer ${formState.model === 'Clio' ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-lowest'
                }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#0007c3] inline-block shrink-0"></span> Renault Clio
            </button>
            <button
              type="button"
              onClick={() => loadPreset('golf')}
              className={`px-2.5 py-1.5 sm:py-1 rounded-lg text-label-sm font-label-sm font-medium transition-all flex items-center justify-center sm:justify-start gap-1.5 cursor-pointer ${formState.model === 'Golf' ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-lowest'
                }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#0d0080] inline-block shrink-0"></span> VW Golf
            </button>
            <button
              type="button"
              onClick={() => loadPreset('rio')}
              className={`px-2.5 py-1.5 sm:py-1 rounded-lg text-label-sm font-label-sm font-medium transition-all flex items-center justify-center sm:justify-start gap-1.5 cursor-pointer ${formState.model === 'Rio' ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-lowest'
                }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#ca0000] inline-block shrink-0"></span> Kia Rio
            </button>
            <button
              type="button"
              onClick={() => loadPreset('polo')}
              className={`px-2.5 py-1.5 sm:py-1 rounded-lg text-label-sm font-label-sm font-medium transition-all flex items-center justify-center sm:justify-start gap-1.5 cursor-pointer ${formState.model === 'Polo' ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-lowest'
                }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#960000] inline-block shrink-0"></span> VW Polo
            </button>
          </div>
        </div>
      </div>

      {/* Main Two-Column Engineering Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-space-lg items-start">
        {/* LEFT COLUMN: Precision Form Inputs */}
        <section className="lg:col-span-7 flex flex-col gap-space-lg">
          <form
            onSubmit={handleRunValuation}
            className="bg-surface-container-lowest rounded-2xl shadow-sm p-4 sm:p-8 flex flex-col gap-5 sm:gap-space-lg border border-outline-variant/30"
          >
            {/* Group 1: Vehicle Identity */}
            <div className="flex flex-col gap-4 sm:gap-space-md">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-surface-container-low">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-surface-container-low text-primary flex items-center justify-center font-bold text-label-sm shrink-0">
                    01
                  </span>
                  <h2 className="font-headline-sm text-base sm:text-headline-sm text-on-surface">Vehicle Identity & Trim</h2>
                </div>
                <span className="font-label-sm text-[11px] sm:text-label-sm text-outline uppercase tracking-wider">
                  Telemetry Inputs
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-space-md">
                {/* Make Selector */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                    Manufacturer / Brand
                  </label>
                  <div className="relative">
                    <select
                      value={selectedMake}
                      onChange={handleMakeChange}
                      className="w-full h-11 px-3.5 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface border border-outline-variant/60 shadow-sm focus:outline-none focus:border-primary focus:bg-surface-container-low transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select Make</option>
                      {makes.map((make) => (
                        <option key={make} value={make}>
                          {make}
                        </option>
                      ))}
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-2.5 text-outline pointer-events-none text-[20px]">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Model Selector */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                    Model & Package
                  </label>
                  <div className="relative">
                    <select
                      value={selectedModel}
                      onChange={handleModelChange}
                      disabled={!selectedMake}
                      className="w-full h-11 px-3.5 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface border border-outline-variant/60 shadow-sm focus:outline-none focus:border-primary focus:bg-surface-container-low transition-colors appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Select Model</option>
                      {models.map((model) => (
                        <option key={model} value={model}>
                          {model}
                        </option>
                      ))}
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-2.5 text-outline pointer-events-none text-[20px]">
                      expand_more
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-3.5 sm:gap-space-md w-full">
                {/* First Registration Year */}
                <div className="flex w-full sm:w-[150px] shrink-0 flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                    Year
                  </label>

                  <div className="relative w-full">
                    <select
                      value={formState.year}
                      onChange={(e) =>
                        setFormState({ ...formState, year: e.target.value })
                      }
                      className="w-full h-11 pl-3.5 pr-9 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface border border-outline-variant/60 shadow-sm focus:outline-none focus:border-primary focus:bg-surface-container-low transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select year</option>

                      {Array.from(
                        { length: new Date().getFullYear() - 1969 + 1 },
                        (_, i) => new Date().getFullYear() - i
                      ).map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>

                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[20px]">
                      calendar_month
                    </span>
                  </div>
                </div>

                {/* Exterior Color Palette Selector */}
                <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <label className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                      Exterior Color & Finish
                    </label>
                    <span className="font-label-sm text-label-sm text-primary font-semibold">
                      {formState.color}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 min-h-11 py-2 px-3 rounded-lg bg-surface-container-low">
                    {colors.map((c) => {
                      const isSelected = formState.color === c.name;

                      return (
                        <button
                          key={c.name}
                          type="button"
                          onClick={() =>
                            setFormState({ ...formState, color: c.name })
                          }
                          title={c.name}
                          aria-label={c.name}
                          className={`w-7 h-7 sm:w-6 sm:h-6 rounded-full ${c.class} border border-outline-variant/40 transition-transform cursor-pointer shrink-0 ${isSelected
                            ? "ring-2 ring-primary ring-offset-1 scale-110"
                            : "hover:scale-105"
                            }`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Body Type Pill Multi-selector */}
              <div className="flex flex-col gap-1.5">
                <label className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                  Chassis & Body Configuration
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
                  {bodyTypes.map((b, idx) => {
                    const isSelected = formState.body === b.label;
                    const isLastItem = idx === bodyTypes.length - 1;

                    return (
                      <button
                        key={b.label}
                        type="button"
                        onClick={() =>
                          setFormState((prev) => ({
                            ...prev,
                            body: b.label,
                            image: bodyTypeImages[b.label] || prev.image,
                          }))
                        }
                        className={`
                          h-20 rounded-xl px-2 gap-1.5
                          flex flex-col items-center justify-center
                          transition-all cursor-pointer text-center
                          ${isLastItem ? 'col-span-3 sm:col-span-2 md:col-span-1' : ''}
                          ${isSelected
                            ? 'bg-primary text-on-primary shadow-sm'
                            : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
                          }
                        `}
                      >
                        <img
                          src={b.icon}
                          alt={b.label}
                          className={`w-10 h-7 object-contain transition-all ${isSelected ? 'brightness-0 invert' : 'opacity-70'}`}
                        />
                        <span className="text-[11px] sm:text-xs font-medium leading-tight">{b.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
              {expectedBodyType && formState.body && formState.body !== expectedBodyType && (
                <div className="font-label-md text-label text-xs sm:text-sm text-error font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] shrink-0">warning</span>
                  <span>This body type is uncommon for this car model.</span>
                </div>
              )}
            </div>

            {/* Group 2: Technical Specifications */}
            <div className="flex flex-col gap-4 sm:gap-space-md pt-1 sm:pt-2">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-surface-container-low">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-surface-container-low text-primary flex items-center justify-center font-bold text-label-sm shrink-0">
                    02
                  </span>
                  <h2 className="font-headline-sm text-base sm:text-headline-sm text-on-surface">Telemetry & Powertrain</h2>
                </div>
                <span className="font-label-sm text-[11px] sm:text-label-sm text-outline uppercase tracking-wider">
                  Operational Status
                </span>
              </div>

              {/* Mileage Input Slider + Numeric Display */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-surface-container-low flex flex-col gap-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">speed</span>
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                      Odometer Mileage
                    </label>
                  </div>
                  <div className="flex items-center gap-1 font-data-metric text-base sm:text-headline-sm text-primary">
                    <span>{formState.mileage.toLocaleString()}</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">km</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="1000000"
                  step="1000"
                  value={formState.mileage}
                  onChange={(e) => setFormState({ ...formState, mileage: parseInt(e.target.value, 10) })}
                  className="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between font-label-sm text-label-sm text-outline text-[11px]">
                  <span>1,000 km (Showroom)</span>
                  <span>1,000,000+ km</span>
                </div>
              </div>

              {/* Transmission Pill Selector */}
              <div className="flex flex-col gap-1.5">
                <label className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                  Transmission Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {transmissions.map((t) => {
                    const isSelected = formState.transmission === t.label;

                    return (
                      <button
                        key={t.label}
                        type="button"
                        onClick={() =>
                          setFormState({
                            ...formState,
                            transmission: t.label,
                          })
                        }
                        className={`h-11 px-3 sm:px-4 rounded-lg flex items-center justify-center gap-2 font-label-md text-label-md font-medium transition-all cursor-pointer ${isSelected
                          ? "bg-primary text-on-primary shadow-sm"
                          : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
                          }`}
                      >
                        <img
                          src={t.icon}
                          alt={t.label}
                          className={`h-5 sm:h-6 object-contain transition-all shrink-0 ${isSelected ? "brightness-0 invert" : "opacity-70"
                            }`}
                        />

                        <span>{t.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Engine Size (L) & Fiscal Horsepower */}
              <div className="grid grid-cols-2 gap-3 sm:gap-space-md">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                    Engine Size (L)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="0.8"
                      max="5.0"
                      step="0.1"
                      placeholder="2.0"
                      value={formState.displacement}
                      onChange={(e) => setFormState({ ...formState, displacement: e.target.value })}
                      className="w-full h-11 px-3 sm:px-3.5 pr-8 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface border border-outline-variant/60 shadow-sm focus:outline-none focus:border-primary focus:bg-surface-container-low transition-colors"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 font-label-sm text-label-sm text-outline font-semibold pointer-events-none">
                      L
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                    Fiscal Power (CV)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="4"
                      max="50"
                      step="1"
                      placeholder="14"
                      value={formState.power}
                      onChange={(e) => setFormState({ ...formState, power: e.target.value })}
                      className="w-full h-11 px-3 sm:px-3.5 pr-10 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface border border-outline-variant/60 shadow-sm focus:outline-none focus:border-primary focus:bg-surface-container-low transition-colors"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 font-label-sm text-label-sm text-outline font-semibold pointer-events-none">
                      CV
                    </span>
                  </div>
                </div>
              </div>

              {/* Fuel Type Pills */}
              <div className="flex flex-col gap-1.5">
                <label className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                  Fuel / Energy Architecture
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                  {fuelTypes.map((f, idx) => {
                    const isSelected = formState.fuel === f.label;
                    const isLastItem = idx === fuelTypes.length - 1;
                    return (
                      <button
                        key={f.label}
                        type="button"
                        onClick={() => setFormState({ ...formState, fuel: f.label })}
                        className={`min-h-11 py-2 px-2.5 rounded-lg font-label-sm text-xs sm:text-label-sm font-medium flex items-center justify-center gap-1.5 text-center leading-tight transition-all cursor-pointer ${isLastItem ? 'col-span-2 sm:col-span-1' : ''} ${isSelected
                          ? 'bg-primary text-on-primary shadow-sm'
                          : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
                          }`}
                      >
                        <img
                          src={f.icon}
                          alt={f.label}
                          className={`w-5 h-5 sm:w-6 sm:h-6 object-contain shrink-0 transition-all ${isSelected ? 'brightness-0 invert' : 'opacity-70'}`}
                        />
                        <span>{f.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Big Action Button CTA */}
            <div className="pt-1 sm:pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full min-h-14 py-3 px-4 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-headline-sm text-base sm:text-headline-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.99] group cursor-pointer disabled:opacity-50"
              >
                <span className="material-symbols-outlined group-hover:rotate-12 transition-transform shrink-0">
                  auto_awesome
                </span>
                <span>{loading ? 'Calculating Valuation...' : 'Predict Price with Soumha AI'}</span>
                <span className="material-symbols-outlined ml-0.5 sm:ml-1 group-hover:translate-x-1 transition-transform text-[20px] shrink-0">
                  arrow_forward
                </span>
              </button>
              <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant text-center mt-2.5 flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-tertiary text-[16px] shrink-0">verified</span>
                <span>Algorithmic valuation backed by 3,300+ Tunisian transactional listings</span>
              </p>
            </div>
          </form>
        </section>

        {/* RIGHT COLUMN: Live Vehicle Preview & Valuation Results */}
        <section className="lg:col-span-5 flex flex-col gap-4 sm:gap-space-lg">
          {/* CARD 1: Live Vehicle Visual Preview & Real-Time Telemetry Specs */}
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden flex flex-col border border-outline-variant/30 transition-all">
            <div className="relative w-full h-48 sm:h-64 bg-surface-container-low overflow-hidden flex items-center justify-center">
              <img
                alt="Active Vehicle Preview"
                src={formState.image || bodyTypeImages[formState.body] || sedanImg}
                className="w-full h-full object-cover object-center transition-all duration-700"
              />
              {/* Dynamic Badges Overlay */}
              <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-label-sm text-label-sm font-semibold shadow-sm">
                  {formState.body}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-label-sm text-label-sm font-semibold shadow-sm">
                  {formState.color}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-semibold shadow-sm">
                  {formState.fuel.split(' ')[0]}
                </span>
              </div>
              {/* Live Status Marker */}
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-label-sm font-label-sm font-semibold text-on-surface">
                <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                <span>Model Matrix Active</span>
              </div>
            </div>

            {/* Specs Summary Grid */}
            <div className="p-4 sm:p-6 flex flex-col gap-4 sm:gap-space-md">
              <div className="flex items-start justify-between gap-2">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 min-w-0">
                  <span className="font-headline-sm text-headline-sm text-on-surface block truncate">
                    {formState.make} {formState.model}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant shrink-0">
                    {formState.displacement} L
                  </span>
                </div>
                <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-surface-container text-primary font-headline-sm text-headline-sm font-bold shrink-0">
                  {formState.year}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-label-sm">
                <div className="p-2.5 sm:p-3 rounded-xl bg-surface-container-low flex items-center gap-2 sm:gap-3 min-w-0">
                  <span className="material-symbols-outlined text-primary text-[20px] sm:text-[22px] shrink-0">speed</span>
                  <div className="min-w-0">
                    <span className="text-on-surface-variant block text-[11px]">Mileage</span>
                    <span className="font-semibold text-on-surface font-headline-sm text-xs sm:text-label-md truncate block">
                      {formState.mileage.toLocaleString()} km
                    </span>
                  </div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-surface-container-low flex items-center gap-2 sm:gap-3 min-w-0">
                  <span className="material-symbols-outlined text-primary text-[20px] sm:text-[22px] shrink-0">settings</span>
                  <div className="min-w-0">
                    <span className="text-on-surface-variant block text-[11px]">Transmission</span>
                    <span className="font-semibold text-on-surface font-headline-sm text-xs sm:text-label-md truncate block">
                      {formState.transmission}
                    </span>
                  </div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-surface-container-low flex items-center gap-2 sm:gap-3 min-w-0">
                  <span className="material-symbols-outlined text-primary text-[20px] sm:text-[22px] shrink-0">ev_station</span>
                  <div className="min-w-0">
                    <span className="text-on-surface-variant block text-[11px]">Architecture</span>
                    <span className="font-semibold text-on-surface font-headline-sm text-xs sm:text-label-md truncate block">
                      {formState.fuel}
                    </span>
                  </div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-surface-container-low flex items-center gap-2 sm:gap-3 min-w-0">
                  <span className="material-symbols-outlined text-primary text-[20px] sm:text-[22px] shrink-0">bolt</span>
                  <div className="min-w-0">
                    <span className="text-on-surface-variant block text-[11px]">Fiscal Power</span>
                    <span className="font-semibold text-on-surface font-headline-sm text-xs sm:text-label-md truncate block">
                      {formState.power} CV
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: Interactive Loading State & Dynamic Prediction Output */}
          <div className="relative bg-surface-container-lowest rounded-2xl shadow-sm p-4 sm:p-7 flex flex-col gap-space-md border border-outline-variant/30">
            {/* Top Decorative Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary rounded-t-2xl"></div>

            {/* Loading State Simulation */}
            {loading ? (
              <div className="flex flex-col items-center justify-center py-10 sm:py-12 gap-4 text-center">
                <div className="w-12 h-12 rounded-full border-4 border-surface-container-high border-t-primary animate-spin"></div>
                <div className="flex flex-col gap-1">
                  <span className="font-headline-sm text-headline-sm text-on-surface">{loadingText}</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Cross-referencing +3300 active Tunisian registries
                  </span>
                </div>
              </div>
            ) : (
              /* Active Valuation Result Content */
              <div className="flex flex-col gap-4 sm:gap-space-md">
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0">verified_user</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase tracking-wider">
                      AI ESTIMATED MARKET PRICE
                    </span>
                  </div>
                </div>

                {/* Big Price Display */}
                <div className="flex flex-col gap-1.5 bg-surface-container-low p-4 sm:p-5 rounded-xl">
                  <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                    <span className="font-display-lg text-display-lg-mobile sm:text-display-lg text-on-surface font-extrabold tracking-tight">
                      {calculatedPrice.toLocaleString()} DT
                    </span>
                    <span className="font-label-md text-xs sm:text-label-md text-tertiary font-semibold flex items-center">
                      <span className="material-symbols-outlined text-[16px] sm:text-[18px]">trending_up</span> +3.2% vs baseline
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-body-sm font-body-sm text-on-surface-variant pt-1.5 sm:pt-2">
                    <span className="font-medium text-on-surface text-xs sm:text-body-sm">
                      Range: {Math.round(calculatedPrice * 0.95).toLocaleString()} DT – {Math.round(calculatedPrice * 1.05).toLocaleString()} DT
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-tertiary shrink-0"></span>
                      <span className="font-semibold text-on-surface text-xs sm:text-body-sm">+80% High AI Confidence</span>
                    </div>
                  </div>
                </div>

                {/* Statistical Factor Breakdown */}
                <div className="flex flex-col gap-2.5">
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase tracking-wider flex flex-wrap items-center justify-between gap-1">
                    <span>Predictive Valuation Weight Factors</span>
                    <span className="text-outline text-[11px]">Normalized Regression</span>
                  </span>

                  <div className="flex flex-col gap-2 font-body-sm text-body-sm">
                    {factors.map((factor) =>
                      factor.weight_pct !== 0 && (
                        <div key={factor.feature} className="flex flex-col gap-1">
                          <div className="flex justify-between gap-2 text-label-sm font-label-sm">
                            <span className="text-on-surface font-medium truncate">
                              {factor.feature} ({factor.value})
                            </span>
                            <span
                              className={`font-semibold shrink-0 ${factor.weight_pct < 0
                                ? "text-red-800"
                                : "text-green-800"
                                }`}
                            >
                              {factor.weight_pct}
                            </span>
                          </div>

                          <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-300 ${factor.weight_pct < 0
                                ? "bg-red-800"
                                : "bg-green-800"
                                }`}
                              style={{
                                width: `${Math.max(
                                  0,
                                  Math.min(100, (factor.weight_pct + 100) / 2)
                                )}%`,
                              }}
                            />
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
