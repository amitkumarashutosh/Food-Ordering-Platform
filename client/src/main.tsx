import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Auth0ProviderNavigate from "./auth/Auth0ProviderNavigate.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "./components/ui/sonner.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <Auth0ProviderNavigate>
          <App />
          <Toaster visibleToasts={1} position="top-right" richColors />
        </Auth0ProviderNavigate>
      </QueryClientProvider>
    </Router>
  </StrictMode>
);
