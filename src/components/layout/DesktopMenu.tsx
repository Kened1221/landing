"use client";

import { useEffect, useState } from "react";
import { LogIn } from "lucide-react";
import { cn } from "@/lib/utils";
import { ViewKey } from "./NavBar";
import { Button } from "../ui/button";

export default function DesktopMenu({
  routes,
  selected,
  onSelect,
}: {
  routes: { key: ViewKey; label: string; icon: React.ReactNode }[];
  selected: ViewKey;
  onSelect: (v: ViewKey) => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setScrolled(window.scrollY > 10);
      } else {
        setScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "w-full transition-colors duration-500 py-4 px-6",
        scrolled ? "bg-white/50 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="grid grid-cols-3 items-center">
        <div className="hidden md:flex justify-end">
          <img src="/images/logoi.png" alt="Entidad" className="h-16 w-auto" />
        </div>

        <div className="hidden md:flex justify-center">
          <div className="flex relative items-center bg-background gap-3 p-1 rounded-full border border-black/10 dark:border-white/10">
            {routes.map((r) => {
              const isActive = selected === r.key;
              return (
                <button
                  key={r.key}
                  onClick={() => onSelect(r.key)}
                  className={cn(
                    "relative z-10 flex items-center gap-2 px-7 py-3 text-sm font-medium rounded-full transition-all duration-300",
                    isActive
                      ? "text-primary-foreground cursor-default"
                      : "text-muted-foreground cursor-pointer hover:bg-primary/10 hover:text-primary"
                  )}
                >
                  {isActive && (
                    <div className="absolute inset-0 rounded-full bg-primary shadow-md transition-all duration-300" />
                  )}
                  <span className="relative z-10 flex items-center gap-2 tracking-wide">
                    {r.icon}
                    {r.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="hidden md:flex justify-center md:justify-end">
          <a
            href="https://std.munikimbiri.gob.pe:8181/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="inline-flex cursor-pointer items-center gap-2 px-7 py-5 rounded-xl bg-primary text-white font-semibold shadow-md hover:bg-primary/90 transition">
              <LogIn className="w-5 h-5" />
              Iniciar sesión
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
