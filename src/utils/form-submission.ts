
import { ContactFormValues } from "@/components/contact/schema";

/**
 * Submits form data to Netlify Forms
 * Optimized for the latest Netlify Forms implementation
 */
export const submitContactForm = async (data: ContactFormValues): Promise<void> => {
  // Create FormData object for submission
  const formData = new FormData();
  
  // Add form name field which is required by Netlify
  formData.append('form-name', 'contact');
  
  // Add all form fields
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value.toString());
  });
  
  if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    // Production environment: submit to Netlify Forms
    try {
      const response = await fetch('/', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Netlify form submission error:', error);
      throw error;
    }
  } else {
    // Development environment mock
    console.log('Form submission data (DEV MODE):', Object.fromEntries(formData));
    // Simulate network request delay
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
};
