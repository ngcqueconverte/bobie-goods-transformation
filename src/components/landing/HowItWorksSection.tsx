import { Package, CalendarCheck, Sparkles, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Package,
    title: "Escolha seu produto",
    description: "Selecione o kit Bobie Goods ideal para seus objetivos de emagrecimento."
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Use diariamente",
    description: "Siga as orientações de uso para obter os melhores resultados."
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Sinta a diferença",
    description: "Em poucos dias você já começa a sentir mais energia e disposição."
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Veja os resultados",
    description: "Acompanhe sua evolução progressiva rumo ao corpo dos seus sonhos."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-narrow mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            Simples e Eficaz
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Como <span className="text-accent">funciona</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Transformar seu corpo nunca foi tão fácil. Siga estes 4 passos simples.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-primary-foreground/20">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-accent rounded-full" />
                </div>
              )}
              
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 h-full">
                <span className="text-5xl font-bold text-accent/30 group-hover:text-accent/50 transition-colors">
                  {step.number}
                </span>
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mt-4 mb-4 group-hover:scale-110 transition-transform">
                  <step.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-primary-foreground/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
