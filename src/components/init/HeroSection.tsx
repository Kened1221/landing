"use client";

import { FileText, Search, Send, ArrowRight } from "lucide-react";
import ButtonI from "../button/button1";
import InitImg from "./InitImg";
import InitImgMovile from "./InitImgMovile";

export function HeroSection() {
  return (
    <div className="flex flex-col min-h-screen z-10">
      <div className="flex flex-col sm:flex-row gap-8 mx-auto my-auto p-4 max-w-7xl">
        <div className="flex flex-col w-full sm:w-1/2 gap-6 sm:gap-10">
          <h1 className="flex flex-col gap-3 text-4xl sm:text-5xl md:text-7xl font-bold">
            <span className="text-foreground">Sistema de</span>
            <span className="text-primary">Gestión</span>
            <span className="text-primary">Documental</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground text-justify font-semibold">
            Tecnología que optimiza la gestión y fortalece la confianza. Unifica
            expedientes, automatiza tareas y garantiza trazabilidad en cada
            paso.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <ButtonI
              url="https://example.com"
              icon={<ArrowRight size={20} aria-label="Ingresar al SGD" />}
              label="Ingresar al SGD"
              colorBg="bg-primary hover:bg-primary/90"
              colorBorder="border border-transparent"
              colorText="text-primary-foreground"
            />
            <ButtonI
              url="https://example.com"
              icon={<FileText size={20} aria-label="Mesa de Partes" />}
              label="Mesa de Partes"
              colorBg="bg-primary/5 hover:bg-primary/15"
              colorBorder="border border-primary/30"
              colorText="text-primary"
            />
            <ButtonI
              url="https://example.com"
              icon={<Search size={20} aria-label="Seguimiento SGD" />}
              label="Seguimiento SGD"
              colorBg="bg-primary/5 hover:bg-primary/15"
              colorBorder="border border-primary/30"
              colorText="text-primary"
            />
            <ButtonI
              url="https://example.com"
              icon={<Send size={20} aria-label="Portal Mesa de Partes" />}
              label="Portal Mesa de Partes"
              colorBg="bg-primary/5 hover:bg-primary/15"
              colorBorder="border border-primary/30"
              colorText="text-primary"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <InitImg />
        </div>

        <div className="block lg:hidden">
          <InitImgMovile />
        </div>
      </div>
    </div>
  );
}
