import { useState } from "react";
import { Phone, Send, MapPin, Clock, CheckCircle, Sparkles, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContactCTA = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: formData.name,
        phone: formData.phone,
        email: formData.email || null,
        service: formData.service,
        message: formData.message || null,
      });

      if (error) throw error;

      setIsSubmitted(true);
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      
      toast({
        title: "Request Submitted!",
        description: "We'll call you back within 15 minutes.",
      });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4 text-accent" />
              Get In Touch
            </div>
            
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-6 leading-tight animate-fade-up animation-delay-100">
              Need a Plumber{" "}
              <span className="text-accent">Today?</span>
              <br />
              We're Ready.
            </h2>
            
            <p className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed animate-fade-up animation-delay-200">
              Don't let plumbing problems disrupt your day. Our expert team is 
              standing by to help you right now with fast, reliable service.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-8">
              <a
                href="tel:+18005551234"
                className="flex items-center gap-5 p-5 glass-card hover:bg-white/20 transition-all duration-300 group animate-fade-up animation-delay-300"
              >
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center glow-accent">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-white/70 text-sm font-medium">Call Us Now</div>
                  <div className="text-white font-bold text-2xl group-hover:text-accent transition-colors">
                    (800) 555-1234
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-white/50 ml-auto group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </a>

              <div className="flex items-center gap-5 p-5 glass-card animate-fade-up animation-delay-400">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-white/70 text-sm font-medium">Hours</div>
                  <div className="text-white font-semibold text-lg">
                    24/7 Emergency Service
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-5 p-5 glass-card animate-fade-up animation-delay-500">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-white/70 text-sm font-medium">Service Area</div>
                  <div className="text-white font-semibold text-lg">
                    Metro Area & Surrounding Counties
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-up animation-delay-300">
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-2xl border border-border/50 relative overflow-hidden">
              {/* Decorative Gradient */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
              
              {isSubmitted ? (
                <div className="text-center py-16 relative z-10">
                  <div className="w-20 h-20 rounded-full bg-success/10 border-2 border-success/30 flex items-center justify-center mx-auto mb-6 animate-scale-in">
                    <CheckCircle className="w-10 h-10 text-success" />
                  </div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    We've received your request and will call you within 15 minutes.
                  </p>
                </div>
              ) : (
                <div className="relative z-10">
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">
                    Get Your Free Estimate
                  </h3>
                  <p className="text-muted-foreground text-lg mb-8">
                    Fill out the form below and we'll call you back within 15 minutes.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none text-foreground"
                        placeholder="John Smith"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-5 py-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none text-foreground"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-5 py-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none text-foreground"
                          placeholder="john@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-2">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none text-foreground"
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
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                        Brief Description (Optional)
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none resize-none text-foreground"
                        placeholder="Tell us about your plumbing issue..."
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full btn-cta py-5 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Get Free Estimate
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center text-muted-foreground">
                      By submitting, you agree to receive calls/texts about your 
                      inquiry. We respect your privacy.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;