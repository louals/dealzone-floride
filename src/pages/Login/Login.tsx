import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { FiHome } from "react-icons/fi";

import { auth, googleProvider, facebookProvider, db } from "../../lib/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // 🔹 Redirection selon completion du profil
  const handleRedirect = async (uid: string) => {
    const userRef = doc(db, "users", uid);
    const snap = await getDoc(userRef);

    if (snap.exists() && snap.data().registrationComplete) {
      navigate("/dashboard");
    } else {
      navigate("/complete-profile");
    }
  };

  // 🔹 Connexion Email/Password
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      const user = cred.user;

      // Vérifie si doc Firestore existe sinon le créer
      const userRef = doc(db, "users", user.uid);
      const snap = await getDoc(userRef);
      if (!snap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          firstName: "",
          lastName: "",
          phone: "",
          address: "",
          state: "",
          country: "",
          investorProfile: "individual",
          companyName: "",
          companyAddress: "",
          description: "",
          capitalToInvest: "",
          openToPartnership: false,
          role: "user",
          emailVerified: user.emailVerified,
          registrationComplete: false,
          provider: "password",
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
      }

      await handleRedirect(user.uid);
    } catch (err: any) {
      setError(err?.message || "Login failed. Please try again.");
    }
  };

  // 🔹 Connexion Google
  const handleGoogle = async () => {
    setError(null);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const userRef = doc(db, "users", user.uid);
      const snap = await getDoc(userRef);

      if (!snap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || "",
          firstName: "",
          lastName: "",
          phone: "",
          address: "",
          state: "",
          country: "",
          investorProfile: "individual",
          companyName: "",
          companyAddress: "",
          description: "",
          capitalToInvest: "",
          openToPartnership: false,
          role: "user",
          emailVerified: user.emailVerified,
          registrationComplete: false,
          provider: "google",
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
      }

      await handleRedirect(user.uid);
    } catch (err: any) {
      setError(err?.message || "Google login failed. Please try again.");
    }
  };

  // 🔹 Connexion Facebook
  const handleFacebook = async () => {
    setError(null);
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;

      const userRef = doc(db, "users", user.uid);
      const snap = await getDoc(userRef);

      if (!snap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || "",
          firstName: "",
          lastName: "",
          phone: "",
          address: "",
          state: "",
          country: "",
          investorProfile: "individual",
          companyName: "",
          companyAddress: "",
          description: "",
          capitalToInvest: "",
          openToPartnership: false,
          role: "user",
          emailVerified: user.emailVerified,
          registrationComplete: false,
          provider: "facebook",
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
      }

      await handleRedirect(user.uid);
    } catch (err: any) {
      setError(err?.message || "Facebook login failed. Please try again.");
    }
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

        {/* Home button */}
        <button
          type="button"
          onClick={() => navigate("/")}
          aria-label="Go to Home"
          className="absolute top-3 left-3 z-20 inline-flex items-center gap-2 rounded-full px-3 py-2 bg-white/15 text-[#f1f3ee] border border-white/30 backdrop-blur-md hover:bg-white/25"
        >
          <FiHome className="text-[#e6c77c]" />
          <span className="hidden sm:inline text-sm font-medium">Home</span>
        </button>

        {/* Header */}
        <div className="relative z-10 text-center mb-8">
          <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-lg border border-white/30 shadow-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-[#e6c77c]">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#f1f3ee] tracking-wide">Welcome Back</h2>
          <p className="text-sm text-gray-300">Please sign in to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            placeholder="Email address"
            className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md text-[#f1f3ee] border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e6c77c]/80"
          />

          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md text-[#f1f3ee] border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e6c77c]/80"
          />

          {error && <p className="text-red-400 text-sm">{error}</p>}

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

        {/* Social */}
        <div className="flex justify-center gap-4 relative z-10">
          <button
            onClick={handleGoogle}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 border border-white/30 text-[#db4437] hover:scale-110 hover:bg-white transition"
          >
            <FaGoogle size={20} />
          </button>
          <button
            onClick={handleFacebook}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 border border-white/30 text-[#4267B2] hover:scale-110 hover:bg-white transition"
          >
            <FaFacebookF size={20} />
          </button>
        </div>

        <p className="text-center text-gray-300 text-sm mt-6 relative z-10">
          Don’t have an account?{" "}
          <a href="/register" className="text-[#e6c77c] hover:underline font-medium">
            Register
          </a>
        </p>
      </motion.div>
    </section>
  );
}
