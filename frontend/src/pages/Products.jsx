import React, { useEffect, useState } from "react";
import { getProducts } from "../utils/api";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="bg-white shadow-md rounded-2xl p-4">
        <table className="min-w-full border border-gray-200 rounded-xl">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Stock</th>
              <th className="p-3 text-left">Reorder Level</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={i} className="hover:bg-gray-50 transition">
                <td className="p-3">{p.id}</td>
                <td className="p-3">{p.name}</td>
                <td className="p-3">{p.category}</td>
                <td className={`p-3 ${p.stock < p.reorderLevel ? "text-red-600 font-bold" : "text-gray-800"}`}>
                  {p.stock}
                </td>
                <td className="p-3">{p.reorderLevel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
