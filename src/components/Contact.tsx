import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado! Te contactaré pronto.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "jeny1690@gmail.com",
      link: "mailto:jeny1690@gmail.com"
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+52 2288511057",
      link: "tel:+521234567890"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Xalapa Veracruz, México",
      link: "#"
    }
  ];

  /*const socialLinks = [
    { icon: Linkedin, link: "#", label: "LinkedIn" },
    { icon: Github, link: "#", label: "GitHub" },
    { icon: Instagram, link: "#", label: "Instagram" }
  ];*/

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Contacto</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Si tienes alguna pregunta o sugerencia, no dudes en contactarme. Estoy siempre abierto a nuevas oportunidades.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-gray-900 mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="p-3 bg-gray-100 rounded-full">
                      <info.icon className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-gray-500">{info.title}</p>
                      <p className="text-gray-900">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

           {/* <div>
              <h3 className="text-gray-900 mb-6">Redes Sociales</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    aria-label={social.label}
                    className="p-4 bg-white rounded-full hover:bg-purple-600 hover:text-white transition-colors group"
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>}

            {/*<Card className="bg-gradient-to-br from-purple-600 to-blue-600 text-white">
              <CardContent className="p-6">
                <h3 className="mb-2">Disponible para Freelance</h3>
                <p className="text-purple-100">
                  Actualmente acepto proyectos freelance. 
                  ¡Trabajemos juntos para crear algo increíble!
                </p>
              </CardContent>
            </Card>*/}
          </div>

         {/* <Card>
            <CardContent className="p-6">
              <h3 className="text-gray-900 mb-6">Envíame un Mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntame sobre tu proyecto..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>*/}
        </div>
      </div>
    </section>
  );
}
