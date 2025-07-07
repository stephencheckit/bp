"use client";

import { authService } from "@/lib/auth-service";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    try {
      await authService.signOut();
      router.push("/auth/login");
    } catch (error) {
      console.error("Logout failed:", error);
      // Still redirect to login page even if logout fails
      router.push("/auth/login");
    }
  };

  return <Button onClick={logout}>Logout</Button>;
}
