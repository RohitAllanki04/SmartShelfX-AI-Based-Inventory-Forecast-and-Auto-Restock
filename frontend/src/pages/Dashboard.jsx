import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";
import { getProducts, getSuppliers, getRestockOrders } from "../utils/api";

const Dashboard = () => {
  const navigate = useNavigate(); // React Router hook
  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [restockOrders, setRestockOrders] = useState([]);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        const [pRes, sRes, rRes] = await Promise.all([
          getProducts(),
          getSuppliers(),
          getRestockOrders(),
        ]);
        if (!mounted) return;
        setProducts(pRes?.data ?? []);
        setSuppliers(sRes?.data ?? []);
        setRestockOrders(rRes?.data ?? []);
      } catch (err) {
        // Network or server error — handle gracefully and avoid uncaught promise rejection
        console.error("Failed to fetch dashboard data:", err);
        if (!mounted) return;
        setProducts([]);
        setSuppliers([]);
        setRestockOrders([]);
      }
    };

    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  const lowStockCount = products.filter(p => p.stock < p.reorderLevel).length;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="flex space-x-6">
        <DashboardCard
          title="Total Products"
          value={products.length}
          onClick={() => navigate("/products")}
        />
        <DashboardCard
          title="Low Stock"
          value={lowStockCount}
          onClick={() => navigate("/products")}
        />
        <DashboardCard
          title="Suppliers"
          value={suppliers.length}
          onClick={() => navigate("/suppliers")}
        />
        <DashboardCard
          title="Restock Orders"
          value={restockOrders.length}
          onClick={() => navigate("/restock-orders")}
        />
      </div>
    </div>
  );
};

export default Dashboard;
