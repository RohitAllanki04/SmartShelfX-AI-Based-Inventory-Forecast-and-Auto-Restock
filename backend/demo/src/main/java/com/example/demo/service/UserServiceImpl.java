package com.example.demo.service;

import com.example.demo.dto.AuthResponse;
import com.example.demo.dto.SignInRequest;
import com.example.demo.dto.SignUpRequest;
import com.example.demo.model.Role;
import com.example.demo.model.User;
import com.example.demo.Repo.UserRepo;
import com.example.demo.Security.JwtUtil;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    private final UserRepo repository;
    private final PasswordEncoder encoder;
    private final JwtUtil jwtUtil;

    public UserServiceImpl(UserRepo repository, PasswordEncoder encoder, JwtUtil jwtUtil) {
        this.repository = repository;
        this.encoder = encoder;
        this.jwtUtil = jwtUtil;
    }

    @Override
    public AuthResponse signIn(SignInRequest req) {
        // 1️⃣ Find user by email
        User user = repository.findByEmail(req.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));

        // 2️⃣ Ensure user is not OAuth-only
        if (user.isUsingOauth()) {
            throw new RuntimeException("Use OAuth to login for this account");
        }

        // 3️⃣ Verify password
        if (!encoder.matches(req.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        // 4️⃣ Generate JWT token (pass Role enum, not string)
        String token = jwtUtil.generateToken(user.getEmail(), user.getRole());

        // 5️⃣ Return token + role as string
        return new AuthResponse(token, user.getRole());
    }

    @Override
    public AuthResponse signUp(SignUpRequest req) {
        // 1️⃣ Check if email already exists
        if (repository.existsByEmail(req.getEmail())) {
            throw new RuntimeException("Email already in use");
        }

        // 2️⃣ Validate password confirmation
        if (!req.getPassword().equals(req.getConfirmPassword())) {
            throw new RuntimeException("Passwords do not match");
        }

        // 3️⃣ Map role string to Role enum
        Role role = "ADMIN".equalsIgnoreCase(req.getRole()) ? Role.ADMIN : Role.STORE_MANAGER;

        // 4️⃣ Create and save user
        User user = User.builder()
                .fullName(req.getFullName())
                .companyName(req.getCompanyName())
                .email(req.getEmail())
                .password(encoder.encode(req.getPassword()))
                .role(role)
                .contactNumber(req.getContactNumber())
                .warehouseLocation(req.getWarehouseLocation())
                .usingOauth(false)
                .build();

        repository.save(user);

        // 5️⃣ Generate JWT token
        String token = jwtUtil.generateToken(user.getEmail(), user.getRole());

        // 6️⃣ Return token + role as string
        return new AuthResponse(token, user.getRole());
    }

    @Override
    public User findByEmail(String email) {
        return repository.findByEmail(email).orElse(null);
    }
}
