"use client";

import { useEffect, useState } from "react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const distanceFromBottom = document.documentElement.scrollHeight - window.innerHeight - window.scrollY;

      setIsVisible(distanceFromBottom < 260);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      aria-label="Sayfanın en üstüne çık"
      className={`group fixed bottom-5 right-5 z-30 grid h-12 w-12 place-items-center rounded-full border border-[#d8b46a]/45 bg-zinc-950/82 text-xl font-semibold text-[#ffcf86] shadow-[0_18px_60px_rgba(0,0,0,0.45),0_0_0_1px_rgba(216,180,106,0.12)] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:border-[#ffcf86]/70 hover:bg-[#d8b46a]/20 hover:shadow-[0_24px_80px_rgba(216,180,106,0.35)] sm:bottom-8 sm:right-8 ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
      href="#top"
    >
      <span className="transition-transform group-hover:-translate-y-0.5">↑</span>
    </a>
  );
}
