"use client";

import { BookOpen, FileText, FileSearch, Settings } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Manuales from "@/components/ayuda/Manuales";
import VideosSGD from "@/components/ayuda/VideosSGD";
import VideosTT from "@/components/ayuda/VideosTT";
import VideosMDP from "@/components/ayuda/VideosMDP";

export default function AyudaPage() {
  const tabs = [
    { value: "manuales", label: "Manuales", icon: <FileText className="h-4 w-4 mr-2" /> },
    { value: "tsgd", label: "Tutorial SGD", icon: <FileSearch className="h-4 w-4 mr-2" /> },
    { value: "tmdp", label: "Tutorial Mesa de Partes", icon: <BookOpen className="h-4 w-4 mr-2" /> },
    { value: "tt", label: "Tutoriales Técnicos", icon: <Settings className="h-4 w-4 mr-2" /> },
  ];

  return (
    <div className="flex flex-col h-full min-h-screen z-10">
      <div className="flex flex-col gap-8 p-4 max-w-7xl w-full items-center mx-auto">
        <div className="text-center pt-8 sm:pt-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide w-fit">
            <BookOpen className="h-4 w-4" />
            Centro de Ayuda
          </div>
          <h1 className="mb-2 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            <span className="block">Todo lo que necesitas</span>
            <span className="block text-primary">para empezar</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-muted-foreground">
            Manuales, guías y videos oficiales del Sistema de Gestión Documental{" "}
            <span className="font-semibold text-chart-1">RedOrange</span>.
          </p>
        </div>
        <div className="mx-auto w-full">
          <Tabs defaultValue="manuales" className="w-full">
            <TabsList className="grid w-full h-full grid-cols-1 sm:grid-cols-4 gap-2 mb-6 bg-background">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center justify-center gap-2 rounded-lg border border-muted bg-muted/40 px-4 py-4 text-sm font-medium hover:bg-primary/10 data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
                >
                  {tab.icon}
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="manuales">
              <Manuales />
            </TabsContent>
            <TabsContent value="tsgd">
              <VideosSGD />
            </TabsContent>
            <TabsContent value="tmdp">
              <VideosMDP />
            </TabsContent>
            <TabsContent value="tt">
              <VideosTT />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
