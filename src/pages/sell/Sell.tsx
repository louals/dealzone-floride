import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type { House } from "./types";
import { FaBed, FaBath, FaHome, FaThermometerHalf } from "react-icons/fa";
import { LuCircleParking } from "react-icons/lu";
import { BsXDiamond } from "react-icons/bs";

// ------------------- Données mock -------------------
const mockHouse: House = {
  id: 1,
  title: "Property for sale",
  image: [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80", // grande maison
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80", // salon intérieur
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80", // cuisine moderne
  ],
  address: "456 Oak Ave, Townsville",
  price: "$750,000",
  yearBuilt: "2015",
  heating: "Central air",
  bedrooms: "4 bedrooms",
  bathrooms: "3 bathrooms",
  parking: "3 Parking",
  sqft: "3,200 Sqft",
};

// ------------------- Composant -------------------
export default function SellPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen flex items-center justify-center bg-white"
    >
      {/* Hero Section */}
      <div className="absolute inset-0">
        <img
          src={mockHouse.image[0]}
          alt={mockHouse.title}
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        {/* Texte */}
        <div className="flex flex-col justify-center mt-15">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
            Sell Your Property <br />
            <span className="text-[#b58f46]">Today!</span>
          </h1>

          <div className="mt-6">
            <h2 className="text-2xl font-bold text-black drop-shadow-sm">
              Tell Us About Your Property
            </h2>
            <p className="mt-2 text-base text-black">
              The more you share, the better your chances of selling for top dollar!
            </p>
          </div>

          {/* Bouton animé */}
          <motion.button
            onClick={() => navigate("/sell/start")}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(181,143,70,0.8)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 rounded-lg bg-gradient-to-r from-[#e6c77c] via-[#b58f46] to-[#d9a74a] text-black font-semibold shadow transition duration-200 w-fit"
          >
            LET'S GET STARTED →
          </motion.button>
        </div>

        {/* Carte Maison */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-[#eee4c3] mt-15">
          <img
            src={mockHouse.image[1]}
            alt="preview"
            className="w-full h-56 object-cover "
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">{mockHouse.title}</h2>
            <p className="text-lg text-[#b58f46] font-semibold mt-2">{mockHouse.price}</p>
            <p className="text-sm text-gray-500 mt-1">{mockHouse.address}</p>

            <div className="grid grid-cols-2 gap-4 mt-4 text-gray-600 text-sm">
              <div className="flex items-center gap-2"><FaHome /> {mockHouse.yearBuilt}</div>
              <div className="flex items-center gap-2"><FaThermometerHalf /> {mockHouse.heating}</div>
              <div className="flex items-center gap-2"><LuCircleParking /> {mockHouse.parking}</div>
              <div className="flex items-center gap-2"><FaBed /> {mockHouse.bedrooms}</div>
              <div className="flex items-center gap-2"><FaBath /> {mockHouse.bathrooms}</div>
              <div className="flex items-center gap-2"><BsXDiamond /> {mockHouse.sqft}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}