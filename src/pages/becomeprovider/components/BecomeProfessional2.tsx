import React, { useState } from "react"
import { motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"
import { FaCloudUploadAlt } from "react-icons/fa"
const currentStep = 2


const BecomeProfessional2: React.FC = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    profileImage: null as File | null,
    targetAudience: "",
    companyDescription: "",
  })

  const [errors, setErrors] = useState({
    targetAudience: "",
    companyDescription: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, profileImage: e.target.files[0] })
    }
  }

  const handleNext = () => {
    let newErrors: any = {}
    let valid = true

    if (!formData.targetAudience.trim()) {
      newErrors.targetAudience = "Target Audience is required"
      valid = false
    }

    if (!formData.companyDescription.trim()) {
      newErrors.companyDescription = "Company Description is required"
      valid = false
    }

    setErrors(newErrors)

    if (valid) {
      navigate("/Become-Professional-3")
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

        {/* Profile Image Upload */}
        <div className="mb-8">
          <label className="block text-lg font-semibold text-[#1c1c1c] mb-2">Profile Image</label>
          <p className="text-sm text-gray-500 mb-3">
            Upload a professional headshot or company logo (max 5MB)
          </p>
          <label
            htmlFor="profileImage"
            className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#d4b369] transition"
          >
            {formData.profileImage ? (
              <span className="text-sm text-gray-700">{formData.profileImage.name}</span>
            ) : (
              <>
                <FaCloudUploadAlt className="text-4xl text-gray-400 mb-2" />
                <span className="text-gray-600">Drag and drop or click to upload</span>
                <span className="text-xs text-gray-400">PNG, JPG, GIF up to 5MB</span>
              </>
            )}
            <input
              id="profileImage"
              type="file"
              accept="image/png, image/jpeg, image/gif"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>

        {/* Target Audience */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience *</label>
          <motion.input
            animate={errors.targetAudience ? shakeAnimation : {}}
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="targetAudience"
            value={formData.targetAudience}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white border rounded-xl text-black ${
              errors.targetAudience ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Who are your ideal clients?"
          />
          {errors.targetAudience && (
            <p className="text-red-500 text-sm mt-1">{errors.targetAudience}</p>
          )}
        </div>

        {/* Company Description */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Company Description *</label>
          <motion.textarea
            animate={errors.companyDescription ? shakeAnimation : {}}
            whileFocus={{ scale: 1.02 }}
            name="companyDescription"
            value={formData.companyDescription}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white border rounded-xl min-h-[120px] text-black ${
              errors.companyDescription ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Tell us about your company..."
            maxLength={500}
          />
          <p className="text-right text-xs text-gray-400">
            {formData.companyDescription.length}/500
          </p>
          {errors.companyDescription && (
            <p className="text-red-500 text-sm mt-1">{errors.companyDescription}</p>
          )}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-8">
          <Link to="/become-professional">
            <button
              type="button"
              className="px-6 py-3 bg-gray-200 rounded-lg text-gray-800 hover:bg-gray-300 transition"
            >
              Back
            </button>
          </Link>
          <button
            type="button"
            onClick={handleNext}
            className="px-6 py-3 bg-gradient-to-r from-[#b38e4f] to-[#d4b369] text-white rounded-lg shadow hover:shadow-xl transition"
          >
            Next: Services & Security
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default BecomeProfessional2