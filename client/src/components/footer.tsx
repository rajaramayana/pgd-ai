import { Facebook, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { href: "#overview", label: "Program Overview" },
    { href: "#curriculum", label: "Curriculum" },
    { href: "#eligibility", label: "Eligibility" },
    { href: "#careers", label: "Career Paths" },
    { href: "#contact", label: "Contact Us" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div data-testid="footer-brand">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-academic-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">PU</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Purbanchal University</h3>
                <p className="text-sm text-gray-400">AI Diploma Program</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering the next generation of AI professionals through practical, industry-focused education.
            </p>
          </div>

          <div data-testid="footer-quick-links">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-white transition-colors text-left"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div data-testid="footer-social">
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-academic-blue transition-colors"
                  aria-label={social.label}
                  data-testid={`social-link-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400" data-testid="footer-copyright">
          <p>&copy; 2024 Purbanchal University. All rights reserved. | Post Graduate Diploma in Artificial Intelligence</p>
        </div>
      </div>
    </footer>
  );
}