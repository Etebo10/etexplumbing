import { Clock, DollarSign, Shield, Users, ThumbsUp } from "lucide-react";

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
        "We're your neighbors. Our team knows the local plumbing systems inside out.",
    },
    {
      icon: ThumbsUp,
      title: "Satisfaction Guarantee",
      description:
        "Not happy? We'll make it right. Your satisfaction is our priority.",
    },
  ];

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
              The Right Choice for Your Plumbing Needs
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              With over two decades of experience and thousands of satisfied 
              customers, we've built our reputation on reliability, expertise, 
              and exceptional customer service.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl" />
            <div className="relative bg-white rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-muted/50 rounded-xl">
                  <div className="font-display font-bold text-4xl md:text-5xl text-primary mb-2">
                    20+
                  </div>
                  <div className="text-muted-foreground">Years of Service</div>
                </div>
                <div className="text-center p-6 bg-muted/50 rounded-xl">
                  <div className="font-display font-bold text-4xl md:text-5xl text-primary mb-2">
                    15k+
                  </div>
                  <div className="text-muted-foreground">Jobs Completed</div>
                </div>
                <div className="text-center p-6 bg-muted/50 rounded-xl">
                  <div className="font-display font-bold text-4xl md:text-5xl text-accent mb-2">
                    99%
                  </div>
                  <div className="text-muted-foreground">Satisfaction Rate</div>
                </div>
                <div className="text-center p-6 bg-muted/50 rounded-xl">
                  <div className="font-display font-bold text-4xl md:text-5xl text-accent mb-2">
                    30
                  </div>
                  <div className="text-muted-foreground">Min Response</div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary rounded-xl text-center">
                <p className="text-white font-medium">
                  "Best plumber I've ever hired. Fast, professional, and fair prices!"
                </p>
                <p className="text-white/70 text-sm mt-2">— James R., Verified Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
