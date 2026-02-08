import { MapPin, Truck, Users, Award } from "lucide-react";
import serviceAreaImage from "@/assets/service-area.jpg";

const LocalTrust = () => {
  const features = [
    {
      icon: Truck,
      title: "Fully Equipped Service Vans",
      description: "Our trucks carry all necessary parts and tools for most repairs.",
    },
    {
      icon: Users,
      title: "Background-Checked Technicians",
      description: "Every team member passes rigorous background and drug screening.",
    },
    {
      icon: Award,
      title: "Ongoing Training",
      description: "Our plumbers stay current with the latest techniques and codes.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map/Image Area */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted shadow-xl">
              <img 
                src={serviceAreaImage} 
                alt="Professional plumbing service van in residential neighborhood" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 max-w-xs hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    Local & Trusted
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Serving your neighbors since 2003
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Your Local Experts
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
              A Team You Can Trust in Your Home
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We're not a faceless corporation. We're your neighbors—families 
              who live and work right here in the community. When you call us, 
              you get real people who care about doing the job right.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Areas List */}
            <div className="mt-8 p-6 bg-muted/50 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">
                Areas We Serve:
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Downtown",
                  "Westside",
                  "East End",
                  "North District",
                  "South Hills",
                  "Riverside",
                  "Oak Park",
                  "Maple Heights",
                  "Cedar Grove",
                  "Pine Valley",
                ].map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 bg-white rounded-full text-sm text-foreground shadow-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalTrust;
