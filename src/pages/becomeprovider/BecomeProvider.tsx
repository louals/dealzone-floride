import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaRocket } from "react-icons/fa";

const BecomeProvider: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfcf7] to-[#f5f3eb] w-full overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-28 flex flex-col lg:flex-row items-center gap-20">
        {/* Texte principal */}
        <motion.div
          className="w-full lg:w-1/2 space-y-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
         <h1 className="text-5xl sm:text-6xl font-extrabold text-[#1c1c1c] leading-tight break-words text-center lg:text-left">
        Join DealZone as a{" "}
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b38e4f] to-[#d4af37]">
        Verified
  </span>{" "}
    Professional
</h1>

          <p className="text-gray-700 text-xl sm:text-2xl leading-relaxed font-light">
            Are you an inspector, agent, contractor, or legal advisor in real estate? 
            Apply to showcase your services on DealZone and connect with clients actively closing deals.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {[
              "Verified Professional Profile",
              "Qualified Client Connections",
              "Streamlined Communication",
              "Simple Appointment Booking",
            ].map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:bg-gradient-to-r hover:from-[#fff8e1] hover:to-[#fbeec1] transition"
              >
                <FaCheckCircle className="text-[#d4af37] text-2xl flex-shrink-0" />
                <span className="text-lg font-medium text-gray-900">
                  {text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bloc "Why Join" */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative bg-gradient-to-br from-white to-[#fdfbf7] p-10 rounded-3xl shadow-2xl border border-[#f1e5c6]">
            <FaRocket className="text-[#d4af37] text-[100px] mx-auto mb-6 animate-bounce" />
            <h3 className="text-3xl font-bold text-center text-[#1c1c1c] mb-6">
              Why Join DealZone?
            </h3>
            <ul className="space-y-5 text-lg text-gray-800">
              {[
                "Feature your professional profile to real clients",
                "Get appointment requests directly",
                "Manage your services and business from one place",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#d4af37] mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
   {/* CTA Section */}
<div className="py-20">
  <div className="max-w-4xl mx-auto px-6 sm:px-12 text-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-[#b38e4f] to-[#d4af37] p-12 rounded-3xl shadow-2xl text-white"
    >
      <h2 className="text-4xl font-bold mb-6">
        Ready to Join the Platform?
      </h2>
      <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
        DealZone is where property pros and buyers meet. Apply today and help close the next big deal.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/become-professional"
          className="inline-flex items-center justify-center gap-3 bg-white text-[#1c1c1c] hover:bg-gray-100 text-lg font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <FaRocket className="text-sm text-[#d4af37]" />
          Get Started
          
        </Link>
      </div>
    </motion.div>
  </div>
</div>
    </div>
  );
};

export default BecomeProvider;