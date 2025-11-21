"use client";

import { useEffect, useRef, useState } from "react";
import { featureStats } from "@/lib/data";
export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
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

  const stats = [
    {
      number: "30+",
      label: "Over 33 Years of Cleanly Painting Expertise",
    },
    {
      number: "200+",
      label: "Successfully finished project with creativity",
    },
    {
      number: "20k",
      label: "client easily conversions growth increased",
    },
    {
      number: "24/7",
      label: "Good Award Wining Cleaning Service",
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
          {/* Images */}
          <div
            className={`relative ${
              isVisible ? "animate-fade-in-left" : "opacity-0"
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image */}
              <div className="col-span-2 rounded-3xl overflow-hidden">
                <img
                  src="https://placehold.co/600x500"
                  alt="Professional technician"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`${isVisible ? "animate-fade-in-right" : "opacity-0"}`}
          >
            <span className="text-secondary text-sm font-semibold tracking-wider uppercase">
              WHO WE ARE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Why We Are Better Others
            </h2>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Vitae arcu nissa elit
              justo niht imp nulla. Vitae leo non amet mattsuada imperdat
              pretium diam.
            </p>

            {/* Button */}
            <button className="bg-secondary text-foreground px-8 py-4 rounded-full font-semibold hover:bg-foreground hover:text-background transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 group">
              <span>Know More</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Why Choose Us
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"></div>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl font-bold text-foreground mb-2 flex items-start justify-center">
                <span className="text-secondary text-2xl mr-1">↑</span>
                {stat.number}
              </div>
              <p className="text-foreground/60 text-sm">{stat.label}</p>
            </div>
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
