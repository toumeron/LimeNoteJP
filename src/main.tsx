import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { CompanyAccess } from "./components/CompanyAccess";
import "./styles.css";

const CompanySite = lazy(() => import("./CompanySite"));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CompanyAccess>
      <Suspense
        fallback={
          <p role="status" className="p-6">
            サイトを読み込んでいます…
          </p>
        }
      >
        <CompanySite />
      </Suspense>
    </CompanyAccess>
  </React.StrictMode>,
);
