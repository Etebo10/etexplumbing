import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Downtown",
      rating: 5,
      text: "Our basement was flooding at 2 AM. ProFlow arrived within 30 minutes and had the issue fixed before sunrise. Absolute lifesavers! Their team was professional, courteous, and incredibly efficient.",
      image: "SM",
    },
    {
      name: "Michael Thompson",
      location: "Westside",
      rating: 5,
      text: "I've used many plumbers over the years, but ProFlow is by far the best. They explained everything upfront, gave me a fair quote, and the work was flawless. Highly recommend!",
      image: "MT",
    },
    {
      name: "Jennifer Roberts",
      location: "Suburbs",
      rating: 5,
      text: "From the initial call to job completion, everything was seamless. They installed our new water heater in record time. Fair pricing and excellent workmanship. 10/10 would recommend.",
      image: "JR",
    },
    {
      name: "David Chen",
      location: "East End",
      rating: 5,
      text: "Finally, a plumber who shows up on time! The technician was knowledgeable, clean, and respectful of our home. Fixed a tricky leak that two other companies couldn't solve.",
      image: "DC",
    },
    {
      name: "Amanda Peters",
      location: "North District",
      rating: 5,
      text: "We had a complete bathroom remodel done by ProFlow. The attention to detail was impressive. They stayed within budget and finished ahead of schedule. Couldn't be happier!",
      image: "AP",
    },
    {
      name: "Robert Garcia",
      location: "Midtown",
      rating: 5,
      text: "Emergency drain backup on a holiday weekend. ProFlow didn't charge extra for the holiday call. That's integrity. They've earned a customer for life.",
      image: "RG",
    },
  ];

  return (
    <section className="section-padding bg-muted/30" id="testimonials">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Customer Reviews
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what homeowners in our 
            community have to say about our services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-accent/20 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-white font-semibold">
                  {testimonial.image}
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
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <span className="font-display font-bold text-2xl text-foreground">
                4.9
              </span>
              <span className="text-muted-foreground ml-2">
                Average Rating (500+ Reviews)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
