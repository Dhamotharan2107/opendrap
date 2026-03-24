import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { Contact } from "./pages/Contact";
import { Developer } from "./pages/Developer";
import { Pricing } from "./pages/Pricing";
import { SubmitReview } from "./pages/SubmitReview";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import { About } from "./pages/About";
import { Team } from "./pages/Team";
import { CookiePolicy } from "./pages/CookiePolicy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "products/:productId", Component: ProductDetail },
      { path: "pricing", Component: Pricing },
      { path: "contact", Component: Contact },
      { path: "developer", Component: Developer },
      { path: "submit-review", Component: SubmitReview },
      { path: "about", Component: About },
      { path: "team", Component: Team },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "terms-of-service", Component: TermsOfService },
      { path: "cookie-policy", Component: CookiePolicy },
    ],
  },
]);
