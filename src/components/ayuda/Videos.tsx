"use client";

import { Video, Play, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { VideoItem } from "../types/ayuda";

const videos: VideoItem[] = [
  {
    id: "HOJAtfvjfuk",
    title: "¿Cómo iniciar sesión?",
    description:
      "Conoce el paso a paso para acceder de forma segura al Sistema de Trámite Documentario de la Municipalidad Distrital de Kimbiri.",
    duration: "2:45",
  },
  {
    id: "aMe9hAigtp4",
    title: "¿Cómo elaborar un documento profesional?",
    description:
      "Guía práctica para elaborar y presentar un documento profesional en el Sistema de Trámite Documentario de Kimbiri.",
    duration: "4:12",
  },
  {
    id: "k0V60IQB8y0",
    title: "¿Cómo elaborar un documento administrativo?",
    description:
      "Aprende a crear y registrar un documento administrativo en el Sistema de Trámite Documentario de Kimbiri.",
    duration: "3:28",
  },
  {
    id: "psrbYPIxCm0",
    title: "¿Cómo cargar documentos anexos?",
    description:
      "Descubre cómo adjuntar anexos de manera rápida y ordenada en el Sistema de Trámite Documentario de la Municipalidad Distrital de Kimbiri.",
    duration: "2:18",
  },
  {
    id: "Dr76H9V_LVk",
    title: "¿Cómo firmar documentos anexos?",
    description:
      "Conoce cómo firmar los documentos anexados y su importancia en el trámite documentario de la Municipalidad de Kimbiri.",
    duration: "3:05",
  },
];

const youtubeEmbedUrl = (id: string) =>
  `https://www.youtube-nocookie.com/embed/${id}`;
const youtubeWatchUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;

export default function Videos() {
  return (
    <div className="flex flex-col w-full h-full gap-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-chart-1/10 rounded-xl p-6">
          <div className="text-3xl font-bold text-primary">{videos.length}</div>
          <div className="text-sm text-muted-foreground mt-1">
            Videos tutoriales
          </div>
        </div>
        <div className="bg-chart-2/10 rounded-xl p-6">
          <div className="text-3xl font-bold text-secondary-foreground">
            15+
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            Minutos de contenido
          </div>
        </div>
        <div className="bg-chart-3/10 rounded-xl p-6">
          <div className="text-3xl font-bold text-accent-foreground">HD</div>
          <div className="text-sm text-muted-foreground mt-1">
            Calidad de video
          </div>
        </div>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, index) => (
          <div key={video.id} className="group">
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-3 relative overflow-hidden">
                <div className="aspect-video relative overflow-hidden rounded-lg bg-muted/50 group-hover:bg-muted/30 transition-colors">
                  <iframe
                    className="h-full w-full rounded-lg shadow-sm transition-shadow duration-300 group-hover:shadow-md"
                    src={youtubeEmbedUrl(video.id)}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    loading={index < 2 ? "eager" : "lazy"}
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Play className="h-3 w-3 text-white ml-1" />
                        <span className="text-xs font-medium text-white">
                          {video.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <CardTitle className="flex items-center gap-3 mt-4 text-base font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Video className="h-5 w-5 text-primary" />
                  </div>
                  {video.title}
                </CardTitle>

                <CardDescription className="text-sm leading-relaxed mt-2 line-clamp-3">
                  {video.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Video className="h-3 w-3" />
                    Tutorial oficial
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {index + 1} de {videos.length}
                  </span>
                </div>

                <a
                  href={youtubeWatchUrl(video.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-all duration-200 w-full justify-center px-4 py-3 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                  aria-label={`Ver ${video.title} en YouTube`}
                >
                  <Play className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  Ver en YouTube
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
