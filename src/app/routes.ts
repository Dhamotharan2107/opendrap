import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { Contact } from "./pages/Contact";
import { Developer } from "./pages/Developer";
import { Pricing } from "./pages/Pricing";
<<<<<<< HEAD
import { SubmitReview } from "./pages/SubmitReview";
=======
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926

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
<<<<<<< HEAD
      { path: "submit-review", Component: SubmitReview },
=======
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
    ],
  },
]);
