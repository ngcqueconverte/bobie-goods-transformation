import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container-narrow mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <Leaf className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Bobie Goods</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection("beneficios")}
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Benefícios
          </button>
          <button 
            onClick={() => scrollToSection("depoimentos")}
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Depoimentos
          </button>
          <button 
            onClick={() => scrollToSection("como-funciona")}
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Como Funciona
          </button>
          <button 
            onClick={() => scrollToSection("faq")}
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            FAQ
          </button>
        </nav>

        <Button 
          variant="cta" 
          size="default"
          onClick={() => scrollToSection("oferta")}
        >
          Comprar Agora
        </Button>
      </div>
    </header>
  );
};

export default Header;
