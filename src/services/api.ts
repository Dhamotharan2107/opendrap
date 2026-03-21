import { ContactFormData, ApiResponse } from '../types';

const BASE = import.meta.env.VITE_API_URL ?? '';

class ApiService {
  private baseUrl = `${BASE}/api`;

  async submitContactForm(data: ContactFormData): Promise<ApiResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return { success: true, data: result };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred',
      };
    }
  }
}

export const apiService = new ApiService();