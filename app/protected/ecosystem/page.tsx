import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Cloud, Smartphone, Database, Shield, Zap, Settings, BarChart3 } from "lucide-react";

export default function EcosystemPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">Checkit Ecosystem</h1>
        <p className="text-teal-100 mb-4">
          A comprehensive IoT platform designed to transform how BP manages operations across all locations
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-teal-500 text-white">
            <Network className="w-4 h-4 mr-1" />
            Connected Platform
          </Badge>
          <Badge variant="secondary" className="bg-teal-500 text-white">
            <Cloud className="w-4 h-4 mr-1" />
            Cloud-Native
          </Badge>
          <Badge variant="secondary" className="bg-teal-500 text-white">
            <Shield className="w-4 h-4 mr-1" />
            Enterprise Security
          </Badge>
        </div>
      </div>

      {/* Platform Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="text-center">
            <Network className="h-12 w-12 text-teal-600 mx-auto mb-2" />
            <CardTitle className="text-xl font-bold">IoT Sensors</CardTitle>
            <CardDescription>Connected monitoring devices</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-center text-muted-foreground">
              Smart sensors for temperature, humidity, pressure, and more
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <Cloud className="h-12 w-12 text-blue-600 mx-auto mb-2" />
            <CardTitle className="text-xl font-bold">Cloud Platform</CardTitle>
            <CardDescription>Scalable data processing</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-center text-muted-foreground">
              AWS-powered infrastructure with global reach
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <Smartphone className="h-12 w-12 text-green-600 mx-auto mb-2" />
            <CardTitle className="text-xl font-bold">Mobile Apps</CardTitle>
            <CardDescription>On-the-go management</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-center text-muted-foreground">
              iOS and Android apps for field teams
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Technical Architecture */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Technical Architecture
          </CardTitle>
          <CardDescription>
            Enterprise-grade infrastructure built for scale and reliability
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Database className="h-4 w-4" />
                Data Layer
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Real-time data ingestion from 10,000+ sensors</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Secure data encryption at rest and in transit</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Automated data validation and cleansing</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Analytics Engine
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Machine learning algorithms for predictive maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Automated anomaly detection and alerting</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Custom dashboards and reporting tools</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Key Features & Capabilities
          </CardTitle>
          <CardDescription>
            Comprehensive monitoring and management features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-600" />
                Temperature Control
              </h4>
              <p className="text-sm text-muted-foreground">
                Continuous monitoring of refrigeration systems with intelligent alerts
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-green-600" />
                Energy Management
              </h4>
              <p className="text-sm text-muted-foreground">
                Track energy consumption and optimize efficiency across all equipment
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Database className="h-4 w-4 text-purple-600" />
                Compliance Tracking
              </h4>
              <p className="text-sm text-muted-foreground">
                Automated compliance documentation and audit trail management
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-orange-600" />
                Mobile Accessibility
              </h4>
              <p className="text-sm text-muted-foreground">
                Native mobile apps for iOS and Android with offline capabilities
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Network className="h-4 w-4 text-red-600" />
                Multi-Site Management
              </h4>
              <p className="text-sm text-muted-foreground">
                Centralized dashboard for managing hundreds of locations
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Settings className="h-4 w-4 text-teal-600" />
                Custom Integrations
              </h4>
              <p className="text-sm text-muted-foreground">
                API-first architecture for seamless integration with existing systems
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Platform Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-teal-600">99.9%</div>
            <p className="text-sm text-muted-foreground">Platform Uptime</p>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-blue-600">10K+</div>
            <p className="text-sm text-muted-foreground">Connected Sensors</p>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-600">50TB</div>
            <p className="text-sm text-muted-foreground">Data Processed Monthly</p>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-purple-600">24/7</div>
            <p className="text-sm text-muted-foreground">Support Coverage</p>
          </CardContent>
        </Card>
      </div>

      {/* Integration Partners */}
      <Card>
        <CardHeader>
          <CardTitle>Integration Partners</CardTitle>
          <CardDescription>
            Seamless connectivity with leading enterprise systems
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="font-semibold text-sm">SAP</div>
              <div className="text-xs text-muted-foreground">ERP Integration</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="font-semibold text-sm">Microsoft</div>
              <div className="text-xs text-muted-foreground">Azure & Office 365</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="font-semibold text-sm">Salesforce</div>
              <div className="text-xs text-muted-foreground">CRM Integration</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="font-semibold text-sm">Slack</div>
              <div className="text-xs text-muted-foreground">Team Collaboration</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 