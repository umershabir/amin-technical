import Image from "next/image";
import { PHONE_NUMBER } from "@/lib/constants";
// Importing images as variables from the projects folder
import project3 from "../public/images/projects/project3.jpeg";
import project4 from "../public/images/projects/project4.jpeg";
import project5 from "../public/images/projects/project5.jpeg";
import project6 from "../public/images/projects/project6.jpeg";
import project7 from "../public/images/projects/project7.jpeg";
import project8 from "../public/images/projects/project8.jpeg";
import project9 from "../public/images/projects/project9.jpeg";
import project10 from "../public/images/projects/project10.jpeg";
import project11 from "../public/images/projects/project11.jpeg";
import project12 from "../public/images/projects/project12.jpeg";
import project13 from "../public/images/projects/project13.jpeg";
import project14 from "../public/images/projects/project14.jpeg";
import project15 from "../public/images/projects/project15.jpeg";
import project16 from "../public/images/projects/project16.jpeg";
import project19 from "../public/images/projects/project19.jpeg";
import project20 from "../public/images/projects/project20.jpeg";
import project21 from "../public/images/projects/project21.jpeg";
import project22 from "../public/images/projects/project22.jpeg";
import project23 from "../public/images/projects/project23.jpeg";
import project24 from "../public/images/projects/project24.jpeg";
import project25 from "../public/images/projects/project25.jpeg";
import project26 from "../public/images/projects/project26.jpeg";
import project27 from "../public/images/projects/project27.jpeg";
import project28 from "../public/images/projects/project28.jpeg";
import project29 from "../public/images/projects/project29.jpeg";

const gallery = [
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
  project12,
  project13,
  project14,
  project15,
  project16,
  project19,
  project20,
  project21,
  project22,
  project23,
  project24,
  project25,
  project26,
  project27,
  project28,
  project29,
];

// const stats = [
//   {
//     icon: "fa-solid fa-heart",
//     color: "#3088FF",
//     title: "450+ Projects",
//     subtitle: "Completed Successfully",
//   },
//   {
//     icon: "fa-solid fa-star",
//     color: "#F8B3B8",
//     title: "40+ Reviews",
//     subtitle: "4.8-Star Google Ratings",
//   },
//   {
//     icon: "fa-solid fa-clock",
//     color: "#F2C94C",
//     title: "Always on Time",
//     subtitle: "Punctual Service",
//   },
//   {
//     icon: "fa-solid fa-list-check",
//     color: "#6FCF97",
//     title: "Task Oriented",
//     subtitle: "Professional Approach",
//   },
//   {
//     icon: "fa-solid fa-people-carry-box",
//     color: "#9B51E0",
//     title: "10+ Services",
//     subtitle: "At Your Doorstep",
//   },
//   {
//     icon: "fa-solid fa-certificate",
//     color: "#62DBE2",
//     title: "Licensed Team",
//     subtitle: "Certified Professionals",
//   },
// ];

export default function Portfolio() {
  return (
    <section className="w-full pb-12 md:pb-16 lg:pb-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 self-start">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
                Our Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Our Success
              <br />
              Stories
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl">
              Have a look at our wonderful, continuously growing success
              stories.
            </p>
          </div>

          {/* Gallery Section */}
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Recent Projects
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
              {gallery.map((item, index) => (
                <div
                  key={index}
                  className="group relative aspect-square rounded-xl overflow-hidden shadow-md 
                           hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Image
                    src={item}
                    alt={`Project ${index + 1}`}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    layout="fill"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8 
                         bg-secondary/10 hover:bg-secondary/20 rounded-2xl shadow mt-20"
        >
          <div className="text-gray-900 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-900 text-lg">
              Join 450+ satisfied customers across Dubai
            </p>
          </div>

          <a
            href={`whatsapp://send?text=I want to discuss my project&phone=${PHONE_NUMBER}`}
            className="inline-flex items-center gap-3 px-4 py-2 bg-white text-blue-600 
                       hover:bg-gray-100 font-semibold rounded-full shadow-lg 
                       transition-all duration-300 transform hover:-translate-y-1 whitespace-nowrap"
          >
            <span className="text-lg text-gray-900">Get Your Quote</span>
          </a>
        </div>
      </div>
    </section>
  );
}
