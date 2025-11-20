import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import activoFijoImage from '../assets/imagenes/activo.png'
import crumImage from '../assets/imagenes/crum.png'
import agendaProveedoresImage from '../assets/imagenes/agenda.png'
import adquisicionesImage from '../assets/imagenes/1.png'
import sienup from '../assets/imagenes/sienup.png'
import expedientesImage from '../assets/imagenes/expediente1.png'
//import activoFijoImage from "/assets/images/activo-fijo.png";



export function Projects() {
  const projects = [
    {
      title: "CRUM",
      description: "Sistema que resolvio la problematrica de mostrar los resultados finales en graficas.",
      image: crumImage,
      tags: ["UI/UX", "Figma", "Análisis", "Web design", "Responsive"],
      //link: "#"
    },
    {
      title: "Agenda proveedores",
      description: "Sistema que resolvió que los proveedores enviaran antes de llegar al almacén la documentación para ser revisada y corregida, así como también se tuvo un orden en las entregas de los proveedores. .",
      image: agendaProveedoresImage,
      tags: ["Análisis", "UX/UI", "Figma", "Web design","Responsive"],
      link: "#"
    },
    {
      title: "Adquiciones",
      description: "Sistema que resolvio la problematrica de la compra de insumos de manera eficiente.",
      image: adquisicionesImage,
      tags: ["Web Design", "UX/UI", "Figma", "Responsive", "Angular", "CSS", "HTML", "Typescript"],
      link: "#"
    },
    {
      title: "Sienup",
      description: "Gestión del proyecto, se rediseñó y reorganización del sistema para la captura de formularios de índice de obesidad en los niños del estado de veracruz",
      image: sienup,
      tags: ["Web Design","UX/UI", "Figma", "Responsive", "Liderazgo", "Trabajo en equipo", "Comunicación", "Negociación","Resolución de problemas"],
      link: "#"
    },
    {
      title: "Activo fijo",
      description: "Gestion completa del sistema el cual se encarga de registrar, gestionar y reportar los activos fijos.",
      image: activoFijoImage,
      tags: ["Web Design","UX/UI", "Figma", "Responsive","Angular", "CSS", "HTML", "Typescript", "Liderazgo", "Trabajo en equipo", "Comunicación", "Negociación","Resolución de problemas"],
      link: "#"
    },
    {
      title: "Expediente clínico",
      description: "Diseño de sistema de expediente clinico del seguro social de panáma.",
      image: expedientesImage,
      tags: ["Web Design","UX/UI", "Figma", "Responsive", "Trabajo en equipo", "Comunicación"],
      link: "#"
    }
  ];

  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Mis Proyectos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sección donde se muestran mis trabajos que demuestran 
            los proyectos en los  que participe todos son web. Estuve en el sector gubernamental y privado, son 
            dos experiencias diferentes con mucho aprendizaje.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 right-4">
                    {/*<a
                      href={project.link}
                      className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <span>Ver Proyecto</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>*/}
                  </div>
                  
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
