"use client";

import { ShieldCheck, FileText, Link, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const modules = [
  {
    id: 1,
    title: "Mesa de Partes Digital",
    description: "Ingreso virtual de documentos sin acudir físicamente.",
    icon: FileText,
    image: "/modulos/mesa-partes.png",
  },
  {
    id: 2,
    title: "Firma Digital Certificada",
    description: "Garantiza autenticidad y evita falsificación.",
    icon: ShieldCheck,
    image: "/modulos/firma-digital.png",
  },
  {
    id: 3,
    title: "Interoperabilidad PIDE",
    description: "Conecta entidades públicas y acelera trámites.",
    icon: Link,
    image: "/modulos/pide.png",
  },
  {
    id: 4,
    title: "Trazabilidad 24/7",
    description: "Estado en tiempo real y transparencia total.",
    icon: Clock,
    image: "/modulos/trazabilidad.png",
  },
];

export default function TecnologiasIntegradas() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === modules.length ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (id: number) => {
    setActive(id);
  };

  return (
    <div className="w-full rounded-2xl shadow-xl p-6 flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        <div className="flex justify-start mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-800 border border-green-300">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            Sistema Operativo
          </span>
        </div>

        <h2 className="text-center text-2xl font-bold text-muted-foreground mb-8 tracking-tight">
          Tecnologías Integradas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {modules.map((mod) => {
            const Icon = mod.icon;
            const isActive = active === mod.id;
            return (
              <div
                key={mod.id}
                onClick={() => handleClick(mod.id)}
                className={`relative flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-500 ease-in-out text-center cursor-pointer ${
                  isActive
                    ? "bg-green-50 border-2 border-green-400 shadow-md scale-[1.01]"
                    : "bg-gray-50 hover:bg-gray-100 shadow-sm"
                }`}
              >
                <Icon
                  className={`w-10 h-10 mb-3 transition-colors duration-500 ${
                    isActive ? "text-green-600" : "text-gray-600"
                  }`}
                />
                <span
                  className={`text-base font-semibold transition-colors duration-500 ${
                    isActive ? "text-green-700" : "text-gray-800"
                  }`}
                >
                  {mod.title}
                </span>
                <span className="text-xs text-gray-600 mt-1">
                  {mod.description}
                </span>
                {isActive && (
                  <span className="absolute top-2 right-2 w-3.5 h-3.5 rounded-full bg-green-500 shadow-lg shadow-green-400 animate-pulse" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex-1 bg-gradient-to-b from-gray-50 to-gray-100 p-6 rounded-xl shadow-inner lg:w-1/3 flex items-center justify-center">
        <div className="aspect-square w-full flex items-center justify-center overflow-hidden rounded-xl shadow-md relative">
          {modules.map((mod) => (
            <img
              key={mod.id}
              src={mod.image}
              alt={mod.title}
              className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-700 ease-in-out ${
                active === mod.id ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
