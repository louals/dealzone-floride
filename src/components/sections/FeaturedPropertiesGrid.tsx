import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import { MapPin, Heart, Eye, CheckCircle, Home, Calendar, Square, Wind } from "lucide-react"

const featuredProperties = [
  {
    id: 1,
    image: "/miami-penthouse-ocean-view.png",
    title: "Luxury Miami Penthouse",
    location: "Miami Beach, FL",
    address: "1425 Ocean Drive, Miami Beach, FL 33139",
    price: "$2,500,000",
    capRate: "8.5%",
    beds: 3,
    baths: 3,
    sqft: 2850,
    yearBuilt: 2018,
    propertyType: "Condo",
    features: ["Ocean View", "Rooftop Pool", "Concierge"],
    views: 156,
    verified: true,
    photos: 24,
  },
  {
    id: 2,
    image: "/orlando-modern-family-home-with-pool.jpg",
    title: "Modern Family Home",
    location: "Orlando, FL",
    address: "8742 Sunset Ridge Drive, Orlando, FL 32819",
    price: "$650,000",
    capRate: "9.2%",
    beds: 4,
    baths: 3,
    sqft: 2400,
    yearBuilt: 2015,
    propertyType: "Single Family",
    features: ["Pool", "2-Car Garage", "Updated Kitchen"],
    views: 89,
    verified: true,
    photos: 18,
  },
  {
    id: 3,
    image: "/tampa-bay-waterfront-villa.jpg",
    title: "Waterfront Villa",
    location: "Tampa Bay, FL",
    address: "3567 Bayshore Boulevard, Tampa, FL 33629",
    price: "$1,850,000",
    capRate: "7.8%",
    beds: 5,
    baths: 4,
    sqft: 4200,
    yearBuilt: 2020,
    propertyType: "Villa",
    features: ["Waterfront", "Private Dock", "Chef's Kitchen"],
    views: 203,
    verified: true,
    photos: 32,
  },
  {
    id: 4,
    image: "/fort-myers-beach-house-with-palm-trees.jpg",
    title: "Beachfront Paradise",
    location: "Fort Myers, FL",
    address: "1892 Estero Boulevard, Fort Myers Beach, FL 33931",
    price: "$1,200,000",
    capRate: "8.9%",
    beds: 3,
    baths: 2,
    sqft: 1950,
    yearBuilt: 2012,
    propertyType: "Beach House",
    features: ["Beach Access", "Furnished", "Rental Ready"],
    views: 127,
    verified: false,
    photos: 21,
  },
  {
    id: 5,
    image: "/jacksonville-suburban-house-with-garden.jpg",
    title: "Suburban Dream Home",
    location: "Jacksonville, FL",
    address: "4521 Magnolia Creek Lane, Jacksonville, FL 32224",
    price: "$485,000",
    capRate: "10.1%",
    beds: 4,
    baths: 2,
    sqft: 2100,
    yearBuilt: 2008,
    propertyType: "Single Family",
    features: ["Large Yard", "Updated HVAC", "Move-in Ready"],
    views: 64,
    verified: true,
    photos: 15,
  },
  {
    id: 6,
    image: "/naples-luxury-golf-course-estate.jpg",
    title: "Golf Course Estate",
    location: "Naples, FL",
    address: "7834 Championship Drive, Naples, FL 34108",
    price: "$3,200,000",
    capRate: "6.9%",
    beds: 6,
    baths: 5,
    sqft: 5800,
    yearBuilt: 2019,
    propertyType: "Estate",
    features: ["Golf Course View", "Wine Cellar", "Guest House"],
    views: 298,
    verified: true,
    photos: 45,
  },
]

export default function FeaturedPropertiesGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Premium Properties</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Handpicked luxury homes and investment opportunities across Florida's most desirable locations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-[600px]"
              style={{
                backgroundImage: `url(${property.image || "/placeholder.svg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30 transition-opacity duration-300" />

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Top badges and counters */}
              <div className="relative z-10 p-4">
                <div className="flex items-center justify-between mb-4">
                  {/* Verification Badge */}
                  {property.verified && (
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </div>
                  )}

                  {/* Views Counter */}
                  <div className="bg-black/70 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {property.views}
                  </div>
                </div>

                {/* Photos Counter */}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  📷 {property.photos}+
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 z-10 p-6 text-white">
                {/* Price and Cap Rate */}
                <div className="flex items-center justify-between mb-3">
                  <div className="text-2xl font-bold">{property.price}</div>
                  <div className="text-sm font-medium bg-black/60 backdrop-blur-sm px-2 py-1 rounded">
                    Cap Rate: {property.capRate}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2">{property.title}</h3>

                {/* Address */}
                <div className="flex items-start text-white/90 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1 mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-2">{property.address}</span>
                </div>

                {/* Property Details Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div className="flex items-center text-white/90">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{property.yearBuilt}</span>
                  </div>
                  <div className="flex items-center text-white/90">
                    <Home className="w-4 h-4 mr-2" />
                    <span>{property.beds} bed</span>
                  </div>
                  <div className="flex items-center text-white/90">
                    <Wind className="w-4 h-4 mr-2" />
                    <span>{property.baths} bath</span>
                  </div>
                  <div className="flex items-center text-white/90">
                    <Square className="w-4 h-4 mr-2" />
                    <span>{property.sqft.toLocaleString()} sqft</span>
                  </div>
                </div>

                {/* Property Type and Actions */}
                <div className="flex items-center justify-between">
                  <span className="bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium">
                    {property.propertyType}
                  </span>

                  {/* Heart Icon */}
                  <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 rounded-full transition-colors">
                    <Heart className="w-4 h-4 text-white hover:text-red-400 transition-colors" />
                  </button>
                </div>

                {/* CTA Button */}
                <Button variant="gold" className="w-full mt-4 font-semibold">
                  DETAILS
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
