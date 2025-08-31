import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowRight, MessageSquare, Video, Brain, Utensils } from "lucide-react";
import comunicacionesIcon from "../assets/comunicaciones.png";
import multimediaIcon from "../assets/servicios_multimedia.png";
import aiIcon from "../assets/IA.png";

const Services = () => {
  const services = [
    {
      title: "Comunicaciones Estratégicas",
      subtitle: "Línea A",
      description: "Desarrollamos estrategias de comunicación integral que conectan tu marca con tu audiencia de manera efectiva y memorable.",
      icon: MessageSquare,
      image: comunicacionesIcon,
      features: ["Estrategia de Marca", "Comunicación Corporativa", "Relaciones Públicas", "Marketing Digital"],
      color: "primary"
    },
    {
      title: "Soluciones Multimediales",
      subtitle: "Línea B", 
      description: "Creamos contenido audiovisual de alta calidad que cautiva, educa y convierte a tu audiencia en clientes fieles.",
      icon: Video,
      image: multimediaIcon,
      features: ["Producción Audiovisual", "Diseño Gráfico", "Animación 3D", "Streaming Profesional"],
      color: "secondary"
    },
    {
      title: "Inteligencia Artificial",
      subtitle: "Línea C",
      description: "Implementamos soluciones de IA personalizadas que automatizan procesos y optimizan la experiencia del usuario.",
      icon: Brain,
      image: aiIcon,
      features: ["Chatbots Inteligentes", "Análisis Predictivo", "Automatización", "Machine Learning"],
      color: "primary"
    },
    {
      title: "Servicios para Banqueteros",
      subtitle: "Especializado",
      description: "Soluciones integrales específicamente diseñadas para profesionales del catering y eventos sociales.",
      icon: Utensils,
      image: multimediaIcon,
      features: ["Gestión de Eventos", "Marketing Gastronómico", "Sistemas POS", "Capacitación Digital"],
      color: "secondary"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestras 
            <span className="gradient-primary bg-clip-text text-transparent"> Líneas de Negocio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cuatro especialidades que cubren todas tus necesidades de comunicación, 
            tecnología y gestión empresarial
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${service.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'}`}>
                    <service.icon className={`h-8 w-8 ${service.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                  </div>
                  <div>
                    <div className={`text-sm font-semibold ${service.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                      {service.subtitle}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </div>
                
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className={`w-2 h-2 rounded-full ${service.color === 'primary' ? 'bg-primary' : 'bg-secondary'}`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant={service.color === 'primary' ? 'default' : 'secondary'} 
                  className="w-full group"
                >
                  Conocer Más
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-2xl p-8 shadow-elegant">
          <h3 className="text-2xl font-bold mb-4">¿Necesitas una solución personalizada?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Combinamos nuestras líneas de negocio para crear soluciones únicas que se adapten 
            perfectamente a los objetivos de tu empresa
          </p>
          <Button variant="hero" size="lg">
            Solicitar Consultoría Gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;