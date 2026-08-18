/**
 * Centralized API configuration for Portfolio Application
 */

const rawApiUrl = (import.meta.env.VITE_API_URL || 'http://localhost:5000').replace(/\/+$/, '');

// Base URL without trailing /api
export const API_BASE_URL = rawApiUrl.endsWith('/api') ? rawApiUrl.slice(0, -4) : rawApiUrl;

// Full API prefix URL (e.g., https://portfolio-e6n8.onrender.com/api)
export const API_PREFIX = `${API_BASE_URL}/api`;

export default {
  BASE_URL: API_BASE_URL,
  PREFIX: API_PREFIX
};
