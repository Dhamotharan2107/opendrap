import { useState, useCallback } from 'react';
<<<<<<< HEAD
import { toast } from 'sonner';
=======
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
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
<<<<<<< HEAD
      toast.success('Message sent! We\'ll get back to you within 24 hours.', {
        duration: 5000,
        position: 'top-center',
      });
      resetForm();
    } catch (error) {
      const msg = error instanceof TypeError
        ? 'Could not reach server. Please try again or email us directly.'
        : (error instanceof Error ? error.message : 'Something went wrong');
      setSubmitError(msg);
      toast.error(msg, { duration: 5000, position: 'top-center' });
=======
      resetForm();
    } catch (error) {
      if (error instanceof TypeError) {
        setSubmitError('Backend API is not reachable. Start it with: npm run dev:api');
      } else {
        setSubmitError(error instanceof Error ? error.message : 'Something went wrong');
      }
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
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