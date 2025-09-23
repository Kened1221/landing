import { ReactNode, useState } from "react";
import { Home, FileText, Info } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

export type ViewKey = "inicio" | "modulos" | "ayuda";

const routes: { key: ViewKey; label: string; icon: ReactNode }[] = [
  { key: "inicio", label: "Inicio", icon: <Home className="h-4 w-4" /> },
  { key: "modulos", label: "Módulos", icon: <FileText className="h-4 w-4" /> },
  { key: "ayuda", label: "Ayuda", icon: <Info className="h-4 w-4" /> },
];

export function Navbar({
  selected,
  onSelect,
}: {
  selected: ViewKey;
  onSelect: (v: ViewKey) => void;
}) {
  const [openSheet, setOpenSheet] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="relative">
        {/* Menú móvil */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 md:hidden">
          <MobileMenu
            routes={routes}
            selected={selected}
            onSelect={onSelect}
            openSheet={openSheet}
            setOpenSheet={setOpenSheet}
          />
        </div>

        {/* Menú desktop */}
        <DesktopMenu routes={routes} selected={selected} onSelect={onSelect} />
      </div>
    </header>
  );
}
