import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import React from "react"

const ApplicationSuccess: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fffaf0] via-[#fefcf7] to-[#fffaf0] px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-3xl p-10 max-w-md text-center border border-[#f1e5c6]"
      >
        
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#1c1c1c] mb-3">Application Submitted!</h2>
        <p className="text-gray-600 mb-8">
          Thank you for your application. We'll review your information and get back to you shortly.
        </p>

        <Link to="/" className="block">
          <button className="w-full px-6 py-3 bg-gradient-to-r from-[#b38e4f] to-[#d4b369] text-white font-semibold rounded-lg shadow hover:shadow-xl transition">
            Back to Home
          </button>
        </Link>
      </motion.div>
    </div>
  )
}

export default ApplicationSuccess
