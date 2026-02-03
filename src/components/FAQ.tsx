import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What areas do you serve?",
      answer:
        "We proudly serve the entire Metro area including Downtown, Westside, East End, North District, and surrounding suburbs within a 30-mile radius. Contact us to confirm service availability in your specific location.",
    },
    {
      question: "Do you offer 24/7 emergency services?",
      answer:
        "Yes! We understand that plumbing emergencies don't wait for business hours. Our team is available 24 hours a day, 7 days a week, 365 days a year. For emergencies, call our main line and select the emergency option.",
    },
    {
      question: "How quickly can you respond to a service call?",
      answer:
        "For emergencies, we typically arrive within 30-60 minutes. For standard service calls, we offer same-day appointments in most cases, with flexible scheduling to fit your availability.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, checks, and cash. We also offer financing options for larger projects. Payment is due upon completion of the work.",
    },
    {
      question: "Are your plumbers licensed and insured?",
      answer:
        "Absolutely. All our technicians are fully licensed, bonded, and insured. We carry comprehensive liability insurance to protect your property and our team. Copies of our credentials are available upon request.",
    },
    {
      question: "Do you provide free estimates?",
      answer:
        "Yes, we provide free estimates for most standard plumbing work. For complex projects requiring detailed inspection, there may be a diagnostic fee which is waived if you proceed with the service.",
    },
    {
      question: "What warranty do you offer on your work?",
      answer:
        "We stand behind our work with a 100% satisfaction guarantee. All labor is warrantied for one year, and we honor all manufacturer warranties on parts and fixtures we install.",
    },
    {
      question: "How do I prevent plumbing emergencies?",
      answer:
        "Regular maintenance is key! We recommend annual inspections, never flushing non-degradable items, addressing small leaks promptly, and knowing where your main water shut-off valve is located.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Header */}
          <div className="lg:sticky lg:top-32">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Got questions? We've got answers. If you don't find what you're 
              looking for, feel free to give us a call.
            </p>
            <a
              href="tel:+18005551234"
              className="btn-cta-secondary inline-flex"
            >
              Still Have Questions? Call Us
            </a>
          </div>

          {/* Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-muted/30 rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
