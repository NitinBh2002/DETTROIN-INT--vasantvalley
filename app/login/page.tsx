import { Metadata } from "next";
import LoginPage from "@/src/widgets/login/LoginPage";

export const metadata: Metadata = {
  title: "Official Log In Portal | Vasant Valley School",
  description: "Access Vasant Valley School Digital Campus. Log in for Teachers, Students, and Parents to School ERP, School Email, Google Workspace & Online Fee Portal.",
};

export default function Login() {
  return <LoginPage />;
}
