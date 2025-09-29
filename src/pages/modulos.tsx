"use client";

import Card from "@/components/card/Card";
import BodyModulos from "@/components/modulos/BodyModulos";
import HeaderModulos from "@/components/modulos/HeaderModulos";
import { modules } from "@/components/modulos/Modulos";

export default function ModulosPage() {
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto gap-8 z-10 pt-20">
      <HeaderModulos />
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module, index) => (
          <Card key={index} {...module} />
        ))}
      </div>
      <BodyModulos />
    </div>
  );
}
