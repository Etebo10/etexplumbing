import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import { Star, Quote, Phone } from "lucide-react";

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Downtown",
      rating: 5,
      text: "Our basement was flooding at 2 AM. ProFlow arrived within 30 minutes and had the issue fixed before sunrise. Absolute lifesavers! Their team was professional, courteous, and incredibly efficient. I can't recommend them enough.",
      service: "Emergency Plumbing",
    },
    {
      name: "Michael Thompson",
      location: "Westside",
      rating: 5,
      text: "I've used many plumbers over the years, but ProFlow is by far the best. They explained everything upfront, gave me a fair quote, and the work was flawless. No hidden fees, no surprises. Just honest, quality service.",
      service: "Water Heater Installation",
    },
    {
      name: "Jennifer Roberts",
      location: "Suburbs",
      rating: 5,
      text: "From the initial call to job completion, everything was seamless. They installed our new water heater in record time. Fair pricing and excellent workmanship. The technician even cleaned up after the job. 10/10!",
      service: "Water Heater Replacement",
    },
    {
      name: "David Chen",
      location: "East End",
      rating: 5,
      text: "Finally, a plumber who shows up on time! The technician was knowledgeable, clean, and respectful of our home. Fixed a tricky leak that two other companies couldn't solve. ProFlow has earned a customer for life.",
      service: "Leak Detection",
    },
    {
      name: "Amanda Peters",
      location: "North District",
      rating: 5,
      text: "We had a complete bathroom remodel done by ProFlow. The attention to detail was impressive. They stayed within budget and finished ahead of schedule. Communication was excellent throughout the entire project.",
      service: "Bathroom Remodel",
    },
    {
      name: "Robert Garcia",
      location: "Midtown",
      rating: 5,
      text: "Emergency drain backup on a holiday weekend. ProFlow didn't charge extra for the holiday call. That's integrity. They were professional, fast, and fair. They've definitely earned my trust and future business.",
      service: "Drain Cleaning",
    },
    {
      name: "Lisa Wang",
      location: "Oak Park",
      rating: 5,
      text: "Had them repipe our entire house. It was a big job, but they completed it in just two days with minimal disruption. The quality of work is outstanding. Our water pressure has never been better!",
      service: "Whole House Repiping",
    },
    {
      name: "James Wilson",
      location: "Riverside",
      rating: 5,
      text: "Quick, professional, and reasonably priced. They fixed our kitchen sink issue in under an hour. The technician even gave us tips on preventing future problems. Great customer service from start to finish.",
      service: "Kitchen Plumbing",
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
              Customer Testimonials
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Don't just take our word for it. Here's what real customers have to 
              say about their experience with ProFlow Plumbing.
            </p>
            <div className="inline-flex items-center gap-4 bg-white/10 rounded-full px-6 py-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-white font-semibold">
                4.9 Average Rating (500+ Reviews)
              </span>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <Quote className="w-8 h-8 text-accent/20 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground text-lg mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-white font-semibold">
                        {testimonial.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                      {testimonial.service}
                    </span>
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
              Ready to Join Our Happy Customers?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Experience the ProFlow difference for yourself. Call us today!
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

export default TestimonialsPage;
