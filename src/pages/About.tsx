import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import { Phone, Award, Users, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We do what's right, even when no one is watching.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We take pride in delivering exceptional work every time.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We're invested in the neighborhoods we serve.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "When we say we'll be there, we're there—on time, every time.",
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
              About ProFlow Plumbing
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Family-owned and operated since 2003. Serving our community with 
              honesty, expertise, and a commitment to excellence.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  Our Story
                </span>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
                  Two Decades of Trusted Service
                </h2>
                <p className="text-muted-foreground text-lg mb-4">
                  ProFlow Plumbing was founded by John Mitchell, a third-generation 
                  plumber who grew up watching his father and grandfather serve 
                  this community with skill and integrity.
                </p>
                <p className="text-muted-foreground mb-4">
                  What started as a one-man operation has grown into a team of 
                  20+ licensed professionals, all sharing the same commitment to 
                  quality workmanship and customer satisfaction.
                </p>
                <p className="text-muted-foreground">
                  Today, we're proud to be the most trusted name in local plumbing, 
                  having served over 15,000 happy customers and counting.
                </p>
              </div>
              <div className="bg-muted rounded-2xl aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="font-display font-bold text-6xl text-primary mb-2">
                    2003
                  </div>
                  <div className="text-muted-foreground">Established</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-muted/50">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Our Values
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                What Drives Us Every Day
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-sm"
                >
                  <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="font-display font-bold text-4xl md:text-5xl text-primary mb-2">
                  20+
                </div>
                <div className="text-muted-foreground">Years in Business</div>
              </div>
              <div className="text-center">
                <div className="font-display font-bold text-4xl md:text-5xl text-primary mb-2">
                  15k+
                </div>
                <div className="text-muted-foreground">Customers Served</div>
              </div>
              <div className="text-center">
                <div className="font-display font-bold text-4xl md:text-5xl text-accent mb-2">
                  25+
                </div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center">
                <div className="font-display font-bold text-4xl md:text-5xl text-accent mb-2">
                  4.9
                </div>
                <div className="text-muted-foreground">★ Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding gradient-hero">
          <div className="container-custom text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Experience the ProFlow Difference
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Ready to work with a team that truly cares? Give us a call today.
            </p>
            <a href="tel:+18005551234" className="btn-cta text-lg px-8">
              <Phone className="w-5 h-5" />
              Call (800) 555-1234
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default About;
