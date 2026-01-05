import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToOffer = () => {
    const element = document.getElementById("oferta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTestimonials = () => {
    const element = document.getElementById("depoimentos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Mulher saudável e feliz" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
      </div>

      <div className="container-narrow mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content - Left Side */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium animate-fade-up">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span>+10.000 clientes satisfeitos</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-up delay-100">
              Emagreça com <span className="text-primary">saúde</span>, equilíbrio e{" "}
              <span className="text-secondary">resultados reais</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-up delay-200">
              Produtos naturais da Bobie Goods que ajudam você a alcançar seu melhor corpo 
              <strong className="text-foreground"> sem sofrimento</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <Button variant="cta" size="xl" onClick={scrollToOffer}>
                Começar minha transformação
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToTestimonials}>
                Ver depoimentos
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 animate-fade-up delay-400">
              {[
                "100% Natural",
                "Sem efeitos colaterais",
                "Resultados comprovados"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating cards - Right Side */}
          <div className="hidden lg:flex flex-col items-end gap-6 animate-fade-up delay-300">
            <div className="bg-card p-4 rounded-2xl shadow-elevated animate-bounce-gentle">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">-5kg em média</p>
                  <p className="text-sm text-muted-foreground">no primeiro mês</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-3 rounded-xl shadow-elevated">
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-1">4.9/5 avaliações</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
