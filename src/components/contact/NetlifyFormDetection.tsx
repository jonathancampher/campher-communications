
export const NetlifyFormDetection = () => {
  return (
    <>
      {/* Hidden form for Netlify form detection */}
      <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="subject" />
        <textarea name="message"></textarea>
      </form>
    </>
  );
};
