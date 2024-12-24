import { motion } from 'framer-motion'; // Import motion

const Step3 = ({ formData, handleChange }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <h2 className="text-xl font-bold">Preferences</h2>
    <label className="block mb-2">
      <input
        type="checkbox"
        name="receiveUpdates"
        checked={formData.receiveUpdates}
        onChange={handleChange}
      />
      I would like to receive updates
    </label>
    <label className="block mb-2">
      <input
        type="checkbox"
        name="acceptOffers"
        checked={formData.acceptOffers}
        onChange={handleChange}
      />
      Accept offers and promotions
    </label>
  </motion.div>
);

export default Step3;
