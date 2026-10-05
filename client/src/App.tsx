import { useState } from "react";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import CustomerDashboard from "./components/CustomerDashboard";
import OwnerDashboard from "./components/OwnerDashboard";
import EmployeeDashboard from "./components/EmployeeDashboard";

export type Page =
  | "landing"
  | "login"
  | "register"
  | "customer"
  | "owner"
  | "employee";

export default function App() {
  const [page, setPage] = useState<Page>("landing");

  return (
    <div className="min-h-full bg-gray-50">
      {page === "landing" && <LandingPage setPage={setPage} />}
      {page === "login" && <LoginPage setPage={setPage} />}
      {page === "register" && <RegisterPage setPage={setPage} />}
      {page === "customer" && <CustomerDashboard setPage={setPage} />}
      {page === "owner" && <OwnerDashboard setPage={setPage} />}
      {page === "employee" && <EmployeeDashboard setPage={setPage} />}
    </div>
  );
}
