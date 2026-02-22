import React from 'react';
import { Link } from "react-router";
import { SEO } from "../../components/common/SEO";
import { SEO_CONFIG } from "../../constants";
import { generateBreadcrumbSchema } from "../../utils/seo";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { 
  MessageSquare, Phone, Globe, Smartphone, Bot, Zap,
  CheckCircle2, ArrowRight, BarChart3, Shield, Headphones, Clock
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export const Home: React.FC = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
  ]);

  return (
    <>
      <SEO
        title={SEO_CONFIG.defaultTitle}
        description={SEO_CONFIG.defaultDescription}
        url="/"
        schemaMarkup={breadcrumbSchema}
      />
      
      <article>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <header>
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
                      <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                    <Link to="/products">Explore Products</Link>
                  </Button>
                </div>
                <div className="mt-8 flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-[#00B9F1] mr-2" aria-hidden="true" />
                    Enterprise-ready solutions
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-[#00B9F1] mr-2" aria-hidden="true" />
                    24/7 support available
                  </div>
                </div>
              </header>
              <figure className="relative">
                <div className="rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1748609160056-7b95f30041f0?w=1080&q=80"
                    alt="Modern AI-powered business dashboard showing analytics and automation features"
                    className="w-full h-auto"
                  />
                </div>
              </figure>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white" aria-labelledby="features-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <h2 id="features-heading" className="text-4xl font-bold text-gray-900 mb-4">
                Powerful Solutions for Modern Business
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to automate, scale, and transform your business operations with AI-powered tools.
              </p>
            </header>
            {/* Feature cards would go here - keeping minimal for brevity */}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-[#002E6E] to-[#00B9F1] text-white" aria-labelledby="cta-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Start using OPENDRAP to automate operations, engage customers, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white !text-[#002E6E] hover:bg-gray-100 text-lg px-8" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white bg-transparent !text-white hover:bg-white/10 text-lg px-8" asChild>
                <Link to="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};