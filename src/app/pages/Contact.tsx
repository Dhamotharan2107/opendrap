import React from "react";
import { SEO } from "../../components/common/SEO";
import { SEO_CONFIG } from "../../constants";
import { generateBreadcrumbSchema } from "../../utils/seo";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useContactForm } from "../../hooks/useContactForm";
import { LoadingSpinner } from "../../components/common/LoadingSpinner";
import type { ContactInfo } from "../../types";

const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    title: "Email Us",
    content: "office.opendrap@gmail.com",
    description: "We'll respond within 24 hours",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "8072620523",
    description: "Mon-Fri, 9am-6pm PST",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Chennai",
    description: "Tamil Nadu, India",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Clock,
    title: "Support Hours",
    content: "12/5 Available",
    description: "Enterprise customers",
    color: "from-amber-500 to-amber-600",
  },
];

const ContactInfoCard: React.FC<ContactInfo> = ({ icon: Icon, title, content, description, color }) => (
  <Card className="border-gray-200 hover:shadow-lg transition-shadow text-center">
    <CardContent className="pt-6">
      <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
        <Icon className="h-6 w-6 text-white" aria-hidden="true" />
      </div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-900 font-medium mb-1">{content}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const SuccessMessage: React.FC = () => (
  <Card className="border-green-200 bg-green-50">
    <CardContent className="pt-6">
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-[#00B9F1] rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="h-8 w-8 text-white" aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Thank You!
        </h3>
        <p className="text-gray-600">
          Your message has been sent successfully. We'll get back to you within 24 hours.
        </p>
      </div>
    </CardContent>
  </Card>
);

export const Contact: React.FC = () => {
  const {
    formData,
    isSubmitting,
    submitted,
    submitError,
    handleChange,
    handleSubmit,
  } = useContactForm();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Contact', url: `${SEO_CONFIG.siteUrl}/contact` },
  ]);

  return (
    <>
      <SEO
        title="Contact Us - Get in Touch with OPENDRAP"
        description="Contact OPENDRAP for AI-powered business automation solutions. Get expert consultation on WhatsApp AI agents, voice AI, and business automation. Available 24/7."
        url="/contact"
        keywords={[...SEO_CONFIG.keywords, 'contact', 'support', 'consultation', 'demo']}
        schemaMarkup={breadcrumbSchema}
      />

      <div className="bg-white">
        {/* Header Section */}
        <header className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </header>

        {/* Contact Info Cards */}
        <section className="py-16 -mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <ContactInfoCard key={index} {...info} />
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                {submitted ? (
                  <SuccessMessage />
                ) : (
                  <Card className="border-gray-200">
                    <CardContent className="pt-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input
                              id="firstName"
                              placeholder="John"
                              value={formData.firstName}
                              onChange={(e) => handleChange("firstName", e.target.value)}
                              required
                              aria-describedby="firstName-error"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input
                              id="lastName"
                              placeholder="Doe"
                              value={formData.lastName}
                              onChange={(e) => handleChange("lastName", e.target.value)}
                              required
                              aria-describedby="lastName-error"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            required
                            aria-describedby="email-error"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+91 8072620523"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            placeholder="Your Company Name"
                            value={formData.company}
                            onChange={(e) => handleChange("company", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="inquiryType">Inquiry Type *</Label>
                          <Select
                            value={formData.inquiryType}
                            onValueChange={(value) => handleChange("inquiryType", value)}
                            required
                          >
                            <SelectTrigger id="inquiryType">
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="sales">Sales Inquiry</SelectItem>
                              <SelectItem value="support">Technical Support</SelectItem>
                              <SelectItem value="partnership">Partnership</SelectItem>
                              <SelectItem value="demo">Request a Demo</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message *</Label>
                          <Textarea
                            id="message"
                            placeholder="Tell us more about your needs..."
                            rows={5}
                            value={formData.message}
                            onChange={(e) => handleChange("message", e.target.value)}
                            required
                            aria-describedby="message-error"
                          />
                        </div>
                        {submitError && (
                          <div className="text-sm text-red-600 text-center p-3 bg-red-50 rounded-md" role="alert">
                            {submitError}
                          </div>
                        )}
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-[#002E6E] hover:bg-[#001f4d]"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <LoadingSpinner size="sm" text="Sending..." />
                          ) : (
                            "Send Message"
                          )}
                        </Button>
                        <p className="text-sm text-gray-600 text-center">
                          By submitting this form, you agree to our privacy policy.
                        </p>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </div>
              {/* Right Column */}
              <div>
                {/* Map Placeholder */}
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>Our Office</CardTitle>
                    <CardDescription>Visit us at our headquarters</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-3" aria-hidden="true" />
                        <p className="text-gray-600 font-medium">Chennai</p>
                        <p className="text-gray-600">Tamil Nadu, India</p>
                        <p className="text-sm text-gray-500 mt-2">Map integration available</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Support Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Need Immediate Assistance?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Check out our resources or chat with our support team
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="border-[#002E6E] !text-[#002E6E] hover:bg-[#002E6E] hover:!text-white">
                  View Documentation
                </Button>
                <Button size="lg" variant="outline" className="border-[#002E6E] !text-[#002E6E] hover:bg-[#002E6E] hover:!text-white">
                  Live Chat Support
                </Button>
                <Button size="lg" variant="outline" className="border-[#002E6E] !text-[#002E6E] hover:bg-[#002E6E] hover:!text-white">
                  Help Center
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

