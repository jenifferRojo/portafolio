import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="cursor-pointer" onClick={() => scrollToSection("hero")}>
            <span className="text-gray-900">Mi Portafolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("sobre-mi")}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection("proyectos")}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("habilidades")}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Contacto
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("sobre-mi")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection("proyectos")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("habilidades")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
