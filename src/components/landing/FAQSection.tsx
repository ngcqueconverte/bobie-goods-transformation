import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O produto é natural?",
    answer: "Sim! Bobie Goods é formulado com ingredientes 100% naturais, cuidadosamente selecionados para oferecer resultados eficazes sem causar danos à saúde. Nossa fórmula não contém químicos nocivos ou substâncias proibidas."
  },
  {
    question: "Em quanto tempo vejo resultados?",
    answer: "Os primeiros resultados podem ser percebidos já nas primeiras semanas de uso. A maioria dos clientes relata sentir mais energia e disposição logo nos primeiros dias, enquanto a perda de peso progressiva ocorre ao longo do primeiro mês de uso contínuo."
  },
  {
    question: "Posso usar todos os dias?",
    answer: "Sim, o uso diário é recomendado para melhores resultados. Siga as orientações de uso na embalagem para obter o máximo benefício do produto. O uso consistente é a chave para resultados duradouros."
  },
  {
    question: "Tem contraindicação?",
    answer: "Bobie Goods é seguro para a maioria das pessoas. No entanto, gestantes, lactantes e pessoas com condições médicas específicas devem consultar um médico antes de iniciar o uso. O produto não é indicado para menores de 18 anos."
  },
  {
    question: "Como funciona a garantia?",
    answer: "Oferecemos garantia de 30 dias. Se você não estiver satisfeito com os resultados, basta entrar em contato conosco que devolvemos 100% do seu dinheiro, sem perguntas. Sua satisfação é nossa prioridade."
  },
  {
    question: "O frete é grátis?",
    answer: "Oferecemos frete grátis para compras acima de R$ 150,00. Para outras compras, o valor do frete é calculado com base no seu CEP. Enviamos para todo o Brasil com rastreamento."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container-narrow mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas <span className="text-secondary">Frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tire suas dúvidas sobre o Bobie Goods
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-2xl px-6 border-none shadow-soft data-[state=open]:shadow-card transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
