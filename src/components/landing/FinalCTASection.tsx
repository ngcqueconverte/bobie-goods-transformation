import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

const FinalCTASection = () => {
  const scrollToOffer = () => {
    const element = document.getElementById("oferta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container-narrow mx-auto relative z-10 text-center">
        <Heart className="w-16 h-16 mx-auto mb-6 text-accent animate-pulse-gentle" />
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
          Você merece se sentir <span className="text-accent">bem</span> com seu corpo
        </h2>
        
        <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Não deixe para amanhã o que você pode começar hoje. 
          Milhares de pessoas já transformaram suas vidas com Bobie Goods.
        </p>

        <Button 
          variant="ctaSecondary" 
          size="xl" 
          onClick={scrollToOffer}
          className="animate-bounce-gentle"
        >
          Começar minha transformação agora
          <ArrowRight className="w-5 h-5" />
        </Button>

        <p className="mt-6 text-sm text-primary-foreground/60">
          Compra 100% segura • Garantia de 30 dias • Frete para todo Brasil
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
