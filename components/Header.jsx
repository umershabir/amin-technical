"use client";

import { useState, useEffect } from "react";
import { COMPANY_NAME, PHONE_NUMBER } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section for navigation highlighting
      const sections = ["services"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="logo-container cursor-pointer group"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-secondary transition-colors duration-300">
                {COMPANY_NAME}
              </h1>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {["services"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`nav-link text-foreground hover:text-secondary transition-all duration-300 capitalize font-medium text-lg relative ${
                    activeSection === item ? "active" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </button>
              ))}

              {/* Call Button - Desktop */}
              <a
                href={`tel:${PHONE_NUMBER.replace(/[^0-9+]/g, "")}`}
                className="call-button bg-secondary text-foreground px-6 py-2.5 rounded-full font-semibold hover:bg-foreground hover:text-background transition-all duration-300 shadow-md hover:shadow-xl flex items-center gap-2"
                style={{ animationDelay: "300ms" }}
              >
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-foreground/95 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-20 left-0 right-0 bg-background m-6 rounded-3xl shadow-2xl transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="p-8 space-y-6">
            {/* Navigation Links */}
            {["about", "services", "contact"].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left text-2xl font-semibold text-foreground hover:text-secondary transition-colors duration-300 capitalize mobile-nav-item ${
                  activeSection === item ? "text-secondary" : ""
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen
                    ? "translateX(0)"
                    : "translateX(-20px)",
                  transition: `all 0.5s ease ${index * 100}ms`,
                }}
              >
                {item}
              </button>
            ))}

            {/* Divider */}
            <div className="border-t border-foreground/10 my-6" />

            {/* Call Button - Mobile */}
            <a
              href={`tel:${PHONE_NUMBER.replace(/[^0-9+]/g, "")}`}
              className="block w-full bg-secondary text-foreground text-center py-4 rounded-2xl font-bold text-lg hover:bg-foreground hover:text-background transition-all duration-300 shadow-lg"
              style={{
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen
                  ? "translateY(0)"
                  : "translateY(20px)",
                transition: "all 0.5s ease 300ms",
              }}
            >
              📞 Call {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .logo-container {
          animation: fadeInDown 0.8s ease-out;
        }

        .nav-link {
          animation: fadeInDown 0.8s ease-out;
          position: relative;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--secondaryColor);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .nav-link.active {
          color: var(--secondaryColor);
        }

        .call-button {
          animation: fadeInDown 0.8s ease-out;
          position: relative;
          overflow: hidden;
        }

        .call-button::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(23, 23, 23, 0.1);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .call-button:hover::before {
          width: 300px;
          height: 300px;
        }

        .call-button:active {
          transform: scale(0.95);
        }

        .mobile-nav-item {
          position: relative;
          padding-left: 20px;
        }

        .mobile-nav-item::before {
          content: "→";
          position: absolute;
          left: 0;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .mobile-nav-item:hover::before {
          opacity: 1;
          left: 0;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Smooth body scroll lock when menu is open */
        body:has(.mobile-menu-open) {
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
