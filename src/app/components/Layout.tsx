import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ErrorBoundary } from "../../components/common/ErrorBoundary";
import { WhatsAppButton } from "../../components/common/WhatsAppButton";
import { generateOrganizationSchema, generateWebsiteSchema } from "../../utils/seo";

export const Layout: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify([organizationSchema, websiteSchema])}
      </script>
      <div className="min-h-screen flex flex-col font-inter">
        <Navbar />
        <ErrorBoundary>
          <main className="flex-1" role="main">
            <Outlet />
          </main>
        </ErrorBoundary>
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
};
