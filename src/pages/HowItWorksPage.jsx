import React, { useState } from 'react';

export default function HowItWorksPage({ navigateTo }) {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: 'How accurate is the car price prediction model?',
      answer:
        'On the reported test set, the ensemble achieved an R² score of 81.29%. Five-fold out-of-fold validation achieved an R² score of 75.58%. R² describes how much price variation the model explains; it is not the same as percentage prediction accuracy. Results on new cars can vary with data quality and how representative the training data is.',
    },
    {
      question: 'Which machine learning algorithms are used?',
      answer:
        'The prediction pipeline combines three regressors: CatBoost (50% weight), XGBoost (25%), and ExtraTrees (25%). CatBoost handles categorical vehicle attributes, XGBoost learns boosted-tree patterns from encoded features, and ExtraTrees captures non-linear relationships through randomized trees.',
    },
    {
      question: 'Which vehicle details influence a prediction?',
      answer:
        'The model is designed to use vehicle specifications such as make, model, body type, and fuel type, along with the other features present in the training dataset. The exact influence of each feature should be determined from model explainability analysis rather than assumed in advance.',
    },
    {
      question: 'How close are predictions to actual prices?',
      answer:
        'In the reported evaluation, 73.76% of predictions were within ±20% of the actual price, and 85.07% were within ±30%. The reported mean absolute error (MAE) is $9,773.68 and mean absolute percentage error (MAPE) is 18.99%. These results depend on the dataset and its price range.',
    },
    {
      question: 'Can I trust every predicted price as a guaranteed market value?',
      answer:
        'No. A prediction is an estimate based on patterns learned from historical data, not a guaranteed sale price or a formal appraisal. Unusual vehicles, missing specifications, regional price differences, condition, accident history, and changing market conditions may affect accuracy.',
    },
  ];

  const metrics = [
    { value: '81.29%', label: 'Test R² score', detail: 'Reported held-out test set' },
    { value: '75.58%', label: '5-fold OOF R²', detail: 'Cross-validation result' },
    { value: '73.76%', label: 'Within ±20%', detail: 'Predictions in this error range' },
    { value: '85.07%', label: 'Within ±30%', detail: 'Predictions in this error range' },
  ];

  const ensemble = [
    { name: 'CatBoost Regressor', weight: 50, color: 'bg-primary', description: 'Handles categorical vehicle features such as make, model, body type, and fuel type.' },
    { name: 'XGBoost Regressor', weight: 25, color: 'bg-secondary', description: 'Uses gradient-boosted decision trees with ordinal-encoded features.' },
    { name: 'ExtraTrees Regressor', weight: 25, color: 'bg-tertiary', description: 'Uses randomized decision trees to capture non-linear feature interactions.' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-margin-mobile sm:px-margin py-5 sm:py-space-lg flex flex-col gap-6 sm:gap-space-xl">
      {/* Header & Breadcrumbs */}
      <div className="flex flex-col gap-space-xs text-center max-w-3xl mx-auto">
        <nav className="flex flex-wrap items-center justify-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant mb-1 sm:mb-2">
          <button onClick={() => navigateTo('home')} className="hover:text-primary transition-colors cursor-pointer">
            Home
          </button>
          <span>/</span>
          <span className="text-on-surface font-medium">Documentation</span>
          <span>/</span>
          <span className="text-primary font-semibold">Model Methodology</span>
        </nav>
        <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase font-semibold">
          Machine Learning Architecture
        </span>
        <h1 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-on-surface">
          How the Car Price Prediction Model Works
        </h1>
        <p className="font-body-lg text-body-md sm:text-body-lg text-on-surface-variant">
          Explore how vehicle specifications are processed by a weighted ensemble of machine learning models to estimate a car's price.
        </p>
      </div>

      {/* Evaluation metrics */}
      <section className="flex flex-col gap-space-md">
        <div className="text-center">
          <h2 className="font-headline-lg text-xl sm:text-headline-lg text-on-surface">Model Evaluation</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1 sm:mt-2">
            Reported results from the current model evaluation.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-space-md">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-surface-container-lowest p-4 sm:p-6 rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col gap-1.5 sm:gap-2">
              <span className="font-headline-lg text-xl sm:text-headline-lg text-primary">{metric.value}</span>
              <h3 className="font-headline-sm text-sm sm:text-headline-sm text-on-surface">{metric.label}</h3>
              <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">{metric.detail}</p>
            </div>
          ))}
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant text-center">
          R² is a regression metric, not a percentage of predictions that are exactly correct. These figures are reported results and should be rechecked when the dataset or model changes.
        </p>
      </section>

      {/* Model feature pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-space-md">
        <div className="bg-surface-container-lowest p-5 sm:p-6 rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col gap-3">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0">
            <span className="material-symbols-outlined text-2xl">category</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">Vehicle Specifications</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Uses available vehicle attributes, including make, model, body type, and fuel type, to learn pricing patterns.
          </p>
        </div>

        <div className="bg-surface-container-lowest p-5 sm:p-6 rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col gap-3">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0">
            <span className="material-symbols-outlined text-2xl">hub</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">Weighted Ensemble</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Combines CatBoost, XGBoost, and ExtraTrees predictions using a 50% / 25% / 25% weighting scheme.
          </p>
        </div>

        <div className="bg-surface-container-lowest p-5 sm:p-6 rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col gap-3">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-tertiary-container/30 flex items-center justify-center text-tertiary shrink-0">
            <span className="material-symbols-outlined text-2xl">rule</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">Regression Prediction</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Learns relationships between the vehicle features and historical prices to estimate a continuous price value.
          </p>
        </div>

        <div className="bg-surface-container-lowest p-5 sm:p-6 rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col gap-3">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface shrink-0">
            <span className="material-symbols-outlined text-2xl">analytics</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">Model Validation</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Evaluates performance with a held-out test set and five-fold out-of-fold cross-validation.
          </p>
        </div>
      </div>

      {/* Architecture breakdown */}
      <div className="bg-surface-container-lowest rounded-2xl p-5 sm:p-8 border border-outline-variant/30 shadow-sm flex flex-col md:flex-row gap-6 sm:gap-space-lg items-start">
        <div className="md:w-1/2 flex flex-col gap-3.5 sm:gap-4">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">
            Prediction Pipeline
          </span>
          <h2 className="font-headline-lg text-xl sm:text-headline-lg text-on-surface">
            From Vehicle Details to Estimated Price
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Vehicle attributes are prepared in the format expected by the trained models. The three regressors generate price estimates, which are combined according to their configured ensemble weights.
          </p>
          <div className="flex flex-col gap-3 pt-2 font-label-md text-label-md">
            <div className="flex items-start gap-2 text-on-surface">
              <span className="material-symbols-outlined text-tertiary text-lg shrink-0 mt-0.5">check_circle</span>
              <span>Prepare vehicle features and apply the required categorical encoding.</span>
            </div>
            <div className="flex items-start gap-2 text-on-surface">
              <span className="material-symbols-outlined text-tertiary text-lg shrink-0 mt-0.5">check_circle</span>
              <span>Generate estimates with CatBoost, XGBoost, and ExtraTrees.</span>
            </div>
            <div className="flex items-start gap-2 text-on-surface">
              <span className="material-symbols-outlined text-tertiary text-lg shrink-0 mt-0.5">check_circle</span>
              <span>Combine model outputs using the 50% / 25% / 25% weighting scheme.</span>
            </div>
            <div className="flex items-start gap-2 text-on-surface">
              <span className="material-symbols-outlined text-tertiary text-lg shrink-0 mt-0.5">check_circle</span>
              <span>Compare predictions with known prices using regression evaluation metrics.</span>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 w-full bg-surface-container-low p-4 sm:p-6 rounded-2xl border border-outline-variant/30 flex flex-col gap-4 sm:gap-5">
          <div className="flex justify-between items-center pb-3 border-b border-outline-variant/30 gap-2">
            <span className="font-headline-sm text-headline-sm text-on-surface">Ensemble Model Weights</span>
            <span className="font-label-sm text-label-sm text-primary font-semibold shrink-0">100% total</span>
          </div>
          <div className="space-y-4 sm:space-y-5 font-body-sm text-body-sm">
            {ensemble.map((model) => (
              <div key={model.name}>
                <div className="flex justify-between items-center gap-3 font-label-sm mb-1">
                  <span className="text-on-surface font-medium">{model.name}</span>
                  <span className="text-primary font-bold">{model.weight}%</span>
                </div>
                <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className={`h-full ${model.color} rounded-full`} style={{ width: `${model.weight}%` }} />
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Error metrics */}
      <section className="bg-surface-container-low rounded-2xl p-5 sm:p-6 md:p-8 border border-outline-variant/30">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-3">
          <h2 className="font-headline-lg text-xl sm:text-headline-lg text-on-surface">Understanding Prediction Error</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            The model's reported Mean Absolute Error (MAE) is <strong>$9,773.68</strong>, while its Mean Absolute Percentage Error (MAPE) is <strong>18.99%</strong>. MAE expresses the average absolute error in the target price's currency; MAPE expresses the average absolute error relative to actual prices.
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            The dollar symbol is retained from the supplied report. Confirm the dataset's actual currency before displaying predictions to end users.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <div className="flex flex-col gap-space-md max-w-3xl mx-auto w-full">
        <h2 className="font-headline-lg text-xl sm:text-headline-lg text-on-surface text-center">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={faq.question}
                className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full px-4 sm:px-6 py-3.5 sm:py-4 text-left font-headline-sm text-base sm:text-headline-sm text-on-surface flex items-center justify-between gap-3 cursor-pointer hover:bg-surface-container-low/50"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="material-symbols-outlined text-outline shrink-0">
                    {isOpen ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-2 font-body-md text-body-md text-on-surface-variant border-t border-surface-container-low">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center bg-surface-container-low rounded-2xl p-6 sm:p-8 border border-outline-variant/30 flex flex-col items-center gap-4">
        <h3 className="font-headline-lg text-xl sm:text-headline-lg text-on-surface">Try a Car Price Prediction</h3>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
          Enter a vehicle's specifications and see the price estimate produced by your trained machine learning model.
        </p>
        <button
          onClick={() => navigateTo('predict-price')}
          className="w-full sm:w-auto px-space-xl py-3.5 rounded-xl bg-primary text-on-primary font-label-md font-semibold hover:bg-primary-container transition-all shadow-md cursor-pointer"
        >
          Open Price Predictor
        </button>
      </div>
    </div>
  );
}
