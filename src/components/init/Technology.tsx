import {
  CheckCircle,
  Shield,
  ShieldCheck,
  BarChart3,
  Activity,
} from "lucide-react";

export default function Technology() {
  return (
    <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start px-4 py-16">
      <div className="flex flex-col gap-8 font-sans">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide w-fit">
          <Shield className="h-4 w-4" />
          Seguridad Garantizada
        </div>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          <span className="block">Protege lo más valioso</span>
          <span className="block text-primary font-extrabold">
            tu información
          </span>
        </h2>

        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl font-light">
          Usamos tecnología de última generación y buenas prácticas de seguridad
          para que tus documentos estén siempre{" "}
          <span className="font-medium text-foreground">
            seguros, disponibles y bajo tu control
          </span>
          .
        </p>

        <ul className="flex flex-col gap-4 text-base md:text-lg font-medium">
          {[
            "Acceso seguro y controlado",
            "Historial completo de actividades",
            "Copias de respaldo automáticas",
            "Supervisión constante 24/7",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 my-auto">
        {/* Card 1 */}
        <div className="rounded-2xl border bg-card p-8 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex flex-col items-start gap-4">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-chart-1/10 text-chart-1">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-foreground">Wazuh SIEM</h3>
            <p className="text-sm text-muted-foreground leading-snug">
              Seguridad avanzada con detección de intrusos en tiempo real.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl border bg-card p-8 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex flex-col items-start gap-4">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-chart-2/10 text-chart-2">
            <BarChart3 className="h-7 w-7" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-foreground">Grafana</h3>
            <p className="text-sm text-muted-foreground leading-snug">
              Visualización clara e intuitiva de todos tus datos.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl border bg-card p-8 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex flex-col items-start gap-4 sm:col-span-2 md:col-span-1">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-chart-3/10 text-chart-3">
            <Activity className="h-7 w-7" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-foreground">Prometheus</h3>
            <p className="text-sm text-muted-foreground leading-snug">
              Métricas precisas y alertas en tiempo real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
