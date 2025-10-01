import {
  FileText,
  Users,
  Network,
  CheckCircle,
  Settings,
  Footprints,
  Menu,
  X,
  LogIn,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ViewKey } from "./NavBar";

const quickLinks = [
  {
    title: "Sistema de trámite documentario",
    description: "Gestión eficiente de documentos con firma digital",
    url: "/sgd/login.do",
    icon: FileText,
    gradient: "from-red-400 to-purple-500",
  },
  {
    title: "Mesa de partes del ciudadano",
    description: "Trámites virtuales al alcance de todos los ciudadanos",
    url: "https://mesadepartes.munikimbiri.gob.pe",
    icon: Users,
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    title: "Mesa de partes virtual Interoperabilidad",
    description: "Interoperabilidad entre entidades públicas",
    url: "/mpv/login.jsf",
    icon: Network,
    gradient: "from-purple-400 to-pink-500",
  },
  {
    title: "Verificación de documentos",
    description: "Valida documentos internos y profesionales",
    url: "/verifica/inicio.do",
    icon: CheckCircle,
    gradient: "from-orange-400 to-red-500",
  },
  {
    title: "Configuraciones del SGD",
    description: "Personaliza el sistema de trámite a tu medida",
    url: "https://config.munikimbiri.gob.pe",
    icon: Settings,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    title: "Seguimiento de documentos",
    description: "Monitorea el estado de tus trámites realizados",
    url: "https://seguimiento.munikimbiri.gob.pe",
    icon: Footprints,
    gradient: "from-green-400 to-emerald-500",
  },
];

export function MobileMenu({
  routes,
  selected,
  onSelect,
  openSheet,
  setOpenSheet,
}: {
  routes: { key: ViewKey; label: string; icon: React.ReactNode }[];
  selected: ViewKey;
  onSelect: (v: ViewKey) => void;
  openSheet: boolean;
  setOpenSheet: (v: boolean) => void;
}) {
  return (
    <div className="md:hidden w-full flex justify-end pt-8">
      <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="bg-white/80 border-white/10 text-foreground"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-80 h-full bg-background border-none rounded-l-xl p-0 overflow-y-auto"
        >
          <div className="flex flex-col gap-4 px-6 py-6 border-b border-border/40">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <h2 className="text-sm font-bold">SGD</h2>
                  <p className="text-xs text-muted-foreground">GOBIERNO REGIONAL DE AYACUCHO</p>
                </div>
              </div>
              <button
                onClick={() => setOpenSheet(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="text-primary" />
              </button>
            </div>

            <div className="w-full">
              <a
                href="https://std.munikimbiri.gob.pe:8181/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button className="w-full justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-white text-sm font-semibold shadow hover:shadow-lg hover:brightness-110 transition-all duration-300">
                  <LogIn className="w-4 h-4" />
                  Iniciar sesión
                </Button>
              </a>
            </div>
          </div>

          <nav className="flex flex-col gap-1 p-2">
            {routes.map((r) => {
              const isActive = selected === r.key;
              return (
                <button
                  key={r.key}
                  onClick={() => {
                    onSelect(r.key);
                    setOpenSheet(false);
                  }}
                  className={cn(
                    "flex flex-col items-start px-4 py-3 rounded-lg text-left transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted text-foreground"
                  )}
                >
                  <div className="flex items-center gap-2 font-medium">
                    {r.icon}
                    {r.label}
                  </div>
                  {r.key === "inicio" && (
                    <p className="text-xs opacity-80">
                      Página principal del SGD
                    </p>
                  )}
                  {r.key === "modulos" && (
                    <p className="text-xs opacity-80">
                      Gestión documental y trámites
                    </p>
                  )}
                  {r.key === "ayuda" && (
                    <p className="text-xs opacity-80">Documentación y ayuda</p>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="px-6">
            <h3 className="text-md font-semibold text-muted-foreground mb-2">
              Acciones rápidas
            </h3>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors justify-center"
                >
                  <link.icon className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{link.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {link.description}
                    </p>
                  </div>
                  <span className="text-muted-foreground text-xs">↗</span>
                </a>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
