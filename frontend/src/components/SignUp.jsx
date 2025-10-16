import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import animationData from "../assets/login-animation.json";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden w-[750px] max-w-full">

        {/* LEFT SIDE – Animation */}
        <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center p-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-64"
          >
            <Lottie animationData={animationData} loop={true} />
          </motion.div>
        </div>

        {/* RIGHT SIDE – Sign Up Form */}
        <div className="w-full md:w-1/2 bg-gray-100 p-8 flex flex-col justify-center">

          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Sign Up
          </h1>

          <form className="space-y-3">
            {/* Full Name */}
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
              />
            </div>

            {/* Company Name */}
            <div>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
              />
            </div>

            {/* Official Email ID */}
            <div>
              <input
                type="email"
                placeholder="Official Email ID"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
              />
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
              />
            </div>

            {/* Role Selection */}
            <div>
              <select
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Role
                </option>
                <option value="admin">Admin</option>
                <option value="store-manager">Store Manager</option>
              </select>
            </div>

            {/* Contact Number */}
            <div>
              <input
                type="tel"
                placeholder="Contact Number"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
              />
            </div>

            {/* Warehouse Location */}
            <div>
              <input
                type="text"
                placeholder="Warehouse Location"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-gray-700 transition-all"
            >
              Sign Up
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-xs text-gray-600 mt-3">
            Already have an account?{" "}
            <Link to="/SignIn" className="text-gray-500 font-medium hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
