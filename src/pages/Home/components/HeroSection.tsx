import { motion } from "framer-motion"
import { Button } from "../../../components/ui/Button"

export default function HeroSection() {
  return (
    <section
      className="relative h-screen w-full bg-fixed bg-center bg-cover flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/luxury-florida-waterfront-hero2.jpg')" }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenu */}
      <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 
                     text-transparent bg-clip-text 
                     bg-gradient-to-r from-[#d4b369] via-[#fceabb] to-[#d4b369]"
        >
          Find Your Dream Home in Florida
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto"
        >
          Buy, sell, and discover the best deals with DealZone
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#b38e4f] to-[#d4b369] 
                       hover:from-[#d4b369] hover:to-[#b38e4f] 
                       text-white font-semibold px-8 py-4 text-lg 
                       transition-all duration-300 hover:scale-105 
                       hover:shadow-lg hover:shadow-[#d4b369]/25"
          >
            Start Buying
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#d4b369] text-[#d4b369] 
                       hover:bg-[#d4b369] hover:text-white 
                       font-semibold px-8 py-4 text-lg 
                       transition-all duration-300 hover:scale-105 
                       hover:shadow-lg hover:shadow-[#d4b369]/25 bg-transparent"
          >
            Sell Your Property
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
