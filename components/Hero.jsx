"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import banner from "../public/images/banner.webp";
import { PHONE_NUMBER } from "@/lib/constants";

export default function Hero() {
  const handleWhatsAppClick = () => {
    const cleanNumber = PHONE_NUMBER.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${cleanNumber}`, "_blank");
  };

  return (
    <section className="relative min-h-[80vh] sm:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-accent/10 to-background mt-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="container mx-auto px-6 py-20 lg:py-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] sm:min-h-screen">
          {/* LEFT - TEXT */}
          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight">
              All Your <span className="text-secondary">Heating</span>
              <br />
              <span className="gradient-text bg-gradient-to-r from-secondary to-accent bg-clip-text">
                Cooling Needs!
              </span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/70 max-w-xl leading-relaxed">
              Fast, user-friendly and engaging — Professional HVAC installation,
              maintenance, and repair services in Dubai.
              <span className="text-secondary font-semibold block mt-2">
                Your comfort is our priority.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="group bg- from-secondary bg-foreground text-background px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3"
              >
                <span>Book a Demo</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </button>

              <a
                href={`tel:${PHONE_NUMBER.replace(/[^0-9+]/g, "")}`}
                className="bg-transparent text-foreground px-8 py-4 rounded-full font-semibold text-lg border-2 border-foreground/20 hover:border-secondary transition-all duration-300 flex items-center justify-center gap-2 hover:bg-secondary/10"
              >
                Call Now
              </a>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-8 pt-8 border-t border-foreground/10 backdrop-blur-md bg-background/20 rounded-xl p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-1">
                  14
                </div>
                <div className="text-sm text-foreground/60">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-1">
                  ~1000k
                </div>
                <div className="text-sm text-foreground/60">Happy Clients</div>
              </div>
            </motion.div>

            {/* Rating */}
            <motion.div
              className="flex items-center gap-3 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex text-yellow-400">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-2xl">
                    ★
                  </span>
                ))}
                <span className="text-2xl text-foreground/30">★</span>
              </div>
              <span className="text-lg font-semibold text-foreground">4.5</span>
              <span className="text-sm text-foreground/60">
                Average user rating
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT - IMAGE */}
          <motion.div
            className="relative flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl opacity-40"></div>

            <div className="relative w-full max-w-2xl aspect-square">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={banner}
                  alt="HVAC Services"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/20 via-transparent to-secondary/20"></div>
              </div>

              {/* Floating Cards */}
              <motion.div
                className="absolute top-10 left-0 lg:-left-10 bg-white/70 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-foreground/10"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-2xl">❄️</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Cool Check</div>
                    <div className="text-xs text-foreground/60">
                      System Active
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-20 right-0 lg:-right-10 bg-white/70 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-foreground/10"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Your Task</div>
                    <div className="text-xs text-foreground/60">Completed</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/60 text-sm"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        ↓ Scroll to explore
      </motion.div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(255, 255, 255, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.08) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}
