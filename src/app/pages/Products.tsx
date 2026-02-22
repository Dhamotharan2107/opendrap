import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { 
  MessageSquare, 
  Phone, 
  Globe, 
  Smartphone, 
  Bot, 
  Zap,
  ArrowRight,
  Workflow,
  Database
} from "lucide-react";

export function Products() {
  const products = [
    {
      id: "whatsapp-ai",
      icon: MessageSquare,
      title: "Meta AI Agent",
      description: "Automate customer conversations on WhatsApp with intelligent AI that handles queries, processes orders, and provides support 24/7.",
      features: [
        "24/7 automated responses",
        "Multi-language support",
        "Smart conversation routing",
        "CRM integration",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      id: "voice-ai",
      icon: Phone,
      title: "AI Voice Calling Agent",
      description: "Natural-sounding voice AI that makes and receives calls, schedules appointments, qualifies leads, and handles customer inquiries.",
      features: [
        "Natural voice synthesis",
        "Advanced speech recognition",
        "Call recording & analytics",
        "IVR integration",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "website-dev",
      icon: Globe,
      title: "Website Development",
      description: "Modern, responsive websites built with cutting-edge technology. Fast, secure, and optimized for conversions.",
      features: [
        "Responsive design",
        "SEO optimized",
        "Fast loading speeds",
        "CMS integration",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "mobile-app",
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
      features: [
        "iOS & Android support",
        "Cloud synchronization",
        "Push notifications",
        "Offline capabilities",
      ],
      color: "from-indigo-500 to-indigo-600",
    },
    {
      id: "chatbot",
      icon: Bot,
      title: "AI Chatbot Platform",
      description: "Deploy intelligent chatbots across your website, apps, and social media to engage customers and automate support.",
      features: [
        "Multi-channel deployment",
        "Natural language processing",
        "Learning & improvement",
        "Analytics dashboard",
      ],
      color: "from-cyan-500 to-cyan-600",
    },
    {
      id: "automation",
      icon: Zap,
      title: "Business Automation Tools",
      description: "Streamline operations with custom automation workflows that connect your tools and eliminate repetitive tasks.",
      features: [
        "No-code workflow builder",
        "1000+ integrations",
        "Scheduled automations",
        "Error handling",
      ],
      color: "from-amber-500 to-amber-600",
    },
    {
      id: "workflow",
      icon: Workflow,
      title: "Workflow Management",
      description: "Optimize your business processes with intelligent workflow management and task automation.",
      features: [
        "Process visualization",
        "Task automation",
        "Team collaboration",
        "Performance tracking",
      ],
      color: "from-pink-500 to-pink-600",
    },
    {
      id: "crm",
      icon: Database,
      title: "CRM & Analytics",
      description: "Comprehensive customer relationship management with powerful analytics and insights for data-driven decisions.",
      features: [
        "Customer management",
        "Sales pipeline tracking",
        "Advanced analytics",
        "Custom reports",
      ],
      color: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Products & Solutions
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive AI-powered solutions designed to transform your business operations and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <Card
                  key={product.id}
                  className="border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className={`w-14 h-14 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{product.title}</CardTitle>
                    <CardDescription className="text-gray-600 mt-2">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-[#00B9F1] rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full border-[#002E6E] !text-[#002E6E] hover:bg-[#002E6E] hover:!text-white"
                      asChild
                    >
                      <Link to={`/products/${product.id}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our team can build tailored solutions to meet your specific business requirements. Let's discuss your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#002E6E] hover:bg-[#001f4d]" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}