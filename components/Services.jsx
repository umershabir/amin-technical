"use client";
import { servicesData } from "@/lib/data";
import { PHONE_NUMBER } from "@/lib/constants";

export default function Services() {
  const whatsappNumber = PHONE_NUMBER;

  return (
    <section id="services" className="pb-24 bg-accent relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary text-sm font-semibold tracking-wider uppercase">
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4">
            We Are The Best Handyman
            <br />
            In Dubai
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            From plumbing to painting, our expert team provides quick, reliable,
            and professional home maintenance services across Dubai.
          </p>
        </div>

        {/* Services Grid - 2 columns on lg, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {servicesData.map((service) => {
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              `Hello! I'd like to book your "${service.title}" service.`
            )}`;

            return (
              <div
                key={service.id}
                className="service-card bg-background rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col border border-secondary/20"
              >
                {/* Image Section */}
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
                  <h3 className="absolute z-10 centralized text-white text-3xl font-bold w-full text-center">
                    {service.title}{" "}
                    {/* <span className="text-sm font-normal text-foreground/60">
                          ({service.tag})
                        </span> */}
                  </h3>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title and Rating */}
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-grow">
                      <h3 className="text-md text-foreground">
                        {service.description}{" "}
                        {/* <span className="text-sm font-normal text-foreground/60">
                          ({service.tag})
                        </span> */}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 ml-2">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-sm font-semibold text-foreground">
                        {service.rating}/5
                      </span>
                    </div>
                  </div>

                  {/* Bottom Section - Price and Button */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-foreground/10">
                    {/* Price */}
                    <div>
                      <p className="text-xs text-foreground/60 mb-1">
                        Start from
                      </p>
                      <p className="text-2xl font-bold text-foreground">
                        {service.price}{" "}
                        <span className="text-base font-normal">UAD/H</span>
                      </p>
                    </div>

                    {/* Book Now Button */}
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-secondary/90 transition-all duration-300"
                    >
                      Booking Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx="true">{`
        .centralized {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </section>
  );
}
