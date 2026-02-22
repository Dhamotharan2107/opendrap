// Common types used across the application
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  inquiryType: string;
  message: string;
}

export interface NavLink {
  name: string;
  path: string;
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: string;
  description: string;
  color: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}