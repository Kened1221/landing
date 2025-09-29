import {
  FileText,
  Users,
  CheckCircle,
  Network,
  Settings,
  Footprints,
} from "lucide-react";

export const modules = [
  {
    title: "Sistema de trámite documentario",
    description: "Gestiona documentos internos con firma digital segura.",
    url: "/sgd/login.do",
    icon: FileText,
    gradient: "from-red-400 to-purple-500",
  },
  {
    title: "Mesa de partes del ciudadano",
    description: "Realiza trámites virtuales de forma rápida y sencilla.",
    url: "https://mesadepartes.munikimbiri.gob.pe",
    icon: Users,
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    title: "Mesa de partes virtual Interoperabilidad",
    description: "Conecta entidades mediante interoperabilidad segura.",
    url: "/mpv/login.jsf",
    icon: Network,
    gradient: "from-purple-400 to-pink-500",
  },
  {
    title: "Verificación de documentos",
    description: "Valida documentos digitales con transparencia y confianza.",
    url: "/verifica/inicio.do",
    icon: CheckCircle,
    gradient: "from-orange-400 to-red-500",
  },
  {
    title: "Configuraciones del SGD",
    description: "Personaliza el sistema según tus necesidades institucionales.",
    url: "https://config.munikimbiri.gob.pe",
    icon: Settings,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    title: "Seguimiento de documentos",
    description: "Consulta trámites en tiempo real de manera confiable.",
    url: "https://seguimiento.munikimbiri.gob.pe",
    icon: Footprints,
    gradient: "from-cyan-400 to-blue-500",
  },
];
