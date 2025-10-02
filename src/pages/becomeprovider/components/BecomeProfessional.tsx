import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom" // 🔹 pour redirection
const currentStep = 1

const BecomeProfessional: React.FC = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: "",
    roleTitle: "",
    phoneNumber: "",
    email: "",
    companyName: "",
  })

  const [errors, setErrors] = useState({
    fullName: "",
    roleTitle: "",
    phoneNumber: "",
    email: "",
    companyName: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" }) // efface l’erreur quand on tape
  }

  // 🔹 Validation des champs
  const validateForm = () => {
    let newErrors = { fullName: "", roleTitle: "", phoneNumber: "", email: "", companyName: "" }
    let hasError = false

    if (!formData.fullName) {
      newErrors.fullName = "Full Name is required"
      hasError = true
    }
    if (!formData.roleTitle) {
      newErrors.roleTitle = "Professional Role is required"
      hasError = true
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone Number is required"
      hasError = true
    }
    if (!formData.email) {
      newErrors.email = "Email is required"
      hasError = true
    }
    if (!formData.companyName) {
      newErrors.companyName = "Company Name is required"
      hasError = true
    }

    setErrors(newErrors)
    return !hasError
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      navigate("/Become-Professional-2") // 🔹 redirection uniquement si tout est rempli
    }
  }

  // Animation tremblement (shake)
  const shakeAnimation = {
    x: [0, -6, 6, -6, 6, 0],
    transition: { duration: 0.4 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffaf0] via-[#fefcf7] to-[#fffaf0] flex items-center justify-center px-10 py-50 pb-25">
      <motion.div
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-[#f1e5c6] relative overflow-hidden"
      >
        {/* Stepper */}
        <div className="flex justify-center items-center mb-10 space-x-6">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full font-bold shadow-md
        ${step <= currentStep ? "bg-gradient-to-r from-[#b38e4f] to-[#d4b369] text-white" : "bg-gray-300 text-gray-600"}`}
              >
                {step}
              </div>
              {step < 3 && (
                <div
                  className={`w-12 h-1 ${
                    step < currentStep ? "bg-gradient-to-r from-[#b38e4f] to-[#d4b369]" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Title */}
        <motion.div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#1c1c1c] mb-2">Join DealZone Professionals</h1>
          <p className="text-gray-600 text-lg">
            Complete your professional profile to start connecting with clients
          </p>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information Section */}
          <motion.div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#1c1c1c] mb-4 flex items-center">
              <span className="w-8 h-8 bg-[#f5d98b]/50 rounded-full flex items-center justify-center mr-3 text-sm text-[#1c1c1c]">
                1
              </span>
              Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <motion.input
                  animate={errors.fullName ? shakeAnimation : {}}
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-4 bg-white border rounded-xl text-black ${
                    errors.fullName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="John Doe"
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Professional Role *</label>
                <motion.select
                  animate={errors.roleTitle ? shakeAnimation : {}}
                  name="roleTitle"
                  value={formData.roleTitle}
                  onChange={handleChange}
                  className={`w-full px-4 py-4 bg-white border rounded-xl text-black ${
                    errors.roleTitle ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="" className="text-gray-500">
                    Select your role
                  </option>
                  <option value="Inspector" className="text-black">
                    Inspector
                  </option>
                  <option value="Real Estate Agent/Broker" className="text-black">
                    Real Estate Agent/Broker
                  </option>
                  <option value="Contractor" className="text-black">
                    General Contractor
                  </option>
                  <option value="Property Manager" className="text-black">
                    Property Manager
                  </option>
                </motion.select>
                {errors.roleTitle && <p className="text-red-500 text-sm mt-1">{errors.roleTitle}</p>}
              </div>
            </div>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#1c1c1c] mb-4 flex items-center">
              <span className="w-8 h-8 bg-[#f5d98b]/50 rounded-full flex items-center justify-center mr-3 text-sm text-[#1c1c1c]">
                2
              </span>
              Contact Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <motion.input
                  animate={errors.phoneNumber ? shakeAnimation : {}}
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={`w-full px-4 py-4 bg-white border rounded-xl text-black ${
                    errors.phoneNumber ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <motion.input
                  animate={errors.email ? shakeAnimation : {}}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-4 bg-white border rounded-xl text-black ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>
          </motion.div>

          {/* Company Information Section */}
          <motion.div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#1c1c1c] mb-4 flex items-center">
              <span className="w-8 h-8 bg-[#f5d98b]/50 rounded-full flex items-center justify-center mr-3 text-sm text-[#1c1c1c]">
                3
              </span>
              Company Information
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
              <motion.input
                animate={errors.companyName ? shakeAnimation : {}}
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className={`w-full px-4 py-4 bg-white border rounded-xl text-black ${
                  errors.companyName ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Your Company LLC"
              />
              {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
            </div>
          </motion.div>

          {/* Submit Button → Redirection */}
          <motion.div className="flex justify-center mt-10 pt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-12 py-4 rounded-xl bg-gradient-to-r from-[#b38e4f] to-[#d4b369] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              Submit Application
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  )
}

export default BecomeProfessional