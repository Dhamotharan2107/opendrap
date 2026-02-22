import { Link, useParams } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Badge } from "../components/ui/badge";
import { 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Zap
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ProductDetail() {
  const { productId } = useParams();

  // Product data
  const productData: Record<string, any> = {
    "whatsapp-ai": {
      title: "Meta AI Agent",
      subtitle: "Transform Customer Service on WhatsApp",
      description: "Automate your WhatsApp customer service with intelligent AI agents that understand context, handle complex queries, and provide instant support 24/7.",
      image: "https://images.unsplash.com/photo-1603714228681-b399854b8f80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBjYWxsJTIwY2VudGVyfGVufDF8fHx8MTc3MTY2MTM0MHww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        {
          title: "24/7 Automated Support",
          description: "Never miss a customer inquiry. AI agents work round the clock to provide instant responses.",
        },
        {
          title: "Multi-Language Support",
          description: "Communicate with customers in their preferred language with automatic translation.",
        },
        {
          title: "Smart Routing",
          description: "Intelligently route complex queries to human agents when needed with full context.",
        },
        {
          title: "Order Processing",
          description: "Handle orders, payments, and transactions directly through WhatsApp.",
        },
        {
          title: "Rich Media Support",
          description: "Send images, videos, documents, and interactive buttons in conversations.",
        },
        {
          title: "Analytics Dashboard",
          description: "Track conversation metrics, customer satisfaction, and agent performance.",
        },
      ],
      useCases: [
        {
          title: "E-commerce Support",
          description: "Handle product inquiries, order tracking, and returns automatically.",
        },
        {
          title: "Appointment Booking",
          description: "Let customers book and manage appointments via WhatsApp.",
        },
        {
          title: "Lead Qualification",
          description: "Qualify leads and schedule sales calls without human intervention.",
        },
        {
          title: "Customer Feedback",
          description: "Collect feedback and reviews through conversational surveys.",
        },
      ],
      pricing: {
        starter: { price: 99, conversations: "1,000", agents: 2 },
        professional: { price: 299, conversations: "10,000", agents: 5 },
        enterprise: { price: "Custom", conversations: "Unlimited", agents: "Unlimited" },
      },
    },
    "voice-ai": {
      title: "AI Voice Calling Agent",
      subtitle: "Natural Voice Conversations at Scale",
      description: "Deploy AI voice agents that sound natural, understand context, and handle thousands of calls simultaneously. Perfect for appointment scheduling, lead qualification, and customer support.",
      image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzE1ODYwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        {
          title: "Natural Voice Synthesis",
          description: "Human-like voice quality that builds trust and rapport with callers.",
        },
        {
          title: "Advanced Speech Recognition",
          description: "Accurately understand various accents, dialects, and speech patterns.",
        },
        {
          title: "Intelligent Conversation Flow",
          description: "Handle interruptions, clarifications, and complex dialogue naturally.",
        },
        {
          title: "CRM Integration",
          description: "Automatically log calls, update records, and sync with your CRM.",
        },
        {
          title: "Call Recording & Transcription",
          description: "Every call is recorded and transcribed for quality assurance and training.",
        },
        {
          title: "Real-time Analytics",
          description: "Monitor call metrics, sentiment analysis, and agent performance live.",
        },
      ],
      useCases: [
        {
          title: "Appointment Scheduling",
          description: "Automate booking, rescheduling, and confirmation calls.",
        },
        {
          title: "Lead Qualification",
          description: "Screen and qualify leads before passing to sales teams.",
        },
        {
          title: "Customer Surveys",
          description: "Conduct satisfaction surveys and collect valuable feedback.",
        },
        {
          title: "Payment Reminders",
          description: "Automated friendly reminders for overdue payments.",
        },
      ],
      pricing: {
        starter: { price: 149, conversations: "500 minutes", agents: 1 },
        professional: { price: 399, conversations: "2,000 minutes", agents: 3 },
        enterprise: { price: "Custom", conversations: "Unlimited", agents: "Unlimited" },
      },
    },
  };

  // Default to whatsapp-ai if productId is not found
  const product = productData[productId || "whatsapp-ai"] || productData["whatsapp-ai"];

  const faqs = [
    {
      question: "How quickly can I get started?",
      answer: "You can be up and running within 24-48 hours. Our team will help with setup, integration, and training to ensure a smooth launch.",
    },
    {
      question: "Do I need technical knowledge to use this?",
      answer: "No technical knowledge required! Our intuitive dashboard makes it easy to configure, monitor, and manage your AI agents without coding.",
    },
    {
      question: "Can the AI handle complex conversations?",
      answer: "Yes! Our AI is trained on millions of conversations and can handle complex queries. For exceptional cases, it seamlessly hands off to human agents with full context.",
    },
    {
      question: "How do you ensure data security?",
      answer: "We use bank-grade encryption, comply with GDPR and international data protection standards, and regularly undergo security audits.",
    },
    {
      question: "What kind of support do you provide?",
      answer: "All plans include email support. Professional plans include priority support, and Enterprise plans get a dedicated account manager and 24/7 phone support.",
    },
  ];

  const stats = [
    { icon: Clock, value: "80%", label: "Faster Response Time" },
    { icon: Users, value: "5x", label: "More Conversations" },
    { icon: TrendingUp, value: "95%", label: "Customer Satisfaction" },
    { icon: Zap, value: "60%", label: "Cost Reduction" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#00B9F1]/20 text-[#002E6E]">AI-Powered Solution</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>
              <p className="text-2xl text-gray-700 mb-6">
                {product.subtitle}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {product.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#002E6E] hover:bg-[#001f4d]" asChild>
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={product.image}
                alt={product.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#002E6E] to-[#00B9F1] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to deliver exceptional customer experiences
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature: any, index: number) => (
              <Card key={index} className="border-gray-200">
                <CardHeader>
                  <div className="w-10 h-10 bg-gradient-to-br from-[#002E6E] to-[#00B9F1] rounded-lg flex items-center justify-center mb-3">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple setup, powerful results
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Connect", description: "Integrate with your existing systems in minutes" },
              { step: "2", title: "Configure", description: "Customize AI behavior and conversation flows" },
              { step: "3", title: "Deploy", description: "Launch your AI agent and start automating" },
              { step: "4", title: "Optimize", description: "Monitor performance and continuously improve" },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#002E6E] to-[#00B9F1] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-[#002E6E] to-[#00B9F1]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-600">
              Versatile solutions for various business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {product.useCases.map((useCase: any, index: number) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start">
                    <MessageSquare className="h-6 w-6 text-[#00B9F1] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <CardTitle className="text-xl">{useCase.title}</CardTitle>
                      <CardDescription className="mt-2 text-gray-600">
                        {useCase.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#002E6E] to-[#00B9F1] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies using OPENDRAP to transform their customer interactions. Contact us to learn more about our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#002E6E] hover:bg-gray-100" asChild>
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white !text-white hover:bg-white/10" asChild>
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}