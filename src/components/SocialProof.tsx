import { Star, MapPin } from "lucide-react";

const SocialProof = () => {
  const reviews = [
    {
      text: "Fixed our emergency leak in under an hour. Truly lifesavers!",
      author: "Sarah M.",
      rating: 5,
    },
    {
      text: "Transparent pricing, no surprises. Highly recommend!",
      author: "Mike T.",
      rating: 5,
    },
    {
      text: "Professional, punctual, and polite. Will use again!",
      author: "Jennifer L.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-white py-8 border-b border-border">
      <div className="container-custom px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Ratings */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>
              <span className="font-semibold text-foreground">4.9/5</span>
              <span className="text-muted-foreground">on Google</span>
            </div>
            <div className="h-6 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-accent" />
              <span>Serving Metro Area for 20+ Years</span>
            </div>
          </div>

          {/* Mini Testimonials */}
          <div className="flex flex-wrap justify-center gap-4">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-muted/50 rounded-full px-4 py-2"
              >
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-accent text-accent"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground italic">
                  "{review.text.slice(0, 30)}..."
                </span>
                <span className="text-xs font-medium text-foreground">
                  — {review.author}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
