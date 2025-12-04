// "use client";
// import banner from "../public/images/banner.webp";
// import { PHONE_NUMBER } from "@/lib/constants";

// export default function Hero() {
//   return (
//     <section
//       className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-accent to-background bg-cover bg-center"
//       style={{ backgroundImage: `url(${banner.src})` }}
//     >
//       <div className="absolute w-full h-full top-0 left-0 bg-black/60 z-10"></div>
//       <div className="container mx-auto px-6 py-32 md:py-20 relative z-10">
//         <div className="grid md:grid-cols-1 gap-12 items-center">
//           {/* Text Content */}
//           <div className={`hero-content flex flex-col w-full items-center`}>
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-secondary/20">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
//               </span>
//               <span className="text-sm font-semibold">Available 24/7</span>
//             </div>

//             {/* Main Headline */}
//             <h1 className="hero-title text-5xl md:text-7xl  font-bold text-foreground mb-6 leading-tight text-white">
//               All Your <span className="highlight-text">Heating</span>
//               <span className="block gradient-text">Cooling Needs!</span>
//             </h1>

//             {/* Subtitle */}
//             <p className="hero-subtitle text-white text-lg md:text-xl text-foreground/70 mb-8 max-w-lg leading-relaxed">
//               Professional HVAC installation, maintenance, and repair services
//               in Dubai.
//               <span className="text-secondary font-semibold">
//                 {" "}
//                 Your comfort is our priority.
//               </span>
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 mb-8">
//               <button className="cta-button group bg-foreground text-background px-6 py-2 rounded-full font-semibold text-md hover:bg-secondary hover:text-foreground transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-3">
//                 <span>BOOK A SERVICE</span>
//                 <span className="group-hover:translate-x-1 transition-transform duration-300">
//                   →
//                 </span>
//               </button>

//               <a
//                 href={`tel:${PHONE_NUMBER.replace(/[^0-9+]/g, "")}`}
//                 className="cta-button-secondary bg-secondary/10 text-white px-6 py-2 rounded-full font-semibold text-md hover:bg-secondary hover:text-foreground transition-all duration-300 border-2 border-secondary/30 hover:border-secondary flex items-center justify-center gap-2"
//               >
//                 <span>CALL NOW</span>
//               </a>
//             </div>

//             {/* Trust Badges */}
//             <div className="flex flex-wrap items-center gap-6 text-sm text-white">
//               <div className="flex items-center gap-2">
//                 <span className="text-2xl">✓</span>
//                 <span>Licensed & Insured</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-2xl">⭐</span>
//                 <span>14+ Years Experience</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-2xl">🏆</span>
//                 <span>1000+ Happy Clients</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import banner from "../public/images/banner.webp";
import { PHONE_NUMBER } from "@/lib/constants";
import Image from "next/image";

export default function Hero() {
  const handleWhatsAppClick = () => {
    // Remove + and any spaces from phone number for WhatsApp
    const cleanNumber = PHONE_NUMBER.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${cleanNumber}`, "_blank");
  };
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-accent to-background mt-12">
      {/* Background Pattern/Decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 py-20 lg:py-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Main Headline */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                All Your <span className="text-secondary">Heating</span>
                <br />
                <span className="gradient-text bg-gradient-to-r from-secondary to-accent bg-clip-text">
                  Cooling Needs!
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-foreground/70 max-w-xl leading-relaxed">
              Fast, user-friendly and engaging - Professional HVAC installation,
              maintenance, and repair services in Dubai.
              <span className="text-secondary font-semibold block mt-2">
                Your comfort is our priority.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="group bg-foreground text-background px-8 py-4 rounded-full font-semibold text-lg hover:bg-secondary hover:text-foreground transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3"
                onClick={handleWhatsAppClick}
              >
                <span>Book a demo</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </button>

              <a
                href={`tel:${PHONE_NUMBER.replace(/[^0-9+]/g, "")}`}
                className="bg-transparent text-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-secondary/10 transition-all duration-300 border-2 border-foreground/20 hover:border-secondary flex items-center justify-center gap-2"
              >
                <span>Call Now</span>
              </a>
            </div>

            {/* Stats/Metrics */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-foreground/10">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  14
                </div>
                <div className="text-sm text-foreground/60">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  ~1000k
                </div>
                <div className="text-sm text-foreground/60">Happy Clients</div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
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
            </div>
          </div>

          {/* Right Side - Image/Illustration */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-3xl opacity-30"></div>

            {/* Main Image */}
            <div className="relative w-full max-w-2xl aspect-square">
              {/* Image with overlay effect */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={banner}
                  alt="HVAC Services"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-background/20 via-transparent to-secondary/20"></div>
              </div>

              {/* Floating Card Elements - Similar to reference design */}
              <div className="absolute top-10 left-0 lg:-left-10 bg-white backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-foreground/10 animate-float">
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
              </div>

              <div className="absolute bottom-30 right-0 lg:-right-10 bg-white backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-foreground/10 animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Your task</div>
                    <div className="text-xs text-foreground/60">Completed</div>
                  </div>
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}
