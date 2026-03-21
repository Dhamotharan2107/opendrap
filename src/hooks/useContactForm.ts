import { useState, useCallback } from 'react';
import { ContactFormData } from '../types';

const BASE = import.meta.env.VITE_API_URL ?? '';

interface UseContactFormReturn {
  formData: ContactFormData;
  isSubmitting: boolean;
  submitted: boolean;
  submitError: string | null;
  handleChange: (field: keyof ContactFormData, value: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
}

const initialFormData: ContactFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  inquiryType: '',
  message: '',
};

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setSubmitted(false);
    setSubmitError(null);
  }, []);

  const handleChange = useCallback((field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (submitError) setSubmitError(null);
  }, [submitError]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch(`${BASE}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error || 'Failed to submit contact form');
      }

      setSubmitted(true);
      resetForm();
    } catch (error) {
      if (error instanceof TypeError) {
        setSubmitError('Backend API is not reachable. Start it with: npm run dev:api');
      } else {
        setSubmitError(error instanceof Error ? error.message : 'Something went wrong');
      }
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, resetForm]);

  return {
    formData,
    isSubmitting,
    submitted,
    submitError,
    handleChange,
    handleSubmit,
    resetForm,
  };
};