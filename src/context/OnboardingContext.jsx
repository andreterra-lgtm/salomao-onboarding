import { createContext, useContext, useState, useEffect } from 'react';
import { STORAGE_KEY, STEP_STORAGE_KEY } from '../constants';

const OnboardingContext = createContext(null);

export function OnboardingProvider({ children }) {
  const [formData, setFormData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [showScan, setShowScan] = useState(false);

  const totalSteps = 8;

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    } catch {}
  }, [formData]);

  useEffect(() => {
    try {
      localStorage.setItem(STEP_STORAGE_KEY, String(currentStep));
    } catch {}
  }, [currentStep]);

  const updateData = (newData) =>
    setFormData((prev) => ({ ...prev, ...newData }));

  const nextStep = () => {
    if (currentStep === totalSteps - 1) {
      setShowScan(true);
      return;
    }
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () =>
    setCurrentStep((prev) => Math.max(prev - 1, 0));

  const goToStep = (step) => setCurrentStep(step);

  const handleScanComplete = () => {
    setShowScan(false);
    setCurrentStep(totalSteps);
  };

  const resetForm = () => {
    setFormData({});
    setCurrentStep(0);
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(STEP_STORAGE_KEY);
    } catch {}
  };

  const startFresh = () => {
    setFormData({});
    setCurrentStep(1);
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(STEP_STORAGE_KEY);
    } catch {}
  };

  return (
    <OnboardingContext.Provider
      value={{
        formData, updateData,
        currentStep, totalSteps,
        showScan, setShowScan,
        nextStep, prevStep, goToStep,
        handleScanComplete,
        resetForm, startFresh,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const ctx = useContext(OnboardingContext);
  if (!ctx) throw new Error('useOnboarding must be used within OnboardingProvider');
  return ctx;
}
