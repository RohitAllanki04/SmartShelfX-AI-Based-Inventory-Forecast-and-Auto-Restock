import React, { useEffect, useState } from "react";
import { getTransactions } from "../utils/api";
import TransactionTable from "../components/TransactionsTable";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions()
      .then(res => setTransactions(res.data))
      .catch(err => console.error("Failed to fetch transactions", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <TransactionTable transactions={transactions} />
    </div>
  );
};

export default Transactions;

