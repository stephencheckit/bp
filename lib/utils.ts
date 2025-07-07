import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// This check can be removed, it is just for tutorial purposes
export const hasEnvVars =
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Allowed domains for user registration and authentication
export const ALLOWED_EMAIL_DOMAINS = ['@bp.com', '@checkit.net'];

// Helper function to validate email domain
export const isValidEmailDomain = (email: string): boolean => {
  return ALLOWED_EMAIL_DOMAINS.some(domain => email.toLowerCase().endsWith(domain));
};

// Helper function to get domain validation error message
export const getDomainErrorMessage = (context: 'signup' | 'reset' = 'signup'): string => {
  return context === 'reset' 
    ? `Password reset is only available for ${ALLOWED_EMAIL_DOMAINS.join(' and ')} email addresses`
    : `Access restricted to ${ALLOWED_EMAIL_DOMAINS.join(' and ')} email addresses only`;
};
