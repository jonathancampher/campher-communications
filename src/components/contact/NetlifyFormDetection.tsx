
/**
 * NetlifyFormDetection Component
 * 
 * This component renders a hidden form that Netlify uses to detect form structure.
 * It includes all fields that will be used in the actual form and follows the
 * latest Netlify Forms best practices with enhanced reliability.
 */
export const NetlifyFormDetection = () => {
  return (
    <>
      {/* Primary form detection method */}
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

      {/* Fallback for older browsers and enhanced detection */}
      <div hidden>
        <div className="netlify-form-detection">
          Form: contact
          Fields: name,email,subject,message
        </div>
      </div>
    </>
  );
};
