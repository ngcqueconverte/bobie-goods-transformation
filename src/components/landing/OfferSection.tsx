import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Truck, BadgeCheck } from "lucide-react";
import productImage from "@/assets/product-bottle.png";

const OfferSection = () => {
  return (
    <section id="oferta" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="bg-gradient-to-br from-muted to-background rounded-3xl p-8 md:p-12 shadow-elevated relative overflow-hidden">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Product Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-75" />
                <img 
                  src={productImage} 
                  alt="Produto Bobie Goods" 
                  className="relative z-10 w-64 h-64 object-contain drop-shadow-2xl"
                />
                
                {/* Badge */}
                <div className="absolute -top-4 -right-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm font-bold animate-pulse-gentle">
                  -40% OFF
                </div>
              </div>
            </div>

            {/* Offer Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-medium">
                <Clock className="w-4 h-4" />
                <span>Oferta por tempo limitado!</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Comece sua transformação <span className="text-primary">hoje</span>
              </h2>

              <div className="flex items-baseline gap-4">
                <span className="text-muted-foreground line-through text-xl">R$ 197,00</span>
                <span className="text-5xl font-bold text-primary">R$ 117,00</span>
              </div>

              <p className="text-muted-foreground">
                ou 12x de <strong className="text-foreground">R$ 11,53</strong> sem juros
              </p>

              <Button variant="ctaSecondary" size="xl" className="w-full">
                Quero emagrecer agora
                <ArrowRight className="w-5 h-5" />
              </Button>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Compra 100% segura</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Truck className="w-5 h-5 text-primary" />
                  <span>Frete para todo Brasil</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BadgeCheck className="w-5 h-5 text-primary" />
                  <span>Garantia de 30 dias</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Envio imediato</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
