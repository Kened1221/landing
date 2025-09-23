"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  url: string;
  icon: React.ElementType;
  gradient: string; // ejemplo: "from-cyan-400 to-blue-500"
  index: number;
}

export default function Card({
  title,
  description,
  url,
  icon: Icon,
  gradient,
  index,
}: CardProps) {
  return (
    <>
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="relative w-[300px] h-[360px] rounded-2xl overflow-hidden group"
      >
        {/* Borde animado */}
        <div className="absolute inset-0 flex items-center justify-center bg-primary-foreground">
          <div className="w-[160px] h-[170%] rounded-full spin-border group-hover:spin-border-hover" />
        </div>

        {/* Fondo interno ahora blanco */}
        <div className="absolute inset-[6px] bg-white rounded-2xl z-10" />

        {/* Contenido */}
        <div className="relative z-20 flex flex-col items-center justify-between h-full p-8 text-gray-800">
          {/* Icono con gradiente dinámico */}
          <div
            className={`flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${gradient} text-white shadow-lg mb-6 transition-transform duration-300 group-hover:scale-110`}
          >
            <Icon className="w-9 h-9" />
          </div>

          {/* Título */}
          <h3 className="text-xl font-bold text-center">{title}</h3>

          {/* Descripción */}
          <p className="mt-3 text-base text-gray-600 text-center flex-grow">
            {description}
          </p>

          {/* Botón con gradiente dinámico */}
          <div
            className={`mt-6 inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r ${gradient} hover:opacity-90 rounded-full text-sm font-semibold text-white transition-all duration-500 shadow-md`}
          >
            <span>Explorar</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </motion.a>

      {/* Animaciones y gradientes */}
      <style>{`
        @keyframes spin-border {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .spin-border {
          background-image: conic-gradient(
            cyan,
            magenta,
            purple,
            yellow,
            cyan
          );
          animation: spin-border 8s linear infinite;
        }
        .spin-border-hover {
          background-image: conic-gradient(
            lime,
            aqua,
            blue,
            violet,
            lime
          );
          animation: spin-border 5s linear infinite;
        }
      `}</style>
    </>
  );
}
