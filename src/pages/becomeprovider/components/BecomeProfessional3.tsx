import React, { useState } from "react"
import { motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"
const currentStep = 3


const BecomeProfessional3: React.FC = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    servicesDescription: "",
    valueProposition: "",
    password: "",
    confirmPassword: "",
  })

  const [errors, setErrors] = useState({
    servicesDescription: "",
    valueProposition: "",
    password: "",
    confirmPassword: "",
  })

  const [globalErrors, setGlobalErrors] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
  }

  const handleReset = () => {
    setFormData({
      servicesDescription: "",
      valueProposition: "",
      password: "",
      confirmPassword: "",
    })
    setErrors({
      servicesDescription: "",
      valueProposition: "",
      password: "",
      confirmPassword: "",
    })
    setGlobalErrors([])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let newErrors: any = {}
    let global: string[] = []

    if (!formData.servicesDescription) {
      newErrors.servicesDescription = "Services Description is required"
      global.push("Services Description is required.")
    }

    if (!formData.valueProposition) {
      newErrors.valueProposition = "Value Proposition is required"
      global.push("Value Proposition is required.")
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
      global.push("Password is required.")
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long."
      global.push("Password must be at least 6 characters long.")
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required"
      global.push("Confirm Password is required.")
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
      global.push("Passwords do not match.")
    }

    setErrors(newErrors)
    setGlobalErrors(global)

    if (global.length === 0) {
      console.log("Form Data:", formData)
      navigate("/application-success") // ✅ redirection vers la page de succès
    }
  }

  const shakeAnimation = { x: [0, -6, 6, -6, 6, 0], transition: { duration: 0.4 } }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffaf0] via-[#fefcf7] to-[#fffaf0] flex items-center justify-center px-10 py-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-[#f1e5c6]"
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
        <h3 className="text-2xl font-bold text-[#1c1c1c] mb-6 text-center">
          Join DealZone Professionals
          <p className="text-gray-600 text-lg font-normal">
            Complete your professional profile to start connecting with clients
          </p>
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Services Description */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Services Description *</label>
            <motion.textarea
              animate={errors.servicesDescription ? shakeAnimation : {}}
              whileFocus={{ scale: 1.02 }}
              name="servicesDescription"
              value={formData.servicesDescription}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white border rounded-xl min-h-[120px] text-black ${
                errors.servicesDescription ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Describe the services you offer..."
              maxLength={1000}
            />
            <p className="text-right text-gray-400 text-sm">{formData.servicesDescription.length}/1000</p>
            {errors.servicesDescription && <p className="text-red-500 text-sm mt-1">{errors.servicesDescription}</p>}
          </div>

          {/* Value Proposition */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Value Proposition *</label>
            <motion.textarea
              animate={errors.valueProposition ? shakeAnimation : {}}
              whileFocus={{ scale: 1.02 }}
              name="valueProposition"
              value={formData.valueProposition}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white border rounded-xl min-h-[120px] text-black ${
                errors.valueProposition ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="What makes your services unique?"
              maxLength={500}
            />
            <p className="text-right text-gray-400 text-sm">{formData.valueProposition.length}/500</p>
            {errors.valueProposition && <p className="text-red-500 text-sm mt-1">{errors.valueProposition}</p>}
          </div>

          {/* Passwords */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Password *</label>
              <motion.input
                animate={errors.password ? shakeAnimation : {}}
                whileFocus={{ scale: 1.02 }}
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white border rounded-xl text-black ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="••••••••"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Confirm Password *</label>
              <motion.input
                animate={errors.confirmPassword ? shakeAnimation : {}}
                whileFocus={{ scale: 1.02 }}
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white border rounded-xl text-black ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="••••••••"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>
          </div>

          {/* Global Errors */}
          {globalErrors.length > 0 && (
            <div className="bg-red-50 border border-red-300 text-red-700 p-4 rounded-xl mt-6">
              <strong className="block mb-2">Please fix the following:</strong>
              <ul className="list-disc list-inside space-y-1">
                {globalErrors.map((err, idx) => (
                  <li key={idx}>{err}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-between mt-8">
            <Link to="/Become-Professional-2">
              <button type="button" className="px-6 py-3 bg-gray-200 rounded-lg text-gray-800 hover:bg-gray-300 transition">
                Back
              </button>
            </Link>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-3 border border-[#d4b369] text-[#d4b369] rounded-lg hover:bg-[#fdf8e7] transition"
              >
                Reset Form
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-[#b38e4f] to-[#d4b369] text-white font-semibold rounded-lg shadow hover:shadow-xl transition"
              >
                Submit Application
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default BecomeProfessional3