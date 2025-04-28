import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/router";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <HelmetProvider>
          <div className="container mx-auto">
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
