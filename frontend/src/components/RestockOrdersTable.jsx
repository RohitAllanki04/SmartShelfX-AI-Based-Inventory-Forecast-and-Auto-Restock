import React from "react";

const RestockOrderTable = ({ restockOrders }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4">
      <table className="min-w-full border border-gray-200 rounded-xl">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-3 text-left">Order ID</th>
            <th className="p-3 text-left">Product</th>
            <th className="p-3 text-left">Quantity Ordered</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {restockOrders.length > 0 ? (
            restockOrders.map((order, i) => (
              <tr
                key={i}
                className="hover:bg-gray-50 transition border-b border-gray-100"
              >
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.product?.name || "N/A"}</td>
                <td className="p-3">{order.qtyOrdered}</td>
                <td
                  className={`p-3 font-medium ${
                    order.status === "COMPLETED"
                      ? "text-green-600"
                      : order.status === "PENDING"
                      ? "text-yellow-600"
                      : "text-gray-500"
                  }`}
                >
                  {order.status}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="p-3 text-center text-gray-500">
                No restock orders available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RestockOrderTable;
