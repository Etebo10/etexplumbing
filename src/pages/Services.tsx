import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import { Link } from "react-router-dom";
import {
  Wrench,
  Droplets,
  Flame,
  Search,
  Pipette,
  ShowerHead,
  Phone,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      id: "emergency",
      icon: Wrench,
      title: "Emergency Plumbing",
      description:
        "When disaster strikes, we're there. Our 24/7 emergency team responds within 30 minutes to burst pipes, major leaks, sewage backups, and other urgent issues.",
      features: [
        "30-minute response time",
        "Available 24/7/365",
        "No extra charge for nights/weekends",
        "Immediate damage mitigation",
      ],
    },
    {
      id: "drain-cleaning",
      icon: Droplets,
      title: "Drain Cleaning",
      description:
        "From slow drains to complete blockages, our professional drain cleaning services use state-of-the-art equipment to restore proper flow.",
      features: [
        "Hydro jetting services",
        "Video camera inspection",
        "Preventive maintenance",
        "Root removal",
      ],
    },
    {
      id: "water-heater",
      icon: Flame,
      title: "Water Heater Services",
      description:
        "Expert installation, repair, and maintenance for all types of water heaters including tankless, traditional, and hybrid systems.",
      features: [
        "Same-day repair",
        "All major brands",
        "Energy-efficient upgrades",
        "Extended warranties available",
      ],
    },
    {
      id: "leak-detection",
      icon: Search,
      title: "Leak Detection",
      description:
        "Using advanced acoustic and thermal technology, we locate hidden leaks without damaging your walls or floors.",
      features: [
        "Non-invasive technology",
        "Accurate pinpointing",
        "Foundation leak detection",
        "Detailed reports",
      ],
    },
    {
      id: "pipe-repair",
      icon: Pipette,
      title: "Pipe Repair & Replacement",
      description:
        "From minor repairs to complete repiping, we handle all pipe-related issues with quality materials and expert craftsmanship.",
      features: [
        "Trenchless repair options",
        "Copper & PEX installation",
        "Corrosion treatment",
        "Code compliance",
      ],
    },
    {
      id: "fixtures",
      icon: ShowerHead,
      title: "Fixture Installation",
      description:
        "Professional installation of all bathroom and kitchen fixtures including faucets, toilets, garbage disposals, and more.",
      features: [
        "All major brands",
        "Proper sealing & connections",
        "Old fixture removal",
        "Testing & verification",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="gradient-hero py-16 md:py-24">
          <div className="container-custom px-4 text-center">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Our Plumbing Services
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Comprehensive plumbing solutions for your home. From emergency 
              repairs to new installations, we've got you covered.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 rounded-xl gradient-hero flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="font-display font-bold text-3xl text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="tel:+18005551234" className="btn-cta inline-flex">
                      <Phone className="w-5 h-5" />
                      Schedule Service
                    </a>
                  </div>
                  <div
                    className={`bg-muted rounded-2xl aspect-video flex items-center justify-center ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <service.icon className="w-24 h-24 text-primary/20" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding gradient-hero">
          <div className="container-custom text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Contact us today for a free estimate on any of our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+18005551234" className="btn-cta text-lg px-8">
                <Phone className="w-5 h-5" />
                Call (800) 555-1234
              </a>
              <Link to="/contact" className="btn-cta-outline text-lg px-8">
                Get Free Estimate
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default ServicesPage;
