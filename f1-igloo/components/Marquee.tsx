"use client";

import { useEffect, useRef } from "react";

export default function Marquee() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const on = () => el.style.setProperty("--play", "running");
    const off = () => el.style.setProperty("--play", "paused");
    el.addEventListener("mouseenter", off);
    el.addEventListener("mouseleave", on);
    on();
    return () => {
      el.removeEventListener("mouseenter", off);
      el.removeEventListener("mouseleave", on);
    };
  }, []);

  const items = ["AERO", "DRS", "PIT", "POLE", "SLICK", "ERS", "HYBRID", "FLOW", "GRIP", "PACE"];

  const style: React.CSSProperties & { [key: string]: string } = {
    overflow: "hidden",
  };
  style["--play"] = "running";
  style["--speed"] = "40s";

  return (
    <div className="mt-16 border-y border-white/10 bg-white/5">
      <div ref={ref} className="relative" style={style}>
        <div className="flex whitespace-nowrap [animation:marquee_var(--speed)_linear_infinite] [animation-play-state:var(--play)]">
          {Array.from({ length: 3 }).map((_, loop) => (
            <div key={loop} aria-hidden className="flex min-w-full items-center justify-around gap-12 py-5">
              {items.map((t, i) => (
                <span key={`${loop}-${i}`} className="text-sm md:text-base tracking-widest uppercase text-white/60">
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}