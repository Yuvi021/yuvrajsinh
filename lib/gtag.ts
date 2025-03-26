export const GA_TRACKING_ID = 'G-MXYVHDY38H'; // Your GA4 Measurement ID

// Log page views
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Define the type for event parameters
interface GTagEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Log specific events
export const event = ({ action, category, label, value }: GTagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
