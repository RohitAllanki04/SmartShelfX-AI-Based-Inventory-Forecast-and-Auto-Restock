package com.example.demo.oauth;

import com.example.demo.model.User;
import com.example.demo.model.Role;
import com.example.demo.Repo.UserRepo;
import com.example.demo.Security.JwtUtil;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.ServletException;
import java.io.IOException;

public class OAuth2AuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final JwtUtil jwtUtil;
    private final UserRepo userRepository;

    public OAuth2AuthenticationSuccessHandler(JwtUtil jwtUtil, UserRepo userRepository) {
        this.jwtUtil = jwtUtil;
        this.userRepository = userRepository;
        setDefaultTargetUrl("/oauth2/success");
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication)
            throws IOException, ServletException {

        OAuth2User oauth2User = (OAuth2User) authentication.getPrincipal();

        // ✅ Google sends email as "email"
        String email = oauth2User.getAttribute("email");
        String name = oauth2User.getAttribute("name");

        if (email == null) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Email not provided by Google OAuth2");
            return;
        }

        // ✅ Find existing or create new user
        User user = userRepository.findByEmail(email).orElseGet(() -> {
            User newUser = new User();
            newUser.setEmail(email);
            newUser.setFullName(name != null ? name : "Unknown User");
            newUser.setCompanyName("Unknown");
            newUser.setRole(Role.STORE_MANAGER); // default role or ADMIN depending on logic
            newUser.setUsingOauth(true);
            return userRepository.save(newUser);
        });

        // ✅ Generate JWT using the user's actual role
        String token = jwtUtil.generateToken(user.getEmail(), user.getRole());

        // ✅ Redirect to frontend with token
        String redirectUrl = "/login-success?token=" + token;
        getRedirectStrategy().sendRedirect(request, response, redirectUrl);
    }
}
