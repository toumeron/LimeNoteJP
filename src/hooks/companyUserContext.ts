import { createContext, useContext } from "react";
import type { CompanyUser } from "./useCompanyAuth";
export const CompanyUserContext = createContext<CompanyUser | null>(null);
export const useCompanyUser = () => useContext(CompanyUserContext);
