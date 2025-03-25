
import { ContactFormValues } from "@/components/contact/schema";

/**
 * Submits form data to Netlify Forms or handles development mode submissions
 */
export const submitContactForm = async (data: ContactFormValues): Promise<void> => {
  // Netlify Forms submission for production
  if (window.location.hostname !== 'localhost') {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    
    // Add form-name field which is required by Netlify
    formData.append('form-name', 'contact');
    
    await fetch('/', {
      method: 'POST',
      body: formData,
    });
  } else {
    // Development environment mock - just log
    console.log('Form submission data:', data);
    // Wait to simulate network request
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
};
