"use client";
import { SessionProvider } from "next-auth/react";
import ToastProvider from "./ToastProvider";

interface AppProvidersProps {
  children: React.ReactNode;
}

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <SessionProvider>
      <ToastProvider />
      {children}
    </SessionProvider>
  );
};

export default AppProviders;
