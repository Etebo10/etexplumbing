import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PipeRepair = () => {
  const features = [
    "Emergency pipe repair",
    "Trenchless pipe replacement",
    "Copper pipe installation",
    "PEX repiping services",
    "Corrosion repair",
    "Frozen pipe repair",
    "Slab leak repair",
    "Code compliance upgrades",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="gradient-hero py-16 md:py-24">
          <div className="container-custom px-4">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
                Specialized Service
              </span>
              <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
                Expert Pipe Repair & Installation
              </h1>
              <p className="text-white/80 text-lg mb-8">
                From minor repairs to complete repiping, our certified plumbers 
                deliver lasting solutions with quality materials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+18005551234" className="btn-cta text-lg">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <Link to="/contact" className="btn-cta-outline text-lg">
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display font-bold text-3xl text-foreground mb-6">
                  Complete Pipe Solutions
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Damaged, corroded, or outdated pipes can lead to leaks, low 
                  water pressure, and even water damage. Our pipe repair and 
                  replacement services address all these issues with minimal 
                  disruption to your home.
                </p>
                <p className="text-muted-foreground mb-8">
                  We use modern trenchless technology whenever possible, meaning 
                  we can repair or replace pipes without digging up your yard or 
                  tearing into walls.
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-muted rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display font-bold text-2xl text-primary mb-2">
                    Free Inspection
                  </div>
                  <div className="text-muted-foreground mb-4">
                    With Any Pipe Repair Service
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    We'll inspect your entire plumbing system at no extra cost.
                  </p>
                  <a href="tel:+18005551234" className="btn-cta">
                    <Phone className="w-5 h-5" />
                    Schedule Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-muted/50">
          <div className="container-custom text-center">
            <h2 className="font-display font-bold text-3xl text-foreground mb-4">
              Protect Your Home's Plumbing
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Don't ignore signs of pipe problems. Contact us today for a 
              professional assessment.
            </p>
            <Link to="/services" className="btn-cta-secondary inline-flex">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default PipeRepair;
