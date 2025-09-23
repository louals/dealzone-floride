  import { useState } from "react";
  import { motion } from "framer-motion";
  import { useNavigate } from "react-router-dom";
  import { FaGoogle, FaFacebookF } from "react-icons/fa";
  import { FiHome } from "react-icons/fi";

  export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      navigate("/dashboard");
    };

    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d0f0d] via-[#1c2420] to-[#101311] px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-md p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
        >
          {/* Glow decor */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#e6c77c]/20 via-transparent to-[#ffdd95]/20 blur-2xl" />

          {/* Home button (luxury glass) */}
          <button
            type="button"
            onClick={() => navigate("/")}
            aria-label="Go to Home"
            className="absolute top-3 left-3 z-20 inline-flex items-center gap-2 rounded-full px-3 py-2 bg-white/15 text-[#f1f3ee] border border-white/30 backdrop-blur-md transition-all hover:bg-white/25 hover:shadow-[0_0_20px_rgba(230,199,124,0.35)] focus:outline-none focus:ring-2 focus:ring-[#e6c77c]/60">
            <FiHome className="text-[#e6c77c]" />
            <span className="hidden sm:inline text-sm font-medium">Home</span>
          </button>

          <div className="relative z-10 text-center mb-8">
            <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-lg border border-white/30 shadow-inner">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-8 h-8 text-[#e6c77c] drop-shadow-[0_0_10px_rgba(230,199,124,0.7)]"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#f1f3ee] tracking-wide">Welcome Back</h2>
            <p className="text-sm text-gray-300">Please sign in to continue</p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {/* Email: simple placeholder */}
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md text-[#f1f3ee] border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e6c77c]/80"
              aria-label="Email address"
            />

            {/* Password: simple placeholder */}
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md text-[#f1f3ee] border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e6c77c]/80"
              aria-label="Password"
            />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-gray-300">
                <input type="checkbox" className="accent-[#e6c77c]" />
                Remember me
              </label>
              <a href="#" className="text-[#e6c77c] hover:underline">Forgot password?</a>
            </div>

            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(230,199,124,0.8)" }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#e6c77c] via-[#d9a74a] to-[#ffdd95] text-[#202720] font-semibold shadow-md hover:shadow-xl transition"
            >
              Sign In
            </motion.button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6 relative z-10">
            <div className="flex-grow h-px bg-gray-600/50" />
            <span className="mx-2 text-gray-400 text-sm">or continue with</span>
            <div className="flex-grow h-px bg-gray-600/50" />
          </div>

          {/* Socials */}
          <div className="flex justify-center gap-4 relative z-10">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[#db4437] hover:scale-110 hover:bg-white hover:text-[#db4437] transition" aria-label="Continue with Google">
              <FaGoogle size={20} />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[#4267B2] hover:scale-110 hover:bg-white hover:text-[#4267B2] transition" aria-label="Continue with Facebook">
              <FaFacebookF size={20} />
            </button>
          </div>

          <p className="text-center text-gray-300 text-sm mt-6 relative z-10">
            Don’t have an account? {" "}
            <a href="/register" className="text-[#e6c77c] hover:underline font-medium">Register</a>
          </p>
        </motion.div>
      </section>
    );
  }
