import { motion } from "framer-motion"

interface NavbarProps {
  isMobile?: boolean
  onItemClick?: () => void
}

const navItems = [
  { name: "Home", href: "/" },
  { name: "Buy", href: "/buy" },
  { name: "Sell", href: "/sell" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "About Us", href: "/about" },
  { name: "Become a Provider", href: "/become-provider" },
]

export default function Navbar({ isMobile = false, onItemClick }: NavbarProps) {
  const handleItemClick = () => {
    if (onItemClick) {
      onItemClick()
    }
  }

  if (isMobile) {
    return (
      <nav className="space-y-2">
        {navItems.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            className="block px-4 py-3 text-[#f1f3ee] hover:text-[#d4b369] transition-colors duration-300 rounded-lg hover:bg-[#b38e4f]/10"
            onClick={handleItemClick}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{
              x: 10,
              scale: 1.05,
              boxShadow: "0 0 20px rgba(179, 142, 79, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-medium">{item.name}</span>
          </motion.a>
        ))}
      </nav>
    )
  }

  return (
    <nav className="flex items-center space-x-8">
      {navItems.map((item) => (
        <motion.a
          key={item.name}
          href={item.href}
          className="relative text-[#f1f3ee] hover:text-[#d4b369] transition-colors duration-300 font-medium group"
          whileHover={{
            y: -3,
            scale: 1.05,
            textShadow: "0 0 8px rgba(212, 179, 105, 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            duration: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          <span>{item.name}</span>
          <motion.div
            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#b38e4f] to-[#d4b369] rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileHover={{
              width: "100%",
              opacity: 1,
              boxShadow: "0 0 12px rgba(179, 142, 79, 0.8), 0 0 24px rgba(212, 179, 105, 0.4)",
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          />
          <motion.div
            className="absolute inset-0 -z-10 rounded-lg"
            initial={{ background: "transparent" }}
            whileHover={{
              background: "linear-gradient(to right, rgba(179, 142, 79, 0.1), rgba(212, 179, 105, 0.1))",
              scale: 1.1,
              boxShadow: "0 0 20px rgba(179, 142, 79, 0.2)",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
      ))}
    </nav>
  )
}
