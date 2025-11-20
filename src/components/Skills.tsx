import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";

export function Skills() {
  const skillCategories = [
    {
      category: "Herramientas de Diseño",
      skills: [
        { name: "Figma", level: 85 },
      ]
    },
    {
      category: "Diseño Digital",
      skills: [
        { name: "UX Design", level: 80 },
        { name: "Diseño Web", level: 85 },
        { name: "Prototipado", level: 90 },
        { name: "Design Systems", level: 75 }
      ]
    },
    {
      category: "Programación",
      skills: [
        { name: "Análisis de sofware", level: 95 },
        { name: "Angular", level: 70 },
        { name: "TypeScript", level: 70 },
        { name: "HTML", level: 70 },
        { name: "CSS", level: 70 }
      ]
    }
  ];

  const softSkills = [
    "Trabajo en Equipo",
    "Comunicación Efectiva",
    "Gestión del Tiempo",
    "Pensamiento Crítico",
    "Resolución de Problemas",
    "Adaptabilidad",
    "Atención al Detalle",
    "Creatividad",
    "Liderazgo",
    "Negociación",
    "Organización"

  ];

  return (
    <section id="habilidades" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Habilidades</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Herramientas y competencias que he desarrollado durante mi formación 
            como desarrollador y diseñaro UX/UI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-purple-50 to-blue-50">
          <CardContent className="p-8">
            <h3 className="text-gray-900 mb-6 text-center">Habilidades Blandas</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="text-gray-700">{skill}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
