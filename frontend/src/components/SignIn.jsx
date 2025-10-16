import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import animationData from "../assets/login-animation.json";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {/* Container */}
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

        {/* RIGHT SIDE – Login Form */}
        <div className="w-full md:w-1/2 bg-gray-100 p-8 flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">
            Log in
          </h1>

          {/* Google OAuth Button */}
          <button className="flex items-center justify-center border border-gray-300 rounded-lg py-2 mb-3 hover:bg-gray-200 transition-all bg-white">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-4 h-4 mr-2"
            />
            <span className="text-sm font-medium text-gray-700">
              Continue with Google
            </span>
          </button>

          <div className="flex items-center mb-3">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-500 text-xs px-2">or login with email</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Login Form */}
          <form>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Email Id"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
              />
              <div className="text-right mt-1">
                <a href="#" className="text-xs text-gray-500 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-gray-600 transition-all mb-3"
            >
              Login
            </button>
          </form>

          <p className="text-center text-xs text-gray-600 mt-2">
            Don't have an account?{" "}
            <a href="/SignUp" className="text-gray-500 font-medium hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
