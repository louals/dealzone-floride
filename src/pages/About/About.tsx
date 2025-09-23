import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Ajout du Link

import Janie_Grenier from "../../assets/Janie_Grenier.webp";
import Kyle_Duelund from "../../assets/Kyle_Duelund.webp";

export default function About() {
  return (
    <div className="relative bg-gradient-to-br from-[#fffdf8] via-[#f7f4eb] to-[#fffdf8] min-h-screen text-foreground overflow-hidden">

      {/* Effet lumineux en fond */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#c9a86a20,transparent_60%)] animate-pulse"></div>

      {/* Main */}
      <main className="relative container mx-auto px-4 lg:px-8 pt-28 pb-16 space-y-20">
        
        {/* Bloc 1 */}
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
              DealZone is a next-generation real estate platform designed to empower buyers, investors, sellers, and professionals. 
              Our mission is to provide a transparent, efficient, and user-friendly environment for connecting without intermediaries, 
              leveraging cutting-edge technology for seamless experiences.
            </p>

            {/* ✅ Bouton avec lien vers about-learn-more */}
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

        {/* Bloc 2 */}
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

            {/* ✅ Bouton avec lien vers whats-dealzone-learn-more */}
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

        {/* Bloc 3 - Team corrigé */}
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
          <p className="text-center text-black mb-12 max-w-3xl mx-auto text-lg leading-relaxed">
            At the heart of DealZone's success is a dynamic duo of passionate and dedicated professionals who bring their expertise to every aspect of what we do. 
            From real estate strategies to market analysis, our team works tirelessly to ensure your investment journey is seamless and rewarding.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Janie */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/90 p-6 text-left flex flex-col shadow-md rounded-lg transition min-h-[400px]"
            >
              <div className="w-40 h-40 rounded-full mb-6 overflow-hidden border-4 border-[#d4af37] shadow-[0_0_20px_rgba(201,168,106,0.6)] self-center">
                <img src={Janie_Grenier} alt="Janie Grenier" className="w-full h-full object-cover" />
              </div>
              <h3 className="bg-gradient-to-r from-[#b68f46] to-[#d4af37] bg-clip-text text-transparent font-bold text-xl text-center">
                Janie Grenier
              </h3>
              <p className="text-black mb-2 text-sm text-center font-semibold">Co-Founder, President & CEO</p>
              <p className="text-black text-base leading-relaxed text-justify">
                Janie Grenier is a fourth-generation entrepreneur who began investing in real estate at 19. 
                By 30, she owned over 100 income-producing units, gaining extensive experience in private lending, 
                creative acquisition strategies, and optimizing buy-and-hold properties. 
                She co-founded Wemindji Properties, Inc. and S.T.R. Properties Inc., 
                focusing on creating cash-flowing property portfolios and luxury short-term rentals.
              </p>
            </motion.div>

            {/* Kyle */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/90 p-6 text-left flex flex-col shadow-md rounded-lg transition min-h-[400px]"
            >
              <div className="w-40 h-40 rounded-full mb-6 overflow-hidden border-4 border-[#d4af37] shadow-[0_0_20px_rgba(201,168,106,0.6)] self-center">
                <img src={Kyle_Duelund} alt="Kyle Duelund" className="w-full h-full object-cover" />
              </div>
              <h3 className="bg-gradient-to-r from-[#b68f46] to-[#d4af37] bg-clip-text text-transparent font-bold text-xl text-center">
                Kyle Duelund
              </h3>
              <p className="text-black mb-2 text-sm text-center font-semibold">Co-Founder, Vice-President & COO</p>
              <p className="text-black text-base leading-relaxed text-justify">
                Kyle Duelund holds degrees in Mathematics and Education, as well as a Master's in the Teaching of Mathematics 
                from McGill and Concordia Universities. Achieving financial freedom by 27 through real estate investing, 
                he co-founded Wemindji Properties, Inc. and S.T.R. Properties Inc. 
                Kyle's passion lies in strategic property acquisition and empowering others through education and mentorship.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}