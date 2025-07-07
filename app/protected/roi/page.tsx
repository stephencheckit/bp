'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertTriangle, TrendingUp, DollarSign, Clock, Shield, Calculator, BarChart3, Zap, AlertCircle, Cpu, Eye, RefreshCw, Target, Users, Phone } from "lucide-react";
import { useLanguage } from '@/lib/language-context';

export default function ROIPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    agingAssets: 10,
    kwhCost: 0.25,
    numberOfSites: 1,
    drinkPrice: 2.50,
    skipPurchase: 5
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: parseFloat(value) || 0 }));
  };

  // Calculate costs
  const additionalAlerts = formData.agingAssets * 36 * 10 * 10 / 60; // 36 alerts per asset × 10 minutes × £10/hour
  const higherMaintenance = formData.agingAssets * 2 * 300; // 2 additional callouts × £300 per callout
  const foregoneSales = formData.skipPurchase * formData.drinkPrice * 365 * 0.25; // daily customers × price × 365 days × 25% factor
  const additionalEnergy = (2000 + 1300) * formData.kwhCost; // extra consumption + too cold operation
  
  const totalAnnualCostPerSite = additionalAlerts + higherMaintenance + foregoneSales + additionalEnergy;
  const totalCostAllSites = totalAnnualCostPerSite * formData.numberOfSites;
  const savingsPerSite = totalAnnualCostPerSite * 0.3; // 30% reduction
  const savingsAllSites = savingsPerSite * formData.numberOfSites;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">{t('roi.title')}</h1>
        <p className="text-blue-100 mb-4">
          {t('roi.subtitle')}
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-blue-500 text-white">
            <Calculator className="w-4 h-4 mr-1" />
            {t('roi.calculator.startCalculator')}
          </Badge>
          <Badge variant="secondary" className="bg-blue-500 text-white">
            <TrendingUp className="w-4 h-4 mr-1" />
            Asset Intelligence
          </Badge>
          <Badge variant="secondary" className="bg-blue-500 text-white">
            <DollarSign className="w-4 h-4 mr-1" />
            Cost Savings
          </Badge>
        </div>
      </div>

      {/* Hidden Costs Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            {t('roi.hiddenCosts.title')}
          </CardTitle>
          <CardDescription>
            {t('roi.hiddenCosts.subtitle')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-red-600" />
                {t('roi.hiddenCosts.additionalAlerts')}
              </h4>
              <p className="text-sm text-muted-foreground">
                {t('roi.hiddenCosts.additionalAlertsDesc')}
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Shield className="h-4 w-4 text-orange-600" />
                {t('roi.hiddenCosts.higherMaintenance')}
              </h4>
              <p className="text-sm text-muted-foreground">
                {t('roi.hiddenCosts.higherMaintenanceDesc')}
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-green-600" />
                {t('roi.hiddenCosts.foregoneSales')}
              </h4>
              <p className="text-sm text-muted-foreground">
                {t('roi.hiddenCosts.foregoneSalesDesc')}
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-600" />
                {t('roi.hiddenCosts.operatorTime')}
              </h4>
              <p className="text-sm text-muted-foreground">
                {t('roi.hiddenCosts.operatorTimeDesc')}
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-600" />
                {t('roi.hiddenCosts.energyImpact')}
              </h4>
              <p className="text-sm text-muted-foreground">
                {t('roi.hiddenCosts.energyImpactDesc')}
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                {t('roi.hiddenCosts.foodSafety')}
              </h4>
              <p className="text-sm text-muted-foreground">
                {t('roi.hiddenCosts.foodSafetyDesc')}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>



      {/* ROI Calculator */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            {t('roi.calculatorForm.title')}
          </CardTitle>
          <CardDescription>
            {t('roi.calculatorForm.subtitle')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">{t('roi.calculatorForm.siteInfo')}</h4>
              <p className="text-sm text-muted-foreground">{t('roi.calculatorForm.modelBased')}</p>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="agingAssets">{t('roi.calculatorForm.agingAssets')}</Label>
                  <Input
                    id="agingAssets"
                    type="number"
                    value={formData.agingAssets}
                    onChange={(e) => handleInputChange('agingAssets', e.target.value)}
                    placeholder="10"
                  />
                  <p className="text-xs text-muted-foreground mt-1">{t('roi.calculatorForm.agingAssetsDesc')}</p>
                </div>
                
                <div>
                  <Label htmlFor="kwhCost">{t('roi.calculatorForm.kwhCost')}</Label>
                  <Input
                    id="kwhCost"
                    type="number"
                    step="0.01"
                    value={formData.kwhCost}
                    onChange={(e) => handleInputChange('kwhCost', e.target.value)}
                    placeholder="0.25"
                  />
                  <p className="text-xs text-muted-foreground mt-1">{t('roi.calculatorForm.kwhCostDesc')}</p>
                </div>
                
                <div>
                  <Label htmlFor="numberOfSites">{t('roi.calculatorForm.numberOfSites')}</Label>
                  <Input
                    id="numberOfSites"
                    type="number"
                    value={formData.numberOfSites}
                    onChange={(e) => handleInputChange('numberOfSites', e.target.value)}
                    placeholder="1"
                  />
                  <p className="text-xs text-muted-foreground mt-1">{t('roi.calculatorForm.numberOfSitesDesc')}</p>
                </div>
                
                <div>
                  <Label htmlFor="drinkPrice">{t('roi.calculatorForm.drinkPrice')}</Label>
                  <Input
                    id="drinkPrice"
                    type="number"
                    step="0.01"
                    value={formData.drinkPrice}
                    onChange={(e) => handleInputChange('drinkPrice', e.target.value)}
                    placeholder="2.50"
                  />
                  <p className="text-xs text-muted-foreground mt-1">{t('roi.calculatorForm.drinkPriceDesc')}</p>
                </div>
                
                <div>
                  <Label htmlFor="skipPurchase">{t('roi.calculatorForm.skipPurchase')}</Label>
                  <Input
                    id="skipPurchase"
                    type="number"
                    value={formData.skipPurchase}
                    onChange={(e) => handleInputChange('skipPurchase', e.target.value)}
                    placeholder="5"
                  />
                  <p className="text-xs text-muted-foreground mt-1">{t('roi.calculatorForm.skipPurchaseDesc')}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">{t('roi.annualCost.title')}</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">{t('roi.annualCost.additionalAlerts')}</span>
                  <span className="font-bold text-red-600">£{additionalAlerts.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">{t('roi.annualCost.higherMaintenance')}</span>
                  <span className="font-bold text-red-600">£{higherMaintenance.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">{t('roi.annualCost.foregoneSales')}</span>
                  <span className="font-bold text-red-600">£{foregoneSales.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">{t('roi.annualCost.additionalEnergy')}</span>
                  <span className="font-bold text-red-600">£{additionalEnergy.toLocaleString()}</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{t('roi.annualCost.totalPerSite')}</span>
                    <span className="font-bold text-lg text-red-600">£{totalAnnualCostPerSite.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{t('roi.annualCost.totalAllSites')}</span>
                    <span className="font-bold text-lg text-red-600">£{totalCostAllSites.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-green-800 dark:text-green-200">{t('roi.annualCost.savingsPerSite')}</span>
                  <span className="font-bold text-green-600">£{savingsPerSite.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-green-800 dark:text-green-200">{t('roi.annualCost.savingsAllSites')}</span>
                  <span className="font-bold text-green-600">£{savingsAllSites.toLocaleString()}</span>
                </div>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">{t('roi.annualCost.withAssetIntelligence')}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cost Calculations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            {t('roi.calculations.title')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-sm">{t('roi.annualCost.additionalAlerts')}: </span>
                <span className="text-sm">{t('roi.calculations.alertsCalc')}</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-sm">{t('roi.annualCost.higherMaintenance')}: </span>
                <span className="text-sm">{t('roi.calculations.maintenanceCalc')}</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <DollarSign className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-sm">{t('roi.annualCost.foregoneSales')}: </span>
                <span className="text-sm">{t('roi.calculations.salesCalc')}</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-sm">{t('roi.annualCost.additionalEnergy')}: </span>
                <span className="text-sm">{t('roi.calculations.energyCalc')}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Predictive Maintenance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cpu className="h-5 w-5" />
            {t('roi.predictive.title')}
          </CardTitle>
          <CardDescription>
            {t('roi.predictive.desc')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">{t('roi.predictive.pocResults')}</p>
              <p className="text-sm text-muted-foreground">{t('roi.predictive.opportunity')}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Implementation</h4>
                <p className="text-sm text-muted-foreground">{t('roi.predictive.implementation')}</p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Availability</h4>
                <p className="text-sm text-muted-foreground">{t('roi.predictive.availability')}</p>
              </div>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded-lg">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold">Commercial refrigeration units with beverages and products</p>
                  <p className="text-sm text-muted-foreground">Monitoring and optimization for maximum efficiency</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transform Operations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RefreshCw className="h-5 w-5" />
            {t('roi.transform.title')}
          </CardTitle>
          <CardDescription>
            {t('roi.transform.desc')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border rounded-lg p-4 text-center">
              <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold mb-1">{t('roi.transform.predictiveMaintenance')}</h4>
              <p className="text-sm text-muted-foreground">{t('roi.transform.predictiveDesc')}</p>
            </div>
            
            <div className="border rounded-lg p-4 text-center">
              <Eye className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold mb-1">{t('roi.transform.intelligentMonitoring')}</h4>
              <p className="text-sm text-muted-foreground">{t('roi.transform.intelligentDesc')}</p>
            </div>
            
            <div className="border rounded-lg p-4 text-center">
              <Zap className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <h4 className="font-semibold mb-1">{t('roi.transform.energyOptimisation')}</h4>
              <p className="text-sm text-muted-foreground">{t('roi.transform.energyDesc')}</p>
            </div>
            
            <div className="border rounded-lg p-4 text-center">
              <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold mb-1">{t('roi.transform.potentialRoi')}</h4>
              <p className="text-sm text-muted-foreground">{t('roi.transform.roiDesc')}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <CardContent className="p-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">{t('roi.cta.title')}</h2>
            <p className="text-blue-100 mb-6">{t('roi.cta.desc')}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-1">{t('roi.cta.currentCost')}</h3>
                <div className="text-3xl font-bold text-yellow-300">£{totalAnnualCostPerSite.toLocaleString()}</div>
                <p className="text-sm text-blue-100">{t('roi.cta.currentCostDesc')}</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-1">{t('roi.cta.potentialSavings')}</h3>
                <div className="text-3xl font-bold text-green-300">£{savingsPerSite.toLocaleString()}</div>
                <p className="text-sm text-blue-100">{t('roi.cta.potentialSavingsDesc')}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Users className="w-4 h-4 mr-2" />
                Contact Intelligent Operations
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="w-4 h-4 mr-2" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 