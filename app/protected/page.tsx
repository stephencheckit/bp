'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Building, Target, TrendingUp, Globe } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useEffect, useState } from "react";

export default function ProtectedPage() {
  const { t } = useLanguage();
  const [userEmail, setUserEmail] = useState<string>('Guest');

  useEffect(() => {
    // Get user email from supabase auth
    const getUserEmail = async () => {
      try {
        const { createClient } = await import("@/lib/supabase/client");
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();
        if (user?.email) {
          setUserEmail(user.email);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    getUserEmail();
  }, []);

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">{t("overview.title")}</h1>
        <p className="text-blue-100 mb-4">
          {t("overview.welcomeMessage", { email: userEmail })}
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-blue-500 text-white">
            <Users className="w-4 h-4 mr-1" />
            {t("overview.badges.partnershipFocus")}
          </Badge>
          <Badge variant="secondary" className="bg-blue-500 text-white">
            <Globe className="w-4 h-4 mr-1" />
            {t("overview.badges.globalReach")}
          </Badge>
          <Badge variant="secondary" className="bg-blue-500 text-white">
            <Target className="w-4 h-4 mr-1" />
            {t("overview.badges.strategicAlignment")}
          </Badge>
        </div>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t("overview.metrics.ukLocations")}</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">840</div>
            <p className="text-xs text-muted-foreground">{t("overview.metrics.ukLocationsDesc")}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t("overview.metrics.roiGrowth")}</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+245%</div>
            <p className="text-xs text-muted-foreground">{t("overview.metrics.roiGrowthDesc")}</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              {t("overview.sections.partnershipTitle")}
            </CardTitle>
            <CardDescription>
              {t("overview.sections.partnershipDesc")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              {t("overview.sections.partnershipContent")}
            </p>
            <Badge variant="outline">UK Success Story</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              {t("overview.sections.futureVisionTitle")}
            </CardTitle>
            <CardDescription>
              {t("overview.sections.futureVisionDesc")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              {t("overview.sections.futureVisionContent")}
            </p>
            <Badge variant="outline">Growth Opportunity</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Status Updates */}
      <Card>
        <CardHeader>
          <CardTitle>{t("overview.updates.title")}</CardTitle>
          <CardDescription>{t("overview.updates.desc")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-sm font-medium">{t("overview.updates.review")}</p>
                <p className="text-xs text-muted-foreground">{t("overview.updates.reviewDesc")}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-sm font-medium">{t("overview.updates.expansion")}</p>
                <p className="text-xs text-muted-foreground">{t("overview.updates.expansionDesc")}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-sm font-medium">{t("overview.updates.alignment")}</p>
                <p className="text-xs text-muted-foreground">{t("overview.updates.alignmentDesc")}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
