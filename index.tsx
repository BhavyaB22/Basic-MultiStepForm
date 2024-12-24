import { useState } from 'react';
import Layout from '../components/Layout';
import Stepper from '../components/Stepper';
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';
import Step4 from '../components/Step4';
import useFormStore from '../store/useFormStore';

// Define the steps (you can remove this array entirely if no longer needed)
const steps = [];

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const { formData, setFormData } = useFormStore();

  // Handle change with proper type assertion
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    if (type === 'checkbox' || type === 'radio') {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));  // 3 as the final step
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <Layout>
      {/* Main Heading */}
      <h1 className="text-6xl font-extrabold text-center mt-8"><center><b></b>MULTI STEP FORM</center></h1>

      {/* Render the respective step based on the current step */}
      {currentStep === 0 && <Step1 formData={formData} handleChange={handleChange} />}
      {currentStep === 1 && <Step2 formData={formData} handleChange={handleChange} />}
      {currentStep === 2 && <Step3 formData={formData} handleChange={handleChange} />}
      {currentStep === 3 && <Step4 formData={formData} setFormData={setFormData} />}

      {/* Navigation buttons */}
      {currentStep < 3 && (
        <div className="mt-4 flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="px-4 py-2 bg-gray-400 text-white rounded"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentStep === 3}  // Assuming 4 steps in total
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Next
          </button>
        </div>
      )}
    </Layout>
  );
}
