import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { 
  MessageSquare, 
  Phone, 
  Globe, 
  Smartphone, 
  Bot, 
  Zap,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Shield,
  Headphones,
  Clock
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const features = [
    {
      icon: MessageSquare,
      title: "AI WhatsApp Agent",
      description: "Automate customer conversations on WhatsApp with intelligent AI agents that handle queries 24/7.",
    },
    {
      icon: Phone,
      title: "AI Voice Calling Agent",
      description: "Smart voice AI that makes and receives calls, schedules appointments, and qualifies leads automatically.",
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Modern, responsive websites built with cutting-edge technology to establish your online presence.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    },
    {
      icon: Bot,
      title: "AI Chatbot Platform",
      description: "Deploy intelligent chatbots across multiple channels to engage customers and drive conversions.",
    },
    {
      icon: Zap,
      title: "Business Automation",
      description: "Streamline operations with custom automation workflows that save time and reduce costs.",
    },
  ];

  const whyChooseUs = [
    {
      icon: BarChart3,
      title: "Proven Results",
      description: "Average 40% increase in customer engagement within the first 3 months.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with international security standards.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated support team available around the clock to assist you.",
    },
    {
      icon: Clock,
      title: "Quick Deployment",
      description: "Get up and running in days, not months, with our streamlined onboarding.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#00B9F1]/20 text-[#002E6E] hover:bg-[#00B9F1]/20">
                🚀 AI-Powered Solutions
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Open Dynamic Research and AI Platform
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Automate customer interactions, streamline operations, and scale your business with intelligent AI solutions built by a team of passionate developers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
<Button size="lg" className="bg-[#002E6E] hover:bg-[#001f4d] text-lg px-8" asChild>
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <Link to="/products">Explore Products</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#00B9F1] mr-2" />
                  Enterprise-ready solutions
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#00B9F1] mr-2" />
                  24/7 support available
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzcxNTczNzEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Key Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Solutions for Modern Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to automate, scale, and transform your business operations with AI-powered tools.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#002E6E] to-[#00B9F1] rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                    <Link 
                      to="/products" 
                      className="inline-flex items-center text-[#002E6E] hover:text-[#001f4d] mt-4 transition-colors"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Our Products
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right solution for your business needs
            </p>
          </div>
          <Tabs defaultValue="whatsapp" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="whatsapp">WhatsApp AI</TabsTrigger>
              <TabsTrigger value="voice">Voice AI</TabsTrigger>
              <TabsTrigger value="automation">Automation</TabsTrigger>
            </TabsList>
            <TabsContent value="whatsapp" className="mt-0">
              <Card className="border-gray-200">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <Badge className="mb-4 bg-green-100 text-green-700">Most Popular</Badge>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        AI WhatsApp Agent
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Transform customer service with AI-powered WhatsApp automation. Handle thousands of conversations simultaneously with intelligent responses, automated workflows, and seamless handoff to human agents when needed.
                      </p>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">24/7 automated customer support</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Multi-language support for global reach</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Smart routing and escalation</span>
                        </li>
                      </ul>
                      <Button className="bg-[#002E6E] hover:bg-[#001f4d]" asChild>
                        <Link to="/products/whatsapp-ai">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1603714228681-b399854b8f80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBjYWxsJTIwY2VudGVyfGVufDF8fHx8MTc3MTY2MTM0MHww&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Meta AI Agent"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="voice" className="mt-0">
              <Card className="border-gray-200">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <Badge className="mb-4 bg-purple-100 text-purple-700">Enterprise Ready</Badge>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        AI Voice Calling Agent
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Intelligent voice AI that sounds natural and handles complex conversations. Perfect for appointment scheduling, lead qualification, customer surveys, and support calls.
                      </p>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Natural-sounding voice synthesis</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Advanced speech recognition</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">CRM integration and call analytics</span>
                        </li>
                      </ul>
                      <Button className="bg-[#002E6E] hover:bg-[#001f4d]" asChild>
                        <Link to="/products/voice-ai">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzE1ODYwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="AI Voice Calling"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="automation" className="mt-0">
              <Card className="border-gray-200">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <Badge className="mb-4 bg-blue-100 text-blue-700">Efficiency Booster</Badge>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        Business Automation
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Streamline your operations with intelligent automation workflows. Connect your tools, automate repetitive tasks, and focus on what matters most - growing your business.
                      </p>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">No-code workflow builder</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">1000+ pre-built integrations</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Real-time monitoring and alerts</span>
                        </li>
                      </ul>
                      <Button className="bg-[#002E6E] hover:bg-[#001f4d]" asChild>
                        <Link to="/products/automation">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1759752393975-7ca7b302fcc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGF1dG9tYXRpb24lMjB3b3JrZmxvd3xlbnwxfHx8fDE3NzE2NjM2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Business Automation"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose OPENDRAP Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose OPENDRAP?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to delivering exceptional value and results for your business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#002E6E] to-[#00B9F1] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 bg-gradient-to-r from-[#002E6E] to-[#00B9F1] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Start using OPENDRAP to automate operations, engage customers, and drive growth. Get in touch to learn more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white !text-[#002E6E] hover:bg-gray-100 text-lg px-8" asChild>
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white bg-transparent !text-white hover:bg-white/10 text-lg px-8" asChild>
              <Link to="/products">View Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}