// Google Analytics event tracking utilities

/**
 * Send a custom event to Google Analytics
 * @param {string} action - The action name (e.g., 'click', 'submit', 'view')
 * @param {string} category - The event category (e.g., 'Button', 'Form', 'Link')
 * @param {string} label - The event label (e.g., button/link name)
 * @param {number} value - Optional numeric value
 */
export const trackEvent = (action, category, label, value = undefined) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

/**
 * Track button clicks
 * @param {string} buttonName - Name/identifier of the button
 */
export const trackButtonClick = (buttonName) => {
  trackEvent("click", "Button", buttonName);
};

/**
 * Track link clicks
 * @param {string} linkName - Name/identifier of the link
 * @param {string} url - Destination URL
 */
export const trackLinkClick = (linkName, url) => {
  trackEvent("click", "Link", `${linkName} - ${url}`);
};

/**
 * Track form submissions
 * @param {string} formName - Name/identifier of the form
 */
export const trackFormSubmit = (formName) => {
  trackEvent("submit", "Form", formName);
};

/**
 * Track API key requests
 */
export const trackAPIKeyRequest = () => {
  trackEvent("request", "API", "API Key Request");
};

/**
 * Track map opens
 */
export const trackMapOpen = (source) => {
  trackEvent("open", "Map", `Open Map - ${source}`);
};

/**
 * Track AI query submissions
 * @param {string} query - The query text (optional, can be omitted for privacy)
 */
export const trackAIQuery = (query = "Query Submitted") => {
  trackEvent("submit", "AI", query);
};

/**
 * Track pricing tier clicks
 * @param {string} tierName - Name of the pricing tier
 */
export const trackPricingClick = (tierName) => {
  trackEvent("click", "Pricing", `Pricing Tier - ${tierName}`);
};
