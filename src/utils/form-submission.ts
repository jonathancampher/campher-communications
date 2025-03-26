
import { ContactFormValues } from "@/components/contact/schema";

/**
 * Submits form data to Netlify Forms or handles development mode submissions
 * Optimized for better Netlify Forms integration
 */
export const submitContactForm = async (data: ContactFormValues): Promise<void> => {
  // Prepare form data
  const formData = new FormData();
  
  // Add all form fields
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });
  
  // Add form-name field which is required by Netlify
  formData.append('form-name', 'contact');
  
  if (window.location.hostname !== 'localhost') {
    // Production environment: submit to Netlify Forms
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.status}`);
      }
    } catch (error) {
      console.error('Netlify form submission error:', error);
      throw error;
    }
  } else {
    // Development environment mock
    console.log('Form submission data (DEV MODE):', data);
    // Simulate network request delay
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
};
