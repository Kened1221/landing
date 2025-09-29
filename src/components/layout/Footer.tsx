import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  ShieldCheck,
  Home,
  LayoutDashboard,
  HelpCircle,
  FileLock,
  FileSearch,
  FileCheck,
  Share2,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-gray-200">
      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logoi.png"
                alt="Logo SGD"
                className="h-14 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold text-white">SGD</h3>
                <p className="text-xs text-muted">
                  Gobierno Regional de Ayacucho
                </p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Sistema de Gestión Documental con firma digital e
              interoperabilidad para modernizar la administración pública y
              mejorar la atención al ciudadano.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 bg-white/60 rounded-md px-3 py-2">
                <ShieldCheck className="h-5 w-5 text-blue-400" />
                <span className="text-xs text-foreground font-bold">
                  ISO 27001 - Seguridad
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 rounded-md px-3 py-2">
                <ShieldCheck className="h-5 w-5 text-green-400" />
                <span className="text-xs text-foreground font-bold">
                  ISO 9001 - Calidad
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Navegación
            </h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link
                to="/"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Home className="h-4 w-4" /> Inicio
              </Link>
              <Link
                to="/modulos"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <LayoutDashboard className="h-4 w-4" /> Módulos
              </Link>
              <Link
                to="/ayuda"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <HelpCircle className="h-4 w-4" /> Ayuda
              </Link>
              <Link
                to="/politicas"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <FileLock className="h-4 w-4" /> Políticas de privacidad
              </Link>
              <Link
                to="/terminos"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <FileCheck className="h-4 w-4" /> Términos y condiciones
              </Link>
              <Link
                to="/faq"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <HelpCircle className="h-4 w-4" /> Preguntas frecuentes
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Servicios principales
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 hover:text-primary cursor-pointer transition">
                <LayoutDashboard className="h-4 w-4" /> Mesa de partes digital
              </li>
              <li className="flex items-center gap-2 hover:text-primary cursor-pointer transition">
                <FileSearch className="h-4 w-4" /> Seguimiento de trámites
              </li>
              <li className="flex items-center gap-2 hover:text-primary cursor-pointer transition">
                <FileCheck className="h-4 w-4" /> Verificación de documentos
              </li>
              <li className="flex items-center gap-2 hover:text-primary cursor-pointer transition">
                <Share2 className="h-4 w-4" /> Interoperabilidad
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contáctanos
            </h4>
            <ul className="space-y-3 text-sm mb-4">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Jr. Callao Nº 122 - Huamanga, Ayacucho
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-400" />
                (51) 987654321
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400" />
                consultas@regionayacucho.gob.pe
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-yellow-400" />
                Lunes - Viernes: 8:00am - 1:00pm / 2:30pm - 4:30pm
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/KIMBIRIVRAEMPERU"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook className="h-5 w-5 hover:text-primary transition-colors" />
            </a>
            <a
              href="https://x.com/munikimbirivrae"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter className="h-5 w-5 hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/vraemkimbiri/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="h-5 w-5 hover:text-primary transition-colors" />
            </a>
          </div>

          <p className="text-xs text-primary-foreground text-center">
            © {new Date().getFullYear()} Gobierno Regional de Ayacucho. Todos
            los derechos reservados.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-primary/90 transition"
          >
            <ArrowUp className="h-4 w-4" /> Ir arriba
          </button>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs">
          <span className="px-3 py-1 rounded-full bg-green-600/20 text-green-400 font-semibold">
            🔒 Conexión SSL Segura
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 font-semibold">
            🛡️ Datos Protegidos
          </span>
          <span className="px-3 py-1 rounded-full bg-yellow-600/20 text-yellow-400 font-semibold">
            📊 99.9% Disponibilidad
          </span>
        </div>
      </div>
    </footer>
  );
}
