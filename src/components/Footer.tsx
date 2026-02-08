import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Droplets,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const services = [
    { name: "Emergency Plumbing", link: "/services#emergency" },
    { name: "Drain Cleaning", link: "/drain-cleaning" },
    { name: "Water Heater Repair", link: "/services#water-heater" },
    { name: "Leak Detection", link: "/services#leak-detection" },
    { name: "Pipe Repair", link: "/pipe-repair" },
    { name: "All Services", link: "/services" },
  ];

  const company = [
    { name: "About Us", link: "/about" },
    { name: "Testimonials", link: "/testimonials" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  const serviceAreas = [
    "Downtown",
    "Westside",
    "East End",
    "North District",
    "Suburbs",
    "Metro Area",
  ];

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2" />

      {/* Main Footer */}
      <div className="container-custom section-padding pb-12 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                <Droplets className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-xl block">
                  ProFlow<span className="text-accent">Plumbing</span>
                </span>
              </div>
            </Link>
            <p className="text-white/70 mb-8 leading-relaxed">
              Trusted by thousands of homeowners for over 20 years. Licensed, 
              insured, and committed to your complete satisfaction.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-accent rounded-full" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.link}
                    className="text-white/70 hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Areas */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-accent rounded-full" />
              Company
            </h4>
            <ul className="space-y-3 mb-8">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="text-white/70 hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-accent rounded-full" />
              Service Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1.5 bg-white/10 border border-white/10 rounded-lg text-sm text-white/70 hover:bg-white/20 hover:text-white transition-all duration-200"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-accent rounded-full" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+18005551234"
                  className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                    <Phone className="w-5 h-5 text-accent group-hover:text-white" />
                  </div>
                  <span className="font-semibold">(800) 555-1234</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@proflowplumbing.com"
                  className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                    <Mail className="w-5 h-5 text-white/70 group-hover:text-white" />
                  </div>
                  <span>info@proflowplumbing.com</span>
                </a>
              </li>
              <li className="flex items-start gap-4 text-white/70">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white/70" />
                </div>
                <span className="pt-2.5">
                  123 Main Street<br />
                  Metro City, ST 12345
                </span>
              </li>
              <li className="flex items-start gap-4 text-white/70">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white/70" />
                </div>
                <span className="pt-2.5">
                  24/7 Emergency Service<br />
                  Office: Mon-Fri 8AM-6PM
                </span>
              </li>
            </ul>

            {/* License Info */}
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-sm text-white/60">
                <span className="text-white/80 font-semibold">License #PLM-12345</span>
                <br />
                Fully Bonded & Insured
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative">
        <div className="container-custom px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} ProFlow Plumbing. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/50">
              <Link to="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/admin" className="hover:text-accent transition-colors">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;