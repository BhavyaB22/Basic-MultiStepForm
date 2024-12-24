import { useState } from 'react';

const Stepper = ({ steps, currentStep, setCurrentStep }) => {
  return (
    <div className="flex space-x-4 mb-4">
      {steps.map((step, index) => (
        <button
          key={index}
          onClick={() => setCurrentStep(index)}
          className={`px-4 py-2 ${
            currentStep === index ? 'bg-blue-500' : 'bg-gray-300'
          } rounded`}
        >
          {step}
        </button>
      ))}
    </div>
  );
};

export default Stepper;
