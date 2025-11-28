"use client";
import banner from "../public/images/banner.webp";
import { PHONE_NUMBER } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-accent to-background bg-cover bg-center"
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      <div className="absolute w-full h-full top-0 left-0 bg-black/60 z-10"></div>
      <div className="container mx-auto px-6 py-32 md:py-20 relative z-10">
        <div className="grid md:grid-cols-1 gap-12 items-center">
          {/* Text Content */}
          <div className={`hero-content flex flex-col w-full items-center`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-secondary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-sm font-semibold">Available 24/7</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title text-5xl md:text-7xl  font-bold text-foreground mb-6 leading-tight text-white">
              All Your <span className="highlight-text">Heating</span>
              <span className="block gradient-text">Cooling Needs!</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle text-white text-lg md:text-xl text-foreground/70 mb-8 max-w-lg leading-relaxed">
              Professional HVAC installation, maintenance, and repair services
              in Dubai.
              <span className="text-secondary font-semibold">
                {" "}
                Your comfort is our priority.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="cta-button group bg-foreground text-background px-6 py-2 rounded-full font-semibold text-md hover:bg-secondary hover:text-foreground transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-3">
                <span>BOOK A SERVICE</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </button>

              <a
                href={`tel:${PHONE_NUMBER.replace(/[^0-9+]/g, "")}`}
                className="cta-button-secondary bg-secondary/10 text-white px-6 py-2 rounded-full font-semibold text-md hover:bg-secondary hover:text-foreground transition-all duration-300 border-2 border-secondary/30 hover:border-secondary flex items-center justify-center gap-2"
              >
                <span>CALL NOW</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-white">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span>14+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <span>1000+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
