import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const FAQ = () => {
  const faqs = [
    {
      q: "How secure is my data on NexGent?",
      a: "We use state-of-the-art AES-256 encryption for data at rest and TLS 1.3 for data in transit. Our infrastructure is hosted on world-class data centers with SOC2 Type II compliance."
    },
    {
      q: "Can I integrate with my existing tools?",
      a: "Yes, NexGent offers over 200+ native integrations with popular tools like Slack, Salesforce, and AWS. We also provide a robust REST API for custom integrations."
    },
    {
      q: "Is there a free trial available?",
      a: "Absolutely! You can try our Standard plan for free for 14 days. No credit card is required to start your trial."
    },
    {
      q: "What kind of support do you offer?",
      a: "All plans come with email support. Our Standard plan includes priority support, and Pro plans have a dedicated account manager with 24/7 phone access."
    }
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <p className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 italic">Support</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 italic">Frequently Asked Questions</h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-none bg-white rounded-2xl px-6 shadow-sm">
              <AccordionTrigger className="text-left font-bold text-lg text-slate-800 hover:text-emerald-600 italic transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 italic pb-6 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
