import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo / Title */}
      <div className="text-2xl font-bold text-gray-800">
        SmartShelfX
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6">
        <Link to="/dashboard" className="hover:text-gray-500">Dashboard</Link>
        <Link to="/products" className="hover:text-gray-500">Products</Link>
        <Link to="/transactions" className="hover:text-gray-500">Transactions</Link>
        <Link to="/restock-orders" className="hover:text-gray-500">Restock Orders</Link>
        <Link to="/suppliers" className="hover:text-gray-500">Suppliers</Link>
      </nav>

      {/* Profile Button */}
      <div>
        <button
          onClick={() => navigate("/profile")}
          className="flex items-center space-x-2 bg-white hover:bg-gray-100 px-3 py-1 rounded-xl transition"
        >
          <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
            U
          </div>
          <span className="font-medium">Username</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
