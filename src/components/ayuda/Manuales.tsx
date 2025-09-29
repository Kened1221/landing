"use client";

import { FileText, Download, ArrowRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ManualItem } from "../types/ayuda";

const manuals: ManualItem[] = [
  {
    title: "Manual de Usuario",
    subtitle: "Guía completa para el uso del sistema",
    description:
      "Este recurso proporciona instrucciones detalladas y ejemplos prácticos para el uso efectivo de los módulos del sistema.",

    href: "https://std.munikimbiri.gob.pe:8181/recursos/manuales/Manual_STD.pdf",
    size: "2.4 MB",
  },
  {
    title: "Guía Rápida",
    subtitle: "Instrucciones básicas para nuevos usuarios",
    description:
      "Este recurso proporciona instrucciones detalladas y ejemplos prácticos para el uso efectivo de los módulos del sistema.",

    href: "https://std.munikimbiri.gob.pe:8181/recursos/manuales/Guia_Rapida.pdf",
    size: "1.2 MB",
  },
  {
    title: "Manual de Administrador",
    subtitle: "Configuración y gestión del sistema",
    description:
      "Este recurso proporciona instrucciones detalladas y ejemplos prácticos para el uso efectivo de los módulos del sistema.",
    href: "https://std.munikimbiri.gob.pe:8181/recursos/manuales/Manual_Administrador.pdf",
    size: "3.1 MB",
  },
];

export default function Manuales() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-chart-1/10 rounded-xl p-6">
          <div className="text-3xl font-bold text-primary">
            {manuals.length}
          </div>
          <div className="text-md text-muted-foreground font-semibold mt-1">
            Manuales disponibles
          </div>
        </div>
        <div className="bg-chart-2/10 rounded-xl p-6">
          <div className="text-3xl font-bold text-foreground">24</div>
          <div className="text-md text-muted-foreground font-semibold mt-1">
            Páginas promedio
          </div>
        </div>
        <div className="bg-chart-3/10 rounded-xl p-6">
          <div className="text-3xl font-bold text-foreground">100%</div>
          <div className="text-md text-muted-foreground font-semibold mt-1">Actualizado</div>
        </div>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {manuals.map((manual) => (
          <div key={manual.href} className="group">
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <CardTitle className="flex items-center gap-3 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    {manual.title}
                  </CardTitle>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                    <Download className="h-3 w-3" />
                    {manual.size}
                  </div>
                </div>
                <CardDescription className="text-sm leading-relaxed mt-2">
                  {manual.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
                    {manual.description}
                  </p>
                </div>
                <a
                  href={manual.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/card inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-all duration-200 w-full justify-center px-4 py-3 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                  aria-label={`Descargar ${manual.title} en PDF`}
                >
                  <Download className="h-4 w-4 group-hover/card:-translate-x-1 transition-transform" />
                  Descargar PDF
                  <ArrowRight className="ml-auto text-xs" />
                </a>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
