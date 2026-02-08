import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Droplets, ChevronRight } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-18 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${
              isScrolled ? 'gradient-hero shadow-md' : 'bg-white/20 backdrop-blur-sm border border-white/30'
            }`}>
              <Droplets className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-white'}`} />
            </div>
            <div>
              <span className={`font-display font-bold text-xl transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>
                ProFlow
              </span>
              <span className={`font-display font-bold text-xl transition-colors duration-300 ${
                isScrolled ? 'text-accent' : 'text-accent'
              }`}>
                Plumbing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? isScrolled 
                      ? "text-accent bg-accent/10" 
                      : "text-white bg-white/20"
                    : isScrolled
                      ? "text-foreground hover:text-accent hover:bg-accent/5"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+18005551234"
              className={`flex items-center gap-2 font-semibold transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">(800) 555-1234</span>
            </a>
            <a href="tel:+18005551234" className="btn-cta text-sm px-5 py-2.5">
              Call Now
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'text-foreground hover:bg-muted' 
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-2xl transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col p-4 max-h-[calc(100vh-80px)] overflow-auto">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`py-4 px-5 text-base font-medium rounded-xl transition-all duration-200 ${
                  isActive(link.path)
                    ? "text-accent bg-accent/10"
                    : "text-foreground hover:bg-muted"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-border">
              <a
                href="tel:+18005551234"
                className="btn-cta w-full justify-center text-lg py-4"
              >
                <Phone className="w-5 h-5" />
                Call (800) 555-1234
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;