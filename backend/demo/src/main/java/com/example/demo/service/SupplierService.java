package com.example.demo.service;

import com.example.demo.model.Supplier;
import com.example.demo.Repo.SupplierRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class SupplierService {
    private final SupplierRepository repo;

    public SupplierService(SupplierRepository repo) {
        this.repo = repo;
    }

    public List<Supplier> getAllSuppliers() {
        return repo.findAll();
    }
}
