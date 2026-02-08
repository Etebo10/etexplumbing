import { Star, Shield, Clock, Award, MapPin } from "lucide-react";

const SocialProof = () => {
  const stats = [
    {
      icon: Star,
      value: "4.9",
      label: "Google Rating",
      sublabel: "500+ Reviews",
    },
    {
      icon: Shield,
      value: "20+",
      label: "Years Experience",
      sublabel: "Since 2004",
    },
    {
      icon: Clock,
      value: "30",
      label: "Min Response",
      sublabel: "Average Time",
    },
    {
      icon: Award,
      value: "15k+",
      label: "Jobs Completed",
      sublabel: "& Counting",
    },
    {
      icon: MapPin,
      value: "50+",
      label: "Service Areas",
      sublabel: "Local Coverage",
    },
  ];

  return (
    <section className="relative -mt-8 z-20 px-4">
      <div className="container-custom">
        <div className="bg-card rounded-2xl md:rounded-3xl shadow-2xl border border-border/50 overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-y lg:divide-y-0 divide-border/50">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 md:p-8 text-center group hover:bg-muted/30 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                </div>
                <div className="font-display font-bold text-3xl md:text-4xl text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-foreground font-semibold text-sm">
                  {stat.label}
                </div>
                <div className="text-muted-foreground text-xs mt-1">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom Banner */}
          <div className="px-6 py-4 bg-muted/30 border-t border-border/50">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                Available 24/7
              </span>
              <span>•</span>
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>Free Estimates</span>
              <span>•</span>
              <span className="text-accent font-semibold">Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;