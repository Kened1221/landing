"use client";

import {
  FileText,
  Users,
  CheckCircle,
  Network,
  Settings,
  Footprints,
} from "lucide-react";
import Card from "@/components/card/Card";

const modules = [
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
    gradient: "from-cyan-400 to-blue-500",
  },
];

export default function ModulosPage() {
  return (
    <div className="flex flex-col min-h-screen z-10 pt-20">
      <div className="flex flex-col gap-8 mx-auto my-auto p-4 max-w-7xl">
        <div className="flex flex-col text-center mx-auto gap-4">
          <h1 className="flex flex-col gap-3 text-xl sm:text-3xl md:text-5xl font-bold text-primary">
            Módulos del Sistema
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground text-justify font-semibold">
            Explora todas las herramientas diseñadas para transformar la gestión
            documental.
          </p>
        </div>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <Card key={index} {...module} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
