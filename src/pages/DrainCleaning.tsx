import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DrainCleaning = () => {
  const features = [
    "Professional hydro jetting",
    "Video camera inspection",
    "Rooter services",
    "Preventive maintenance plans",
    "Kitchen & bathroom drains",
    "Main sewer line cleaning",
    "Floor drain clearing",
    "Emergency service available",
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
                Professional Drain Cleaning Services
              </h1>
              <p className="text-white/80 text-lg mb-8">
                Stubborn clogs? Slow drains? Our expert technicians use advanced 
                equipment to clear any blockage and restore proper flow.
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
                  Why Choose Our Drain Cleaning Service?
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Don't let a clogged drain disrupt your day. Our professional 
                  drain cleaning services go beyond simple plunging—we use 
                  state-of-the-art equipment to completely clear your pipes and 
                  prevent future blockages.
                </p>
                <p className="text-muted-foreground mb-8">
                  From minor kitchen sink clogs to major sewer line blockages, 
                  our trained technicians have the tools and expertise to handle 
                  any drain issue quickly and effectively.
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
                  <div className="font-display font-bold text-5xl text-primary mb-2">
                    $99
                  </div>
                  <div className="text-muted-foreground mb-4">
                    Drain Cleaning Special*
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    *Standard drain cleaning. Some restrictions apply.
                  </p>
                  <a href="tel:+18005551234" className="btn-cta">
                    <Phone className="w-5 h-5" />
                    Claim Offer
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
              Don't Wait Until It's Too Late
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Small clogs can become big problems. Schedule your drain cleaning 
              today and avoid costly repairs.
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

export default DrainCleaning;
