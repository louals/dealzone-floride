import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f1f3ee] via-[#eceee8] to-[#fafafa] px-4 mt-10 ">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.6)] "
      >
        {/* Glow decor */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#e6c77c]/20 via-transparent to-[#ffdd95]/20 blur-2xl" />

        <div className="relative z-10 text-center mb-8">
          <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-white/50 backdrop-blur-lg border border-white/70 shadow-inner">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-8 h-8 text-[#b38e4f] drop-shadow-[0_0_10px_rgba(179,142,79,0.6)]"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#202720] tracking-wide">Welcome Back</h2>
          <p className="text-sm text-gray-600">Please sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="peer w-full px-4 py-3 rounded-lg bg-white/60 backdrop-blur-md text-[#202720] placeholder-transparent border border-white/70 focus:outline-none focus:ring-2 focus:ring-[#b38e4f]/70"
              placeholder="Email address"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-3 text-gray-600 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#b38e4f] bg-transparent px-1"
            >
              Email address
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="peer w-full px-4 py-3 rounded-lg bg-white/60 backdrop-blur-md text-[#202720] placeholder-transparent border border-white/70 focus:outline-none focus:ring-2 focus:ring-[#b38e4f]/70"
              placeholder="Password"
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-3 text-gray-600 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#b38e4f] bg-transparent px-1"
            >
              Password
            </label>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer text-gray-700">
              <input type="checkbox" className="accent-[#b38e4f]" />
              Remember me
            </label>
            <a href="#" className="text-[#b38e4f] hover:underline">
              Forgot password?
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(179,142,79,0.6)" }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-[#b38e4f] via-[#d9a74a] to-[#ffdd95] text-[#202720] font-semibold shadow-md hover:shadow-xl transition"
          >
            Sign In
          </motion.button>
        </form>

        <div className="flex items-center my-6 relative z-10">
          <div className="flex-grow h-px bg-gray-300/70" />
          <span className="mx-2 text-gray-500 text-sm">or continue with</span>
          <div className="flex-grow h-px bg-gray-300/70" />
        </div>

        <div className="flex justify-center gap-4 relative z-10">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-md border border-white/80 text-[#db4437] hover:scale-110 hover:bg-white hover:text-[#db4437] transition">
            <FaGoogle size={20} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-md border border-white/80 text-[#4267B2] hover:scale-110 hover:bg-white hover:text-[#4267B2] transition">
            <FaFacebookF size={20} />
          </button>
        </div>

        <p className="text-center text-gray-600 text-sm mt-6 relative z-10">
          Don’t have an account? {" "}
          <a href="/signup" className="text-[#b38e4f] hover:underline font-medium">
            Sign Up
          </a>
        </p>
      </motion.div>
    </section>
  );
}
