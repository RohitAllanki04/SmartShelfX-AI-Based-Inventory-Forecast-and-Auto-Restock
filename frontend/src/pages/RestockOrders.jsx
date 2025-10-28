import React, { useEffect, useState } from "react";
import { getRestockOrders } from "../utils/api";

const RestockOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getRestockOrders()
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Restock Orders</h1>
      <div className="bg-white shadow-md rounded-2xl p-4">
        <table className="min-w-full border border-gray-200 rounded-xl">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-left">Quantity Ordered</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Order Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, i) => (
              <tr key={i} className="hover:bg-gray-50 transition">
                <td className="p-3">{o.id}</td>
                <td className="p-3">{o.product.name}</td>
                <td className="p-3">{o.qtyOrdered}</td>
                <td className={`p-3 ${o.status === "Pending" ? "text-yellow-600" : "text-green-600 font-bold"}`}>
                  {o.status}
                </td>
                <td className="p-3">{new Date(o.orderDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RestockOrders;
