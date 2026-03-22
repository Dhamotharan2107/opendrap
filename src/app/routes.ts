import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { Contact } from "./pages/Contact";
import { Developer } from "./pages/Developer";
import { Pricing } from "./pages/Pricing";
import { SubmitReview } from "./pages/SubmitReview";

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
    ],
  },
]);
