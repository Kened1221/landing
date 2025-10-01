import { useEffect, useState } from "react";
import { Footer } from "./components/layout/Footer";
import { Navbar, ViewKey } from "./components/layout/NavBar";
import AnimatedWaves from "./components/footer/animatedWaves";
import { Dithering } from "@paper-design/shaders-react";
import Inicio from "./pages/inicio";
import ModulosPage from "./pages/modulos";
import AyudaPage from "./pages/ayuda";

function hexToRgba(hex: string, alpha: number) {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function App() {
  const [view, setView] = useState<ViewKey>("inicio");

  const [primary, setPrimary] = useState<string>("rgba(255,105,0,0.2)");

  useEffect(() => {
    const waitForStyles = () => {
      const root = getComputedStyle(document.documentElement);
      const hex = root.getPropertyValue("--primary").trim();

      if (hex) {
        setPrimary(hexToRgba(hex, 0.2));
      } else {
        setTimeout(waitForStyles, 100);
      }
    };

    waitForStyles();
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <div className="absolute inset-0 z-0">
        <Dithering
          colorBack={primary}
          colorFront="#FFFFFF"
          speed={0.43}
          shape="wave"
          type="4x4"
          pxSize={3}
          scale={1.13}
          style={{ height: "100vh", width: "100%" }}
        />
      </div>

      <Navbar selected={view} onSelect={setView} />

      {view === "inicio" && <Inicio />}
      {view === "modulos" && <ModulosPage />}
      {view === "ayuda" && <AyudaPage />}

      <AnimatedWaves />
      <Footer />
    </div>
  );
}

export default App;
