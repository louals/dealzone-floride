import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, Bell, Home, Calendar, Mail, Folder, LogOut, LogIn } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [isNotificationHovered, setIsNotificationHovered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock auth state
  const profileRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  const sidebarVariants: Variants = {
    open: { x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
    closed: { x: "100%", transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  const dropdownVariants: Variants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    closed: { opacity: 0, y: -10, transition: { duration: 0.15, ease: "easeIn" } },
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileHovered(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsNotificationHovered(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const Tooltip = ({ text, children }: { text: string; children: React.ReactNode }) => {
    return (
      <div className="relative group inline-flex justify-center">
        {children}
        <div
          className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full pointer-events-none
                     opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out
                     z-50 whitespace-nowrap max-w-xs sm:max-w-sm"
          style={{ willChange: "opacity, transform" }}
        >
          <div className="flex flex-col items-center">
            <div className="px-4 py-2 bg-[#b58f46] text-white text-sm sm:text-base font-medium rounded-md shadow-lg">
              {text}
            </div>
            <div className="w-3 h-3 -mt-1.5 rotate-45 bg-[#b58f46]" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <header className="h-[6em] sm:h-[8em] w-full bg-[#202720] flex justify-center items-center relative z-50 px-4 shadow-2xl border-b border-[#b38e4f]/20">
        <div className="w-full max-w-[1800px] h-full flex justify-between items-center gap-4 sm:gap-12">
          {/* Logo */}
          <div className="logo flex-shrink-0">
            <Link to="/" className="group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="w-20 h-20 sm:w-25 sm:h-25 bg-gradient-to-br from-[#b38e4f] to-[#9c772f] rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                  <span className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-playfair)] z-10">
                    Z
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#d4b369]/40 rounded-full animate-pulse"></div>
                </div>
                <motion.div
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-[#d4b369] text-xs font-semibold tracking-wider"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  FLORIDA
                </motion.div>
              </motion.div>
            </Link>
          </div>

          {/* Navigation */}
          <div className="headerText hidden md:block flex-grow max-w-4xl">
            <ul className="text-white flex justify-around list-none w-full text-sm sm:text-[15px] opacity-90">
              {[
                { href: "/", label: "Home" },
                { href: "/buy", label: "Buy" },
                { href: "/sell", label: "Sell" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
                { href: "/about", label: "About Us" },
                { href: "/become-provider", label: "Become a Provider", className: "hidden lg:block" },
              ].map((item) => (
                <li key={item.href} className={item.className}>
                  <Link
                    className="relative hover:text-[#d4b369] whitespace-nowrap transition-all duration-300 group font-medium"
                    to={item.href}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#b38e4f] to-[#d4b369] transition-all duration-300 group-hover:w-full"></span>
                    <span className="absolute inset-0 bg-[#d4b369]/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Profile & Notifications */}
          <div className="notifetprofil flex justify-end items-center gap-4 sm:gap-6">
            {/* Notifications */}
            {isLoggedIn && (
              <div
                ref={notificationRef}
                className="relative cursor-pointer group"
                onMouseEnter={() => setIsNotificationHovered(true)}
                onMouseLeave={() => setIsNotificationHovered(false)}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative p-2 rounded-full hover:bg-[#d4b369]/20 transition-all duration-300"
                >
                  <Bell className="text-white group-hover:text-[#d4b369] transition-colors duration-300" size={24} />
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white animate-pulse">
                    3
                  </span>
                </motion.div>

                <AnimatePresence>
                  {isNotificationHovered && (
                    <motion.div
                      className="absolute right-0 mt-2 w-[350px] max-h-[400px] overflow-y-auto bg-[#202720] border border-[#b38e4f]/30 shadow-2xl rounded-lg p-4 backdrop-blur-md"
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={dropdownVariants}
                    >
                      <div className="text-white text-lg font-semibold mb-3 text-center">Notifications</div>
                      <div className="space-y-3">
                        <div className="p-3 rounded-lg bg-[#2d332d] hover:bg-[#3a423a] transition-colors cursor-pointer">
                          <p className="text-sm text-white">New offer received on your property</p>
                          <p className="text-xs text-gray-400 mt-1">2 minutes ago</p>
                        </div>
                        <div className="p-3 rounded-lg bg-[#2d332d] hover:bg-[#3a423a] transition-colors cursor-pointer">
                          <p className="text-sm text-white">Appointment confirmed for tomorrow</p>
                          <p className="text-xs text-gray-400 mt-1">1 hour ago</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Profile or Login */}
            {isLoggedIn ? (
              <div
                ref={profileRef}
                className="relative"
                onMouseEnter={() => setIsProfileHovered(true)}
                onMouseLeave={() => setIsProfileHovered(false)}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white border-2 rounded-full flex items-center justify-center text-sm aspect-square w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 cursor-pointer transition-all duration-300 hover:shadow-lg"
                  style={{
                    borderColor: isProfileHovered ? "#c2a45e" : "#404440",
                    backgroundColor: "#404440",
                    boxShadow: isProfileHovered ? "0 0 20px rgba(196, 164, 94, 0.3)" : "none",
                  }}
                >
                  <User size={24} />
                </motion.div>

                <AnimatePresence>
                  {isProfileHovered && (
                    <motion.div
                      className="absolute right-0 mt-2 w-[350px] bg-[#202720] border border-[#b38e4f]/30 shadow-2xl z-50 p-4 rounded-lg backdrop-blur-md"
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={dropdownVariants}
                    >
                      <div className="text-white text-xl font-semibold mb-2">Dashboard</div>
                      <hr className="border-t border-dashed border-white opacity-30 mb-4" />
                      <div className="grid grid-cols-3 gap-3 mb-5">
                        {[
                          { icon: Home, tooltip: "My Offers", href: "/dashboard" },
                          { icon: Calendar, tooltip: "Calendar", href: "/dashboard" },
                          { icon: Folder, tooltip: "Documents", href: "/dashboard" },
                          { icon: Mail, tooltip: "Messages", href: "/dashboard" },
                          { icon: User, tooltip: "Profile", href: "/dashboard" },
                        ].map((item, index) => (
                          <Link
                            key={index}
                            to={item.href}
                            onClick={() => setIsProfileHovered(false)}
                            className="flex items-center justify-center p-3 border border-white/30 rounded-lg text-white/80 hover:bg-[#d4b369]/20 hover:border-[#d4b369] hover:text-white transition-all duration-300 group"
                          >
                            <Tooltip text={item.tooltip}>
                              <item.icon
                                size={28}
                                strokeWidth={1.5}
                                className="group-hover:scale-110 transition-transform duration-300"
                              />
                            </Tooltip>
                          </Link>
                        ))}
                      </div>
                      <button
                        onClick={() => setIsLoggedIn(false)}
                        className="text-left w-full text-[#d4b369] hover:text-[#f0c97a] text-lg font-medium transition-all duration-300 hover:translate-x-1"
                      >
                        Log out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link to="/login">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white border-2 rounded-full flex items-center justify-center text-xs sm:text-sm aspect-square w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 font-semibold transition-all duration-300 hover:shadow-lg group"
                  style={{
                    borderColor: "#c2a45e",
                    backgroundColor: "#404440",
                  }}
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">LOG IN</span>
                </motion.div>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(true)}
              className="text-white focus:outline-none p-2 rounded-lg hover:bg-[#d4b369]/20 transition-colors duration-300"
            >
              <Menu size={30} />
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-full max-w-xs sm:max-w-sm bg-[#202720] z-50 shadow-2xl border-l border-[#3a423a]"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-[#3a423a]">
                  <Link to="/" onClick={() => setIsMenuOpen(false)}>
                    <div className="w-10 h-10 bg-gradient-to-br from-[#b38e4f] to-[#9c772f] rounded-xl flex items-center justify-center">
                      <span className="text-xl font-bold text-white">Z</span>
                    </div>
                  </Link>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white/70 hover:text-white transition-colors p-2 rounded-lg hover:bg-[#d4b369]/20"
                  >
                    <X size={24} />
                  </motion.button>
                </div>
                <nav className="flex-1 overflow-y-auto p-6">
                  <ul className="space-y-4">
                    {[
                      { path: "/", label: "Home" },
                      { path: "/buy", label: "Buy" },
                      { path: "/sell", label: "Sell" },
                      { path: "/blog", label: "Blog" },
                      { path: "/contact", label: "Contact" },
                      { path: "/about", label: "About Us" },
                      { path: "/become-provider", label: "Become a Provider" },
                    ].map((item) => (
                      <motion.li key={item.path} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Link
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-3 p-3 rounded-lg text-white/80 hover:text-white hover:bg-[#2d332d] transition-all duration-300 font-medium"
                        >
                          <span>{item.label}</span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-[#3a423a]">
                    {isLoggedIn ? (
                      <div className="space-y-4">
                        <Link
                          to="/dashboard"
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-3 p-3 rounded-lg bg-[#b38e4f]/10 text-[#b38e4f] hover:bg-[#b38e4f]/20 transition-colors font-medium"
                        >
                          <Home size={20} />
                          <span>Dashboard</span>
                        </Link>
                        <button
                          onClick={() => setIsLoggedIn(false)}
                          className="w-full flex items-center gap-3 p-3 rounded-lg text-red-400 hover:bg-red-400/10 transition-colors font-medium"
                        >
                          <LogOut size={20} />
                          <span>Log out</span>
                        </button>
                      </div>
                    ) : (
                      <Link
                        to="/login"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center justify-center gap-2 p-3 rounded-lg bg-[#b38e4f] hover:bg-[#9c772f] text-white font-medium transition-colors"
                      >
                        <LogIn size={20} />
                        Log in
                      </Link>
                    )}
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
