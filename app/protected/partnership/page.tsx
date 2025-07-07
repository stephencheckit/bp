import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, MapPin, Zap, Shield, TrendingUp, Users, CheckCircle } from "lucide-react";

export default function PartnershipPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">Partnership Highlights</h1>
        <p className="text-green-100 mb-4">
          Discover how Checkit has transformed BP&apos;s UK operations with innovative IoT solutions across 840 locations
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-green-500 text-white">
            <Building className="w-4 h-4 mr-1" />
            840 UK Sites
          </Badge>
          <Badge variant="secondary" className="bg-green-500 text-white">
            <CheckCircle className="w-4 h-4 mr-1" />
            Proven Success
          </Badge>
          <Badge variant="secondary" className="bg-green-500 text-white">
            <TrendingUp className="w-4 h-4 mr-1" />
            Growing Partnership
          </Badge>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="text-center">
            <Building className="h-12 w-12 text-green-600 mx-auto mb-2" />
            <CardTitle className="text-2xl font-bold">840</CardTitle>
            <CardDescription>Active UK Locations</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-center text-muted-foreground">
              BP sites actively monitored with Checkit IoT solutions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-2" />
            <CardTitle className="text-2xl font-bold">99.2%</CardTitle>
            <CardDescription>System Uptime</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-center text-muted-foreground">
              Industry-leading reliability and performance
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <Users className="h-12 w-12 text-purple-600 mx-auto mb-2" />
            <CardTitle className="text-2xl font-bold">500+</CardTitle>
            <CardDescription>Staff Trained</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-center text-muted-foreground">
              BP team members certified on Checkit systems
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Technology Stack */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Technology Solutions
          </CardTitle>
          <CardDescription>
            Cutting-edge IoT technologies powering BP&apos;s UK operations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-600" />
                Temperature Monitoring
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                Real-time temperature tracking across all refrigeration units
              </p>
              <Badge variant="outline" className="text-xs">24/7 Monitoring</Badge>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-green-600" />
                Asset Tracking
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                Location-based monitoring and maintenance scheduling
              </p>
              <Badge variant="outline" className="text-xs">GPS Enabled</Badge>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-purple-600" />
                Predictive Analytics
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                AI-powered insights for proactive maintenance
              </p>
              <Badge variant="outline" className="text-xs">AI Powered</Badge>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-orange-600" />
                Compliance Reporting
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                Automated compliance documentation and reporting
              </p>
              <Badge variant="outline" className="text-xs">Automated</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Success Stories */}
      <Card>
        <CardHeader>
          <CardTitle>Success Stories</CardTitle>
          <CardDescription>Real-world impact across BP&apos;s UK network</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold">Regional Distribution Center - Manchester</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Reduced equipment downtime by 35% through predictive maintenance, saving over £50,000 annually in emergency repairs.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">M25 Service Stations Network</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Improved food safety compliance from 87% to 99.8% across 45 locations, eliminating regulatory violations.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold">Scottish Highlands Operations</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Enabled remote monitoring of 60 remote locations, reducing site visits by 60% while improving response times.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-600">£2.3M</div>
            <p className="text-sm text-muted-foreground">Annual Savings</p>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-blue-600">35%</div>
            <p className="text-sm text-muted-foreground">Downtime Reduction</p>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-purple-600">99.8%</div>
            <p className="text-sm text-muted-foreground">Compliance Rate</p>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-orange-600">24/7</div>
            <p className="text-sm text-muted-foreground">Monitoring</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 