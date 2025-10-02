import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiHome } from "react-icons/fi";

import { auth, db } from "../../lib/firebase";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

export default function CompleteProfile() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [investorProfile, setInvestorProfile] = useState("individual");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [description, setDescription] = useState("");
  const [capitalToInvest, setCapitalToInvest] = useState("");
  const [openToPartnership, setOpenToPartnership] = useState(false);

  // ----------------- Charger données existantes -----------------
  useEffect(() => {
    const fetchUser = async () => {
      const user = auth.currentUser;
      if (!user) {
        navigate("/login");
        return;
      }

      try {
        const userRef = doc(db, "users", user.uid);
        const snap = await getDoc(userRef);

        if (snap.exists()) {
          const data = snap.data();
          setFirstName(data.firstName || "");
          setLastName(data.lastName || "");
          setPhone(data.phone || "");
          setAddress(data.address || "");
          setState(data.state || "");
          setCountry(data.country || "");
          setInvestorProfile(data.investorProfile || "individual");
          setCompanyName(data.companyName || "");
          setCompanyAddress(data.companyAddress || "");
          setDescription(data.description || "");
          setCapitalToInvest(data.capitalToInvest || "");
          setOpenToPartnership(data.openToPartnership || false);
        } else {
          // 🔹 Préremplir immédiatement avec displayName de Google/Facebook
          const [first, ...rest] = (user.displayName || "").split(" ");
          const last = rest.join(" ");

          setFirstName(first || "");
          setLastName(last || "");

          // 🔹 Créer un doc minimal dans Firestore
          await setDoc(
            userRef,
            {
              userId: user.uid,
              email: user.email,
              firstName: first || "",
              lastName: last || "",
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
              provider: user.providerData?.[0]?.providerId || "unknown",
              createdAt: serverTimestamp(),
              updatedAt: serverTimestamp(),
            },
            { merge: true }
          );
        }
      } catch (err: any) {
        setError(err.message || "Erreur lors du chargement.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  // ----------------- Sauvegarde profil -----------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) {
      setError("Utilisateur non connecté.");
      return;
    }

    // Vérifie uniquement les champs essentiels
    const essentialsFilled =
      firstName.trim() &&
      lastName.trim() &&
      phone.trim() &&
      investorProfile &&
      capitalToInvest.trim();

    try {
      const userRef = doc(db, "users", user.uid);
      await setDoc(
        userRef,
        {
          userId: user.uid,
          email: user.email,
          firstName,
          lastName,
          phone,
          address,
          state,
          country,
          investorProfile,
          companyName,
          companyAddress,
          description,
          capitalToInvest,
          openToPartnership,
          registrationComplete: Boolean(essentialsFilled),
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );

      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Impossible de mettre à jour le profil.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#f1f3ee]">
        Loading profile...
      </div>
    );
  }

  const input =
    "w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md text-[#f1f3ee] border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e6c77c]/80";

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d0f0d] via-[#1c2420] to-[#101311] px-4 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative isolate w-full max-w-4xl p-8 md:p-10 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
      >
        {/* Glow decor */}
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-[#e6c77c]/20 via-transparent to-[#ffdd95]/20 blur-2xl pointer-events-none" />

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
          <h2 className="text-2xl font-bold text-[#f1f3ee] tracking-wide">
            Complete Your Profile
          </h2>
          <p className="text-sm text-gray-300">
            Please provide your missing information
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              id="firstName"
              placeholder="First Name *"
              className={input}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              id="lastName"
              placeholder="Last Name *"
              className={input}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />

            <input
              type="tel"
              id="phone"
              placeholder="Phone Number"
              className={input}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              id="address"
              placeholder="Address"
              className={input}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <input
              id="state"
              placeholder="State"
              className={input}
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <input
              id="country"
              placeholder="Country"
              className={input}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />

            <select
              id="investorProfile"
              value={investorProfile}
              onChange={(e) => setInvestorProfile(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md text-[#f1f3ee] border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#e6c77c]/80 appearance-none"
            >
              <option value="individual" className="text-black">
                Individual Investor
              </option>
              <option value="company" className="text-black">
                Company Investor
              </option>
            </select>

            <input
              id="companyName"
              placeholder="Company Name"
              className={input}
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <input
              id="companyAddress"
              placeholder="Company Address"
              className={input}
              value={companyAddress}
              onChange={(e) => setCompanyAddress(e.target.value)}
            />

            <input
              type="number"
              id="capitalToInvest"
              placeholder="Capital to Invest ($)"
              className={input}
              value={capitalToInvest}
              onChange={(e) => setCapitalToInvest(e.target.value)}
            />
          </div>

          <textarea
            id="description"
            placeholder="Describe your real-estate portfolio (active or inactive)"
            className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md text-[#f1f3ee] border border-white/30 min-h-[110px]"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label className="inline-flex items-center gap-2 text-sm text-gray-300">
            <input
              type="checkbox"
              checked={openToPartnership}
              onChange={(e) => setOpenToPartnership(e.target.checked)}
              className="accent-[#e6c77c]"
            />
            Open to Partnership Opportunities
          </label>

          {error && <div className="text-red-400 text-sm -mt-1">{error}</div>}

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-[#e6c77c] via-[#d9a74a] to-[#ffdd95] text-[#202720] font-semibold shadow-md hover:shadow-xl transition"
          >
            Save & Continue
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
