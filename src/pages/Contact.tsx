import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const services = [
    "Emergency Plumbing",
    "Drain Cleaning",
    "Water Heater Repair",
    "Leak Detection",
    "Pipe Repair",
    "Fixture Installation",
    "General Inquiry",
    "Other",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="gradient-hero py-16 md:py-24">
          <div className="container-custom px-4 text-center">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Contact Us
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Have a question or need service? We're here to help. Reach out 
              anytime—we respond within 15 minutes during business hours.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-display font-bold text-3xl text-foreground mb-6">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Whether you have an emergency or just want to schedule routine 
                  maintenance, we're here for you 24/7.
                </p>

                <div className="space-y-6">
                  <a
                    href="tel:+18005551234"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        Call Us Anytime
                      </div>
                      <div className="font-semibold text-foreground text-lg group-hover:text-accent transition-colors">
                        (800) 555-1234
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@proflowplumbing.com"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        Email Us
                      </div>
                      <div className="font-semibold text-foreground group-hover:text-accent transition-colors">
                        info@proflowplumbing.com
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        Office Address
                      </div>
                      <div className="font-semibold text-foreground">
                        123 Main Street, Metro City, ST 12345
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Hours</div>
                      <div className="font-semibold text-foreground">
                        24/7 Emergency | Office: Mon-Fri 8AM-6PM
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-8 aspect-video bg-muted rounded-xl flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-muted-foreground/30" />
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-success" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground">
                      We'll get back to you within 15 minutes during business hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                      Send Us a Message
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Fill out the form below and we'll get back to you quickly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1">
                            Your Name
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1">
                            Service Needed
                          </label>
                          <select
                            required
                            value={formData.service}
                            onChange={(e) =>
                              setFormData({ ...formData, service: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent outline-none bg-white"
                          >
                            <option value="">Select a service</option>
                            {services.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Your Message
                        </label>
                        <textarea
                          rows={5}
                          required
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent outline-none resize-none"
                          placeholder="Tell us about your plumbing needs..."
                        />
                      </div>

                      <button type="submit" className="w-full btn-cta py-4 text-lg">
                        <Send className="w-5 h-5" />
                        Send Message
                      </button>

                      <p className="text-xs text-center text-muted-foreground">
                        We respect your privacy. Your information is never shared.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default Contact;
