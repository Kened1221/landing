"use client";

import { BookOpen } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Manuales from "@/components/ayuda/Manuales";
import Videos from "@/components/ayuda/Videos";

export default function AyudaPage() {
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
            Manuales, guías y videos oficiales del SGD{" "}
            <span className="font-semibold text-chart-1">RedOrange</span>.
          </p>
        </div>

        <div className="mx-auto w-full">
          <Tabs defaultValue="manuales" className="w-full">
            <TabsList className="flex w-full flex-col sm:flex-row h-full mb-4">
              {[
                { value: "manuales", label: "Manuales" },
                { value: "videos", label: "Videos" },
                { value: "charlas", label: "Charlas" },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex w-full items-center hover:cursor-pointer data-[state=active]:bg-primary dark:data-[state=active]:bg-chart-2 data-[state=active]:text-white dark:data-[state=active]:text-white"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="manuales">
              <Manuales />
            </TabsContent>

            <TabsContent value="videos">
              <Videos />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
