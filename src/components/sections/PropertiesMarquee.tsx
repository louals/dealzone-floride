import { motion } from "framer-motion"
import { useState } from "react"

const properties = [
  {
    id: 1,
    image: "/miami-penthouse-ocean-view.png",
    title: "Luxury Miami Penthouse",
    price: "$2,500,000",
  },
  {
    id: 2,
    image: "/orlando-modern-family-home-with-pool.jpg",
    title: "Modern Family Home",
    price: "$650,000",
  },
  {
    id: 3,
    image: "/tampa-bay-waterfront-villa.jpg",
    title: "Waterfront Villa",
    price: "$1,850,000",
  },
  {
    id: 4,
    image: "/fort-myers-beach-house-with-palm-trees.jpg",
    title: "Beachfront Paradise",
    price: "$1,200,000",
  },
  {
    id: 5,
    image: "/jacksonville-suburban-house-with-garden.jpg",
    title: "Suburban Dream Home",
    price: "$485,000",
  },
  {
    id: 6,
    image: "/naples-luxury-golf-course-estate.jpg",
    title: "Golf Course Estate",
    price: "$3,200,000",
  },
]

export default function PropertiesMarquee() {
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate properties for seamless loop
  const duplicatedProperties = [...properties, ...properties]

  return (
    <section className="bg-[#202720] py-16 overflow-hidden">
      <div className="mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-4"
        >
          Sold Properties
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-400 text-lg max-w-2xl mx-auto px-4"
        >
          We started our Real Estate journey with $39,000. A few years later, we exceeded our goals with over 100 doors!
        </motion.p>
      </div>

      <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <motion.div
          className="flex gap-8"
          animate={{
            x: isPaused ? 0 : "-50%",
          }}
          transition={{
            duration: isPaused ? 0 : 30,
            ease: "linear",
            repeat: isPaused ? 0 : Number.POSITIVE_INFINITY,
          }}
        >
          {duplicatedProperties.map((property, index) => (
            <motion.div
              key={`${property.id}-${index}`}
              className="flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-gray-900 font-semibold text-xl mb-3 leading-tight">{property.title}</h3>
                <p className="text-gray-900 font-bold text-2xl">{property.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
