"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Navbar from "./Navbar"
import LogoDealZone from "../../assets/LogoDealZonepng.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-[#202720] shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={LogoDealZone}
              alt="DealZone Florida Logo"
              className="w-12 h-12 lg:w-14 lg:h-14 object-contain"
            />
            <div className="text-[#f1f3ee]">
              <h1 className="font-bold text-lg lg:text-xl">DealZone</h1>
              <p className="text-xs lg:text-sm text-[#d4b369] -mt-1">Florida</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <Navbar />
          </div>

          {/* Desktop Login Button */}
          <motion.button
            className="hidden lg:block px-8 py-3 border-2 border-[#b38e4f] text-[#f1f3ee] rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(179,142,79,0.5)] hover:border-[#d4b369] hover:text-[#d4b369]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LOG IN
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-[#f1f3ee] hover:text-[#d4b369] transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-[#202720] shadow-2xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-8 border-b border-[#b38e4f]/20">
                  <div className="flex items-center space-x-3">
                    <img
                      src={LogoDealZone}
                      alt="DealZone Florida Logo"
                      className="w-12 h-12 lg:w-14 lg:h-14 object-contain"
                    />
                    <div className="text-[#f1f3ee]">
                      <h1 className="font-bold">DealZone</h1>
                      <p className="text-xs text-[#d4b369] -mt-1">Florida</p>
                    </div>
                  </div>
                  <button
                    onClick={toggleMobileMenu}
                    className="p-2 text-[#f1f3ee] hover:text-[#d4b369] transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex-1 px-8 py-10">
                  <Navbar isMobile onItemClick={toggleMobileMenu} />
                </div>

                <div className="p-8 border-t border-[#b38e4f]/20">
                  <motion.button
                    className="w-full px-8 py-4 border-2 border-[#b38e4f] text-[#f1f3ee] rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(179,142,79,0.5)] hover:border-[#d4b369] hover:text-[#d4b369]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={toggleMobileMenu}
                  >
                    LOG IN
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
