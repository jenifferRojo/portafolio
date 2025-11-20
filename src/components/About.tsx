import { Computer, Lightbulb, Palette, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function About() {
  const values = [
    
    {
      icon: Users,
      title: "Colaboración",
      description: "Trabajo en equipo para lograr resultados excepcionales."
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Siempre explorando nuevas tendencias y herramientas."
    },
    {
      icon: Computer,
      title: "Aprender y compartir",
      description: "Busco solucionar problemas y lo que no lo se lo investigo hasta llegar a un resultado y comparto con el equipo."
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Sobre Mí</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soy desarrolladora UX/UI apasionada por crear experiencias visuales. 
            Me encanta aprender constantemente y estoy dispuesta a trabajar en nuevos desafíos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-2 hover:border-gray-600 transition-colors">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-gray-100 rounded-full">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-purple-600">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-gray-900 mb-4">Mi Historia</h3>
              <p className="text-gray-600 mb-4">
                En la preparatoria me llamo la atención el funcionamiento de los sistemas que se usaban 
                por lo que estudie Informática al principio fue un desafío para mí pero me encanto.
                La experiencia de trabajar y desarrollar sistemas estando en todo el ciclo de vida de desarrollo 
                me permitió aprender resolver problemas enfocados en los usuarios y trabajar en equipo.
              </p>
              <p className="text-gray-600">
                Actualmente estoy enfocada en desarrollar mis habilidades en diseño 
               UI/UX y seguir mejorando mis conocimientos en el desarrollo, buscando crear proyectos que me permitan aprender y crecer profesionalmente.</p>
            </div>
            <div>
              <h3 className="text-gray-900 mb-4">Educación</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-900">Licenciatura en Informática</p>
                  <p className="text-gray-600">Universidad / Veracruzana</p>
                  <p className="text-gray-500">2010 - 2015</p>
                </div>
                <div>
                  <p className="text-gray-900">Certificaciones Relevantes</p>
                  <p className="text-gray-600">Cursos de TypeScript</p>
                  <p className="text-gray-500">2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
