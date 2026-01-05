import { Shield, Lock, CreditCard, RefreshCw } from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    title: "Compra Segura",
    description: "Seus dados estão protegidos com criptografia de ponta a ponta."
  },
  {
    icon: RefreshCw,
    title: "Garantia de 30 Dias",
    description: "Se não gostar, devolvemos 100% do seu dinheiro. Sem perguntas."
  },
  {
    icon: Lock,
    title: "Pagamento Protegido",
    description: "Aceitamos todos os cartões com a segurança do Mercado Pago."
  },
  {
    icon: CreditCard,
    title: "Parcelamento",
    description: "Pague em até 12x sem juros no cartão de crédito."
  }
];

const GuaranteeSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sua compra <span className="text-primary">100% segura</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Compre com tranquilidade. Se não estiver satisfeito, devolvemos seu dinheiro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((item, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 text-center hover-lift shadow-soft"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-6 h-6" />
            <span className="font-medium">SSL Seguro</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Lock className="w-6 h-6" />
            <span className="font-medium">Dados Criptografados</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CreditCard className="w-6 h-6" />
            <span className="font-medium">Pagamento Seguro</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
