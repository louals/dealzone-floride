import { motion } from "framer-motion";

export default function AboutLearnMore() {
  return (
    <div className="relative bg-gradient-to-br from-[#fffdf8] via-[#f7f4eb] to-[#fffdf8] min-h-screen text-foreground overflow-hidden">
      {/* Subtle background light effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#c9a86a20,transparent_70%)] animate-pulse"></div>

      {/* ✅ Main content only (Header/Footer gérés par Layout) */}
      <main className="relative max-w-5xl mx-auto shadow-2xl rounded-xl overflow-hidden border border-amber-200 mt-40 mb-20">
        
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#202720] p-10 md:p-14 text-white relative"
        >
          <h1 className="text-5xl font-extrabold mb-6 text-center relative inline-block w-full">
            <motion.span
              className="bg-gradient-to-r from-[#b68f46] to-[#d4af37] bg-clip-text text-transparent"
              initial={{ backgroundSize: "200% auto" }}
              animate={{ backgroundPosition: ["200% center", "0% center"] }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            >
              About DealZone
            </motion.span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed text-center mx-auto mt-6">
            Discover the mission, vision, and technology behind our innovative real estate platform.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="bg-gradient-to-br from-white via-[#faf7f0] to-[#f5efe3] p-10 md:p-14 space-y-10">
          {[
            "DealZone is a next-generation real estate platform designed to streamline property transactions and empower real estate professionals. Our mission is to provide a transparent, efficient, and user-friendly environment where buyers, investors, sellers, and professionals can connect without intermediaries.",
            "Built with cutting-edge technologies like React, Firebase, and TailwindCSS, DealZone offers seamless user experiences, fast performance, and secure data management. From listing detailed off-market properties to managing professional profiles and appointments, everything is built with scalability and simplicity in mind.",
            "Our team combines tech expertise with deep knowledge of real estate. We’re dedicated to solving real-world problems faced by investors, homebuyers, and service providers alike. Whether you’re here to buy, invest, or offer your services—DealZone is your hub for real estate success.",
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.3 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-black leading-relaxed relative"
            >
              <motion.span
                className="absolute -left-3 top-2 w-1 h-6 bg-gradient-to-b from-[#b68f46] to-[#d4af37] rounded-full"
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.5, delay: i * 0.3 }}
              />
              <span className="ml-4">{text}</span>
            </motion.p>
          ))}

          {/* Activity Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="relative bg-[#fffdf8] p-10 rounded-lg border border-[#e8e6df] shadow-xl hover:shadow-[0_0_25px_rgba(201,168,106,0.3)] transition"
          >
            <div className="absolute -top-4 left-6 bg-gradient-to-r from-[#b68f46] to-[#d4af37] text-white px-4 py-1 rounded-md text-sm font-semibold shadow-lg">
              OUR ACTIVITY
            </div>
            <p className="text-lg md:text-xl text-black font-medium leading-relaxed">
              DealZone enables Canadians to buy fully renovated flip properties in the U.S. at a fraction of the cost of equivalent real estate in Canada.
            </p>
          </motion.div>
        </div>

        {/* Decorative footer bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="bg-gradient-to-r from-[#b68f46] to-[#d4af37] h-0.5 w-full origin-left"
        />
      </main>
    </div>
  );
}
