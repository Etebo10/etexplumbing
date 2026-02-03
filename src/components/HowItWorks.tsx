import { Phone, Search, Wrench, CheckCircle, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Call or Request",
      description:
        "Reach out by phone or fill out our quick quote form. We respond within minutes.",
    },
    {
      number: "02",
      icon: Search,
      title: "We Diagnose",
      description:
        "Our expert arrives, assesses the issue, and provides a transparent upfront quote.",
    },
    {
      number: "03",
      icon: Wrench,
      title: "We Fix It Fast",
      description:
        "Using quality parts and proven techniques, we resolve your plumbing problem.",
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "You're Happy",
      description:
        "We clean up, walk you through the work, and ensure your complete satisfaction.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Simple, Stress-Free Plumbing Service
          </h2>
          <p className="text-muted-foreground text-lg">
            We've streamlined the process so you can get back to your life faster.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20" />

          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Step Number */}
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 rounded-full gradient-hero flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-4 z-10">
                  <ArrowRight className="w-8 h-8 text-accent" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-muted-foreground mb-4">Ready to get started?</p>
          <a href="tel:+18005551234" className="btn-cta text-lg px-8 py-4">
            <Phone className="w-5 h-5" />
            Call Now - It's That Easy
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
