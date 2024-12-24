import Step4 from './Step4'; // Correct import

const ParentComponent = () => {
  const { formData, setFormData } = useFormStore(); // Access from zustand store

  return (
    <div>
      {/* Render Step4 and pass formData and setFormData */}
      <Step4 formData={formData} setFormData={setFormData} />
    </div>
  );
};

export default ParentComponent;
