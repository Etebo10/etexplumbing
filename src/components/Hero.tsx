import { Phone, Calendar, Shield, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-plumber.jpg";

const Hero = () => {
  const trustBadges = [
    { icon: Shield, text: "Licensed & Insured" },
    { icon: Clock, text: "24/7 Emergency Service" },
    { icon: Award, text: "Satisfaction Guaranteed" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10 px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 animate-fade-up">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="trust-badge"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <badge.icon className="w-4 h-4 text-accent" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 animate-fade-up animation-delay-100">
              Fast, Reliable Plumbing Services{" "}
              <span className="text-accent">You Can Trust</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up animation-delay-200">
              From emergency repairs to routine maintenance, our licensed experts 
              deliver same-day solutions with transparent pricing. Serving your 
              community for over 20 years.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animation-delay-300">
              <a
                href="tel:+18005551234"
                className="btn-cta text-lg px-8 py-4 group"
              >
                <Phone className="w-5 h-5 group-hover:animate-bounce-subtle" />
                Call Now - (800) 555-1234
              </a>
              <a
                href="#contact"
                className="btn-cta-outline text-lg px-8 py-4"
              >
                <Calendar className="w-5 h-5" />
                Get Free Estimate
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20 animate-fade-up animation-delay-400">
              <div className="text-center lg:text-left">
                <div className="font-display font-bold text-3xl md:text-4xl text-white">
                  20+
                </div>
                <div className="text-sm text-white/70">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-display font-bold text-3xl md:text-4xl text-white">
                  15k+
                </div>
                <div className="text-sm text-white/70">Happy Customers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-display font-bold text-3xl md:text-4xl text-accent">
                  4.9
                </div>
                <div className="text-sm text-white/70">★ Google Rating</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block relative animate-fade-up animation-delay-300">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Professional plumber at work" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                  <div className="text-center">
                    <p className="text-white font-semibold text-lg">
                      Need Help Now?
                    </p>
                    <p className="text-white/70 text-sm mt-1">
                      Our experts are standing by 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
