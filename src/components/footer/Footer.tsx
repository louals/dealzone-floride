import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold text-white">Z</span>
              </div>
              <span className="text-xl font-bold">Dealzone Florida</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner in Florida real estate. We help you find the perfect home in the Sunshine State with
              unmatched expertise and service.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-400">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">
                Home
              </Link>
              <Link to="/buy" className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">
                Buy Properties
              </Link>
              <Link to="/sell" className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">
                Sell Property
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">
                Blog
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">
                About Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-400">Services</h3>
            <div className="space-y-2">
              <Link to="/residential" className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">
                Residential Sales
              </Link>
              <Link to="/commercial" className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">
                Commercial Real Estate
              </Link>
              <Link to="/investment" className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">
                Investment Properties
              </Link>
              <Link
                to="/property-management"
                className="block text-gray-300 hover:text-amber-400 transition-colors text-sm"
              >
                Property Management
              </Link>
              <Link to="/consultation" className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">
                Real Estate Consultation
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-400" />
                <span className="text-gray-300 text-sm">(305) 555-DEAL</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-400" />
                <span className="text-gray-300 text-sm">info@dealzoneflorida.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  123 Ocean Drive
                  <br />
                  Miami Beach, FL 33139
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Dealzone Florida. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
