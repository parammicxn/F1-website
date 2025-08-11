"use client";

import { useEffect, PropsWithChildren } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1.1,
      lerp: 0.09,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      (lenis as unknown as { destroy?: () => void }).destroy?.();
    };
  }, []);

  return <>{children}</>;
}