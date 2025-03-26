
import { ContactFormValues } from "@/components/contact/schema";

/**
 * Submits form data to Netlify Forms
 * Follows the latest Netlify Forms implementation guidelines
 * With enhanced cross-browser compatibility and error handling
 */
export const submitContactForm = async (data: ContactFormValues): Promise<void> => {
  // Check if this is a modern browser that supports FormData
  const isModernBrowser = 'FormData' in window && 'URLSearchParams' in window;
  
  if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    // Production environment: submit to Netlify Forms
    try {
      if (isModernBrowser) {
        // Modern browser implementation
        const params = new URLSearchParams();
        params.append('form-name', 'contact');
        
        // Add all form fields to URLSearchParams
        Object.entries(data).forEach(([key, value]) => {
          params.append(key, value.toString());
        });
        
        // Add honeypot field
        params.append('bot-field', '');
        
        const response = await fetch('/', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          },
          body: params.toString(),
        });
        
        if (!response.ok) {
          throw new Error(`Form submission failed: ${response.status} ${response.statusText}`);
        }
      } else {
        // Fallback for older browsers
        // Create a hidden form element and submit it
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = '/';
        form.setAttribute('data-netlify', 'true');
        form.setAttribute('name', 'contact');
        form.style.display = 'none';
        
        // Create hidden input for form name
        const formNameField = document.createElement('input');
        formNameField.type = 'hidden';
        formNameField.name = 'form-name';
        formNameField.value = 'contact';
        form.appendChild(formNameField);
        
        // Create honeypot field
        const honeypotField = document.createElement('input');
        honeypotField.type = 'hidden';
        honeypotField.name = 'bot-field';
        honeypotField.value = '';
        form.appendChild(honeypotField);
        
        // Add form data fields
        Object.entries(data).forEach(([key, value]) => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = value.toString();
          form.appendChild(input);
        });
        
        // Append to body, submit, and remove
        document.body.appendChild(form);
        form.submit();
        
        // Set a timeout to remove the form after submission
        setTimeout(() => {
          if (form.parentNode) {
            form.parentNode.removeChild(form);
          }
        }, 1000);
      }
    } catch (error) {
      console.error('Netlify form submission error:', error);
      
      // Retry once with alternative method if primary method fails
      try {
        const formData = new FormData();
        formData.append('form-name', 'contact');
        
        // Add form data fields
        Object.entries(data).forEach(([key, value]) => {
          formData.append(key, value.toString());
        });
        
        // Add honeypot field
        formData.append('bot-field', '');
        
        const response = await fetch('/', {
          method: 'POST',
          body: formData
        });
        
        if (!response.ok) {
          throw error; // Re-throw original error if retry also fails
        }
      } catch (retryError) {
        console.error('Form submission retry failed:', retryError);
        throw error; // Throw original error
      }
    }
  } else {
    // Development environment mock
    console.log('Form submission data (DEV MODE):', data);
    // Simulate network request delay
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
};
