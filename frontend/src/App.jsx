import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Transactions from "./pages/Transactions";
import RestockOrders from "./pages/RestockOrders";
import Suppliers from "./pages/Suppliers";
import Profile from "./pages/Profile";
function App() {
  return (
    <Router>
      <Navbar />
      <main className="p-6">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/restock-orders" element={<RestockOrders />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
