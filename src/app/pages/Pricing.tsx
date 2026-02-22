import { Link } from "react-router";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Switch } from "../components/ui/switch";
import { CheckCircle2, X, ArrowRight, Sparkles } from "lucide-react";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started",
      monthlyPrice: 99,
      yearlyPrice: 990,
      highlighted: false,
      features: [
        { text: "Up to 1,000 conversations/month", included: true },
        { text: "2 AI agents", included: true },
        { text: "Basic analytics dashboard", included: true },
        { text: "Email support", included: true },
        { text: "99.5% uptime SLA", included: true },
        { text: "WhatsApp & web chat", included: true },
        { text: "Basic integrations", included: true },
        { text: "Advanced analytics", included: false },
        { text: "Priority support", included: false },
        { text: "Custom integrations", included: false },
        { text: "Dedicated account manager", included: false },
      ],
    },
    {
      name: "Professional",
      description: "Most popular for growing teams",
      monthlyPrice: 299,
      yearlyPrice: 2990,
      highlighted: true,
      features: [
        { text: "Up to 10,000 conversations/month", included: true },
        { text: "5 AI agents", included: true },
        { text: "Advanced analytics & reports", included: true },
        { text: "Priority email & chat support", included: true },
        { text: "99.9% uptime SLA", included: true },
        { text: "All communication channels", included: true },
        { text: "Custom integrations", included: true },
        { text: "Advanced workflow automation", included: true },
        { text: "Team collaboration tools", included: true },
        { text: "A/B testing", included: true },
        { text: "Dedicated account manager", included: false },
      ],
    },
    {
      name: "Enterprise",
      description: "For large organizations with custom needs",
      monthlyPrice: null,
      yearlyPrice: null,
      highlighted: false,
      features: [
        { text: "Unlimited conversations", included: true },
        { text: "Unlimited AI agents", included: true },
        { text: "Enterprise analytics suite", included: true },
        { text: "24/7 phone & email support", included: true },
        { text: "99.99% uptime SLA", included: true },
        { text: "All channels + custom channels", included: true },
        { text: "Custom development", included: true },
        { text: "Advanced security & compliance", included: true },
        { text: "On-premise deployment option", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Custom training & onboarding", included: true },
      ],
    },
  ];

  const getPrice = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === null) {
      return { display: "Custom", period: "" };
    }
    const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
    const period = isYearly ? "/year" : "/month";
    return { display: `$${price}`, period };
  };

  const getSavings = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === null || !isYearly) return null;
    const yearlyCost = plan.monthlyPrice * 12;
    const savings = yearlyCost - plan.yearlyPrice;
    const percentage = Math.round((savings / yearlyCost) * 100);
    return { amount: savings, percentage };
  };

  const comparisonFeatures = [
    {
      category: "Usage Limits",
      features: [
        { name: "Conversations per month", starter: "1,000", professional: "10,000", enterprise: "Unlimited" },
        { name: "AI Agents", starter: "2", professional: "5", enterprise: "Unlimited" },
        { name: "Team members", starter: "3", professional: "10", enterprise: "Unlimited" },
      ],
    },
    {
      category: "Features",
      features: [
        { name: "Basic analytics", starter: true, professional: true, enterprise: true },
        { name: "Advanced analytics", starter: false, professional: true, enterprise: true },
        { name: "Custom integrations", starter: false, professional: true, enterprise: true },
        { name: "A/B testing", starter: false, professional: true, enterprise: true },
        { name: "Custom development", starter: false, professional: false, enterprise: true },
        { name: "On-premise deployment", starter: false, professional: false, enterprise: true },
      ],
    },
    {
      category: "Support",
      features: [
        { name: "Email support", starter: true, professional: true, enterprise: true },
        { name: "Priority support", starter: false, professional: true, enterprise: true },
        { name: "24/7 phone support", starter: false, professional: false, enterprise: true },
        { name: "Dedicated account manager", starter: false, professional: false, enterprise: true },
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-[#00B9F1]/20 text-[#002E6E]">
              <Sparkles className="h-3 w-3 mr-1 inline" />
              Simple, Transparent Pricing
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Choose Your Plan
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Start with a 14-day free trial. No credit card required. Cancel anytime.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${!isYearly ? 'text-gray-900 font-semibold' : 'text-gray-600'}`}>
                Monthly
              </span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-[#002E6E]"
              />
              <span className={`text-lg ${isYearly ? 'text-gray-900 font-semibold' : 'text-gray-600'}`}>
                Yearly
              </span>
              {isYearly && (
                <Badge className="bg-[#00B9F1]/20 text-[#00B9F1]">
                  Save up to 17%
                </Badge>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const price = getPrice(plan);
              const savings = getSavings(plan);
              
              return (
                <Card
                  key={plan.name}
                  className={`relative ${
plan.highlighted
                       ? "border-[#00B9F1] border-2 shadow-2xl scale-105"
                       : "border-gray-200 shadow-lg"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-[#002E6E] text-white px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-3xl mb-2">{plan.name}</CardTitle>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                    <div className="mt-6">
                      <span className="text-5xl font-bold text-gray-900">{price.display}</span>
                      <span className="text-gray-600 text-lg">{price.period}</span>
                      {savings && (
                        <p className="text-sm text-[#00B9F1] mt-2 font-semibold">
                          Save ${savings.amount} ({savings.percentage}% off)
                        </p>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button
                      className={`w-full mb-6 ${
plan.highlighted
                           ? "bg-[#002E6E] hover:bg-[#001f4d]"
                           : "bg-gray-900 hover:bg-gray-800"
                      }`}
                      size="lg"
                      asChild
                    >
                      <Link to="/contact">
                        {plan.monthlyPrice === null ? "Contact Sales" : "Start Free Trial"}
                      </Link>
                    </Button>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          {feature.included ? (
                            <CheckCircle2 className="h-5 w-5 text-[#00B9F1] mr-3 mt-0.5 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300 mr-3 mt-0.5 flex-shrink-0" />
                          )}
                          <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Detailed Feature Comparison
            </h2>
            <p className="text-xl text-gray-600">
              See exactly what's included in each plan
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            {comparisonFeatures.map((category, categoryIndex) => (
              <div key={categoryIndex} className={categoryIndex > 0 ? "border-t border-gray-200" : ""}>
                <div className="bg-gray-50 px-6 py-4">
                  <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
                </div>
                {category.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="grid grid-cols-4 gap-4 px-6 py-4 border-t border-gray-100 items-center"
                  >
                    <div className="col-span-1 text-gray-700">{feature.name}</div>
                    <div className="text-center">
                      {typeof feature.starter === 'boolean' ? (
                        feature.starter ? (
                          <CheckCircle2 className="h-5 w-5 text-[#10B981] mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-900 font-medium">{feature.starter}</span>
                      )}
                    </div>
                    <div className="text-center">
                      {typeof feature.professional === 'boolean' ? (
                        feature.professional ? (
                          <CheckCircle2 className="h-5 w-5 text-[#10B981] mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-900 font-medium">{feature.professional}</span>
                      )}
                    </div>
                    <div className="text-center">
                      {typeof feature.enterprise === 'boolean' ? (
                        feature.enterprise ? (
                          <CheckCircle2 className="h-5 w-5 text-[#10B981] mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-900 font-medium">{feature.enterprise}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pricing FAQs
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Can I change plans later?",
                a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the difference.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards (Visa, Mastercard, American Express) and can arrange invoicing for annual Enterprise plans.",
              },
              {
                q: "Is there a setup fee?",
                a: "No setup fees for any plan. You only pay the monthly or annual subscription fee.",
              },
              {
                q: "What happens after the free trial?",
                a: "After your 14-day trial ends, you'll be automatically enrolled in your chosen plan. You can cancel anytime during the trial with no charges.",
              },
              {
                q: "Do you offer discounts for nonprofits or educational institutions?",
                a: "Yes! We offer special pricing for qualified nonprofits and educational institutions. Contact our sales team for details.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#002E6E] to-[#00B9F1] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Our team is here to help you find the perfect plan for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#002E6E] hover:bg-gray-100" asChild>
              <Link to="/contact">
                Talk to Sales
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white !text-white hover:bg-white/10" asChild>
              <Link to="/products">Explore Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
