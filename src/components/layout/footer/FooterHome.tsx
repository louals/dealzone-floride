import { Link } from "react-router-dom";
// import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import wmp from "../../../assets/WMPLogoBlack.png";
import KDealZoneLogo from "../../../assets/KDealZoneLogo.png";
import logo from "../../../assets/bus.png";

export default function FooterHome() {
  return (
    <footer className="bg-black text-white relative overflow-hidden" aria-label="Site Footer">
      {/* Effet doré en arrière-plan */}
      {/* Effet décoratif clair et premium */}
<div className="absolute inset-0 bg-gradient-to-tr from-amber-200/30 via-white/10 to-emerald-200/20 pointer-events-none blur-2xl"></div>

<div className="relative container mx-auto px-6 lg:px-12 py-12">

        
        {/* Slogan */}
<motion.div 
  initial={{ opacity: 0, scale: 0.9 }} 
  whileInView={{ opacity: 1, scale: 1 }} 
  transition={{ duration: 0.6 }} 
  viewport={{ once: true }}
  className="flex justify-evenly items-center py-10 gap-12"
>
  {[{src: logo, alt: "Bus Logo", link: "https://www.jkrealestatepartners.com/bustour"},
    {src: KDealZoneLogo, alt: "DealZone Logo", link: "https://www.jkrealestatepartners.com/"},
    {src: wmp, alt: "WMP Logo", link: "http://wemindproperties.com/"}].map(({src, alt, link}, i) => (
    <motion.a 
      key={i}
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, rotate: 2 }}
      className="transition-transform"
    >
      <img 
        src={src} 
        alt={alt} 
        className="h-20 md:h-28 object-contain"
      />
    </motion.a>
  ))}
</motion.div>

{/* Bas de footer */}
        <div className="mt-12 border-t border-amber-500/20 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-xs"></div>


{/* Liens en grille avec logo plus grand */} 
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 items-start md:items-center">

  {/* Quick Links */}
<div className="text-center md:text-left">
  <div className="space-y-3">
    {["Home","Buy","Sell","Contact","Become a Provider"].map((item, i) => (
      <div key={i}> {/* Garde chaque mot sur une ligne */}
        <Link 
          to="/" 
          className="inline-block text-gray-300 hover:text-amber-400 relative group text-lg tracking-wide transition"
        >
          {item}
          <span className="absolute left-0 -bottom-0.5 h-[2px] bg-amber-400 
                          w-0 transition-all duration-500 group-hover:w-full"></span>
        </Link>
      </div>
    ))}
  </div>
</div>

{/* Services */}
<div className="text-center md:text-left">
  <div className="space-y-3">
    {["Log In","Terms Of Use","Confidentiality","Accessibility","About Us"].map((service, i) => (
      <div key={i}> {/* Garde chaque mot sur une ligne */}
        <Link 
          to="/" 
          className="inline-block text-gray-300 hover:text-amber-400 relative group text-lg tracking-wide transition"
        >
          {service}
          <span className="absolute left-0 -bottom-0.5 h-[2px] bg-amber-400 
                          w-0 transition-all duration-500 group-hover:w-full"></span>
        </Link>
      </div>
    ))}
  </div>
</div>


  {/* Logo agrandi aligné avec Services */}
  <motion.div 
    initial={{ opacity: 0, y: 30 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.8 }} 
    viewport={{ once: true }}
    className="flex justify-center md:justify-end"
  >
    <a href="https://www.jkrealestatepartners.com/" target="_blank" rel="noopener noreferrer">
      <img 
        src={KDealZoneLogo} 
        alt="DealZone Logo" 
        className="h-28 md:h-46 object-contain opacity-90 hover:opacity-100 
                   hover:scale-110 transition-all duration-500 
                   drop-shadow-[0_0_15px_rgba(201,168,106,0.7)]"
      />
    </a>
  </motion.div>
</div>





        {/* Bas de footer */}
        <div className="mt-12 border-t border-amber-500/20 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-xs">
          {/* Copyright */}
          <p>© {new Date().getFullYear()} <span className="text-amber-400 font-semibold">DealZone</span>. All Rights Reserved.</p>

          {/* Social Icons */}
          <div className="flex space-x-4 my-4 md:my-0">
            {[{icon: FaLinkedinIn, link:"https://www.linkedin.com/company/jksrealestatepartners/?trk=ppro_cprof&originalSubdomain=ca"},
              {icon: FaInstagram, link:"https://www.instagram.com/janie__grenier/"},
              {icon: FaFacebookF, link:"https://www.facebook.com/Nowfortomorrowclub"}].map(({icon:Icon,link},i)=>(
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="p-2 border border-amber-400 rounded-full text-lg hover:bg-amber-400 hover:text-black hover:shadow-lg hover:shadow-amber-400/40 transition-all duration-300"
              >
                <Icon />
              </motion.a>
            ))}
          </div>

          {/* Powered by */}
          <p>
            Powered by{" "}
            <a href="https://wintechnologie.ca/" target="_blank" rel="noopener noreferrer"
              className="text-amber-400  hover:decoration-wavy">
              WinTechnologie.ca
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}