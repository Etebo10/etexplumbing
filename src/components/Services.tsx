import { Link } from "react-router-dom";
import {
  Wrench,
  Droplets,
  Flame,
  Search,
  Pipette,
  ShowerHead,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Emergency Plumbing",
      description:
        "24/7 emergency response for burst pipes, major leaks, and urgent repairs.",
      link: "/services#emergency",
    },
    {
      icon: Droplets,
      title: "Drain Cleaning",
      description:
        "Professional drain clearing and hydro jetting for stubborn clogs.",
      link: "/drain-cleaning",
    },
    {
      icon: Flame,
      title: "Water Heater Repair",
      description:
        "Expert repair and installation for all water heater types and brands.",
      link: "/services#water-heater",
    },
    {
      icon: Search,
      title: "Leak Detection",
      description:
        "Advanced technology to locate hidden leaks without damaging your property.",
      link: "/services#leak-detection",
    },
    {
      icon: Pipette,
      title: "Pipe Repair & Installation",
      description:
        "From minor repairs to complete repiping, we handle it all.",
      link: "/pipe-repair",
    },
    {
      icon: ShowerHead,
      title: "Fixture Installation",
      description:
        "Professional installation of faucets, toilets, showers, and more.",
      link: "/services#fixtures",
    },
  ];

  return (
    <section className="section-padding bg-background" id="services">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Complete Plumbing Solutions for Your Home
          </h2>
          <p className="text-muted-foreground text-lg">
            From quick fixes to major renovations, our licensed plumbers deliver 
            quality workmanship with a satisfaction guarantee.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="card-service group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <div className="flex items-center gap-2 text-accent font-medium">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services" className="btn-cta-secondary">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
