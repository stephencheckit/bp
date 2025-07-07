import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Building, Mail, Phone, MapPin, Globe, Briefcase, Star } from "lucide-react";

export default function StakeholdersPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">Stakeholder Map</h1>
        <p className="text-orange-100 mb-4">
          Meet the key team members driving the Checkit & BP partnership forward
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-orange-500 text-white">
            <Users className="w-4 h-4 mr-1" />
            Partnership Team
          </Badge>
          <Badge variant="secondary" className="bg-orange-500 text-white">
            <Building className="w-4 h-4 mr-1" />
            Cross-Functional
          </Badge>
          <Badge variant="secondary" className="bg-orange-500 text-white">
            <Globe className="w-4 h-4 mr-1" />
            Global Reach
          </Badge>
        </div>
      </div>

      {/* BP Team */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="h-5 w-5 text-green-600" />
            BP Team
          </CardTitle>
          <CardDescription>
            Key stakeholders from BP driving the partnership strategy
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-muted-foreground">VP, Operations Technology</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  sarah.johnson@bp.com
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  London, UK
                </p>
                <p className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  Strategic Oversight
                </p>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Marcus Weber</h4>
                  <p className="text-sm text-muted-foreground">Director, German Operations</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  marcus.weber@bp.com
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  Hamburg, Germany
                </p>
                <p className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  German Expansion Lead
                </p>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">David Chen</h4>
                  <p className="text-sm text-muted-foreground">Head of Digital Transformation</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  david.chen@bp.com
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  London, UK
                </p>
                <p className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  Technology Integration
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Checkit Team */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-blue-600" />
            Checkit Team
          </CardTitle>
          <CardDescription>
            Dedicated Checkit professionals managing the BP partnership
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">April Watts</h4>
                  <p className="text-sm text-muted-foreground">Partnership Manager</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  april.watts@checkit.net
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  +44 20 7123 4567
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  London, UK
                </p>
                <p className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  Primary BP Contact
                </p>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Tom Mitchell</h4>
                  <p className="text-sm text-muted-foreground">CTO & Co-Founder</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  tom.mitchell@checkit.net
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  London, UK
                </p>
                <p className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  Technical Strategy
                </p>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Lisa Schmidt</h4>
                  <p className="text-sm text-muted-foreground">European Expansion Lead</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  lisa.schmidt@checkit.net
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  Berlin, Germany
                </p>
                <p className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  German Market Lead
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Governance Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="h-5 w-5" />
            Governance Structure
          </CardTitle>
          <CardDescription>
            How we manage and oversee the partnership
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold mb-2">Strategic Board</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Quarterly executive reviews and strategic planning
              </p>
              <div className="space-y-1 text-xs">
                <p>• Sarah Johnson (BP)</p>
                <p>• Tom Mitchell (Checkit)</p>
                <p>• Marcus Weber (BP)</p>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="font-semibold mb-2">Operational Committee</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Monthly operational reviews and issue resolution
              </p>
              <div className="space-y-1 text-xs">
                <p>• David Chen (BP)</p>
                <p>• April Watts (Checkit)</p>
                <p>• Lisa Schmidt (Checkit)</p>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="font-semibold mb-2">Working Groups</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Weekly tactical execution and delivery
              </p>
              <div className="space-y-1 text-xs">
                <p>• Technical Integration</p>
                <p>• Training & Support</p>
                <p>• German Expansion</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Communication Channels */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Communication Channels
          </CardTitle>
          <CardDescription>
            How we stay connected and aligned
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Regular Meetings</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Weekly Stand-ups:</strong> Project updates and blockers</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Monthly Reviews:</strong> Performance metrics and planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Quarterly Business Reviews:</strong> Strategic alignment</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Digital Collaboration</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Slack Channel:</strong> #bp-checkit-partnership</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>SharePoint:</strong> Document collaboration</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>This Portal:</strong> Strategic updates and insights</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contacts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-red-600" />
            Emergency Contacts
          </CardTitle>
          <CardDescription>
            24/7 support for critical issues
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Technical Support</h4>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  +44 20 7123 4567 (24/7)
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  support@checkit.net
                </p>
                <p className="text-xs text-muted-foreground">
                  Response within 15 minutes for critical issues
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Partnership Issues</h4>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  +44 20 7123 4568
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  april.watts@checkit.net
                </p>
                <p className="text-xs text-muted-foreground">
                  Escalation path for partnership concerns
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 