import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#202720]">
      {/* Additional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#202720] via-[#1a1f1a] to-[#0f120f]" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#d4b369] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#b38e4f] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
       <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text 
                        bg-gradient-to-r from-[#d4b369] via-[#fceabb] to-[#d4b369] 
                        animate-shimmer"
            >
            Ready to Move to Florida?
        </motion.h2>


        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto text-pretty"
        >
          Join thousands of satisfied customers who found their perfect home through DealZone Florida
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-[#d4b369] mb-2">10K+</div>
            <div className="text-gray-300">Properties Sold</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#d4b369] mb-2">98%</div>
            <div className="text-gray-300">Customer Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#d4b369] mb-2">15+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
