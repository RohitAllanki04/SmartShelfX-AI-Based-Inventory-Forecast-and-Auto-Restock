package com.example.demo.controller;

import com.example.demo.model.RestockOrder;
import com.example.demo.service.RestockOrderService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/restock-orders")
@CrossOrigin
public class RestockOrderController {
    private final RestockOrderService service;

    public RestockOrderController(RestockOrderService service) {
        this.service = service;
    }

    @GetMapping
    public List<RestockOrder> getAll() {
        return service.getAllRestockOrders();
    }
}
