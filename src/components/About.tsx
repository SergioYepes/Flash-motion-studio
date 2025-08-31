import { Card, CardContent } from "./ui/card";
import { Target, Eye, Heart, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Misión",
      description: "Transformar la comunicación empresarial a través de soluciones innovadoras que conecten marcas con audiencias de manera memorable y efectiva."
    },
    {
      icon: Eye,
      title: "Visión", 
      description: "Ser el estudio líder en América Latina en comunicaciones estratégicas y soluciones multimediales con tecnología de vanguardia."
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Innovación, excelencia, compromiso y transparencia en cada proyecto que desarrollamos para nuestros clientes."
    },
    {
      icon: Award,
      title: "Experiencia",
      description: "Más de 15 años creando experiencias excepcionales para empresas de todos los tamaños y sectores industriales."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Conoce 
            <span className="gradient-secondary bg-clip-text text-transparent"> Flash Motion Studio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos un equipo apasionado por la innovación y la excelencia en comunicaciones, 
            comprometidos con el éxito de nuestros clientes
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-md">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-white/90">Proyectos Completados</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-white/90">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-white/90">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-white/90">Premios Ganados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;