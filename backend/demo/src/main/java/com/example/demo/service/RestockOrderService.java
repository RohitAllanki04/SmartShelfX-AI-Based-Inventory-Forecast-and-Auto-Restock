package com.example.demo.service;

import com.example.demo.model.RestockOrder;
import com.example.demo.Repo.RestockOrderRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class RestockOrderService {
    private final RestockOrderRepository repo;

    public RestockOrderService(RestockOrderRepository repo) {
        this.repo = repo;
    }

    public List<RestockOrder> getAllRestockOrders() {
        return repo.findAll();
    }
}
