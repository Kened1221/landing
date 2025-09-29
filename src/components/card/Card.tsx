"use client";

import { ArrowRight } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  url: string;
  icon: React.ElementType;
  gradient: string; // ej: "from-indigo-500 via-purple-500 to-pink-500"
}

export default function Card({
  title,
  description,
  url,
  icon: Icon,
  gradient,
}: CardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-[320px] h-[360px] mx-auto rounded-2xl overflow-hidden 
                 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                 transition-all duration-500 ease-out"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl group-hover:shadow-xl transition-all duration-500 ease-out">
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-700 bg-gradient-to-r ${gradient} rounded-2xl`}
        />
      </div>

      <div className="absolute inset-[6px] bg-white rounded-2xl z-10 shadow-md transition-transform duration-500 group-hover:shadow-lg" />

      <div className="relative z-20 flex flex-col items-center justify-between h-full p-8 text-gray-800">
        <div
          className={`flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${gradient} 
                      text-white shadow-lg mb-6 transition-all duration-500 ease-out 
                      group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-xl`}
        >
          <Icon className="w-10 h-10 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6" />
        </div>

        <h3 className="text-xl font-semibold text-center tracking-tight text-gray-900 
                       group-hover:text-indigo-600 transition-colors duration-500">
          {title}
        </h3>

        <p className="mt-3 text-base text-gray-500 text-center flex-grow line-clamp-3 leading-relaxed">
          {description}
        </p>

        <div
          className={`mt-6 inline-flex items-center gap-3 px-7 py-3 bg-gradient-to-r ${gradient} 
                      rounded-full text-sm font-medium text-white shadow-md transition-all duration-500 ease-out 
                      group-hover:scale-105 group-hover:shadow-lg hover:brightness-110`}
        >
          <span>Explorar</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:scale-110" />
        </div>
      </div>
    </a>
  );
}
