import axios from "axios";

export const API_BASE_URL = "http://localhost:8080/api";

// ------------------- Public API -------------------
// Signup (no JWT required)
export const signup = async (data) => {
  const response = await fetch(`${API_BASE_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    mode: "cors",
    credentials: "include", // optional if backend uses cookies
  });

  console.log(data);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Signup failed");
  }

  return response.json();
};

// ------------------- JWT Protected APIs -------------------
const getConfig = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// Products
export const getProducts = () => axios.get(`${API_BASE_URL}/products`, getConfig());

// Transactions
export const getTransactions = () => axios.get(`${API_BASE_URL}/transactions`, getConfig());

// Restock Orders
export const getRestockOrders = () => axios.get(`${API_BASE_URL}/restock-orders`, getConfig());

// Suppliers
export const getSuppliers = () => axios.get(`${API_BASE_URL}/suppliers`, getConfig());
