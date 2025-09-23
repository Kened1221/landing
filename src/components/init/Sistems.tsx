import {
  FileText,
  Users,
  FileSearch,
  ShieldCheck,
  Share2,
  CheckCircle,
  Sparkles,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  badge?: string;
  title: string;
  description: string;
  benefits?: string[];
  stats?: string;
  iconBg?: string;
  badgeBg?: string;
  gradient?: string;
}

function FeatureCard({
  icon,
  badge,
  title,
  description,
  benefits,
  stats,
  iconBg = "bg-primary/10",
  badgeBg = "bg-primary/10 text-primary",
  gradient = "bg-card",
}: FeatureCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-6 shadow-sm border border-white/20 overflow-hidden group hover:shadow-xl transition-all duration-500 ${gradient}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent"></div>

      <div className="relative z-10 flex items-center justify-between mb-4">
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-xl ${iconBg} text-white shadow-lg`}
        >
          {icon}
        </div>
        {badge && (
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-semibold ${badgeBg}`}
          >
            {badge}
          </span>
        )}
      </div>

      <div className="relative z-10 mb-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>

      {benefits && (
        <ul className="relative z-10 mb-6 space-y-2">
          {benefits.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-sm text-gray-700 group-hover:translate-x-1 transition-transform duration-300"
            >
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {stats && (
        <div className="relative z-10 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4 text-gray-500" />
              <span className="font-semibold text-gray-800">{stats}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Sistems() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium mb-6">
          <Sparkles className="h-4 w-4" />
          Plataforma Gubernamental
        </div>
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
          Sistemas Digitales Integrados
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Transformamos la gestión pública con soluciones tecnológicas
          accesibles y seguras.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          icon={<FileText className="h-6 w-6" />}
          badge="Productividad"
          title="Trámite Documentario"
          description="Gestión completa de documentos administrativos con firma digital integrada."
          benefits={[
            "Automatización de flujos",
            "Firma digital certificada",
            "Control de expedientes",
          ]}
          stats="5,000+ trámites"
          iconBg="bg-gradient-to-br from-primary to-orange-500"
          badgeBg="bg-primary/10 text-primary"
          gradient="bg-gradient-to-br from-orange-50 via-amber-50 to-primary/5"
        />

        <FeatureCard
          icon={<Users className="h-6 w-6" />}
          badge="Ciudadanía"
          title="Mesa de Partes Virtual"
          description="Canal digital para que los ciudadanos realicen trámites desde cualquier lugar."
          benefits={["Acceso 24/7", "Transparencia total", "Atención rápida"]}
          stats="20,000+ usuarios"
          iconBg="bg-gradient-to-br from-secondary to-blue-500"
          badgeBg="bg-secondary/10 text-secondary"
          gradient="bg-gradient-to-br from-blue-50 via-cyan-50 to-secondary/5"
        />

        <FeatureCard
          icon={<FileSearch className="h-6 w-6" />}
          badge="Transparencia"
          title="Seguimiento en Línea"
          description="Consulta en tiempo real el estado de tus expedientes y solicitudes."
          benefits={[
            "Reportes detallados",
            "Interfaz intuitiva",
            "Seguridad garantizada",
          ]}
          stats="10,000+ documentos"
          iconBg="bg-gradient-to-br from-teal-500 to-emerald-500"
          badgeBg="bg-teal-500/10 text-teal-600"
          gradient="bg-gradient-to-br from-emerald-50 via-teal-50 to-teal-500/5"
        />

        <FeatureCard
          icon={<ShieldCheck className="h-6 w-6" />}
          badge="Seguridad"
          title="Verificación de Documentos"
          description="Valida la autenticidad de los documentos con firma digital y sellado de tiempo."
          benefits={[
            "Verificación online",
            "Firma digital",
            "Confianza garantizada",
          ]}
          stats="3,500+ validados"
          iconBg="bg-gradient-to-br from-slate-600 to-gray-700"
          badgeBg="bg-slate-600/10 text-slate-700"
          gradient="bg-gradient-to-br from-slate-50 via-gray-50 to-slate-600/5"
        />

        <FeatureCard
          icon={<Share2 className="h-6 w-6" />}
          badge="Conectividad"
          title="Interoperabilidad"
          description="Intercambio seguro de documentos entre entidades públicas y privadas."
          benefits={[
            "Integración PIDE",
            "Protocolos estándar",
            "Alta disponibilidad",
          ]}
          stats="50+ integraciones"
          iconBg="bg-gradient-to-br from-amber-500 to-yellow-500"
          badgeBg="bg-amber-500/10 text-amber-600"
          gradient="bg-gradient-to-br from-yellow-50 via-amber-50 to-amber-500/5"
        />
      </div>

      <div className="mt-16 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">250K+</div>
            <div className="text-sm text-gray-600">Documentos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary mb-2">98.5%</div>
            <div className="text-sm text-gray-600">Satisfacción</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Disponibilidad</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Seguridad</div>
          </div>
        </div>
      </div>
    </section>
  );
}
