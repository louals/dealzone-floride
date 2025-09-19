import { motion } from "framer-motion";

export default function WhatsDealZoneLearnMore() {
  return (
    <div className="relative bg-gradient-to-br from-[#fffdf8] via-[#f7f4eb] to-[#fffdf8] min-h-screen text-foreground overflow-hidden">
      {/* Subtle animated light effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#c9a86a20,transparent_70%)] animate-pulse" />

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
              What is DealZone?
            </motion.span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed text-center mx-auto mt-6">
            The premium platform revolutionizing cross-border real estate investments.
          </p>
        </motion.div>

        {/* Content */}
        <div className="bg-gradient-to-br from-white via-[#faf7f0] to-[#f5efe3] p-10 md:p-14 space-y-10">

          {/* Activity Highlight (✅ avec le ruban OUR ACTIVITY) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-[#fffdf8] p-10 rounded-lg border border-[#e8e6df] shadow-xl hover:shadow-[0_0_25px_rgba(201,168,106,0.3)] transition"
          >
            <div className="absolute -top-4 left-6 bg-gradient-to-r from-[#b68f46] to-[#d4af37] text-white px-4 py-1 rounded-md text-sm font-semibold shadow-lg tracking-wide">
              OUR ACTIVITY
            </div>
            <p className="text-lg md:text-xl text-black font-medium leading-relaxed">
              DealZone allows Canadians to purchase complete real estate flips in the USA at a fraction of Canadian property prices.
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-black leading-relaxed"
          >
            DealZone is an all-in-one real estate web application built to simplify how people buy, sell, and manage properties.
            The platform caters to investors, agents, contractors, and property service providers.
          </motion.p>

          {/* ✅ Section title: Key Features */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#b68f46] to-[#d4af37] bg-clip-text text-transparent"
          >
            Key Features
          </motion.h2>

          {/* Features List (avec titres) */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="border-l-4 border-[#b68f46] pl-6 space-y-4 text-black"
          >
            {[
              {
                title: "Property Listings",
                text: "View off-market opportunities with complete financial metrics, media, and documents."
              },
              {
                title: "Professional Hub",
                text: "Connect with verified agents, legal experts, and contractors. Showcase your expertise with a public profile."
              },
              {
                title: "Dashboard Tools",
                text: "Access appointment scheduling, contract handling, and advanced analytics for property performance."
              },
              {
                title: "User Verification",
                text: "Secure login and gated features powered by Firebase Authentication and Firestore."
              }
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3 text-[#b68f46]">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <strong className="text-lg font-semibold text-gray-800">{item.title}:</strong>{" "}
                  {item.text}
                </div>
              </li>
            ))}
          </motion.ul>

          {/* ✅ Closing Statement (avec titre) */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#b68f46] to-[#d4af37] bg-clip-text text-transparent"
          >
            Why it matters
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-black leading-relaxed">
              With DealZone, we aim to bridge the gap between Canadian investors and U.S. real estate opportunities,
              making it easier than ever to invest across borders. Our platform is designed to be user-friendly,
              efficient, and secure, ensuring that all transactions are smooth and hassle-free.
            </p>
            <p className="text-lg md:text-xl text-black leading-relaxed">
              Join us at DealZone and discover a new way to invest in real estate. Whether you’re a seasoned investor or just starting,
              we have the tools and resources you need to succeed.
            </p>
          </motion.div>
        </div>

        {/* Decorative footer bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="bg-gradient-to-r from-[#b68f46] to-[#d4af37] h-0.5 w-full origin-left"
        />
      </main>
    </div>
  );
}
