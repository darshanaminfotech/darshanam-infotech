import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">D</span>
              </div>
              <span className="font-display font-bold text-xl">
                Darshanam<span className="text-accent"> Infotech</span>
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Empowering businesses with cutting-edge digital marketing and IT solutions 
              to drive growth and success in the digital age.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Why Choose Us", path: "/why-choose-us" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Facebook Marketing",
                "Instagram Marketing",
                "Social Media Ads",
                "Web Development",
                "IT Consulting",
              ].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=darshanaminfotech@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                >
                  <Mail className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>darshanaminfotech@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8238334799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                >
                  <Phone className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>8238334799</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>fo-426,abc-2, near abc circle, mota varacha,surat - 394101</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Darshanam Infotech. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
