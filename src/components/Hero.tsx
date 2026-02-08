import { Phone, Calendar, Shield, Clock, Award, Sparkles, Star } from "lucide-react";
import heroImage from "@/assets/hero-plumber.jpg";

const Hero = () => {
  const trustBadges = [
    { icon: Shield, text: "Licensed & Insured" },
    { icon: Clock, text: "24/7 Emergency" },
    { icon: Award, text: "Satisfaction Guaranteed" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional plumbing services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/30" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl floating-delayed" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse-glow" />
      </div>

      <div className="container-custom relative z-10 px-4 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Content - Takes 7 columns */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="trust-badge animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <badge.icon className="w-4 h-4 text-accent" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Premium Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6 animate-fade-up animation-delay-100">
              <Sparkles className="w-4 h-4 text-accent" />
              Trusted by 15,000+ Homeowners
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 animate-fade-up animation-delay-200">
              Expert Plumbing
              <br />
              <span className="relative inline-block">
                <span className="text-accent">You Can Trust</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C47.667 2.167 141.6 -1.4 199 5.5" stroke="hsl(24 100% 50%)" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-up animation-delay-300">
              From emergency repairs to complete installations, our licensed professionals 
              deliver <span className="text-white font-semibold">same-day service</span> with 
              transparent pricing. No surprises, just results.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animation-delay-400">
              <a
                href="tel:+18005551234"
                className="btn-cta text-lg px-8 py-4 group"
              >
                <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
                <span>Call Now</span>
                <span className="hidden sm:inline">- (800) 555-1234</span>
              </a>
              <a
                href="#contact"
                className="btn-cta-outline text-lg px-8 py-4 group"
              >
                <Calendar className="w-5 h-5 transition-transform group-hover:scale-110" />
                Get Free Estimate
              </a>
            </div>

            {/* Social Proof Mini */}
            <div className="mt-10 pt-8 border-t border-white/10 animate-fade-up animation-delay-500">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-white/30 to-white/10 border-2 border-white/50 flex items-center justify-center text-white text-xs font-bold"
                    >
                      {['JD', 'MK', 'SR', 'AL', 'TC'][i-1]}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 mb-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                    <span className="text-white font-bold ml-1">4.9</span>
                  </div>
                  <p className="text-white/70 text-sm">Based on 500+ reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Card - Takes 5 columns */}
          <div className="lg:col-span-5 hidden lg:block animate-fade-up animation-delay-400">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-3xl animate-pulse-glow" />
              
              {/* Main Card */}
              <div className="relative glass-card p-8">
                <div className="grid grid-cols-2 gap-6">
                  <StatCard value="20+" label="Years Experience" accent={false} />
                  <StatCard value="15k+" label="Happy Customers" accent={false} />
                  <StatCard value="30" label="Min Response" suffix="min" accent />
                  <StatCard value="99%" label="Satisfaction Rate" accent />
                </div>

                {/* Featured Review */}
                <div className="mt-6 p-5 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-white/90 font-medium leading-relaxed">
                    "Best plumber I've ever hired. Fast, professional, and the pricing was exactly what they quoted!"
                  </p>
                  <p className="text-white/60 text-sm mt-3 font-medium">— James R., Verified Customer</p>
                </div>

                {/* Urgency Badge */}
                <div className="mt-6 flex items-center justify-center gap-3 py-3 px-4 bg-accent/20 rounded-xl border border-accent/30">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-white font-semibold">3 Technicians Available Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-8 h-14 rounded-full border-2 border-white/30 flex items-start justify-center pt-3">
          <div className="w-1.5 h-4 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ value, label, suffix, accent }: { value: string; label: string; suffix?: string; accent?: boolean }) => (
  <div className={`text-center p-5 rounded-xl ${accent ? 'bg-accent/20 border border-accent/30' : 'bg-white/10 border border-white/10'}`}>
    <div className={`font-display font-bold text-3xl xl:text-4xl ${accent ? 'text-accent' : 'text-white'} mb-1`}>
      {value}
      {suffix && <span className="text-lg ml-1">{suffix}</span>}
    </div>
    <div className="text-white/70 text-sm font-medium">{label}</div>
  </div>
);

export default Hero;