import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imagenprincipal from '../assets/imagenes/escritorio.png'

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("proyectos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br purple-50 via-white to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-purple-600">¡Hola! Soy</p>
              <h1 className="text-gray-900">
                Jeniffer Rojo
              </h1>
              <h2 className="text-gray-700">
                Licenciada en Informática
              </h2>
            </div>
            <p className="text-gray-600 max-w-lg">
              Apasionada por la solución de problemas con tecnologías aplicando la experiencia de los usarios.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToProjects} size="lg">
                Ver Proyectos
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
             {/* <Button variant="outline" size="lg">
                Descargar CV
              </Button>*/}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src= {imagenprincipal}
                alt="Espacio de trabajo creativo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
