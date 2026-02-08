import { Phone, ClipboardCheck, Wrench, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Call or Request",
      description:
        "Give us a call or fill out our quick online form. We're available 24/7 for emergencies.",
      color: "primary",
    },
    {
      number: "02",
      icon: ClipboardCheck,
      title: "We Diagnose",
      description:
        "Our licensed technician arrives promptly, assesses the issue, and provides a clear quote.",
      color: "primary",
    },
    {
      number: "03",
      icon: Wrench,
      title: "We Fix It",
      description:
        "With your approval, we complete the repair quickly and professionally—often same-day.",
      color: "accent",
    },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="section-label mb-6 animate-fade-up">
            <Sparkles className="w-4 h-4" />
            How It Works
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 animate-fade-up animation-delay-100">
            Getting Started is{" "}
            <span className="text-gradient">Simple</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed animate-fade-up animation-delay-200">
            From your first call to the final fix, we make the process 
            smooth, transparent, and hassle-free.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-accent/40" />
          
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Step Card */}
              <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all duration-300 group h-full">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-6xl font-display font-bold text-muted/30 group-hover:text-accent/30 transition-colors">
                    {step.number}
                  </span>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                    step.color === 'accent' 
                      ? 'gradient-accent glow-accent' 
                      : 'gradient-premium glow-primary'
                  }`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-4 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow for non-last items */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card border border-border/50 shadow-lg items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: '600ms' }}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-muted/50 rounded-2xl border border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-display font-bold text-foreground">Ready to get started?</p>
                <p className="text-muted-foreground text-sm">Most repairs completed same-day</p>
              </div>
            </div>
            <a href="tel:+18005551234" className="btn-cta">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;