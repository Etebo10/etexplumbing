import { useState } from "react";
import { Phone, Send, MapPin, Clock, CheckCircle } from "lucide-react";

const ContactCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: "", phone: "", service: "", message: "" });
  };

  const services = [
    "Emergency Plumbing",
    "Drain Cleaning",
    "Water Heater Repair",
    "Leak Detection",
    "Pipe Repair",
    "Fixture Installation",
    "Other",
  ];

  return (
    <section className="section-padding gradient-hero relative overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Need a Plumber Today?{" "}
              <span className="text-accent">We're Ready.</span>
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Don't let plumbing problems disrupt your day. Our expert team is 
              standing by to help you right now.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <a
                href="tel:+18005551234"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-white/70 text-sm">Call Us Now</div>
                  <div className="text-white font-bold text-xl group-hover:text-accent transition-colors">
                    (800) 555-1234
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-white/70 text-sm">Hours</div>
                  <div className="text-white font-semibold">
                    24/7 Emergency Service
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-white/70 text-sm">Service Area</div>
                  <div className="text-white font-semibold">
                    Metro Area & Surrounding Counties
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                  Thank You!
                </h3>
                <p className="text-muted-foreground">
                  We've received your request and will call you shortly.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                  Get Your Free Estimate
                </h3>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and we'll call you within 15 minutes.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-foreground mb-1"
                    >
                      Service Needed
                    </label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none bg-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-1"
                    >
                      Brief Description (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none resize-none"
                      placeholder="Tell us about your plumbing issue..."
                    />
                  </div>

                  <button type="submit" className="w-full btn-cta py-4 text-lg">
                    <Send className="w-5 h-5" />
                    Get Free Estimate
                  </button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting, you agree to receive calls/texts about your 
                    inquiry. We respect your privacy.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
