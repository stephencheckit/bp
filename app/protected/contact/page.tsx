import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Phone, MapPin, Calendar, Send, User, Building, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">Contact & Engagement</h1>
        <p className="text-indigo-100 mb-4">
          Get in touch with our team for support, feedback, or strategic discussions
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-indigo-500 text-white">
            <MessageSquare className="w-4 h-4 mr-1" />
            Direct Access
          </Badge>
          <Badge variant="secondary" className="bg-indigo-500 text-white">
            <Mail className="w-4 h-4 mr-1" />
            Quick Response
          </Badge>
          <Badge variant="secondary" className="bg-indigo-500 text-white">
            <Clock className="w-4 h-4 mr-1" />
            24/7 Support
          </Badge>
        </div>
      </div>

      {/* Quick Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="text-center">
            <MessageSquare className="h-12 w-12 text-indigo-600 mx-auto mb-2" />
            <CardTitle className="text-xl font-bold">General Inquiries</CardTitle>
            <CardDescription>Questions about the partnership</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Get answers to your questions about our collaboration
            </p>
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              <Mail className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <Phone className="h-12 w-12 text-green-600 mx-auto mb-2" />
            <CardTitle className="text-xl font-bold">Technical Support</CardTitle>
            <CardDescription>Platform issues and support</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              24/7 technical assistance for urgent issues
            </p>
            <Button variant="outline" className="border-green-600 text-green-600">
              <Phone className="w-4 h-4 mr-2" />
              Call Support
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-2" />
            <CardTitle className="text-xl font-bold">Strategic Review</CardTitle>
            <CardDescription>Schedule executive meetings</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Book time with leadership for strategic discussions
            </p>
            <Button variant="outline" className="border-purple-600 text-purple-600">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Meeting
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Contact Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Send className="h-5 w-5" />
            Send us a Message
          </CardTitle>
          <CardDescription>
            Use this form to reach out with questions, feedback, or partnership inquiries
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your full name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <input
                    type="email"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Company</label>
              <div className="relative">
                <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="BP / Checkit"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Partnership Feedback</option>
                <option>German Expansion</option>
                <option>Strategic Discussion</option>
                <option>Training Request</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>
            
            <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Team Contacts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Direct Team Contacts
          </CardTitle>
          <CardDescription>
            Reach out directly to specific team members
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-4">Partnership Management</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 border rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium">April Watts</h5>
                    <p className="text-sm text-muted-foreground">Partnership Manager</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">april.watts@checkit.net</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">+44 20 7123 4567</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 border rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-green-600" />
                  </div>
                </div>
              </div>
            </div>
            
           

      {/* Feedback Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Partnership Feedback
          </CardTitle>
          <CardDescription>
            Help us improve our partnership with your valuable feedback
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex-col">
              <div className="text-lg mb-1">😊</div>
              <div className="text-sm">Very Satisfied</div>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <div className="text-lg mb-1">😐</div>
              <div className="text-sm">Neutral</div>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <div className="text-lg mb-1">😞</div>
              <div className="text-sm">Needs Improvement</div>
            </Button>
          </div>
          
          <div className="mt-6">
            <label className="block text-sm font-medium mb-2">Additional Comments</label>
            <textarea
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="What's working well? What could be improved?"
            ></textarea>
          </div>
          
          <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700">
            Submit Feedback
          </Button>
        </CardContent>
      </Card>

      {/* Office Locations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Our Locations
          </CardTitle>
          <CardDescription>
            Visit us at our offices across Europe
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Checkit London HQ</h4>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  123 Tech Street, London EC1A 1BB
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  +44 20 7123 4567
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  Mon-Fri: 9:00 AM - 6:00 PM GMT
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 