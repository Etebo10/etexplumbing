import { Clock, DollarSign, Shield, Users, ThumbsUp, CheckCircle2, Star } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Same-Day Service",
      description:
        "We understand urgency. Most calls are resolved the same day you reach out.",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description:
        "No hidden fees, no surprises. Get upfront quotes before any work begins.",
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description:
        "Fully licensed, bonded, and insured for your complete peace of mind.",
    },
    {
      icon: Users,
      title: "Local Experts",
      description:
        "We're your neighbors. Our team knows local plumbing systems inside out.",
    },
    {
      icon: ThumbsUp,
      title: "Satisfaction Guarantee",
      description:
        "Not happy? We'll make it right. Your satisfaction is our priority.",
    },
  ];

  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="section-label mb-6 animate-fade-up">
              <CheckCircle2 className="w-4 h-4" />
              Why Choose Us
            </div>
            
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 animate-fade-up animation-delay-100">
              The Right Choice for{" "}
              <span className="text-gradient">Your Plumbing Needs</span>
            </h2>
            
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 animate-fade-up animation-delay-200">
              With over two decades of experience and thousands of satisfied 
              customers, we've built our reputation on reliability, expertise, 
              and exceptional customer service.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex gap-5 p-5 bg-card rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300 group animate-fade-up"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <reason.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground text-lg mb-1 group-hover:text-accent transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative animate-fade-up animation-delay-300">
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative bg-card rounded-3xl p-8 md:p-10 shadow-2xl border border-border/50">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <StatBox value="20+" label="Years of Service" color="primary" />
                <StatBox value="15k+" label="Jobs Completed" color="primary" />
                <StatBox value="99%" label="Satisfaction Rate" color="accent" />
                <StatBox value="30" label="Min Response" suffix="min" color="accent" />
              </div>

              {/* Featured Testimonial */}
              <div className="mt-8 p-6 gradient-premium rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-white font-medium text-lg leading-relaxed relative z-10">
                  "Best plumber I've ever hired. Fast, professional, and fair prices! They fixed our burst pipe in under an hour."
                </p>
                
                <div className="flex items-center gap-3 mt-5 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                    JR
                  </div>
                  <div>
                    <p className="text-white font-semibold">James Rodriguez</p>
                    <p className="text-white/60 text-sm">Verified Customer</p>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 flex items-center justify-center gap-6 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-success" />
                  <span>Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  <span>Licensed</span>
                </div>
                <div className="flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4 text-success" />
                  <span>Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatBox = ({ value, label, suffix, color }: { value: string; label: string; suffix?: string; color: 'primary' | 'accent' }) => (
  <div className="text-center p-6 bg-muted/50 rounded-2xl border border-border/50 hover:border-accent/30 transition-colors duration-300">
    <div className={`font-display font-bold text-4xl md:text-5xl mb-2 ${color === 'accent' ? 'text-accent' : 'text-primary'}`}>
      {value}
      {suffix && <span className="text-xl ml-1">{suffix}</span>}
    </div>
    <div className="text-muted-foreground font-medium">{label}</div>
  </div>
);

export default WhyChooseUs;