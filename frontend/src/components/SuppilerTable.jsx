import React from "react";

const SupplierTable = ({ suppliers }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4">
      <table className="min-w-full border border-gray-200 rounded-xl">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Contact</th>
            <th className="p-3 text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.length > 0 ? (
            suppliers.map((s, i) => (
              <tr
                key={i}
                className="hover:bg-gray-50 transition border-b border-gray-100"
              >
                <td className="p-3">{s.id}</td>
                <td className="p-3">{s.name}</td>
                <td className="p-3">{s.contact}</td>
                <td className="p-3">{s.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="p-3 text-center text-gray-500">
                No suppliers found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SupplierTable;
