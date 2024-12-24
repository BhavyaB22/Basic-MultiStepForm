import React, { useState } from 'react'; // Import useState from React
import { motion } from 'framer-motion'; // Ensure you have framer-motion installed if you're using motion

const Step4 = ({ formData, setFormData }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // Display success message
    setIsSubmitted(true);

    // Clear form data
    setFormData({
      name: '',
      email: '',
      address: '',
      newsletter: false,
      terms: false,
    });

    // Hide the success message after a delay (optional)
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2 className="text-xl font-bold">Review and Submit</h2>

      {!isSubmitted ? (
        <div>
       
          <div className="bg-gray-100 p-4 rounded mb-4">
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Address:</strong> {formData.address}</p>
            <p><strong>Newsletter:</strong> {formData.newsletter ? 'Yes' : 'No'}</p>
            <p><strong>Terms Accepted:</strong> {formData.terms ? 'Yes' : 'No'}</p>
          </div>

          <button
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="mt-4">
          <div className="bg-green-500 text-white p-4 rounded text-center">
            Your response has been submitted!
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Step4;
