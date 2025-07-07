import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Euro, Building, TrendingUp, Target, Calendar, Users, Zap } from "lucide-react";

export default function FutureVisionPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">Future Vision: Germany Expansion</h1>
        <p className="text-purple-100 mb-4">
          Unlock the €2.4M annual opportunity across 1,200 German BP locations with proven Checkit technology
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-purple-500 text-white">
            <Euro className="w-4 h-4 mr-1" />
            €2.4M Opportunity
          </Badge>
          <Badge variant="secondary" className="bg-purple-500 text-white">
            <Building className="w-4 h-4 mr-1" />
            1,200 Sites
          </Badge>
          <Badge variant="secondary" className="bg-purple-500 text-white">
            <Target className="w-4 h-4 mr-1" />
            Strategic Growth
          </Badge>
        </div>
      </div>

      {/* Opportunity Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="text-center">
            <Euro className="h-12 w-12 text-purple-600 mx-auto mb-2" />
            <CardTitle className="text-2xl font-bold">€2.4M</CardTitle>
            <CardDescription>Annual Revenue Opportunity</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-center text-muted-foreground">
              Projected annual revenue from German market expansion
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <Building className="h-12 w-12 text-green-600 mx-auto mb-2" />
            <CardTitle className="text-2xl font-bold">1,200</CardTitle>
            <CardDescription>Target Locations</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-center text-muted-foreground">
              BP sites across Germany ready for Checkit deployment
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-2" />
            <CardTitle className="text-2xl font-bold">18</CardTitle>
            <CardDescription>Month Rollout</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-center text-muted-foreground">
              Phased deployment across all German locations
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Market Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            German Market Analysis
          </CardTitle>
          <CardDescription>
            Understanding the German energy retail landscape and opportunities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Market Characteristics</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Largest fuel retail market in Europe</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Strict environmental and safety regulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>High demand for digital transformation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Growing focus on operational efficiency</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Competitive Advantages</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Proven track record with BP UK</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Existing partnership and trust</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Scalable technology platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>German language support ready</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Roadmap */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Implementation Roadmap
          </CardTitle>
          <CardDescription>
            18-month phased rollout strategy for German expansion
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-semibold">Phase 1: Foundation</h4>
                <Badge variant="outline" className="text-xs">Q1 2025</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Pilot deployment at 50 high-priority German locations. Establish local support infrastructure and German-language platform.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-semibold">Phase 2: Scale</h4>
                <Badge variant="outline" className="text-xs">Q2-Q3 2025</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Expand to 400 additional locations. Full training program rollout and local team establishment in key German cities.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-semibold">Phase 3: Complete</h4>
                <Badge variant="outline" className="text-xs">Q4 2025 - Q2 2026</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Full deployment across remaining 750 locations. Advanced analytics and AI features activation for all German sites.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Financial Projections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Euro className="h-5 w-5" />
              Revenue Projections
            </CardTitle>
            <CardDescription>Expected financial returns from German expansion</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Year 1 (2025)</span>
                <span className="font-bold text-green-600">€800K</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Year 2 (2026)</span>
                <span className="font-bold text-green-600">€2.4M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Year 3 (2027)</span>
                <span className="font-bold text-green-600">€3.2M</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">3-Year Total</span>
                  <span className="font-bold text-lg text-purple-600">€6.4M</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Team Requirements
            </CardTitle>
            <CardDescription>Staffing plan for German operations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Customer Success Managers</span>
                <span className="font-bold">4</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Technical Support Engineers</span>
                <span className="font-bold">6</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Installation Technicians</span>
                <span className="font-bold">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Regional Manager</span>
                <span className="font-bold">1</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Total New Hires</span>
                  <span className="font-bold text-lg text-purple-600">23</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Success Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Success Metrics & KPIs
          </CardTitle>
          <CardDescription>
            Key performance indicators for German expansion success
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <Zap className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-lg font-bold">95%</div>
              <div className="text-sm text-muted-foreground">System Uptime Target</div>
            </div>
            
            <div className="text-center p-4 border rounded-lg">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-lg font-bold">90%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
            
            <div className="text-center p-4 border rounded-lg">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-lg font-bold">25%</div>
              <div className="text-sm text-muted-foreground">Cost Reduction</div>
            </div>
            
            <div className="text-center p-4 border rounded-lg">
              <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-lg font-bold">18</div>
              <div className="text-sm text-muted-foreground">Month Deployment</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card>
        <CardHeader>
          <CardTitle>Ready to Expand?</CardTitle>
          <CardDescription>
            Join us in bringing proven Checkit technology to German BP locations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700">
              View Detailed Business Case
            </Button>
            <Button variant="outline">
              Schedule Strategic Review
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 