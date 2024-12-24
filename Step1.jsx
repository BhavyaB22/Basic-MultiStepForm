import { motion } from 'framer-motion';

const Step1 = ({ formData, handleChange }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <h2 className="text-xl font-bold">Personal Information</h2>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Enter your name"
      className="border p-2 mb-4 w-full"
    />
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Enter your email"
      className="border p-2 mb-4 w-full"
    />
  </motion.div>
);

export default Step1;
