"use client";

import { useState, useMemo } from "react";
import { Video, Play, ArrowRight, Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { VideoItem } from "../types/ayuda";
import { Input } from "../ui/input";

const youtubeEmbedUrl = (id: string) =>
  `https://www.youtube-nocookie.com/embed/${id}`;
const youtubeWatchUrl = (id: string) =>
  `https://www.youtube.com/watch?v=${id}`;

export default function Videos({ videos }: { videos: VideoItem[] }) {
  const [query, setQuery] = useState("");

  const filteredVideos = useMemo(() => {
    return videos.filter(
      (v) =>
        v.title.toLowerCase().includes(query.toLowerCase()) ||
        v.description.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, videos]);

  return (
    <div className="flex flex-col w-full h-full gap-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="relative w-full max-w-lg">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar por título o descripción..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 pr-4 py-6 text-sm rounded-lg border border-border bg-card shadow-sm"
          />
        </div>
        <div className="w-full sm:w-auto bg-primary/10 rounded-xl px-6 py-4 text-center shadow-sm">
          <div className="text-3xl font-extrabold text-primary">
            {filteredVideos.length}
          </div>
          <div className="text-sm font-medium text-muted-foreground">
            {filteredVideos.length === 1
              ? "Video disponible"
              : "Videos disponibles"}
          </div>
        </div>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {filteredVideos.map((video, index) => (
          <div
            key={index}
            className="group animate-fadeIn"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 border border-border/60 bg-card/70 backdrop-blur rounded-xl">
              <CardHeader className="pb-3 relative overflow-hidden">
                <div className="aspect-video relative overflow-hidden rounded-lg bg-muted/40 group-hover:bg-muted/30 transition-all">
                  <iframe
                    className="h-full w-full rounded-lg"
                    src={youtubeEmbedUrl(video.id)}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    loading={index < 2 ? "eager" : "lazy"}
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <CardTitle className="flex flex-row items-center gap-3 mt-4 text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  <Video className="h-5 w-5 text-primary shrink-0" />
                  <span>{video.title}</span>
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed mt-2 line-clamp-3 text-muted-foreground">
                  {video.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 mt-auto">
                <a
                  href={youtubeWatchUrl(video.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-red-600 transition-all duration-200 w-full justify-center px-4 py-3 rounded-lg border border-red-500/40 hover:border-red-500/60 hover:bg-red-500/10"
                  aria-label={`Ver ${video.title} en YouTube`}
                >
                  <Play className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  Ver en YouTube
                  <ArrowRight className="ml-auto text-xs opacity-80" />
                </a>
              </CardContent>
            </Card>
          </div>
        ))}

        {filteredVideos.length === 0 && (
          <p className="text-center col-span-full text-muted-foreground text-sm italic">
            ❌ No se encontraron videos que coincidan con la búsqueda.
          </p>
        )}
      </div>
    </div>
  );
}
