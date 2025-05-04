import Loader from "components/shared/Loader/Loader";
import { AuthProvider } from "Providers/AuthProvider";
import QueryProvider from "Providers/QueryProvider";
import { SnackbarProvider } from "Providers/SnackbarProvider";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("react") as HTMLElement
);
root.render(
  <Suspense fallback={<Loader />}>
    <AuthProvider>
      <QueryProvider>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </QueryProvider>
    </AuthProvider>
  </Suspense>
);
