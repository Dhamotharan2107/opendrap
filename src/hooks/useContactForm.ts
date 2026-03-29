import { useState, useCallback } from 'react';
import { toast } from 'sonner';
import { ContactFormData } from '../types';

const BASE = import.meta.env.VITE_API_URL ?? '';

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

interface UseContactFormReturn {
  formData: ContactFormData;
  errors: FormErrors;
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
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (data: ContactFormData): FormErrors => {
    const e: FormErrors = {};
    if (!data.firstName.trim()) e.firstName = 'First name is required';
    else if (data.firstName.trim().length < 2) e.firstName = 'Minimum 2 characters';

    if (!data.lastName.trim()) e.lastName = 'Last name is required';
    else if (data.lastName.trim().length < 2) e.lastName = 'Minimum 2 characters';

    if (!data.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) e.email = 'Enter a valid email address';

    if (data.phone.trim() && !/^[0-9]{10}$/.test(data.phone.trim())) e.phone = 'Phone must be exactly 10 digits';

    if (!data.inquiryType) e.inquiryType = 'Please select an inquiry type';

    if (!data.message.trim()) e.message = 'Message is required';
    else if (data.message.trim().length < 10) e.message = 'Message must be at least 10 characters';

    return e;
  };

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setErrors({});
    setSubmitted(false);
    setSubmitError(null);
  }, []);

  const handleChange = useCallback((field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: undefined }));
    if (submitError) setSubmitError(null);
  }, [submitError]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
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
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, resetForm]);

  return {
    formData,
    errors,
    isSubmitting,
    submitted,
    submitError,
    handleChange,
    handleSubmit,
    resetForm,
  };
};