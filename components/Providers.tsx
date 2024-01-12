"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode, memo } from "react";

const ProvidersImpl = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export const Providers = memo(ProvidersImpl);
