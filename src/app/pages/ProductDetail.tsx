import { Link, useParams } from "react-router";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare,
  Clock,
  Users,
  TrendingUp,
  Zap,
  ShoppingCart,
  Receipt,
  HeartPulse,
  ExternalLink,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ProductDetail() {
  const { productId } = useParams();

  const productData: Record<string, any> = {
    "whatfy": {
      title: "Whatfy",
      subtitle: "Run Your Entire Business Through WhatsApp",
      description: "Whatfy deploys intelligent WhatsApp agents that automate your shop, invoicing, and health reminders. No app downloads, no complex setup — just WhatsApp.",
      image: "",
      features: [
        { title: "Shop Agent", description: "Track inventory in real time, get low-stock alerts, and manage orders — all through WhatsApp messages." },
        { title: "Invoice Agent", description: "Auto-generate professional invoices and send them as images directly to customers via WhatsApp." },
        { title: "Health Agent", description: "Send medication reminders and health alerts to patients on schedule, automatically." },
        { title: "Multi-Agent Dashboard", description: "Manage all your agents, view logs, and configure flows from one unified dashboard." },
        { title: "Instant Notifications", description: "Get real-time WhatsApp alerts for low stock, new orders, and missed reminders." },
        { title: "Easy Onboarding", description: "Register, connect your WhatsApp number, and your agents are live in minutes." },
      ],
      useCases: [
        { title: "Retail & Inventory", description: "Shop owners track stock levels and receive reorder alerts without leaving WhatsApp." },
        { title: "Freelancers & SMBs", description: "Auto-send invoices to clients the moment a job is completed." },
        { title: "Clinics & Pharmacies", description: "Send daily medication reminders to patients to improve adherence." },
        { title: "Field Teams", description: "Agents notify field staff about order updates and delivery confirmations instantly." },
      ],
    },
    "whatsapp-ai": {
      title: "WhatsApp AI Agent",
      subtitle: "Transform Customer Service on WhatsApp",
      description: "Automate your WhatsApp customer service with intelligent AI agents that understand context, handle complex queries, and provide instant support 24/7.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1080&q=80",
      features: [
        { title: "24/7 Automated Support", description: "Never miss a customer inquiry. AI agents work round the clock to provide instant responses." },
        { title: "Multi-Language Support", description: "Communicate with customers in their preferred language with automatic translation." },
        { title: "Smart Routing", description: "Intelligently route complex queries to human agents when needed with full context." },
        { title: "Order Processing", description: "Handle orders, payments, and transactions directly through WhatsApp." },
        { title: "Rich Media Support", description: "Send images, videos, documents, and interactive buttons in conversations." },
        { title: "Analytics Dashboard", description: "Track conversation metrics, customer satisfaction, and agent performance." },
      ],
      useCases: [
        { title: "E-commerce Support", description: "Handle product inquiries, order tracking, and returns automatically." },
        { title: "Appointment Booking", description: "Let customers book and manage appointments via WhatsApp." },
        { title: "Lead Qualification", description: "Qualify leads and schedule sales calls without human intervention." },
        { title: "Customer Feedback", description: "Collect feedback and reviews through conversational surveys." },
      ],
    },
    "cloud-manager": {
      title: "CloudManager",
      subtitle: "Your Entire Google Workspace in One Dashboard",
      description: "Connect your Google account and manage everything in one place — Drive files, Gmail, Docs, Sheets, and Photos. Add, move, copy, delete and organise with ease.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1080&q=80",
      features: [
        { title: "Google Drive Management", description: "Browse, upload, move, copy, rename and delete files and folders with full control." },
        { title: "Gmail Integration", description: "View, search and manage your emails directly without switching tabs." },
        { title: "Docs & Sheets", description: "Open and manage Google Docs and Sheets files right from the dashboard." },
        { title: "Google Photos", description: "Browse and organise your photo library — albums, shared photos and more." },
        { title: "Smart Organiser", description: "Bulk move, copy, and organise files across Drive folders in seconds." },
        { title: "Unified Search", description: "Search across all Google services from a single search bar instantly." },
      ],
      useCases: [
        { title: "Team File Management", description: "Organise and share Drive files across your team without switching apps." },
        { title: "Email & Doc Workflow", description: "Manage Gmail threads and linked Docs side by side in one view." },
        { title: "Media Organisation", description: "Sort and manage Google Photos albums for clients or projects." },
        { title: "Bulk Operations", description: "Move or copy hundreds of files across folders in a single action." },
      ],
    },
    "website-dev": {
      title: "Website Development",
      subtitle: "Modern Websites Built for Performance & Growth",
      description: "Modern, responsive websites built with cutting-edge tech. Fast, secure, SEO-optimized, and conversion-focused. Start with our 7-day free trial.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1080&q=80",
      features: [
        { title: "Responsive Design", description: "Pixel-perfect layouts that look stunning on every device and screen size." },
        { title: "SEO Optimized", description: "Built-in SEO best practices to rank higher and drive organic traffic." },
        { title: "Lightning Fast Loading", description: "Optimized performance with 90+ PageSpeed scores out of the box." },
        { title: "CMS Integration", description: "Easy content management so your team can update pages without developers." },
        { title: "Security Hardening", description: "SSL, firewall, and security patches to keep your site protected 24/7." },
        { title: "Analytics & Tracking", description: "Full Google Analytics and conversion tracking setup included." },
      ],
      useCases: [
        { title: "Business Websites", description: "Professional sites that convert visitors into leads and customers." },
        { title: "E-commerce Stores", description: "Fast, secure online stores with seamless checkout experiences." },
        { title: "Landing Pages", description: "High-converting campaign pages built and deployed rapidly." },
        { title: "Website Revamps", description: "Modernise your existing site with our 7-day free audit and fix trial." },
      ],
    },
    "mobile-apps": {
      title: "Mobile App Development",
      subtitle: "Native & Cross-Platform Apps That Drive Growth",
      description: "Native iOS & Android apps and cross-platform solutions that deliver exceptional experiences and drive measurable business growth.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1080&q=80",
      features: [
        { title: "iOS & Android", description: "Native apps for both platforms or cross-platform with React Native / Flutter." },
        { title: "Cloud Synchronization", description: "Real-time data sync across devices with secure cloud backend." },
        { title: "Push Notifications", description: "Targeted push notifications to re-engage users and drive retention." },
        { title: "Offline Capabilities", description: "Apps that work seamlessly even without an internet connection." },
        { title: "App Store Deployment", description: "Full submission and approval support for App Store and Google Play." },
        { title: "Analytics Integration", description: "In-app analytics to track user behaviour and improve engagement." },
      ],
      useCases: [
        { title: "Customer Apps", description: "Branded apps that keep your customers engaged and coming back." },
        { title: "Field Service Apps", description: "Mobile tools for teams working on-site with offline support." },
        { title: "On-demand Platforms", description: "Marketplace and delivery apps with real-time tracking." },
        { title: "Internal Tools", description: "Custom apps to streamline internal operations and workflows." },
      ],
    },
    "chatbot": {
      title: "AI Chatbot Platform",
      subtitle: "Intelligent Chatbots for Every Channel",
      description: "Multi-channel intelligent chatbots for web, apps, and social platforms. Engage visitors, capture leads, and automate support 24/7.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1080&q=80",
      features: [
        { title: "Multi-Channel Deployment", description: "Deploy on website, WhatsApp, Facebook, Instagram, and more from one platform." },
        { title: "Natural Language Processing", description: "Understands intent and context for human-like conversations." },
        { title: "Self-Learning AI", description: "Continuously improves from every conversation to get smarter over time." },
        { title: "Analytics Dashboard", description: "Track engagement, resolution rates, and drop-off points in real time." },
        { title: "Lead Capture", description: "Automatically collect and qualify leads through conversational flows." },
        { title: "Human Handoff", description: "Seamlessly transfer to a live agent when the conversation needs a human touch." },
      ],
      useCases: [
        { title: "Website Lead Generation", description: "Engage visitors instantly and capture leads before they bounce." },
        { title: "Customer Support", description: "Resolve common queries automatically, reducing support ticket volume." },
        { title: "Product Recommendations", description: "Guide users to the right product through conversational discovery." },
        { title: "Booking & Scheduling", description: "Let customers book appointments or demos directly through chat." },
      ],
    },
    "automation": {
      title: "Business Automation",
      subtitle: "Eliminate Repetitive Work. Scale Faster.",
      description: "End-to-end workflow automation that connects your tools, eliminates repetitive tasks, reduces costs, and lets your team focus on what matters.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1080&q=80",
      features: [
        { title: "No-Code Workflow Builder", description: "Build powerful automations visually — no coding required." },
        { title: "1000+ Integrations", description: "Connect with your existing tools — CRM, email, Slack, Sheets, and more." },
        { title: "Scheduled Automations", description: "Run workflows on a schedule or trigger them based on events." },
        { title: "Error Handling & Alerts", description: "Get notified instantly when a workflow fails with detailed logs." },
        { title: "Data Transformation", description: "Map, filter, and transform data between systems automatically." },
        { title: "Multi-Step Workflows", description: "Chain complex multi-step processes with conditional logic and branching." },
      ],
      useCases: [
        { title: "Lead Nurturing", description: "Automatically follow up with leads based on their behaviour and stage." },
        { title: "Invoice & Billing", description: "Auto-generate and send invoices when deals are closed." },
        { title: "Data Sync", description: "Keep your CRM, spreadsheets, and databases always in sync." },
        { title: "Onboarding Flows", description: "Automate new customer or employee onboarding from day one." },
      ],
    },
    "workflow": {
      title: "Workflow Management",
      subtitle: "Optimise Processes. Empower Your Team.",
      description: "Optimize business processes with intelligent workflow management, task automation, and real-time team collaboration.",
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1080&q=80",
      features: [
        { title: "Process Visualization", description: "Map and visualise your entire business process with drag-and-drop tools." },
        { title: "Task Automation", description: "Automate task assignment, reminders, and escalations automatically." },
        { title: "Team Collaboration", description: "Real-time comments, file sharing, and status updates in one place." },
        { title: "Performance Tracking", description: "Monitor SLAs, bottlenecks, and team productivity with live dashboards." },
        { title: "Role-Based Access", description: "Control who sees and edits what with granular permission settings." },
        { title: "Audit Trail", description: "Full history of every action taken on every task for compliance." },
      ],
      useCases: [
        { title: "Project Management", description: "Track projects from kickoff to delivery with full visibility." },
        { title: "Approval Workflows", description: "Automate multi-level approvals for documents, budgets, and requests." },
        { title: "HR Processes", description: "Streamline leave requests, onboarding, and performance reviews." },
        { title: "Client Delivery", description: "Manage client deliverables with clear timelines and accountability." },
      ],
    },
    "crm": {
      title: "CRM & Analytics",
      subtitle: "Know Your Customers. Grow Your Revenue.",
      description: "Comprehensive customer relationship management with powerful analytics and insights for smarter business decisions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1080&q=80",
      features: [
        { title: "Customer Management", description: "Centralise all customer data, interactions, and history in one place." },
        { title: "Sales Pipeline Tracking", description: "Visualise your pipeline and forecast revenue with drag-and-drop stages." },
        { title: "Advanced Analytics", description: "Deep-dive reports on sales performance, churn, and customer lifetime value." },
        { title: "Custom Reports", description: "Build and schedule custom reports tailored to your business metrics." },
        { title: "Email & Activity Tracking", description: "Log every email, call, and meeting automatically against the right contact." },
        { title: "Automation Rules", description: "Trigger follow-ups, tasks, and alerts based on customer behaviour." },
      ],
      useCases: [
        { title: "Sales Teams", description: "Give your sales reps a clear view of their pipeline and next actions." },
        { title: "Customer Retention", description: "Identify at-risk customers early and act before they churn." },
        { title: "Marketing Campaigns", description: "Segment customers and run targeted campaigns from within the CRM." },
        { title: "Executive Reporting", description: "Real-time dashboards for leadership to track business health at a glance." },
      ],
    },
  };

  const product = productData[productId ?? ""] ?? productData["whatsapp-ai"];

  const stats = [
    { icon: Clock, value: "80%", label: "Faster Response Time" },
    { icon: Users, value: "5x", label: "More Conversations" },
    { icon: TrendingUp, value: "95%", label: "Customer Satisfaction" },
    { icon: Zap, value: "60%", label: "Cost Reduction" },
  ];

  const externalUrls: Record<string, string> = {
    "cloud-manager": "https://cloudmanager.opendrap.website",
    "whatfy": "https://whatfy.opendrap.website",
  };
  const externalUrl = externalUrls[productId ?? ""];

  const P = "#1E90FF";
  const A = "#00FFC6";
  const BG = "#0B0F1A";
  const S  = "#111827";
  const S2 = "#0d1526";

  return (
    <div style={{ background: BG }} className="overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative overflow-hidden py-28" style={{ background: `linear-gradient(135deg, ${BG} 0%, ${S2} 50%, #0f1d3a 100%)` }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(30,144,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(30,144,255,0.05) 1px,transparent 1px)`, backgroundSize: "48px 48px" }} />
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(30,144,255,0.10)" }} />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(0,255,198,0.06)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-5 text-sm px-4 py-2 border font-semibold" style={{ background: `rgba(30,144,255,0.12)`, borderColor: `rgba(30,144,255,0.25)`, color: A }}>
                AI-Powered Solution
              </Badge>
              <h1 className="text-5xl font-black text-white mb-4 tracking-tight">{product.title}</h1>
              <p className="text-2xl font-semibold mb-6" style={{ color: A }}>{product.subtitle}</p>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: "#B0B0B0" }}>{product.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="font-bold h-[52px] px-8 text-white border-0"
                  style={{ background: `linear-gradient(135deg, ${P}, ${A})`, boxShadow: `0 0 25px rgba(30,144,255,0.4)` }} asChild>
                  <Link to="/contact">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                {externalUrl && (
                  <a href={externalUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 h-[52px] rounded-lg text-base font-semibold text-white transition-all duration-200"
                    style={{ border: `2px solid rgba(0,255,198,0.4)`, color: A }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(0,255,198,0.1)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                  >Visit Live Site <ArrowRight className="ml-2 h-5 w-5" /></a>
                )}
                <Link to="/contact"
                  className="inline-flex items-center justify-center px-8 h-[52px] rounded-lg text-base font-semibold text-white transition-all duration-200"
                  style={{ border: `2px solid rgba(30,144,255,0.3)` }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(30,144,255,0.1)"; (e.currentTarget as HTMLElement).style.borderColor = `rgba(0,255,198,0.5)`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(30,144,255,0.3)"; }}
                >Contact Sales</Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ border: "1px solid rgba(30,144,255,0.2)" }}>
              {productId === "cloud-manager" ? (
                <ImageWithFallback src={product.image} alt={product.title} className="w-full h-auto" />
              ) : productId === "whatsapp-ai" ? (
                <div className="rounded-2xl overflow-hidden" style={{ background: "#0d1526", border: "1px solid rgba(37,211,102,0.2)" }}>
                  {/* WhatsApp chat mockup */}
                  <div className="flex items-center gap-3 px-5 py-4" style={{ background: "linear-gradient(90deg, rgba(37,211,102,0.12), rgba(18,140,126,0.08))", borderBottom: "1px solid rgba(37,211,102,0.15)" }}>
                    <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg">
                      <span className="text-white font-black text-sm">AI</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-sm">OPENDRAP AI Agent</div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse" />
                        <span className="text-[11px]" style={{ color: "rgba(74,222,128,0.7)" }}>Online · Replies instantly</span>
                      </div>
                    </div>
                    <div className="text-right bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl px-3 py-1.5">
                      <div className="text-[#4ade80] text-xs font-black">24/7</div>
                      <div className="text-white/30 text-[10px]">active</div>
                    </div>
                  </div>
                  <div className="px-5 py-5 space-y-3" style={{ background: "rgba(0,0,0,0.25)" }}>
                    {[
                      { from: "user",  text: "Hi! I need to track my order #4821 🛍️" },
                      { from: "agent", text: "Order #4821 is out for delivery! 🚚 Arriving today by 5 PM. Track here 👉" },
                      { from: "user",  text: "Can I reschedule to tomorrow?" },
                      { from: "agent", text: "Done! ✅ Rescheduled to tomorrow 10 AM–2 PM. You'll get a confirmation SMS shortly." },
                    ].map((msg, i) => (
                      <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start gap-2 items-end"}`}>
                        {msg.from === "agent" && (
                          <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 text-white text-[9px] font-black">AI</div>
                        )}
                        <div className="rounded-2xl px-4 py-2.5 max-w-[75%]"
                          style={msg.from === "user"
                            ? { background: "rgba(37,211,102,0.18)", border: "1px solid rgba(37,211,102,0.25)" }
                            : { background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }
                          }>
                          <p className="text-white/85 text-xs leading-relaxed">{msg.text}</p>
                        </div>
                      </div>
                    ))}
                    <div className="flex gap-2 items-end">
                      <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 text-white text-[9px] font-black">AI</div>
                      <div className="rounded-2xl px-4 py-3 flex items-center gap-1.5" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
                        <span className="w-2 h-2 rounded-full bg-[#25D366]/70 typing-dot-1" />
                        <span className="w-2 h-2 rounded-full bg-[#25D366]/70 typing-dot-2" />
                        <span className="w-2 h-2 rounded-full bg-[#25D366]/70 typing-dot-3" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 divide-x border-t" style={{ borderColor: "rgba(37,211,102,0.1)", background: "rgba(0,0,0,0.3)" }}>
                    {[
                      { label: "Chats/day", value: "12K+", color: "#25D366" },
                      { label: "Resolved",  value: "98%",  color: "#00FFC6" },
                      { label: "Avg Reply", value: "0.8s", color: "#f59e0b" },
                    ].map((s) => (
                      <div key={s.label} className="px-4 py-3 text-center" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                        <div className="font-black text-sm" style={{ color: s.color }}>{s.value}</div>
                        <div className="text-white/50 text-[10px] mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : productId === "whatfy" ? (
                /* Whatfy — 3-agent mockup */
                <div className="rounded-2xl overflow-hidden" style={{ background: "#0d1526", border: "1px solid rgba(37,211,102,0.2)" }}>
                  {/* Header */}
                  <div className="flex items-center gap-3 px-5 py-4" style={{ background: "linear-gradient(90deg,rgba(37,211,102,0.12),rgba(7,94,84,0.1))", borderBottom: "1px solid rgba(37,211,102,0.15)" }}>
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#25D366] to-[#075E54] flex items-center justify-center shadow-lg">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-sm">Whatfy Agent Platform</div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse" />
                        <span className="text-[11px]" style={{ color: "rgba(74,222,128,0.7)" }}>3 agents active</span>
                      </div>
                    </div>
                    <span className="text-[#25D366] text-xs font-black bg-[#25D366]/10 border border-[#25D366]/20 px-2.5 py-1 rounded-full">Live</span>
                  </div>
                  {/* Agent cards */}
                  <div className="px-5 py-5 space-y-3" style={{ background: "rgba(0,0,0,0.25)" }}>
                    {[
                      { emoji: "🛒", label: "Shop Agent",    msg: "⚠️ Low stock: Rice (5 kg left). Reorder now?",          color: "rgba(251,191,36,0.18)",  border: "rgba(251,191,36,0.3)" },
                      { emoji: "🧾", label: "Invoice Agent", msg: "✅ Invoice #1042 sent to Ravi Kumar via WhatsApp.",      color: "rgba(37,211,102,0.15)",  border: "rgba(37,211,102,0.25)" },
                      { emoji: "💊", label: "Health Agent",  msg: "💊 Reminder sent: Metformin 500mg — 8 PM dose.",        color: "rgba(99,102,241,0.18)",  border: "rgba(99,102,241,0.3)" },
                    ].map((a) => (
                      <div key={a.label} className="rounded-2xl px-4 py-3" style={{ background: a.color, border: `1px solid ${a.border}` }}>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-base">{a.emoji}</span>
                          <span className="text-white text-xs font-bold">{a.label}</span>
                        </div>
                        <p className="text-white/80 text-xs leading-relaxed">{a.msg}</p>
                      </div>
                    ))}
                    {/* Typing */}
                    <div className="flex gap-2 items-end">
                      <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 text-white text-[9px] font-black">W</div>
                      <div className="rounded-2xl px-4 py-3 flex items-center gap-1.5" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
                        <span className="w-2 h-2 rounded-full bg-[#25D366]/70 typing-dot-1" />
                        <span className="w-2 h-2 rounded-full bg-[#25D366]/70 typing-dot-2" />
                        <span className="w-2 h-2 rounded-full bg-[#25D366]/70 typing-dot-3" />
                      </div>
                    </div>
                  </div>
                  {/* Stats */}
                  <div className="grid grid-cols-3 divide-x border-t" style={{ borderColor: "rgba(37,211,102,0.1)", background: "rgba(0,0,0,0.3)" }}>
                    {[
                      { label: "Agents",   value: "3",    color: "#25D366" },
                      { label: "Messages", value: "Auto", color: "#00FFC6" },
                      { label: "Setup",    value: "5 min", color: "#f59e0b" },
                    ].map((s) => (
                      <div key={s.label} className="px-4 py-3 text-center" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                        <div className="font-black text-sm" style={{ color: s.color }}>{s.value}</div>
                        <div className="text-white/50 text-[10px] mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <ImageWithFallback src={product.image} alt={product.title} className="w-full h-auto" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16" style={{ background: S2, borderTop: "1px solid rgba(30,144,255,0.1)", borderBottom: "1px solid rgba(30,144,255,0.1)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: `linear-gradient(135deg, ${P}, ${A})` }}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-3xl font-black text-white mb-1">{stat.value}</p>
                  <p className="text-sm" style={{ color: "#B0B0B0" }}>{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{ background: BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Powerful Features</h2>
            <p className="text-xl" style={{ color: "#B0B0B0" }}>Everything you need to deliver exceptional customer experiences</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature: any, index: number) => (
              <div key={index} className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ background: S, border: "1px solid rgba(30,144,255,0.12)" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,198,0.3)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(30,144,255,0.12)"}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `linear-gradient(135deg, ${P}, ${A})` }}>
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#B0B0B0" }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20" style={{ background: S2 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4 tracking-tight">How It Works</h2>
            <p className="text-xl" style={{ color: "#B0B0B0" }}>Simple setup, powerful results</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Connect", description: "Integrate with your existing systems in minutes" },
              { step: "02", title: "Configure", description: "Customize AI behavior and conversation flows" },
              { step: "03", title: "Deploy", description: "Launch your AI agent and start automating" },
              { step: "04", title: "Optimize", description: "Monitor performance and continuously improve" },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-black text-sm shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${P}, ${A})` }}>
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm" style={{ color: "#B0B0B0" }}>{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5"
                    style={{ background: `linear-gradient(90deg, rgba(30,144,255,0.4), rgba(0,255,198,0.3))` }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20" style={{ background: BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Use Cases</h2>
            <p className="text-xl" style={{ color: "#B0B0B0" }}>Versatile solutions for various business needs</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {product.useCases.map((useCase: any, index: number) => (
              <div key={index} className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ background: S, border: "1px solid rgba(30,144,255,0.12)" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,198,0.3)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(30,144,255,0.12)"}
              >
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: A }} />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#B0B0B0" }}>{useCase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Whatfy Spotlight */}
      {productId === "whatfy" && (
        <section className="py-24 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${S2}, ${BG})` }}>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(37,211,102,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(37,211,102,0.07)" }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Badge className="mb-4 text-sm px-4 py-1.5 border font-semibold" style={{ background: "rgba(37,211,102,0.1)", color: "#25D366", borderColor: "rgba(37,211,102,0.25)" }}>✨ Now Live</Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-white">
                Meet{" "}
                <span style={{ background: "linear-gradient(90deg, #25D366, #00FFC6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Whatfy</span>
              </h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: "#B0B0B0" }}>Three powerful WhatsApp agents — Shop, Invoice, and Health — running your business on autopilot.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                {[
                  { emoji: "🛒", title: "Shop Agent",    desc: "Track inventory, get low-stock alerts, and manage orders entirely through WhatsApp." },
                  { emoji: "🧾", title: "Invoice Agent", desc: "Auto-generate professional invoices and send them as images to customers instantly." },
                  { emoji: "💊", title: "Health Agent",  desc: "Schedule and send medication reminders and health alerts to patients automatically." },
                  { emoji: "📊", title: "Unified Dashboard", desc: "Monitor all agents, view message logs, and configure flows from one place." },
                  { emoji: "⚡", title: "5-Minute Setup",  desc: "Register, connect your WhatsApp number, and your agents are live immediately." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-2xl transition-all duration-200 hover:-translate-x-1" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(37,211,102,0.1)" }}>
                    <span className="text-xl flex-shrink-0 mt-0.5">{item.emoji}</span>
                    <div>
                      <div className="font-semibold text-sm mb-0.5 text-white">{item.title}</div>
                      <div className="text-xs leading-relaxed" style={{ color: "#B0B0B0" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Dashboard mockup */}
              <div className="rounded-3xl p-6 shadow-2xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(37,211,102,0.2)", boxShadow: "0 0 60px rgba(37,211,102,0.08)" }}>
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-xs font-mono" style={{ color: "#B0B0B0" }}>Whatfy — Agent Dashboard</span>
                </div>
                <div className="space-y-3">
                  {[
                    { emoji: "🛒", agent: "Shop Agent",    status: "Active",  stat: "12 orders today",      statusColor: "#25D366" },
                    { emoji: "🧾", agent: "Invoice Agent", status: "Active",  stat: "8 invoices sent",       statusColor: "#25D366" },
                    { emoji: "💊", agent: "Health Agent",  status: "Active",  stat: "34 reminders sent",     statusColor: "#25D366" },
                  ].map((row) => (
                    <div key={row.agent} className="flex items-center justify-between px-4 py-3 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{row.emoji}</span>
                        <div>
                          <div className="text-xs font-semibold text-white">{row.agent}</div>
                          <div className="text-[10px]" style={{ color: "#B0B0B0" }}>{row.stat}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-1 rounded-full" style={{ background: "rgba(37,211,102,0.15)", color: row.statusColor }}>{row.status}</span>
                    </div>
                  ))}
                  <div className="px-4 py-3 rounded-xl" style={{ background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.2)" }}>
                    <div className="flex items-center gap-2">
                      <span>⚠️</span>
                      <span className="text-xs text-white/80">Low stock alert: <span className="text-yellow-400 font-semibold">Rice (5 kg left)</span></span>
                    </div>
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <a href="https://whatfy.opendrap.website" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:opacity-90"
                    style={{ background: "linear-gradient(135deg,#25D366,#075E54)", color: "#fff" }}>
                    Visit Whatfy <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CloudManager Spotlight */}
      {productId === "cloud-manager" && (
        <section className="py-24 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${S2}, ${BG})` }}>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(30,144,255,0.06) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(0,255,198,0.06)" }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Badge className="mb-4 text-sm px-4 py-1.5 border font-semibold" style={{ background: "rgba(0,255,198,0.1)", color: A, borderColor: "rgba(0,255,198,0.25)" }}>✨ Now Live</Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-white">
                Introducing{" "}
                <span style={{ background: `linear-gradient(90deg, ${P}, ${A})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>CloudManager</span>
              </h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: "#B0B0B0" }}>Your entire Google workspace — Drive, Gmail, Docs, Sheets, and Photos — managed from one powerful dashboard.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                {[
                  { emoji: "💾", title: "Google Drive",      desc: "Browse, upload, move, copy, rename and delete files and folders with full control." },
                  { emoji: "📧", title: "Gmail Integration", desc: "View, search and manage your emails directly without switching tabs." },
                  { emoji: "📄", title: "Docs & Sheets",     desc: "Open and manage Google Docs and Sheets files right from the dashboard." },
                  { emoji: "🖼️", title: "Google Photos",    desc: "Browse and organise your photo library — albums, shared photos and more." },
                  { emoji: "📂", title: "Smart Organiser",   desc: "Bulk move, copy, and organise files across Drive folders in seconds." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-2xl transition-all duration-200 hover:-translate-x-1" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(30,144,255,0.1)" }}>
                    <span className="text-xl flex-shrink-0 mt-0.5">{item.emoji}</span>
                    <div>
                      <div className="font-semibold text-sm mb-0.5 text-white">{item.title}</div>
                      <div className="text-xs leading-relaxed" style={{ color: "#B0B0B0" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-3xl p-6 shadow-2xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(30,144,255,0.2)", boxShadow: "0 0 60px rgba(30,144,255,0.1)" }}>
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-xs font-mono" style={{ color: "#B0B0B0" }}>CloudManager — My Drive</span>
                </div>
                <div className="flex gap-2 mb-4">
                  {["Drive", "Gmail", "Docs", "Photos"].map((tab, i) => (
                    <span key={tab} className="text-xs px-3 py-1.5 rounded-lg font-medium" style={i === 0 ? { background: `linear-gradient(135deg,${P},${A})`, color: "#0B0F1A" } : { background: "rgba(255,255,255,0.05)", color: "#B0B0B0" }}>{tab}</span>
                  ))}
                </div>
                <div className="space-y-2">
                  {[
                    { name: "Project Files",       type: "Folder", size: "—",      icon: "📁" },
                    { name: "Q4 Report.docx",      type: "Doc",    size: "2.4 MB", icon: "📄" },
                    { name: "Budget 2025.xlsx",    type: "Sheet",  size: "1.1 MB", icon: "📊" },
                    { name: "Team Photos",         type: "Album",  size: "340 MB", icon: "🖼️" },
                    { name: "Client Proposal.pdf", type: "PDF",    size: "5.2 MB", icon: "📋" },
                  ].map((file) => (
                    <div key={file.name} className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/5 cursor-pointer transition-colors" style={{ border: "1px solid rgba(255,255,255,0.04)" }}>
                      <div className="flex items-center gap-3">
                        <span className="text-base">{file.icon}</span>
                        <div>
                          <div className="text-xs font-medium text-white">{file.name}</div>
                          <div className="text-[10px]" style={{ color: "#B0B0B0" }}>{file.type}</div>
                        </div>
                      </div>
                      <span className="text-[10px]" style={{ color: "#B0B0B0" }}>{file.size}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 text-center">
                  <a href="https://cloudmanager.opendrap.website" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:opacity-90"
                    style={{ background: `linear-gradient(135deg,${P},${A})`, color: "#0B0F1A" }}>
                    Visit CloudManager <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  );
}