"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Users, Target, Network, Building, TrendingUp, MessageSquare } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function SidebarNavigation() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const navigation = [
    { name: t("nav.overview"), href: "/protected", icon: Home },
    { name: t("nav.partnership"), href: "/protected/partnership", icon: Users },
    { name: t("nav.futureVision"), href: "/protected/future-vision", icon: Target },
    { name: t("nav.ecosystem"), href: "/protected/ecosystem", icon: Network },
    { name: t("nav.stakeholders"), href: "/protected/stakeholders", icon: Building },
    { name: t("nav.roi"), href: "/protected/roi", icon: TrendingUp },
    { name: t("nav.contact"), href: "/protected/contact", icon: MessageSquare },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(true)}
          className="fixed top-4 left-4 z-50 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open sidebar</span>
        </Button>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
          "dark:bg-gray-950 dark:border-gray-800"
        )}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center">
            <Image
              src="https://www.checkit.net/hubfs/website/img/brand/checkit-logo-horizontal-standard-rgb-blue.svg"
              alt="Checkit"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close sidebar</span>
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                )}
              >
                <Icon
                  className={cn(
                    "mr-3 h-5 w-5 flex-shrink-0",
                    isActive
                      ? "text-blue-700 dark:text-blue-200"
                      : "text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-400"
                  )}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Language Toggle */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t("nav.language")}</span>
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-md p-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage('en')}
                className={cn(
                  "text-xs px-2 py-1 transition-colors",
                  language === 'en'
                    ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                )}
              >
                EN
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage('de')}
                className={cn(
                  "text-xs px-2 py-1 transition-colors",
                  language === 'de'
                    ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                )}
              >
                DE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 