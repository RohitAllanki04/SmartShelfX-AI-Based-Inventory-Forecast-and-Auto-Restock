import React from "react";

const TransactionTable = ({ transactions }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4">
      <table className="min-w-full border border-gray-200 rounded-xl">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Product</th>
            <th className="p-3 text-left">Quantity Sold</th>
            <th className="p-3 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map((t, i) => (
              <tr
                key={i}
                className="hover:bg-gray-50 transition border-b border-gray-100"
              >
                <td className="p-3">{t.id}</td>
                <td className="p-3">{t.product?.name || "N/A"}</td>
                <td className="p-3">{t.quantitySold}</td>
                <td className="p-3">
                  {new Date(t.date).toLocaleDateString("en-GB")}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="p-3 text-center text-gray-500">
                No transactions found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
