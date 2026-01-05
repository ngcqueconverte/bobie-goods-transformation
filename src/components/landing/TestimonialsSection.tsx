import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Clara",
    location: "São Paulo, SP",
    text: "Em 3 semanas já notei diferença nas roupas. Me sinto mais leve e com muito mais energia para o dia a dia!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    result: "-6kg em 1 mês"
  },
  {
    name: "Fernanda Costa",
    location: "Rio de Janeiro, RJ",
    text: "Já tinha tentado de tudo, mas só com Bobie Goods consegui manter os resultados. Recomendo demais!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    result: "-8kg em 2 meses"
  },
  {
    name: "Ana Paula",
    location: "Belo Horizonte, MG",
    text: "Me senti mais confiante e saudável em poucas semanas. Minha autoestima voltou!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    result: "-5kg em 3 semanas"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            Histórias Reais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Quem usou, <span className="text-warning">aprovou</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja o que nossos clientes estão dizendo sobre a transformação com Bobie Goods.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-elevated hover-lift relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-muted/50" />
              
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-secondary/30"
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground mb-4 italic">
                "{testimonial.text}"
              </p>

              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-lg text-sm font-semibold">
                {testimonial.result}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">+10.000</p>
            <p className="text-muted-foreground">Clientes satisfeitos</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-secondary">4.9/5</p>
            <p className="text-muted-foreground">Avaliação média</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-warning">98%</p>
            <p className="text-muted-foreground">Recomendam</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
