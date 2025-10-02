import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { FiHome } from "react-icons/fi";

import { auth, googleProvider, facebookProvider, db } from "../../lib/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

// ------------------ UserProfile interface ------------------
interface UserProfile {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  address?: string;
  state?: string;
  country?: string;
  investorProfile?: "individual" | "company";
  companyName?: string;
  companyAddress?: string;
  description?: string;
  capitalToInvest?: string;
  openToPartnership?: boolean;
  role: "user" | "admin";
  emailVerified: boolean;
  registrationComplete: boolean;
  provider?: string;
  createdAt: any;
  updatedAt: any;
}

export default function Register() {
  // ------------------ States ------------------
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [profile, setProfile] = useState<"individual" | "company">("individual");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [description, setDescription] = useState("");
  const [capital, setCapital] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [openToPartnership, setOpenToPartnership] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  // ------------------ Email/Password Register ------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      setError("Please fill in all required fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!acceptTerms) {
      setError("You must accept the Terms to continue.");
      return;
    }

    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      const user = cred.user;

      await updateProfile(user, { displayName: `${firstName} ${lastName}` });

      const userProfile: UserProfile = {
        userId: user.uid,
        email,
        firstName,
        lastName,
        phone,
        address,
        state,
        country,
        investorProfile: profile,
        companyName,
        companyAddress,
        description,
        capitalToInvest: capital,
        openToPartnership,
        role: "user",
        emailVerified: user.emailVerified,
        registrationComplete: true,
        provider: "password",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      await setDoc(doc(db, "users", user.uid), userProfile, { merge: true });

      setError(null);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err?.message || "Registration failed. Please try again.");
    }
  };

  // ------------------ Google Register ------------------
  const handleGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const userProfile: UserProfile = {
        userId: user.uid,
        email: user.email || "",
        firstName: user.displayName?.split(" ")[0] || "",
        lastName: user.displayName?.split(" ")?.slice(1).join(" ") || "",
        role: "user",
        emailVerified: user.emailVerified,
        registrationComplete: false, // 🚨 pas encore complet
        provider: "google",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      await setDoc(doc(db, "users", user.uid), userProfile, { merge: true });
      navigate("/complete-profile");
    } catch (err: any) {
      setError(err?.message || "Google signup failed. Please try again.");
    }
  };

  // ------------------ Facebook Register ------------------
  const handleFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;

      const userProfile: UserProfile = {
        userId: user.uid,
        email: user.email || "",
        firstName: user.displayName?.split(" ")[0] || "",
        lastName: user.displayName?.split(" ")?.slice(1).join(" ") || "",
        role: "user",
        emailVerified: user.emailVerified,
        registrationComplete: false, // 🚨 pas encore complet
        provider: "facebook",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      await setDoc(doc(db, "users", user.uid), userProfile, { merge: true });
      navigate("/complete-profile");
    } catch (err: any) {
      setError(err?.message || "Facebook signup failed. Please try again.");
    }
  };

  // ------------------ UI ------------------
  const input =
    "w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md text-[#f1f3ee] border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e6c77c]/80";

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d0f0d] via-[#1c2420] to-[#101311] px-4 pt-28 pb-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative isolate w-full max-w-4xl p-8 md:p-10 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
      >
        {/* Glow decor */}
        <div className="absolute inset-0 -z-10 pointer-events-none rounded-2xl bg-gradient-to-br from-[#e6c77c]/20 via-transparent to-[#ffdd95]/20 blur-2xl" />

        {/* Home button */}
        <button
          type="button"
          onClick={() => navigate("/")}
          aria-label="Go to Home"
          className="absolute top-3 left-3 z-20 inline-flex items-center gap-2 rounded-full px-3 py-2 bg-white/15 text-[#f1f3ee] border border-white/30 backdrop-blur-md transition-all hover:bg-white/25"
        >
          <FiHome className="text-[#e6c77c]" />
          <span className="hidden sm:inline text-sm font-medium">Home</span>
        </button>

        {/* Header */}
        <div className="relative z-10 text-center mb-6 md:mb-8">
          <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-lg border border-white/30 shadow-inner">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-8 h-8 text-[#e6c77c]"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#f1f3ee] tracking-wide">
            Create Account
          </h2>
          <p className="text-sm text-gray-300">
            Fill in your details to sign up
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input id="firstName" placeholder="First Name *" className={input} value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            <input id="lastName" placeholder="Last Name *" className={input} value={lastName} onChange={(e) => setLastName(e.target.value)} required />

            <input type="email" id="email" placeholder="Email address *" className={input} value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
            <input type="tel" id="phone" placeholder="Phone Number" className={input} value={phone} onChange={(e) => setPhone(e.target.value)} />

            <input type="password" id="password" placeholder="Password *" className={input} value={password} onChange={(e) => setPassword(e.target.value)} required />
            <input type="password" id="confirmPassword" placeholder="Confirm Password *" className={input} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

            <input id="address" placeholder="Address" className={input} value={address} onChange={(e) => setAddress(e.target.value)} />
            <div className="grid grid-cols-2 gap-5">
              <input id="state" placeholder="State" className={input} value={state} onChange={(e) => setState(e.target.value)} />
              <input id="country" placeholder="Country" className={input} value={country} onChange={(e) => setCountry(e.target.value)} />
            </div>

            <select
              id="profile"
              value={profile}
              onChange={(e) => setProfile(e.target.value as "individual" | "company")}
              className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md text-[#f1f3ee] border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#e6c77c]/80 appearance-none"
            >
              <option value="individual" className="text-black">
                Individual Investor
              </option>
              <option value="company" className="text-black">
                Company Investor
              </option>
            </select>

            <input type="number" id="capital" placeholder="Capital to Invest ($)" className={input} value={capital} onChange={(e) => setCapital(e.target.value)} />
            <input id="companyName" placeholder="Company Name" className={input} value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            <input id="companyAddress" placeholder="Company Address" className={input} value={companyAddress} onChange={(e) => setCompanyAddress(e.target.value)} />
          </div>

          <textarea id="description" placeholder="Describe your real-estate portfolio (active or inactive)" className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md text-[#f1f3ee] border border-white/30 min-h-[110px]" value={description} onChange={(e) => setDescription(e.target.value)} />

          <div className="grid grid-rows-[auto_auto] gap-4">
            <label className="inline-flex items-center gap-2 text-sm text-gray-300">
              <input type="checkbox" checked={openToPartnership} onChange={(e) => setOpenToPartnership(e.target.checked)} className="accent-[#e6c77c]" />
              Open to Partnership Opportunities
            </label>
            <label className="inline-flex items-center gap-2 text-sm text-gray-300">
              <input type="checkbox" checked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} className="accent-[#e6c77c]" required />
              I accept the Terms & Privacy Policy *
            </label>
          </div>

          {error && <div className="text-red-400 text-sm -mt-1">{error}</div>}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <Link to="/login" className="w-full py-3 rounded-lg bg-white/10 text-gray-200 border border-white/20 font-medium hover:bg-white/20 transition flex items-center justify-center">
              Back to Login
            </Link>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-[#e6c77c] via-[#d9a74a] to-[#ffdd95] text-[#202720] font-semibold shadow-md hover:shadow-xl transition">
              Sign Up
            </motion.button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6 relative z-10">
          <div className="flex-grow h-px bg-gray-600/50" />
          <span className="mx-2 text-gray-400 text-sm">or continue with</span>
          <div className="flex-grow h-px bg-gray-600/50" />
        </div>

        {/* Social */}
        <div className="flex justify-center gap-4 relative z-10">
          <button onClick={handleGoogle} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 border border-white/30 text-[#db4437] hover:scale-110 hover:bg-white transition">
            <FaGoogle size={20} />
          </button>
          <button onClick={handleFacebook} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 border border-white/30 text-[#4267B2] hover:scale-110 hover:bg-white transition">
            <FaFacebookF size={20} />
          </button>
        </div>

        <p className="text-center text-gray-300 text-sm mt-6 relative z-10">
          Already have an account?{" "}
          <Link to="/login" className="text-[#e6c77c] hover:underline font-medium">
            Back to Login
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
