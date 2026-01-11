// lib/data.js or wherever you keep your data
import image1 from "../public/images/project1.webp";
import imageJPG from "../public/images/project1.jpg";
import image2 from "../public/images/project2.webp";
import image3 from "../public/images/project3.webp";
import image4 from "../public/images/project4.webp";
import plumping from "../public/images/plumbing.jpeg";
import acMaintenance from "../public/images/ac-maintainence.jpeg";
import acInstallation from "../public/images/ac-installation.jpeg";
import image14 from "../public/images/project14.webp";
import image16 from "../public/images/project16.webp";
import ductcleaning from "../public/images/ac-duct-cleaning.jpeg";
import accleaning from "../public/images/ac-coil-cleaning.jpeg";
import painting from "../public/images/painting.webp";
import wallpaper from "../public/images/wallpaper.jpg";
import poolcleaning from "../public/images/poolcleaning.jpg";
import watertank from "../public/images/water-tank-cleaning.jpeg";
import waterPumpReplacement from "../public/images/water-pump-replacement.jpeg";
import solarHeater from "../public/images/solar-heater.jpeg";
import drainageUnblocking from "../public/images/drainage-unblocking.jpeg";
import landscaping from "../public/images/landscaping.jpeg";
import waterFilterInstallation from "../public/images/water-filter-installation.jpeg";
// Services data
export const servicesData = [
  {
    id: 1,
    title: "AC Maintenance",
    tag: "Eco",
    rating: "4.6",
    category: "Design · Maintenance",
    image: acMaintenance.src,
    joinedDate: "Apr 21, 2024",
    location: "Dubai",
    hours: "Sun-Fri 9:30 AM - 11 PM",
    price: "75",
    description:
      "Professional AC maintenance and repair services to keep your cooling system running efficiently all year round.",
  },
  {
    id: 2,
    title: "AC Duct Cleaning",
    tag: "Pro",
    rating: "4.8",
    category: "Cleaning · Maintenance",
    image: ductcleaning.src,
    joinedDate: "Mar 15, 2024",
    location: "Dubai",
    hours: "Sun-Fri 9:30 AM - 11 PM",
    price: "85",
    description:
      "Deep cleaning of AC ducts to improve air quality and system efficiency.",
  },
  {
    id: 3,
    title: "Coil Cleaning",
    tag: "Eco",
    rating: "4.7",
    category: "Cleaning · Maintenance",
    image: accleaning.src,
    joinedDate: "Apr 10, 2024",
    location: "Dubai",
    hours: "Sun-Fri 9:30 AM - 11 PM",
    price: "65",
    description:
      "Expert coil cleaning services to enhance AC performance and energy efficiency.",
  },
  {
    id: 4,
    title: "AC Installation",
    tag: "Pro",
    rating: "4.9",
    category: "Installation · Service",
    image: acInstallation.src,
    joinedDate: "Jan 05, 2024",
    location: "Dubai",
    hours: "Sun-Fri 9:30 AM - 11 PM",
    price: "150",
    description:
      "Professional AC installation services with warranty and quality assurance.",
  },
  {
    id: 5,
    title: "Solar Heater Repairing/Replacement",
    tag: "Pro",
    rating: "4.8",
    category: "Electrical · Repair",
    image: solarHeater.src,
    joinedDate: "Feb 20, 2024",
    location: "Dubai",
    hours: "Sun-Fri 9:30 AM - 11 PM",
    price: "85",
    description:
      "Expert technicians specializing in solar water heater diagnostics, leak repairs, panel cleaning, and full system replacements to ensure energy-efficient heating year-round.",
  },
  {
    id: 5,
    title: "Electrical",
    tag: "Pro",
    rating: "4.8",
    category: "Electrical · Repair",
    image: imageJPG.src,
    joinedDate: "Feb 20, 2024",
    location: "Dubai",
    hours: "Sun-Fri 9:30 AM - 11 PM",
    price: "80",
    description:
      "Licensed electricians for all your electrical installation, repair, and maintenance needs.",
  },
  {
    id: 6,
    title: "Plumbing",
    tag: "Eco",
    rating: "4.7",
    category: "Plumbing · Repair",
    image: plumping.src,
    joinedDate: "Mar 12, 2024",
    location: "Dubai",
    hours: "Sun-Fri 9:30 AM - 11 PM",
    price: "70",
    description:
      "Expert plumbing services for leaks, installations, and emergency repairs.",
  },
  {
    id: 7,
    title: "Handyman",
    tag: "Pro",
    rating: "4.6",
    category: "Maintenance · Repair",
    image: image4.src,
    joinedDate: "Apr 01, 2024",
    location: "Dubai",
    hours: "Sun-Fri 9:30 AM - 11 PM",
    price: "60",
    description:
      "General handyman services for home repairs, furniture assembly, and maintenance tasks.",
  },
  {
    id: 19,
    title: "Ceiling Service",
    tag: "Interior",
    rating: "4.8",
    category: "Design · Ceiling",
    image: image1.src,
    joinedDate: "Feb 10, 2024",
    location: "Dubai",
    hours: "Sun-Fri 9:30 AM - 11 PM",
    price: "120",
    description:
      "Expert ceiling design and installation services, including false ceilings, gypsum boards, and decorative lighting setups for modern interiors.",
  },
  {
    id: 8,
    title: "Painting",
    tag: "Eco",
    rating: "4.9",
    category: "Design · Painting",
    image: painting.src,
    joinedDate: "Jan 18, 2024",
    location: "Dubai",
    hours: "Sun-Fri 9:30 AM - 11 PM",
    price: "90",
    description:
      "Professional interior and exterior painting services with premium quality finishes.",
  },
  {
    id: 10,
    title: "Welding",
    tag: "Pro",
    rating: "4.8",
    category: "Repair · Metalwork",
    image: image14.src,
    joinedDate: "Mar 5, 2024",
    location: "Dubai",
    hours: "Sun-Fri 9:30 AM - 11 PM",
    price: "150",
    description:
      "Professional welding services for gates, doors, railings, and custom metal fabrication with durable, high-quality finishes.",
  },

  {
    id: 9,
    title: "Wallpaper Fixing",
    tag: "Pro",
    rating: "4.7",
    category: "Design · Installation",
    image: wallpaper.src,
    joinedDate: "Feb 25, 2024",
    location: "Dubai",
    hours: "Sun-Fri 9:30 AM - 11 PM",
    price: "85",
    description:
      "Expert wallpaper installation and removal services for a perfect finish.",
  },
  {
    id: 111,
    title: "Office Fit Out",
    tag: "Pro",
    rating: "4.8",
    category: "Design · Construction",
    image: image16.src,
    joinedDate: "Jan 30, 2024",
    location: "Dubai",
    hours: "Sun-Fri 9:30 AM - 11 PM",
    price: "200",
    description:
      "Complete office fit-out solutions including design, construction, and finishing.",
  },
  {
    id: 11,
    title: "Water Tank Cleaning",
    tag: "Eco",
    rating: "4.6",
    category: "Cleaning · Maintenance",
    image: watertank.src,
    joinedDate: "Mar 08, 2024",
    location: "Dubai",
    hours: "Sun-Fri 9:30 AM - 11 PM",
    price: "90",
    description:
      "Professional water tank cleaning and disinfection services for safe water supply.",
  },
  {
    id: 18,
    title: "Water Pump Replacement & Installation",
    tag: "Eco",
    rating: "4.7",
    category: "Cleaning · Maintenance",
    image: waterPumpReplacement.src,
    joinedDate: "Mar 08, 2024",
    location: "Dubai",
    hours: "Sun-Fri 9:30 AM - 11 PM",
    price: "95",
    description:
      "Expert installation and replacement of domestic water pumps, ensuring optimal water pressure, leak-proof fittings, and energy-efficient motor calibration.",
  },
  {
    id: 19,
    title: "Water Filter Installation",
    tag: "Pro",
    rating: "4.9",
    category: "Plumbing · Health",
    image: waterFilterInstallation.src,
    joinedDate: "May 15, 2024",
    location: "Dubai",
    hours: "Sun-Fri 9:30 AM - 10 PM",
    price: "120",
    description:
      "Professional setup of RO systems, UV purifiers, and whole-house carbon filters to remove impurities and provide clean, healthy drinking water directly from your tap.",
  },
  {
    id: 15,
    title: "Drainage Unblocking",
    tag: "Eco",
    rating: "4.7",
    category: "Cleaning · Maintenance",
    image: drainageUnblocking.src,
    joinedDate: "Mar 08, 2024",
    location: "Dubai",
    hours: "Sun-Fri 9:30 AM - 11 PM",
    price: "95",
    description:
      "Rapid response for clearing blocked pipes, floor drains, and sewage lines using high-pressure jetting and advanced rooting tools to restore flow immediately.",
  },
  {
    id: 12,
    title: "Kitchen Renovation",
    tag: "Pro",
    rating: "4.9",
    category: "Design · Renovation",
    image: image2.src,
    joinedDate: "Feb 14, 2024",
    location: "Dubai",
    hours: "Sun-Fri 9:30 AM - 11 PM",
    price: "250",
    description:
      "Complete kitchen renovation services from design to installation.",
  },
  {
    id: 13,
    title: "Pool Maintenance",
    tag: "Eco",
    rating: "4.7",
    category: "Maintenance · Cleaning",
    image: poolcleaning.src,
    joinedDate: "Apr 05, 2024",
    location: "Dubai",
    hours: "Sun-Fri 9:30 AM - 11 PM",
    price: "120",
    description:
      "Regular pool cleaning, chemical balancing, and equipment maintenance services.",
  },
  {
    id: 17,
    title: "Landscaping & Garden Maintenance",
    tag: "Pro",
    rating: "4.9",
    category: "Outdoor · Maintenance",
    image: landscaping.src,
    joinedDate: "Apr 12, 2024",
    location: "Dubai",
    hours: "Sun-Fri 8:00 AM - 6 PM",
    price: "150",
    description:
      "Complete outdoor solutions including lawn mowing, hedge trimming, and seasonal planting, alongside smart irrigation checks to keep your garden lush in Dubai’s climate.",
  },
  {
    id: 14,
    title: "Carpentry Services",
    tag: "Pro",
    rating: "4.8",
    category: "Carpentry · Installation",
    image: image3.src,
    joinedDate: "Mar 22, 2024",
    location: "Dubai",
    hours: "Sun-Fri 9:30 AM - 11 PM",
    price: "100",
    description:
      "Custom carpentry work including furniture, cabinets, and wooden fixtures.",
  },
];

export const featureStats = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>
    ),
    color: "#e8b125",
    title: "450+ Projects",
    subtitle: "Completed Successfully",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
    color: "#e8b125",
    title: "40+ Reviews",
    subtitle: "4.8-Star Google Ratings",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
          clipRule="evenodd"
        />
      </svg>
    ),
    color: "#e8b125",
    title: "Always on Time",
    subtitle: "Punctual Service",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          clipRule="evenodd"
        />
      </svg>
    ),
    color: "#e8b125",
    title: "Task Oriented",
    subtitle: "Professional Approach",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    ),
    color: "#e8b125",
    title: "10+ Services",
    subtitle: "At Your Doorstep",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    color: "#e8b125",
    title: "Licensed Team",
    subtitle: "Certified Professionals",
  },
];
