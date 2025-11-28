export default function Footer() {
  return (
    <footer className="bg-black/90 text-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Main Content */}
          <div className="flex flex-col md:flex-row justify-between gap-8 lg:w-1/2">
            {/* Social Links */}
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-bold mb-2">Follow Us</h3>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <span>Facebook</span>
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <span>Instagram</span>
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-bold mb-2">Contact Us</h3>
              <div className="flex items-center gap-3 text-gray-300">
                <span>Jumeirah Lakes Tower, Dubai</span>
              </div>

              <a
                href="whatsapp://send?text=I need some information about:&phone=+971528717903"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <span>Need Help?</span>
              </a>

              <a
                href="whatsapp://send?text=I need a quote&phone=+971528717903"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <span>Get a Quote Now</span>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm pt-4">
            <p>
              © {new Date().getFullYear()} Amin Technical Services. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
