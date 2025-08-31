import { Button } from "./ui/button";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { name: "Nosotros", href: "/nosotros" },
    { name: "Servicios", href: "/servicios" },
    { name: "Catálogo", href: "/catalogo" },
    { name: "Galería", href: "/galeria" },
    { name: "Clientes", href: "/clientes" },
    { name: "Contacto", href: "/contacto" },
  ];

  const services = [
    "Comunicaciones Estratégicas",
    "Soluciones Multimediales", 
    "Inteligencia Artificial",
    "Servicios para Banqueteros"
  ];

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
              Flash Motion Studio
            </h3>
            <p className="text-accent-foreground/80 mb-6 leading-relaxed">
              Transformamos tu mensaje en experiencias memorables a través de 
              comunicaciones estratégicas y soluciones tecnológicas innovadoras.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-accent-foreground/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nuestros Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="/servicios"
                    className="text-accent-foreground/80 hover:text-primary transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-accent-foreground/80">
                  <p>Calle Principal 123</p>
                  <p>Ciudad, País 12345</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a 
                  href="tel:+1234567890" 
                  className="text-accent-foreground/80 hover:text-primary transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a 
                  href="mailto:info@flashmotionstudio.com" 
                  className="text-accent-foreground/80 hover:text-primary transition-colors"
                >
                  info@flashmotionstudio.com
                </a>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Newsletter</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-3 py-2 bg-background/10 border border-accent-foreground/20 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button variant="gradient" size="sm">
                  Suscribir
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-accent-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-accent-foreground/60 text-sm">
              © 2024 Flash Motion Studio. Todos los derechos reservados.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-accent-foreground/60 hover:text-primary transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-accent-foreground/60 hover:text-primary transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-accent-foreground/60 hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;