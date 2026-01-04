/**
 * TBC Landing Page Configuration
 * 
 * Update these URLs to point to your deployed app.
 */

// For development, use localhost
// For production, use your app domain
const isDev = import.meta.env.DEV;

const APP_BASE_URL = isDev 
  ? 'http://localhost:5174'  // TBC portal dev server
  : 'https://app.thebillingconnection.com';  // Production app

// Brand parameter ensures the app knows user came from TBC
const BRAND_PARAM = 'brand=tbc';

export const appUrls = {
  login: `${APP_BASE_URL}/login?${BRAND_PARAM}`,
  signup: `${APP_BASE_URL}/signup?${BRAND_PARAM}`,
  library: `${APP_BASE_URL}/library?${BRAND_PARAM}`,
  dashboard: `${APP_BASE_URL}/dashboard?${BRAND_PARAM}`,
};
