import {
  FileText,
  Users,
  FileSearch,
  ShieldCheck,
  Share2,
  Sparkles,
} from "lucide-react";
import FeatureCard from "../card/Card2";

const features = [
  {
    icon: <FileText className="h-6 w-6" />,
    badge: "Productividad",
    title: "Trámite Documentario",
    description:
      "Gestión de documentos administrativos con firma digital integrada.",
    benefits: [
      "Automatización de flujos",
      "Firma digital certificada",
      "Control de expedientes",
    ],
    stats: "5,000+ trámites",
    iconBg: "bg-green-500",
    badgeBg: "bg-green-100 text-green-700",
    gradient: "bg-green-50",
  },
  {
    icon: <Users className="h-6 w-6" />,
    badge: "Ciudadanía",
    title: "Mesa de Partes Virtual",
    description: "Canal digital para realizar trámites desde cualquier lugar.",
    benefits: ["Acceso 24/7", "Transparencia total", "Atención rápida"],
    stats: "20,000+ usuarios",
    iconBg: "bg-blue-500",
    badgeBg: "bg-blue-100 text-blue-700",
    gradient: "bg-blue-50",
  },
  {
    icon: <FileSearch className="h-6 w-6" />,
    badge: "Transparencia",
    title: "Seguimiento en Línea",
    description: "Consulta en tiempo real tus expedientes y solicitudes.",
    benefits: [
      "Reportes detallados",
      "Interfaz intuitiva",
      "Seguridad garantizada",
    ],
    stats: "10,000+ documentos",
    iconBg: "bg-emerald-500",
    badgeBg: "bg-emerald-100 text-emerald-700",
    gradient: "bg-emerald-50",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    badge: "Seguridad",
    title: "Verificación de Documentos",
    description:
      "Valida la autenticidad de documentos con firma digital y sellado de tiempo.",
    benefits: ["Verificación online", "Firma digital", "Confianza garantizada"],
    stats: "3,500+ validados",
    iconBg: "bg-slate-600",
    badgeBg: "bg-slate-100 text-slate-700",
    gradient: "bg-slate-50",
  },
  {
    icon: <Share2 className="h-6 w-6" />,
    badge: "Conectividad",
    title: "Interoperabilidad",
    description:
      "Intercambio seguro de documentos entre entidades públicas y privadas.",
    benefits: [
      "Integración PIDE",
      "Protocolos estándar",
      "Alta disponibilidad",
    ],
    stats: "50+ integraciones",
    iconBg: "bg-amber-500",
    badgeBg: "bg-amber-100 text-amber-700",
    gradient: "bg-amber-50",
  },
];

const stats = [
  { value: "250K+", label: "Documentos", color: "text-green-600" },
  { value: "98.5%", label: "Satisfacción", color: "text-blue-600" },
  { value: "24/7", label: "Disponibilidad", color: "text-emerald-600" },
  { value: "100%", label: "Seguridad", color: "text-red-600" },
];

export default function Sistems() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-100 rounded-full text-green-700 font-medium mb-6">
          <Sparkles className="h-4 w-4" />
          Plataforma Gubernamental
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Sistemas Digitales Integrados
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Transformamos la gestión pública con soluciones tecnológicas
          accesibles y seguras.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

      <div className="mt-16 p-8 bg-gray-50 rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, i) => (
            <div key={i}>
              <div className={`text-3xl font-bold mb-2 ${item.color}`}>
                {item.value}
              </div>
              <div className="text-sm text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
