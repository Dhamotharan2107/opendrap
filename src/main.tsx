<<<<<<< HEAD
import { createRoot } from "react-dom/client";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';
import App from "./app/App.tsx";
import "./styles/index.css";
import "./styles/components.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <HelmetProvider>
    <App />
    <Toaster richColors closeButton />
  </HelmetProvider>
);
=======
  import { createRoot } from "react-dom/client";
  import { HelmetProvider } from 'react-helmet-async';
  import App from "./app/App.tsx";
  import "./styles/index.css";
  import "./styles/components.css";

  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error('Root element not found');
  }

  createRoot(rootElement).render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
  