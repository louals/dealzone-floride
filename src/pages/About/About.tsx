import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Janie_Grenier from "../../assets/Janie_Grenier.webp";
import Kyle_Duelund from "../../assets/Kyle_Duelund.webp";

export default function About() {
  return (
    <div className="relative bg-gradient-to-br from-[#fffdf8] via-[#f7f4eb] to-[#fffdf8] min-h-screen text-foreground overflow-hidden mt-16">
      {/* Background light effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#c9a86a20,transparent_60%)] animate-pulse"></div>

      {/* ✅ Main Content only */}
      <main className="relative container mx-auto px-4 lg:px-8 pt-28 pb-16 space-y-20">
        {/* Section 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white via-[#faf7f0] to-[#f5efe3] shadow-xl rounded-xl overflow-hidden md:flex border border-amber-200 hover:shadow-[0_0_30px_rgba(201,168,106,0.4)] transition"
        >
          <div className="p-8 md:w-1/2">
            <h2 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-[#b68f46] to-[#d4af37] bg-clip-text text-transparent">
              ABOUT DEALZONE
            </h2>
            <p className="mb-4 text-black text-lg leading-relaxed">
              Your premier platform for streamlined real estate transactions and professional networking.
            </p>
            <p className="mb-6 text-black leading-relaxed">
              DealZone is a next-generation real estate platform designed to empower buyers, investors, sellers,
               and professionals. Our mission is to provide a transparent, efficient, and user-friendly environment for connecting without intermediaries,
               leveraging cutting-edge technology for seamless experiences.
            </p>

            {/* Learn More Link */}
            <Link
              to="/about-learn-more"
              className="relative inline-block px-8 py-3 rounded-full font-semibold text-black bg-gradient-to-r from-[#d4af37] to-[#b68f46] shadow-md hover:shadow-[0_0_20px_rgba(201,168,106,0.5)] transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition duration-500 animate-shine"></span>
            </Link>
          </div>
          <div className="md:w-1/2 h-64 md:h-auto">
            <img
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
              alt="House"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white via-[#faf7f0] to-[#f5efe3] shadow-xl rounded-xl overflow-hidden md:flex md:flex-row-reverse border border-amber-200 hover:shadow-[0_0_30px_rgba(201,168,106,0.4)] transition"
        >
          <div className="p-8 md:w-1/2">
            <h2 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-[#b68f46] to-[#d4af37] bg-clip-text text-transparent">
              What is DealZone?
            </h2>
            <p className="mb-6 text-black leading-relaxed">
              DealZone is an all-in-one real estate web application simplifying property transactions.
               We offer Canadians access to fully renovated U.S. flip properties at competitive prices.
                The platform connects investors, agents, and service providers, offering off-market opportunities,
                 professional profiles, and robust dashboard tools for managing deals efficiently.
            </p>

            <Link
              to="/whats-dealzone-learn-more"
              className="relative inline-block px-8 py-3 rounded-full font-semibold text-black bg-gradient-to-r from-[#d4af37] to-[#b68f46] shadow-md hover:shadow-[0_0_20px_rgba(201,168,106,0.5)] transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition duration-500 animate-shine"></span>
            </Link>
          </div>
          <div className="md:w-1/2 h-64 md:h-auto">
            <img
              src="https://images.pexels.com/photos/17158676/pexels-photo-17158676.jpeg"
              alt="House at sunset"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Section 3 - Team */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white via-[#faf7f0] to-[#f5efe3] shadow-xl rounded-xl p-10 border border-amber-200 hover:shadow-[0_0_30px_rgba(201,168,106,0.4)] transition"
        >
          <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-[#b68f46] to-[#d4af37] bg-clip-text text-transparent">
            Behind DealZone
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Janie Grenier */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/90 p-6 text-center flex flex-col items-center shadow-md rounded-lg transition"
            >
              <div className="w-56 h-56 rounded-full mb-6 overflow-hidden border-4 border-[#d4af37] shadow-[0_0_20px_rgba(201,168,106,0.6)]">
                <img src={Janie_Grenier} alt="Janie Grenier" className="w-full h-full object-cover" />
              </div>
              <h3 className="bg-gradient-to-r from-[#b68f46] to-[#d4af37] bg-clip-text text-transparent font-bold text-xl">
                Janie Grenier
              </h3>
              <p className="text-black mb-4 text-sm">Co-Founder, President & CEO</p>
            </motion.div>

            {/* Kyle Duelund */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/90 p-6 text-center flex flex-col items-center shadow-md rounded-lg transition"
            >
              <div className="w-56 h-56 rounded-full mb-6 overflow-hidden border-4 border-[#d4af37] shadow-[0_0_20px_rgba(201,168,106,0.6)]">
                <img src={Kyle_Duelund} alt="Kyle Duelund" className="w-full h-full object-cover" />
              </div>
              <h3 className="bg-gradient-to-r from-[#b68f46] to-[#d4af37] bg-clip-text text-transparent font-bold text-xl">
                Kyle Duelund
              </h3>
              <p className="text-black mb-4 text-sm">Co-Founder, Vice-President & COO</p>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
