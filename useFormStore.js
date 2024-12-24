import { create } from 'zustand';

const useFormStore = create((set) => ({
  formData: {
    name: '',
    email: '',
    address: '',
    newsletter: false,
    terms: false,
  },
  setFormData: (newData) => set((state) => ({
    formData: { ...state.formData, ...newData },
  })),
  resetForm: () => set(() => ({
    formData: {
      name: '',
      email: '',
      address: '',
      newsletter: false,
      terms: false,
    },
  })),
}));

export default useFormStore;
