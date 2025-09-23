import {
  ShieldCheck,
  Lock,
  Clock,
  FileCheck,
  Shield,
  UserCog,
} from "lucide-react";

export default function InitImgMovile() {
  return (
    <div className="flex flex-col items-center text-center gap-8 py-10 px-6">
      {/* Título */}
      <h2 className="text-3xl font-extrabold text-foreground leading-snug">
        Confía tu <span className="text-primary">seguridad</span> en nosotros
      </h2>

      {/* Subtítulo */}
      <p className="text-muted-foreground text-base max-w-md leading-relaxed">
        Protegemos tu información con los más altos estándares de seguridad
        internacional. Tu confianza y tranquilidad son nuestra prioridad.
      </p>

      {/* Chips de confianza */}
      <div className="flex flex-wrap justify-center gap-3 max-w-sm">
        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold">
          <Shield className="h-4 w-4" />
          ISO 27001
        </span>
        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold">
          <UserCog className="h-4 w-4" />
          Soporte 24/7
        </span>
      </div>

      {/* Features con íconos */}
      <div className="grid grid-cols-2 gap-6 w-full max-w-md">
        <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border hover:shadow-md transition">
          <ShieldCheck className="h-8 w-8 text-primary" />
          <span className="text-sm font-semibold">Seguridad</span>
          <p className="text-xs text-muted-foreground text-center">
            Protección total de tus documentos.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border hover:shadow-md transition">
          <Lock className="h-8 w-8 text-primary" />
          <span className="text-sm font-semibold">Privacidad</span>
          <p className="text-xs text-muted-foreground text-center">
            Tus datos siempre bajo resguardo.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border hover:shadow-md transition">
          <Clock className="h-8 w-8 text-primary" />
          <span className="text-sm font-semibold">Rapidez</span>
          <p className="text-xs text-muted-foreground text-center">
            Accede y gestiona al instante.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border hover:shadow-md transition">
          <FileCheck className="h-8 w-8 text-primary" />
          <span className="text-sm font-semibold">Confianza</span>
          <p className="text-xs text-muted-foreground text-center">
            Procesos auditables y seguros.
          </p>
        </div>
      </div>
    </div>
  );
}
