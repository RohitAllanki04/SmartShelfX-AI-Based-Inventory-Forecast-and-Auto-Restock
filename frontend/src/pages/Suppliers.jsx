import React, { useEffect, useState } from "react";
import { getSuppliers } from "../utils/api";

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    getSuppliers()
      .then(res => setSuppliers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Suppliers</h1>
      <div className="bg-white shadow-md rounded-2xl p-4">
        <table className="min-w-full border border-gray-200 rounded-xl">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Contact</th>
              <th className="p-3 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((s, i) => (
              <tr key={i} className="hover:bg-gray-50 transition">
                <td className="p-3">{s.id}</td>
                <td className="p-3">{s.name}</td>
                <td className="p-3">{s.contact}</td>
                <td className="p-3">{s.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Suppliers;
