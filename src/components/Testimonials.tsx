import { Star, Quote, MessageSquare } from "lucide-react";
import testimonialSarah from "@/assets/testimonial-sarah.jpg";
import testimonialMichael from "@/assets/testimonial-michael.jpg";
import testimonialJennifer from "@/assets/testimonial-jennifer.jpg";
import testimonialDavid from "@/assets/testimonial-david.jpg";
import testimonialAmanda from "@/assets/testimonial-amanda.jpg";
import testimonialRobert from "@/assets/testimonial-robert.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Downtown",
      rating: 5,
      text: "Our basement was flooding at 2 AM. ProFlow arrived within 30 minutes and had the issue fixed before sunrise. Absolute lifesavers! Their team was professional, courteous, and incredibly efficient.",
      image: testimonialSarah,
      verified: true,
    },
    {
      name: "Michael Thompson",
      location: "Westside",
      rating: 5,
      text: "I've used many plumbers over the years, but ProFlow is by far the best. They explained everything upfront, gave me a fair quote, and the work was flawless. Highly recommend!",
      image: testimonialMichael,
      verified: true,
    },
    {
      name: "Jennifer Roberts",
      location: "Suburbs",
      rating: 5,
      text: "From the initial call to job completion, everything was seamless. They installed our new water heater in record time. Fair pricing and excellent workmanship. 10/10 would recommend.",
      image: testimonialJennifer,
      verified: true,
    },
    {
      name: "David Chen",
      location: "East End",
      rating: 5,
      text: "Finally, a plumber who shows up on time! The technician was knowledgeable, clean, and respectful of our home. Fixed a tricky leak that two other companies couldn't solve.",
      image: testimonialDavid,
      verified: true,
    },
    {
      name: "Amanda Peters",
      location: "North District",
      rating: 5,
      text: "We had a complete bathroom remodel done by ProFlow. The attention to detail was impressive. They stayed within budget and finished ahead of schedule. Couldn't be happier!",
      image: testimonialAmanda,
      verified: true,
    },
    {
      name: "Robert Garcia",
      location: "Midtown",
      rating: 5,
      text: "Emergency drain backup on a holiday weekend. ProFlow didn't charge extra for the holiday call. That's integrity. They've earned a customer for life.",
      image: testimonialRobert,
      verified: true,
    },
  ];

  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden" id="testimonials">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="section-label mb-6 animate-fade-up">
            <MessageSquare className="w-4 h-4" />
            Customer Reviews
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 animate-fade-up animation-delay-100">
            What Our Customers{" "}
            <span className="text-gradient">Say About Us</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed animate-fade-up animation-delay-200">
            Don't just take our word for it. Here's what homeowners in our 
            community have to say about our services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-7 shadow-lg border border-border/50 hover:shadow-xl hover:border-accent/20 transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-accent/20 mb-5 group-hover:text-accent/40 transition-colors" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 pt-5 border-t border-border/50">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-accent/20"
                />
                <div className="flex-1">
                  <div className="font-display font-bold text-foreground flex items-center gap-2">
                    {testimonial.name}
                    {testimonial.verified && (
                      <span className="text-xs px-2 py-0.5 bg-success/10 text-success rounded-full font-medium">
                        Verified
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: '900ms' }}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-card rounded-2xl px-8 py-6 shadow-xl border border-border/50">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-accent text-accent" />
              ))}
            </div>
            <div className="h-12 w-px bg-border hidden sm:block" />
            <div className="text-center sm:text-left">
              <div className="flex items-baseline gap-2 justify-center sm:justify-start">
                <span className="font-display font-bold text-4xl text-foreground">
                  4.9
                </span>
                <span className="text-muted-foreground font-medium">
                  out of 5
                </span>
              </div>
              <p className="text-muted-foreground text-sm mt-1">
                Based on 500+ verified reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;