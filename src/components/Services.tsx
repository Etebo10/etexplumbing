import { Link } from "react-router-dom";
import {
  Wrench,
  Droplets,
  Flame,
  Search,
  Pipette,
  ShowerHead,
  ArrowRight,
  Zap,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Emergency Plumbing",
      description:
        "24/7 emergency response for burst pipes, major leaks, and urgent repairs. We're there when you need us most.",
      link: "/services#emergency",
      featured: true,
    },
    {
      icon: Droplets,
      title: "Drain Cleaning",
      description:
        "Professional drain clearing and hydro jetting for stubborn clogs. Restore full flow fast.",
      link: "/drain-cleaning",
      featured: false,
    },
    {
      icon: Flame,
      title: "Water Heater Repair",
      description:
        "Expert repair and installation for all water heater types. Hot water restored same-day.",
      link: "/services#water-heater",
      featured: false,
    },
    {
      icon: Search,
      title: "Leak Detection",
      description:
        "Advanced technology to locate hidden leaks without damaging your property.",
      link: "/services#leak-detection",
      featured: false,
    },
    {
      icon: Pipette,
      title: "Pipe Repair",
      description:
        "From minor repairs to complete repiping, we handle projects of any scale.",
      link: "/pipe-repair",
      featured: false,
    },
    {
      icon: ShowerHead,
      title: "Fixture Installation",
      description:
        "Professional installation of faucets, toilets, showers, and bathroom fixtures.",
      link: "/services#fixtures",
      featured: false,
    },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden" id="services">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="section-label mb-6 animate-fade-up">
            <Zap className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 animate-fade-up animation-delay-100">
            Complete Plumbing Solutions{" "}
            <span className="text-gradient">For Your Home</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed animate-fade-up animation-delay-200">
            From quick fixes to major renovations, our licensed plumbers deliver 
            quality workmanship backed by our satisfaction guarantee.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className={`card-service group cursor-pointer animate-fade-up ${
                service.featured ? 'sm:col-span-2 lg:col-span-1 ring-2 ring-accent/20' : ''
              }`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {service.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full border border-accent/20">
                  MOST POPULAR
                </div>
              )}
              
              <div className="icon-container w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-500 glow-primary">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all duration-300">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '900ms' }}>
          <Link to="/services" className="btn-cta-secondary group">
            View All Services
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;