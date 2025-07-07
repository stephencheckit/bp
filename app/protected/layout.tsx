import { AuthButton } from "@/components/auth-button";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import SidebarNavigation from "@/components/sidebar-navigation";
import { LanguageProvider } from "@/lib/language-context";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <LanguageProvider>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        {/* Sidebar Navigation */}
        <SidebarNavigation />
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
          {/* Header */}
          <header className="bg-white dark:bg-gray-950 shadow-sm border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between px-4 py-3 lg:px-6">
              <div className="flex items-center">
                <div className="lg:hidden mr-4">
                  {/* Space for mobile menu button */}
                </div>
                <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Checkit & BP Private Microsite
                </h1>
              </div>
              <AuthButton />
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto p-4 lg:p-6">
            {children}
          </main>
        </div>
      </div>
    </LanguageProvider>
  );
}
