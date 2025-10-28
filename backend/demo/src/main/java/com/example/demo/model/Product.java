package com.example.demo.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String category;
    private int stock;
    private int reorderLevel;

    @ManyToOne
    @JoinColumn(name = "supplier_id")
    private Supplier supplier;
}
