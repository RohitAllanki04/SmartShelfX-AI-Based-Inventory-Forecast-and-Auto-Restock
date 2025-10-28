package com.example.demo.Repo;

import com.example.demo.model.RestockOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RestockOrderRepository extends JpaRepository<RestockOrder, Long> { }
