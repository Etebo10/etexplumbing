import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Droplets,
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
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <Droplets className="w-6 h-6 text-accent" />
              </div>
              <span className="font-display font-bold text-xl">
                ProFlow<span className="text-accent">Plumbing</span>
              </span>
            </Link>
            <p className="text-white/70 mb-6">
              Trusted by thousands of homeowners for over 20 years. Licensed, 
              insured, and committed to your satisfaction.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.link}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-display font-bold text-lg mt-8 mb-4">
              Service Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/70"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+18005551234"
                  className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  (800) 555-1234
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@proflowplumbing.com"
                  className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5 text-accent" />
                  info@proflowplumbing.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>
                  123 Main Street
                  <br />
                  Metro City, ST 12345
                </span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>
                  24/7 Emergency Service
                  <br />
                  Office: Mon-Fri 8AM-6PM
                </span>
              </li>
            </ul>

            {/* License Info */}
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <p className="text-sm text-white/60">
                License #PLM-12345
                <br />
                Bonded & Insured
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
