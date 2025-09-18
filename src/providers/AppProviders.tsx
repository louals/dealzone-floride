import type  { ReactNode } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

type Props = { children: ReactNode };

export function AppProviders({ children }: Props) {
  return (
    <ParallaxProvider>
        {children}
    </ParallaxProvider>
  );
}
