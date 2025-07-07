import { createClient } from "@/lib/supabase/client";
import { isValidEmailDomain, getDomainErrorMessage } from "@/lib/utils";

// Centralized authentication service
export class AuthService {
  private supabase = createClient();

  // Sign up with domain validation
  async signUp(email: string, password: string) {
    // Validate email domain first
    if (!isValidEmailDomain(email)) {
      throw new Error(getDomainErrorMessage('signup'));
    }

    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/protected`,
      },
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  // Sign in
  async signIn(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  // Reset password with domain validation
  async resetPassword(email: string) {
    // Validate email domain first
    if (!isValidEmailDomain(email)) {
      throw new Error(getDomainErrorMessage('reset'));
    }

    const { error } = await this.supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/update-password`,
    });

    if (error) {
      throw new Error(error.message);
    }

    return { success: true };
  }

  // Update password
  async updatePassword(password: string) {
    const { error } = await this.supabase.auth.updateUser({ password });

    if (error) {
      throw new Error(error.message);
    }

    return { success: true };
  }

  // Sign out
  async signOut() {
    const { error } = await this.supabase.auth.signOut();

    if (error) {
      throw new Error(error.message);
    }

    return { success: true };
  }

  // Get current user
  async getCurrentUser() {
    const { data, error } = await this.supabase.auth.getUser();

    if (error) {
      throw new Error(error.message);
    }

    return data.user;
  }
}

// Export singleton instance
export const authService = new AuthService(); 