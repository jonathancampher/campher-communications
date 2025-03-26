
/**
 * NetlifyFormDetection Component
 * 
 * This component renders a hidden form that Netlify uses to detect form structure.
 * It includes all fields that will be used in the actual form and follows the
 * latest Netlify Forms best practices.
 */
export const NetlifyFormDetection = () => {
  return (
    <form 
      name="contact" 
      data-netlify="true" 
      netlify-honeypot="bot-field"
      hidden
    >
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="text" name="subject" />
      <textarea name="message"></textarea>
      <input type="hidden" name="form-name" value="contact" />
      <input name="bot-field" type="hidden" />
    </form>
  );
};
