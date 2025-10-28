package com.example.demo.service;

import com.example.demo.model.Transaction;
import com.example.demo.Repo.TransactionRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TransactionService {
    private final TransactionRepository repo;

    public TransactionService(TransactionRepository repo) {
        this.repo = repo;
    }

    public List<Transaction> getAllTransactions() {
        return repo.findAll();
    }

    public Transaction save(Transaction transaction) {
        return repo.save(transaction);
    }
}
