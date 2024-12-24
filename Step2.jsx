import { motion } from 'framer-motion'; // Import motion from framer-motion

const Step2 = ({ formData, handleChange }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <h2 className="text-xl font-bold">Address Details</h2>
    <input
      type="text"
      name="address"
      value={formData.address}
      onChange={handleChange}
      placeholder="Enter your address"
    />
    <label>
      <input
        type="checkbox"
        name="newsletter"
        checked={formData.newsletter}
        onChange={handleChange}
      />
      Subscribe to newsletter
    </label>
    <label>
      <input
        type="checkbox"
        name="terms"
        checked={formData.terms}
        onChange={handleChange}
      />
      I agree to the terms and conditions
    </label>
  </motion.div>
);

export default Step2;
