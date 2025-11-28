"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import aboutImg from "../public/images/about.jpg";
//
export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  // Main section visibility observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Stats section visibility observer for number animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      number: 14,
      suffix: "+",
      label: "Years of Expert Handyman Services",
    },
    {
      number: 500,
      suffix: "+",
      label: "Projects Completed with Excellence",
    },
    {
      number: 450,
      suffix: "+",
      label: "Satisfied Customers & Growing",
    },
    {
      number: 24,
      suffix: "/7",
      label: "Emergency Support Available",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <div
            className={`${isVisible ? "animate-fade-in-right" : "opacity-0"}`}
          >
            <span className="text-secondary text-sm font-semibold tracking-wider uppercase">
              WHO WE ARE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Your Trusted Handyman Partner
            </h2>
            <p className="text-foreground/70 mb-6 leading-relaxed text-lg">
              {`With over three decades of experience, we've built our reputation
              on delivering exceptional handyman services that exceed
              expectations. From minor repairs to major renovations, our skilled
              team handles every project with precision and care.`}
            </p>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              {` We understand that your home is your sanctuary. That's why we
              treat every job no matter how big or small with the same level of
              professionalism, attention to detail, and commitment to quality
              that has made us the preferred choice for homeowners and
              businesses alike.`}
            </p>

            {/* Key Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-secondary/20 p-2 rounded-lg mt-1">
                  <svg
                    className="w-5 h-5 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Licensed & Insured Professionals
                  </h3>
                  <p className="text-foreground/60 text-sm">
                    All our handymen are fully certified, background-checked,
                    and insured for your peace of mind.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-secondary/20 p-2 rounded-lg mt-1">
                  <svg
                    className="w-5 h-5 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Transparent Pricing
                  </h3>
                  <p className="text-foreground/60 text-sm">
                    No hidden fees, no surprises. Get accurate quotes before we
                    start any work.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-secondary/20 p-2 rounded-lg mt-1">
                  <svg
                    className="w-5 h-5 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Satisfaction Guaranteed
                  </h3>
                  <p className="text-foreground/60 text-sm">
                    We stand behind our work with a 100% satisfaction guarantee
                    on all services.
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <button className="bg-secondary text-foreground px-8 py-4 rounded-full font-semibold hover:bg-foreground hover:text-background transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 group">
              <span>Learn More About Us</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </button>
          </div>

          {/* Images */}
          <div
            className={`relative ${
              isVisible ? "animate-fade-in-left" : "opacity-0"
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={aboutImg}
                className="object-cover w-full h-[500px]"
                alt="Professional handyman services"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 bg-secondary text-foreground px-6 py-4 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">14+</div>
                <div className="text-sm font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats with animated counters */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              isVisible={statsVisible}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in-left {
          animation: fadeInLeft 1s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

// Animated counter component
function StatCard({ stat, isVisible, delay }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = stat.number / steps;
      const stepDuration = duration / steps;

      const timer = setInterval(() => {
        countRef.current += increment;
        if (countRef.current >= stat.number) {
          setCount(stat.number);
          clearInterval(timer);
        } else {
          setCount(Math.floor(countRef.current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible, stat.number]);

  return (
    <div
      className={`text-center ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-5xl font-bold text-foreground mb-2 flex items-center justify-center gap-1">
        <span className="text-secondary text-3xl">↑</span>
        <span className="tabular-nums">
          {count}
          {stat.suffix}
        </span>
      </div>
      <p className="text-foreground/60 text-sm font-medium">{stat.label}</p>
    </div>
  );
}
