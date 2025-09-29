import { Users, CheckCircle } from "lucide-react";
import { FeatureCardProps } from "../types/modulos";

const colorMap: Record<
  string,
  { shadow: string; text: string; check: string }
> = {
  "bg-green-500": {
    shadow: "group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.7)]",
    text: "group-hover:text-green-600",
    check: "text-green-500 group-hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.6)]",
  },
  "bg-blue-500": {
    shadow: "group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]",
    text: "group-hover:text-blue-600",
    check: "text-blue-500 group-hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]",
  },
  "bg-amber-500": {
    shadow: "group-hover:drop-shadow-[0_0_10px_rgba(245,158,11,0.7)]",
    text: "group-hover:text-amber-600",
    check: "text-amber-500 group-hover:drop-shadow-[0_0_6px_rgba(245,158,11,0.6)]",
  },
  "bg-slate-600": {
    shadow: "group-hover:drop-shadow-[0_0_10px_rgba(71,85,105,0.7)]",
    text: "group-hover:text-slate-600",
    check: "text-slate-600 group-hover:drop-shadow-[0_0_6px_rgba(71,85,105,0.6)]",
  },
  "bg-emerald-500": {
    shadow: "group-hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.7)]",
    text: "group-hover:text-emerald-600",
    check: "text-emerald-500 group-hover:drop-shadow-[0_0_6px_rgba(16,185,129,0.6)]",
  },
};

export default function FeatureCard({
  icon,
  badge,
  title,
  description,
  benefits,
  stats,
  iconBg = "bg-green-500",
  badgeBg = "bg-green-100 text-green-700",
  gradient = "bg-green-50",
}: FeatureCardProps) {
  const colors = colorMap[iconBg] || colorMap["bg-green-500"];

  return (
    <div
      className={`relative rounded-2xl p-6 shadow-sm border border-gray-200 overflow-hidden group 
      hover:shadow-lg transition-all duration-500 ease-in-out ${gradient}`}
    >
      <div className="relative z-10 flex items-center justify-between mb-4">
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-xl ${iconBg} text-white shadow-md 
          transition duration-500 ease-in-out group-hover:scale-110 ${colors.shadow}`}
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
        <h3
          className={`text-xl font-bold text-gray-800 mb-2 
          transition-colors duration-500 ease-in-out ${colors.text}`}
        >
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>

      {benefits && (
        <ul className="relative z-10 mb-6 space-y-2">
          {benefits.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-sm text-gray-700 
              transition-transform duration-300 ease-in-out group-hover:translate-x-1"
            >
              <CheckCircle
                className={`h-4 w-4 flex-shrink-0 transition ${colors.check}`}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {stats && (
        <div className="relative z-10 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4 text-gray-500 transition group-hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]" />
              <span className="font-semibold text-gray-800">{stats}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
