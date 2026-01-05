import { Flame, Apple, Zap, Leaf, Clock, Heart } from "lucide-react";

const benefits = [
  {
    icon: Flame,
    title: "Queima de Gordura",
    description: "Acelera o metabolismo e auxilia na queima de gordura localizada de forma natural.",
    color: "bg-warning/10 text-warning"
  },
  {
    icon: Apple,
    title: "Reduz o Apetite",
    description: "Controla a fome excessiva e diminui a vontade de comer doces.",
    color: "bg-destructive/10 text-destructive"
  },
  {
    icon: Zap,
    title: "Mais Energia",
    description: "Proporciona mais disposição para enfrentar o dia a dia com vitalidade.",
    color: "bg-accent/20 text-accent-foreground"
  },
  {
    icon: Leaf,
    title: "Ingredientes Naturais",
    description: "Fórmula com ingredientes selecionados da natureza, sem químicos nocivos.",
    color: "bg-secondary/20 text-secondary"
  },
  {
    icon: Clock,
    title: "Fácil de Usar",
    description: "Praticidade no dia a dia. Basta tomar conforme as orientações.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Heart,
    title: "Bem-Estar Geral",
    description: "Melhora a qualidade de vida e promove uma sensação de bem-estar.",
    color: "bg-secondary/20 text-secondary"
  }
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Por que escolher Bobie Goods?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Benefícios que <span className="text-primary">transformam</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nossa fórmula exclusiva foi desenvolvida para oferecer resultados reais, 
            de forma saudável e sustentável.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="card-elevated hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 ${benefit.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
