
/**
 * Utility to make querySelector and querySelectorAll safer against invalid selectors
 * This prevents certain third-party scripts and extensions from breaking the site
 */

export const applySelectorSafety = () => {
  // Store original methods
  const originalQuerySelector = Document.prototype.querySelector;
  const originalQuerySelectorAll = Document.prototype.querySelectorAll;

  // Override querySelector to catch invalid selector errors
  Document.prototype.querySelector = function(selector: string) {
    try {
      return originalQuerySelector.call(this, selector);
    } catch (error) {
      console.warn('Invalid selector caught:', selector);
      return null;
    }
  };

  // Override querySelectorAll to catch invalid selector errors
  Document.prototype.querySelectorAll = function(selector: string) {
    try {
      return originalQuerySelectorAll.call(this, selector);
    } catch (error) {
      console.warn('Invalid selector caught:', selector);
      return document.createDocumentFragment().childNodes; // Return empty NodeList
    }
  };

  // Also apply to Element.prototype for completeness
  const originalElementQuerySelector = Element.prototype.querySelector;
  const originalElementQuerySelectorAll = Element.prototype.querySelectorAll;

  Element.prototype.querySelector = function(selector: string) {
    try {
      return originalElementQuerySelector.call(this, selector);
    } catch (error) {
      console.warn('Invalid selector caught:', selector);
      return null;
    }
  };

  Element.prototype.querySelectorAll = function(selector: string) {
    try {
      return originalElementQuerySelectorAll.call(this, selector);
    } catch (error) {
      console.warn('Invalid selector caught:', selector);
      return document.createDocumentFragment().childNodes; // Return empty NodeList
    }
  };
};
