import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            2025
           {/* © 2024 Alejandra Santana. Todos los derechos reservados.*/}
          </p>
          <p className="text-gray-500 mt-2">
            {/*Hecho con pasión y diseño ✨*/}
          </p>
        </div>
      </footer>
      <Toaster />
    </div>
  );
}
