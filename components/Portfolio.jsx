import Image from "next/image";
import image1 from "../public/images/project1.webp";
import imageJPG from "../public/images/project1.jpg";
import image2 from "../public/images/project2.webp";
import image3 from "../public/images/project3.webp";
import image4 from "../public/images/project4.webp";
import image5 from "../public/images/project5.webp";
import image6 from "../public/images/project6.webp";
import image7 from "../public/images/project7.webp";
import image8 from "../public/images/project8.webp";
import image9 from "../public/images/project9.webp";
import image10 from "../public/images/project10.webp";
import image11 from "../public/images/project11.webp";
import image12 from "../public/images/project12.webp";
import image13 from "../public/images/project13.webp";
import image14 from "../public/images/project14.webp";
import image15 from "../public/images/project15.webp";
import image16 from "../public/images/project16.webp";
import image17 from "../public/images/project17.webp";
import image18 from "../public/images/project18.webp";
import { PHONE_NUMBER } from "@/lib/constants";
import stats from "@/lib/data";
const gallery = [
  image1,
  imageJPG,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
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
